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

// Animated Counter
function AnimatedCount({ end, decimals = 0, suffix = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <span ref={ref} className="tabular-nums">
      {inView ? (
        <CountUp
          end={end}
          decimals={decimals}
          duration={2.5}
          suffix={suffix}
        />
      ) : (
        end.toFixed(decimals) + suffix
      )}
    </span>
  );
}

function Analytics() {
  const organic = 52;
  const recyclable = 76;
  const total = organic + recyclable;

  const weeklyData = [8, 12, 15, 18, 22, 28, 25];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const maxWeeklyValue = Math.max(...weeklyData);

  const organicPercentage = Math.round((organic / total) * 100);
  const recyclablePercentage = Math.round((recyclable / total) * 100);

  return (
    <section
      id="analytics"
      className="w-full flex justify-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden"
    >
      <div className="w-full max-w-6xl min-w-0">

        {/* Heading */}
        <div className="text-center px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e6c77a]">
            Public Analytics
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Real-time waste classification metrics, recycling insights,
            and environmental impact generated through EcoVision AI.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">

          {/* Total Waste */}
          <div className="min-w-0 border border-[#3fa457] rounded-3xl p-5 sm:p-8 text-center">
            <BarChart3 size={32} className="mx-auto text-[#04ff00]" />

            <p className="mt-4 text-sm sm:text-base text-white">
              Total Waste Classified
            </p>

            <h3 className="mt-2 text-4xl sm:text-5xl font-bold text-[#e6c77a]">
              <AnimatedCount end={128} />
            </h3>
          </div>

          {/* Organic Waste */}
          <div className="min-w-0 border border-[#3fa457] rounded-3xl p-5 sm:p-8 text-center">
            <Leaf size={32} className="mx-auto text-[#04ff00]" />

            <p className="mt-4 text-sm sm:text-base text-white">
              Organic Waste Count
            </p>

            <h3 className="mt-2 text-4xl sm:text-5xl font-bold text-[#e6c77a]">
              <AnimatedCount end={52} />
            </h3>
          </div>

          {/* Recyclable Waste */}
          <div className="min-w-0 border border-[#3fa457] rounded-3xl p-5 sm:p-8 text-center">
            <Recycle size={32} className="mx-auto text-[#04ff00]" />

            <p className="mt-4 text-sm sm:text-base text-white">
              Recyclable Waste Count
            </p>

            <h3 className="mt-2 text-4xl sm:text-5xl font-bold text-[#e6c77a]">
              <AnimatedCount end={76} />
            </h3>
          </div>

          {/* CO2 Reduction */}
          <div className="min-w-0 border border-[#3fa457] rounded-3xl p-5 sm:p-8 text-center">
            <TrendingUp size={32} className="mx-auto text-[#04ff00]" />

            <p className="mt-4 text-sm sm:text-base text-white">
              Estimated CO₂ Reduction
            </p>

            <h3 className="mt-2 text-4xl sm:text-5xl font-bold text-[#e6c77a]">
              <AnimatedCount end={0.34} decimals={2} suffix="T" />
            </h3>
          </div>

        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mt-8 sm:mt-12">

          {/* Waste Distribution */}
          <div className="min-w-0 w-full border border-[#3fa457] rounded-3xl p-5 sm:p-7 lg:p-8">

            <h3 className="text-xl sm:text-2xl font-semibold text-[#e6c77a]">
              Waste Distribution
            </h3>

            <p className="text-sm sm:text-base text-white mt-2 leading-relaxed">
              Classification ratio based on uploaded waste samples.
            </p>

            {/* Organic Waste */}
            <div className="mt-7 sm:mt-8">
              <div className="flex justify-between items-center flex-wrap gap-2 text-white text-sm sm:text-base mb-3">
                <span>Organic Waste</span>

                <span className="font-semibold tabular-nums">
                  {organicPercentage}%
                </span>
              </div>

              <div className="w-full h-4 sm:h-5 bg-[#1d3a21] rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-1000"
                  style={{ width: `${organicPercentage}%` }}
                />
              </div>
            </div>

            {/* Recyclable Waste */}
            <div className="mt-7 sm:mt-8">
              <div className="flex justify-between items-center flex-wrap gap-2 text-white text-sm sm:text-base mb-3">
                <span>Recyclable Waste</span>

                <span className="font-semibold tabular-nums">
                  {recyclablePercentage}%
                </span>
              </div>

              <div className="w-full h-4 sm:h-5 bg-[#1d3a21] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#e4cf9a] rounded-full transition-all duration-1000"
                  style={{ width: `${recyclablePercentage}%` }}
                />
              </div>
            </div>

            {/* Distribution Summary */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="bg-[#18361f] rounded-xl p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-300">
                  Organic
                </p>

                <p className="text-xl sm:text-2xl font-bold text-[#e6c77a]">
                  {organic}
                </p>
              </div>

              <div className="bg-[#18361f] rounded-xl p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-300">
                  Recyclable
                </p>

                <p className="text-xl sm:text-2xl font-bold text-[#e6c77a]">
                  {recyclable}
                </p>
              </div>
            </div>

          </div>

          {/* Weekly Classifications */}
          <div className="min-w-0 w-full border border-[#3fa457] rounded-3xl p-5 sm:p-7 lg:p-8">

            <h3 className="text-xl sm:text-2xl font-semibold text-[#e6c77a]">
              Weekly Classifications
            </h3>

            <p className="text-sm sm:text-base text-white mt-2 leading-relaxed">
              Upload activity recorded over the last seven days.
            </p>

            {/* Weekly Chart */}
            <div className="w-full mt-8 sm:mt-10">
              <div className="grid grid-cols-7 gap-1 sm:gap-3 h-56 sm:h-64">

                {weeklyData.map((value, index) => {
                  const barHeight = (value / maxWeeklyValue) * 100;

                  return (
                    <div
                      key={days[index]}
                      className="min-w-0 h-full flex flex-col items-center justify-end"
                    >
                      {/* Value */}
                      <span className="text-[11px] sm:text-sm font-semibold text-[#e6c77a] mb-2">
                        {value}
                      </span>

                      {/* Bar */}
                      <div className="w-full flex-1 flex items-end justify-center">
                        <div
                          className="
                            w-full max-w-[38px]
                            rounded-t-lg sm:rounded-t-xl
                            bg-gradient-to-t
                            from-[#3fa457]
                            to-[#e4cf9a]
                            transition-all duration-1000
                          "
                          style={{
                            height: `${barHeight}%`,
                            minHeight: "8px",
                          }}
                        />
                      </div>

                      {/* Day */}
                      <span className="mt-3 text-[10px] sm:text-sm text-white">
                        {days[index]}
                      </span>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Weekly Summary */}
            <div className="mt-6 pt-5 border-t border-[#3fa457]/40 flex justify-between items-center gap-3">
              <span className="text-xs sm:text-sm text-gray-300">
                Total this week
              </span>

              <span className="text-lg sm:text-xl font-bold text-[#e6c77a]">
                {weeklyData.reduce((sum, value) => sum + value, 0)}
              </span>
            </div>

          </div>
        </div>

        {/* Environmental Impact */}
        <div className="mt-8 sm:mt-12 border border-[#3fa457] rounded-3xl p-5 sm:p-8 lg:p-10">

          <h3 className="text-2xl sm:text-3xl font-semibold text-[#e6c77a]">
            Environmental Impact
          </h3>

          <p className="text-sm sm:text-base text-white mt-3 max-w-3xl leading-relaxed">
            Every classified waste item contributes to smarter
            disposal decisions and supports sustainable waste
            management practices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-7 sm:mt-8">

            {/* Trees Saved */}
            <div className="min-w-0 bg-[#18361f] rounded-2xl p-5 sm:p-6">
              <TreePine size={28} className="text-[#04ff00]" />

              <p className="mt-4 text-sm sm:text-base text-white">
                Trees Equivalent Saved
              </p>

              <h4 className="text-3xl sm:text-4xl font-bold text-[#e6c77a] mt-2">
                <AnimatedCount end={12} />
              </h4>
            </div>

            {/* CO2 Reduction */}
            <div className="min-w-0 bg-[#18361f] rounded-2xl p-5 sm:p-6">
              <Factory size={28} className="text-[#04ff00]" />

              <p className="mt-4 text-sm sm:text-base text-white">
                CO₂ Reduction
              </p>

              <h4 className="text-3xl sm:text-4xl font-bold text-[#e6c77a] mt-2">
                <AnimatedCount end={0.34} decimals={2} suffix="T" />
              </h4>
            </div>

            {/* Recycling Efficiency */}
            <div className="min-w-0 bg-[#18361f] rounded-2xl p-5 sm:p-6">
              <Recycle size={28} className="text-[#04ff00]" />

              <p className="mt-4 text-sm sm:text-base text-white">
                Recycling Efficiency
              </p>

              <h4 className="text-3xl sm:text-4xl font-bold text-[#e6c77a] mt-2">
                <AnimatedCount end={59} suffix="%" />
              </h4>
            </div>

          </div>
        </div>

        {/* AI Insights */}
        <div className="mt-8 sm:mt-12 border border-[#3fa457] rounded-3xl p-5 sm:p-8 lg:p-10">

          <h3 className="text-2xl sm:text-3xl font-semibold text-[#e6c77a]">
            AI Classification Insights
          </h3>

          <p className="text-sm sm:text-base text-white mt-3 leading-relaxed">
            Key observations generated from current classification
            trends and waste distribution patterns.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-7 sm:mt-8">

            {/* Common Category */}
            <div className="min-w-0 bg-[#18361f] rounded-2xl p-5 sm:p-6">
              <Brain className="text-[#04ff00]" size={28} />

              <h4 className="mt-4 text-lg sm:text-xl font-semibold text-[#e6c77a]">
                Most Common Category
              </h4>

              <p className="mt-3 text-sm sm:text-base text-white leading-relaxed">
                Recyclable waste currently represents the
                majority of uploaded samples, indicating strong
                potential for material recovery and reuse.
              </p>
            </div>

            {/* Recommendation */}
            <div className="min-w-0 bg-[#18361f] rounded-2xl p-5 sm:p-6">
              <Lightbulb className="text-[#04ff00]" size={28} />

              <h4 className="mt-4 text-lg sm:text-xl font-semibold text-[#e6c77a]">
                Sustainability Recommendation
              </h4>

              <p className="mt-3 text-sm sm:text-base text-white leading-relaxed">
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
