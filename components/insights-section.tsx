"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const stats = [
  { label: "Spending Avg", value: "MMK 42", suffix: "/day" },
  { label: "Goal Rate", value: "84%", suffix: "" },
  { label: "Rest Days", value: "4", suffix: " this month" },
]

export function InsightsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 bg-[#F9F6F0] border-t border-[#F3EFE7]">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <h2
          className={cn(
            "text-2xl sm:text-3xl font-medium text-[#1C1C1C] tracking-tight mb-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Insights, Not Noise
        </h2>
        <p
          className={cn(
            "text-[#5C5C5C] mb-10 md:mb-12 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Weekly reports and monthly breakdowns that actually make sense.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "bg-[#FFFDF8] p-5 md:p-6 rounded-xl border border-[#F3EFE7] text-left hover:shadow-md transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="text-xs text-[#5C5C5C] uppercase tracking-wide mb-2">{stat.label}</div>
              <div className="text-2xl font-medium text-[#1C1C1C]">
                {stat.value}
                <span className="text-base font-normal text-[#5C5C5C]">{stat.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
