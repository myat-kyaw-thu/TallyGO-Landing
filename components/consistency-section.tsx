"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const calendarData = [
  { value: "100%", bg: "bg-[#E6F4EA]", border: "border-[#CEEAD4]" },
  { value: "100%", bg: "bg-[#E6F4EA]", border: "border-[#CEEAD4]" },
  { value: "75%", bg: "bg-[#FFF8E6]", border: "border-[#FBECC5]" },
  { value: "Rest", bg: "bg-[#F9F6F0]", border: "border-[#F3EFE7]", muted: true },
  { value: "30%", bg: "bg-[#FDEDEC]", border: "border-[#FADBD8]" },
  { value: "100%", bg: "bg-[#E6F4EA]", border: "border-[#CEEAD4]" },
  { value: "80%", bg: "bg-[#FFF8E6]", border: "border-[#FBECC5]" },
]

export function ConsistencySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
      <div
        ref={ref}
        className={cn(
          "text-center mb-12 md:mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <h2 className="text-2xl sm:text-3xl font-medium text-[#1C1C1C] tracking-tight mb-4">
          Visualize Your Consistency
        </h2>
        <p className="text-[#5C5C5C] max-w-2xl mx-auto">
          A visual calendar history helps you understand your habits without shame.
        </p>
      </div>

      <div
        className={cn(
          "grid grid-cols-4 sm:grid-cols-7 gap-2 md:gap-3 max-w-4xl mx-auto transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        {calendarData.map((day, index) => (
          <div
            key={index}
            className={cn(
              "aspect-square rounded-lg border flex items-center justify-center text-xs font-medium transition-all duration-500 hover:scale-105",
              day.bg,
              day.border,
              day.muted ? "text-[#5C5C5C]" : "text-[#1C1C1C]",
            )}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {day.value}
          </div>
        ))}
      </div>

      <div
        className={cn(
          "flex flex-wrap justify-center gap-4 md:gap-6 mt-8 text-xs text-[#5C5C5C] transition-all duration-700 delay-400",
          isVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#E6F4EA] border border-[#CEEAD4] rounded-sm"></div> Complete
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#FFF8E6] border border-[#FBECC5] rounded-sm"></div> In Progress
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#FDEDEC] border border-[#FADBD8] rounded-sm"></div> Behind
        </div>
      </div>
    </section>
  )
}
