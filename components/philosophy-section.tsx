"use client"

import { AlertTriangle, Heart, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const problems = [
  {
    icon: AlertTriangle,
    title: "Noisy Apps",
    description: "Bombarded with ads, upsells, and complex charts you never asked for",
  },
  {
    icon: Target,
    title: "Feature Bloat",
    description: "Simple habits turned into chores with unnecessary complexity",
  },
  {
    icon: Heart,
    title: "No Respect",
    description: "Apps that steal your attention instead of respecting your time",
  },
]

export function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="philosophy" className="py-20 md:py-24 px-6 bg-[#F9F6F0]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1C1C1C] tracking-tight mb-6">
            Why TallyGO Exists
          </h2>
          <p className="text-lg text-[#5C5C5C] font-light max-w-3xl mx-auto leading-relaxed">
            Modern finance apps are broken. They've forgotten that tracking your life shouldn't take time away from living it.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={problem.title}
                className={cn(
                  "p-6 rounded-2xl bg-[#FFFDF8] border border-[#F3EFE7] text-center transition-all duration-700 hover:shadow-lg",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#F3EFE7] flex items-center justify-center">
                  <Icon size={24} className="text-[#5C5C5C]" />
                </div>
                <h3 className="text-lg font-medium text-[#1C1C1C] mb-2">{problem.title}</h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>

        {/* Solution Statement */}
        <div
          className={cn(
            "bg-[#FFFDF8] rounded-2xl p-8 md:p-12 border border-[#F3EFE7] shadow-lg text-center transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#222222] flex items-center justify-center">
            <Heart size={28} className="text-[#FFFDF8]" />
          </div>
          <h3 className="text-xl font-medium text-[#1C1C1C] mb-4">Our Philosophy</h3>
          <p className="text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto">
            I built TallyGO on radical simplicity. By stripping away the non-essentials, I created a space that feels calm, 
            intentional, and respectful of your attention. Because your financial journey should be peaceful, not stressful.
          </p>
        </div>
      </div>
    </section>
  )
}
