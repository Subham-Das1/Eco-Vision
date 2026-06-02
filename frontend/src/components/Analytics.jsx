import {
  BarChart3,
  Leaf,
  Recycle,
  TrendingUp,
  TreePine,
  Factory,
  Brain,
  Lightbulb,
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Analytics() {
  const organic = 52;
  const recyclable = 76;
  const total = organic + recyclable;

  const weeklyData = [8, 12, 15, 18, 22, 28, 25];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    });

    const AnimatedCount = ({
    end,
    decimals = 0,
    suffix = "",
    }) =>
    inView ? (
        <CountUp
        end={end}
        decimals={decimals}
        duration={2.5}
        suffix={suffix}
        />
    ) : (
        <>
        {(0).toFixed(decimals)}
        {suffix}
        </>
    );

  return (
    <section
        ref={ref}
        id="analytics"
        className="w-full flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#e6c77a]">
            Public Analytics
          </h2>

          <p className="mt-5 text-lg text-[#d7d2c3] max-w-3xl mx-auto leading-relaxed">
            Real-time waste classification metrics, recycling insights,
            and environmental impact generated through EcoVision AI.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          <div className="bg-[#112716] border border-[#2a4f2d] rounded-3xl p-8 text-center">
            <BarChart3
              size={34}
              className="mx-auto text-[#e4cf9a]"
            />

            <p className="mt-4 text-[#d7d2c3]">
              Total Waste Classified
            </p>

            <h3 className="mt-2 text-5xl font-bold text-[#f5e7c2]">
              <AnimatedCount end={128} duration={2.5} />
            </h3>
          </div>

          <div className="bg-[#112716] border border-[#2a4f2d] rounded-3xl p-8 text-center">
            <Leaf
              size={34}
              className="mx-auto text-green-400"
            />

            <p className="mt-4 text-[#d7d2c3]">
              Organic Waste Count
            </p>

            <h3 className="mt-2 text-5xl font-bold text-[#f5e7c2]">
              <AnimatedCount end={52} duration={2.5} />
            </h3>
          </div>

          <div className="bg-[#112716] border border-[#2a4f2d] rounded-3xl p-8 text-center">
            <Recycle
              size={34}
              className="mx-auto text-blue-400"
            />

            <p className="mt-4 text-[#d7d2c3]">
              Recyclable Waste Count
            </p>

            <h3 className="mt-2 text-5xl font-bold text-[#f5e7c2]">
              <AnimatedCount end={76} duration={2.5} />
            </h3>
          </div>

          <div className="bg-[#112716] border border-[#2a4f2d] rounded-3xl p-8 text-center">
            <TrendingUp
              size={34}
              className="mx-auto text-[#e4cf9a]"
            />

            <p className="mt-4 text-[#d7d2c3]">
              Estimated CO₂ Reduction
            </p>

            <h3 className="mt-2 text-5xl font-bold text-[#f5e7c2]">
              <AnimatedCount end={0.34} decimals={2} duration={2.5} suffix="T" />
            </h3>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Waste Distribution */}
          <div className="bg-[#112716] border border-[#2a4f2d] rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-[#f5e7c2]">
              Waste Distribution
            </h3>

            <p className="text-[#cfc8b3] mt-2">
              Classification ratio based on uploaded waste samples.
            </p>

            <div className="mt-8">
              <div className="flex justify-between text-[#d7d2c3] mb-3">
                <span>Organic Waste</span>
                <span>
                  {Math.round((organic / total) * 100)}%
                </span>
              </div>

              <div className="w-full h-5 bg-[#1d3a21] rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{
                    width: `${(organic / total) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between text-[#d7d2c3] mb-3">
                <span>Recyclable Waste</span>
                <span>
                  {Math.round((recyclable / total) * 100)}%
                </span>
              </div>

              <div className="w-full h-5 bg-[#1d3a21] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#e4cf9a]"
                  style={{
                    width: `${(recyclable / total) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="bg-[#112716] border border-[#2a4f2d] rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-[#f5e7c2]">
              Weekly Classifications
            </h3>

            <p className="text-[#cfc8b3] mt-2">
              Upload activity recorded over the last seven days.
            </p>

            <div className="flex items-end justify-between h-72 mt-10">
              {weeklyData.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                >
                  <div
                    className="w-12 rounded-t-xl bg-gradient-to-t from-[#3fa457] to-[#e4cf9a]"
                    style={{
                      height: `${value * 6}px`,
                    }}
                  />

                  <span className="mt-3 text-[#cfc8b3] text-sm">
                    {days[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="mt-12 bg-[#112716] border border-[#2a4f2d] rounded-3xl p-10">
          <h3 className="text-3xl font-semibold text-[#f5e7c2]">
            Environmental Impact
          </h3>

          <p className="text-[#cfc8b3] mt-3 max-w-3xl">
            Every classified waste item contributes to smarter
            disposal decisions and supports sustainable waste
            management practices.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#18361f] rounded-2xl p-6">
              <TreePine
                size={28}
                className="text-green-400"
              />

              <p className="mt-4 text-[#d7d2c3]">
                Trees Equivalent Saved
              </p>

              <h4 className="text-4xl font-bold text-[#f5e7c2] mt-2">
                <AnimatedCount end={12} duration={2}  />
              </h4>
            </div>

            <div className="bg-[#18361f] rounded-2xl p-6">
              <Factory
                size={28}
                className="text-[#e4cf9a]"
              />

              <p className="mt-4 text-[#d7d2c3]">
                CO₂ Reduction
              </p>

              <h4 className="text-4xl font-bold text-[#f5e7c2] mt-2">
                <AnimatedCount end={0.34} decimals={2} duration={2.5} suffix="T" />
              </h4>
            </div>

            <div className="bg-[#18361f] rounded-2xl p-6">
              <Recycle
                size={28}
                className="text-blue-400"
              />

              <p className="mt-4 text-[#d7d2c3]">
                Recycling Efficiency
              </p>

              <h4 className="text-4xl font-bold text-[#f5e7c2] mt-2">
                <AnimatedCount
                end={59}
                duration={2.5}
                suffix="%"
                />
              </h4>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="mt-12 bg-[#112716] border border-[#2a4f2d] rounded-3xl p-10">
          <h3 className="text-3xl font-semibold text-[#f5e7c2]">
            AI Classification Insights
          </h3>

          <p className="text-[#cfc8b3] mt-3">
            Key observations generated from current classification
            trends and waste distribution patterns.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#18361f] rounded-2xl p-6">
              <Brain
                className="text-[#e4cf9a]"
                size={28}
              />

              <h4 className="mt-4 text-xl font-semibold text-[#f5e7c2]">
                Most Common Category
              </h4>

              <p className="mt-3 text-[#d7d2c3] leading-relaxed">
                Recyclable waste currently represents the
                majority of uploaded samples, indicating strong
                potential for material recovery and reuse.
              </p>
            </div>

            <div className="bg-[#18361f] rounded-2xl p-6">
              <Lightbulb
                className="text-yellow-400"
                size={28}
              />

              <h4 className="mt-4 text-xl font-semibold text-[#f5e7c2]">
                Sustainability Recommendation
              </h4>

              <p className="mt-3 text-[#d7d2c3] leading-relaxed">
                Improving waste segregation at the source can
                increase recycling efficiency and reduce the
                volume of waste sent to landfills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Analytics;