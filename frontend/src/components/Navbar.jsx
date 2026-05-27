import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { Leaf } from "lucide-react";

const items = [
  { label: "Classify", href: "#classify" },
  { label: "Analytics", href: "#analytics" },
  { label: "Impact", href: "#impact" },
  { label: "About", href: "#about" },
];

function Navbar() {
  const navRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const spotlightX = useRef(0);
  const ambienceX = useRef(0);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mouse movement spotlight
  useEffect(() => {
    if (!navRef.current) return;

    const nav = navRef.current;

    const handleMouseMove = (e) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;

      spotlightX.current = x;

      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      const activeItem = nav.querySelector(
        `[data-index="${activeIndex}"]`
      );

      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();

        const targetX =
          itemRect.left -
          navRect.left +
          itemRect.width / 2;

        animate(spotlightX.current, targetX, {
          type: "spring",
          stiffness: 200,
          damping: 20,

          onUpdate: (v) => {
            spotlightX.current = v;

            nav.style.setProperty(
              "--spotlight-x",
              `${v}px`
            );
          },
        });
      }
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      nav.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [activeIndex]);

  // Active item ambience animation
  useEffect(() => {
    if (!navRef.current) return;

    const nav = navRef.current;

    const activeItem = nav.querySelector(
      `[data-index="${activeIndex}"]`
    );

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      const targetX =
        itemRect.left -
        navRect.left +
        itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,

        onUpdate: (v) => {
          ambienceX.current = v;

          nav.style.setProperty(
            "--ambience-x",
            `${v}px`
          );
        },
      });
    }
  }, [activeIndex]);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-[9999]
        px-8
        flex
        items-center
        justify-between
        transition-all
        duration-500
        ${
          scrolled
            ? "py-3 bg-[#0d1c11]/70 backdrop-blur-2xl border-b border-[#2b4d33]"
            : "py-5 bg-transparent"
        }
      `}
    >
      {/* Logo */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="bg-[#e4cf9a] p-2 rounded-xl shadow-lg">
          <Leaf
            className="text-[#18361f]"
            size={22}
          />
        </div>

        <h1
          className={`
            font-bold
            text-[#e4cf9a]
            transition-all
            duration-500
            ${
              scrolled
                ? "text-xl tracking-wide"
                : "text-2xl"
            }
          `}
        >
          EcoVision AI
        </h1>
      </div>

      {/* Nav Buttons Container */}
      <div
        ref={navRef}
        className={`
          relative
          hidden
          md:flex
          items-center
          gap-8
          border
          border-[#355f3f]
          rounded-2xl
          px-6
          overflow-hidden
          transition-all
          duration-500
          ${
            scrolled
              ? "py-3 bg-[#112016]/80 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "py-4 bg-[#f0f0f0]/[0.03] backdrop-blur-xl"
          }
        `}
      >
        {/* Spotlight Effect */}
        <div
          className="
            absolute
            top-0
            h-full
            w-40
            bg-[#000000]/80
            blur-2xl
            pointer-events-none
            transition-opacity
            duration-300
          "
          style={{
            left: "var(--spotlight-x)",
            transform: "translateX(-50%)",
          }}
        />

        {/* Active Ambience */}
        <div
          className="
            absolute
            top-1/2
            h-14
            w-28
            bg-[#e4cf9a]/15
            blur-2xl
            rounded-full
            pointer-events-none
          "
          style={{
            left: "var(--ambience-x)",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Nav Items */}
        <div className="relative z-10 flex items-center gap-8">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              data-index={index}
              onClick={() => setActiveIndex(index)}
              className={`
                relative
                text-[16px]
                font-medium
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "text-[#e4cf9a]"
                    : "text-[#f3e6be]"
                }
                hover:text-[#e4cf9a]
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;