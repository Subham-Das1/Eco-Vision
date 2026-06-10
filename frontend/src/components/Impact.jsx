import {
  Trash2,
  Recycle,
  Leaf,
  Target,
  Upload,
  Brain,
  CheckCircle,
  ShieldCheck,
  Zap,
  Globe,
  BookOpen,
} from "lucide-react";

function Impact() {
  const impactStats = [
    {
      icon: Trash2,
      title: "Landfill Reduction",
      value: "847 kg",
      desc: "Proper waste classification helps divert materials from landfills, reducing environmental burden and extending landfill lifespan.",
    },
    {
      icon: Recycle,
      title: "Recycling Awareness",
      value: "65%",
      desc: "AI-powered classification increases recycling rates and public awareness about sustainable waste management practices.",
    },
    {
      icon: Leaf,
      title: "Carbon Footprint",
      value: "6.5T CO₂",
      desc: "Each properly classified item helps reduce carbon emissions through optimized recycling and composting processes.",
    },
    {
      icon: Target,
      title: "Sustainability Goal",
      value: "2030",
      desc: "Helping communities reduce landfill waste through intelligent waste classification."
    },
  ];

  const steps = [
    {
      icon: Upload,
      title: "Upload Waste Image",
      desc: "Take a photo or upload an image of the waste material you want to classify. Our system accepts various image formats and qualities.",
    },
    {
      icon: Brain,
      title: "AI Analyzes Waste",
      desc: "Our advanced CNN-based AI model analyzes the image in real-time, examining texture, color, shape, and material properties.",
    },
    {
      icon: CheckCircle,
      title: "Get Disposal Recommendation",
      desc: "Receive instant recommendations on proper disposal methods including recycling, composting, or special handling instructions.",
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Accuracy",
      desc: "Our CNN model achieves 94%+ accuracy in waste classification, outperforming manual sorting.",
    },
    {
      icon: Zap,
      title: "Speed",
      desc: "Get instant predictions in milliseconds, enabling real-time waste management decisions.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      desc: "Free to use for everyone, making sustainable waste management accessible to all.",
    },
    {
      icon: BookOpen,
      title: "Education",
      desc: "Learn about proper waste management and environmental impact with each classification.",
    },
  ];

  return (
    <section
      id="impact"
      className="w-full px-6 py-24 flex justify-center"
    >
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#e6c77a]">
            Environmental Impact
          </h2>

          <p className="mt-5 text-lg text-[#ffffff] max-w-3xl mx-auto leading-relaxed">
            See how AI waste classification contributes to a sustainable future
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {impactStats.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#18361f]
                border
                border-[#3fa457]
                rounded-3xl
                p-8
                hover:-translate-y-2
                transition-all
                duration-300
                shadow-xl
              "
            >
              <div className="w-16 h-16 rounded-2xl  flex items-center justify-center">
                <item.icon size={34} className="text-[#04ff00]" />
              </div>

              <h3 className="mt-2 text-xl font-bold text-[#f5e7c2]">
                {item.title}
              </h3>

              <div className="mt-4 text-4xl font-bold text-[#e6c77a]">
                {item.value}
              </div>

              <p className="mt-4 text-[#ffffff] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Global Impact */}
        <div
          className="
            mt-20
            bg-[#18361f]
            border
            border-[#2d5a36]
            rounded-3xl
            p-10
            text-center
            shadow-xl
          "
        >
          <h3 className="text-4xl font-bold text-[#e6c77a]">
            Global Impact
          </h3>

          <p className="mt-6 text-[#ffffff] text-lg leading-relaxed max-w-4xl mx-auto">
            By using EcoVision AI for waste classification, you're not just
            managing waste efficiently—you're contributing to a global movement
            toward sustainability. Every classification helps reduce landfill
            burden, increase recycling rates, and lower carbon emissions.
            Together, we're building a cleaner, more sustainable planet for
            future generations.
          </p>
        </div>

        {/* How It Works */}
        <div className="mt-24 text-center">
          <h3 className="text-5xl font-bold text-[#e6c77a]">
            How It Works
          </h3>

          <p className="mt-5 text-lg text-[#ffffff]">
            Simple, intuitive, and powered by cutting-edge AI technology
          </p>
        </div>

        
        <div className="relative mt-16">
            <div className="grid lg:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                <div key={index} className="relative">
                    
                    {/* Card */}
                    <div
                    className="
                        bg-[#18361f]
                        border
                        border-[#3fa457]
                        rounded-3xl
                        p-8
                        text-center
                        shadow-xl
                        h-full
                    "
                    >
                    <div className="text-5xl font-bold text-[#e6c77a]">
                        {index + 1}
                    </div>

                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mt-6">
                        <step.icon size={40} className="text-[#04ff00]" />
                    </div>

                    <h4 className="mt-2 text-2xl font-bold text-[#f5e7c2]">
                        {step.title}
                    </h4>

                    <p className="mt-4 text-[#cfc8b3] leading-relaxed">
                        {step.desc}
                    </p>
                    </div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                    <div
                        className="
                        hidden
                        lg:flex
                        absolute
                        top-1/2
                        -right-8
                        -translate-y-1/2
                        z-10
                        "
                    >
                        <svg
                        width="60"
                        height="24"
                        viewBox="0 0 60 24"
                        fill="none"
                        >
                        <path
                            d="M29 12H54"
                            stroke="#3fa457"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        <path
                            d="M45 3L58 12L45 21"
                            stroke="#3fa457"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                    </div>
                    )}
                </div>
                ))}
            </div>
        </div>

        {/* Why AI Waste Classification */}
        <div className="mt-24 text-center">
          <h3 className="text-5xl font-bold text-[#e6c77a]">
            Why AI Waste Classification?
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#18361f]
                border
                border-[#3fa457]
                rounded-3xl
                p-8
                flex
                gap-5
                items-start
                shadow-xl
              "
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                <item.icon size={40} className="text-[#04ff00]" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[#e6c77a]">
                  ✓ {item.title}
                </h4>

                <p className="mt-3 text-[#ffffff] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Impact;