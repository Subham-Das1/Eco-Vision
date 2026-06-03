import {
  Brain,
  Leaf,
  BookOpen,
  CheckCircle,
} from "lucide-react";

function About() {
  const aboutCards = [
    {
      icon: Brain,
      title: "CNN-Based Classification",
      description:
        "EcoVision AI leverages state-of-the-art Convolutional Neural Networks (CNNs) trained on thousands of waste images. Our model identifies material properties, texture, color, and shape to accurately classify waste into multiple categories.",
      points: [
        "Advanced deep learning",
        "Real-time inference",
        "Continuous improvement",
      ],
    },
    {
      icon: Leaf,
      title: "Our Sustainability Mission",
      description:
        "We believe technology should serve environmental sustainability. Our mission is to democratize waste classification, making it accessible to individuals, businesses, and communities worldwide.",
      points: [
        "Zero landfill goal",
        "Community impact",
        "Educational outreach",
      ],
    },
    {
      icon: BookOpen,
      title: "Environmental Awareness & Education",
      description:
        "Each classification is an opportunity to learn. We provide disposal guidance, recycling tips, and environmental impact insights to help users make informed decisions.",
      points: [
        "Recycling education",
        "Waste management guidance",
        "Environmental awareness",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="w-full flex justify-center px-6 py-24"
    >
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#e6c77a]">
            About Our AI
          </h2>

          <p className="mt-5 text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Understanding the technology behind EcoVision
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="
                bg-[#18361f]
                border
                border-[#3fa457]
                rounded-3xl
                p-8
                shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  w-20
                  h-20
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                "
              >
                <card.icon
                  size={40}
                  className="text-[#04ff00]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-2 text-2xl font-bold text-[#e6c77a]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-[#ffffff] leading-relaxed">
                {card.description}
              </p>

              {/* Features */}
              <div className="mt-6 space-y-3">
                {card.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#04ff00]"
                    />
                    <span className="text-[#ffffff]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          className="
            mt-20
            bg-[#18361f]
            border
            border-[#3fa457]
            rounded-3xl
            p-10
            text-center
            shadow-xl
          "
        >
          <h3 className="text-4xl font-bold text-[#e6c77a]">
            Technology for a Greener Future
          </h3>

          <p className="mt-6 text-white leading-relaxed max-w-4xl mx-auto text-lg">
            EcoVision AI combines artificial intelligence and environmental
            responsibility to create smarter waste management solutions.
            Every classification contributes toward cleaner cities,
            higher recycling rates, and a more sustainable future for
            generations to come.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;