"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const designFeatures = [
  {
    title: "Graphite Palette",
    description:
      "I avoided neon accents and hype colors. The graphite-based palette reduces eye strain and looks professional in any light.",
  },
  {
    title: "Soft Shadows",
    description:
      "Depth is communicated through subtle elevation, not harsh outlines. Everything feels touchable and grounded.",
  },
]

export function DesignSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <h2
          className={cn(
            "text-2xl sm:text-3xl font-medium text-[#1C1C1C] tracking-tight mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Designed for Calm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
          {designFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "p-6 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <h4 className="font-medium text-[#1C1C1C] mb-2">{feature.title}</h4>
              <p className="text-[#5C5C5C] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
