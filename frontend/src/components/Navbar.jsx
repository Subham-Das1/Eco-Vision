import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const spotlightX = useRef(0);
  const ambienceX = useRef(0);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside interaction / Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
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
          itemRect.left - navRect.left + itemRect.width / 2;

        animate(spotlightX.current, targetX, {
          type: "spring",
          stiffness: 200,
          damping: 20,
          onUpdate: (v) => {
            spotlightX.current = v;
            nav.style.setProperty("--spotlight-x", `${v}px`);
          },
        });
      }
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
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
        itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          ambienceX.current = v;
          nav.style.setProperty("--ambience-x", `${v}px`);
        },
      });
    }
  }, [activeIndex]);

  // Handle navigation
  const handleNavigation = (index) => {
    setActiveIndex(index);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-[9999]
        px-4 sm:px-8
        flex items-center justify-between
        transition-all duration-500
        ${
          scrolled
            ? "py-3 bg-[#0d1c11]/90 backdrop-blur-2xl border-b border-[#3fa457]"
            : "py-5 bg-transparent"
        }
      `}
    >
      {/* Logo */}
      <div className="relative z-10 flex items-center gap-2 sm:gap-3">
        <div className="bg-[#e4cf9a] p-2 rounded-xl shadow-lg">
          <Leaf className="text-[#18361f]" size={22} />
        </div>

        <h1
          className={`
            font-bold text-[#e4cf9a]
            transition-all duration-500
            ${
              scrolled
                ? "text-xl tracking-wide"
                : "text-xl sm:text-2xl"
            }
          `}
        >
          EcoVision AI
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div
        ref={navRef}
        className={`
          relative hidden md:flex items-center gap-8
          border border-[#3fa457]
          rounded-2xl px-6 overflow-hidden
          transition-all duration-500
          ${
            scrolled
              ? "py-3 bg-[#112016]/80 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "py-4 bg-[#023c10]/80 backdrop-blur-xl"
          }
        `}
      >
        {/* Spotlight Effect */}
        <div
          className="
            absolute top-0 h-full w-40
            bg-[#000000]/80 blur-2xl
            pointer-events-none
            transition-opacity duration-300
          "
          style={{
            left: "var(--spotlight-x)",
            transform: "translateX(-50%)",
          }}
        />

        {/* Active Ambience */}
        <div
          className="
            absolute top-1/2 h-14 w-28
            bg-[#e4cf9a]/15 blur-2xl
            rounded-full pointer-events-none
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
              onClick={() => handleNavigation(index)}
              className={`
                relative text-[16px] font-medium
                transition-all duration-300
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

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="
          md:hidden relative z-20
          p-2 rounded-xl
          text-[#e4cf9a]
          border border-[#3fa457]/60
          bg-[#112016]/70
          hover:bg-[#1b3822]
          transition-all duration-300
        "
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          md:hidden absolute top-full left-0 w-full
          px-4 pt-3
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-3 invisible pointer-events-none"
          }
        `}
      >
        <div
          className="
            bg-[#0d1c11]/95 backdrop-blur-2xl
            border border-[#3fa457]/60
            rounded-2xl p-3
            shadow-[0_12px_35px_rgba(0,0,0,0.4)]
          "
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => handleNavigation(index)}
              className={`
                block px-4 py-3 rounded-xl
                text-[16px] font-medium
                transition-all duration-300
                ${
                  activeIndex === index
                    ? "text-[#e4cf9a] bg-[#e4cf9a]/10"
                    : "text-[#f3e6be] hover:bg-[#3fa457]/15"
                }
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
