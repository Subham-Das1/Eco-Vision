import AnimatedButton from "./AnimatedButton";

function Hero() {
  return (
    <section className="flex items-center justify-center px-6 py-20 mt-16">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#f5e7c2]">
            AI-Powered Smart
            <span className="block text-[#e4cf9a]">
              Waste Classification
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#d7d2c3] max-w-xl">
            Leverage cutting-edge AI to classify waste accurately
            and make informed disposal decisions. Contribute to a
            sustainable future with every classification.
          </p>

          {/* Animated Button */}
          <AnimatedButton
            className="
              mt-8
              bg-[#e4cf9a]
              hover:bg-[#d6be82]
              text-[#18361f]
              px-8
              py-4
              rounded-2xl
              font-semibold
              text-lg
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
              border-none
            "
          >
            Start Classifying →
          </AnimatedButton>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-8 text-[#f3e6be]">
            
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-bold text-lg">
                ✓
              </span>
              <span>Free to use</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400 font-bold text-lg">
                ✓
              </span>
              <span>Real-time results</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400 font-bold text-lg">
                ✓
              </span>
              <span>Eco-friendly</span>
            </div>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="flex justify-center">
          
          <div
            className="
              relative
              w-[360px]
              h-[360px]
              rounded-full
              bg-[#e4cf9a]
              border-[12px]
              border-[#214d2c]
              flex
              items-center
              justify-center
              shadow-[0_0_80px_rgba(228,207,154,0.15)]
            "
          >
            {/* Inner Circle */}
            <div
              className="
                w-[220px]
                h-[220px]
                rounded-full
                bg-[#112716]
                flex
                items-center
                justify-center
                text-[#e4cf9a]
                text-9xl
                shadow-inner
              "
            >
              ♻
            </div>

            {/* Glow Ring */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                animate-pulse
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;