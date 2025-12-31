"use client"

import { CalendarDays, Copy, MousePointerClick, Check, Plus } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const features = [
  { icon: CalendarDays, title: "10-Day Agenda:", description: "A rolling view of what matters." },
  { icon: Copy, title: "Easy Migration:", description: "Copy incomplete goals to tomorrow with one tap." },
  { icon: MousePointerClick, title: "Speed Dial:", description: "Add items instantly with the FAB." },
]

export function GoalPlannerSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 bg-[#F9F6F0]">
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Content */}
        <div
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
          )}
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-[#1C1C1C] tracking-tight mb-4">
            Intentional Goal Planning
          </h2>
          <p className="text-[#5C5C5C] text-base md:text-lg font-light mb-8">
            Set intentions for today, this month, or next month. Focus on daily momentum rather than overwhelming lists.
          </p>
          <ul className="space-y-4 text-[#3A3A3A]">
            {features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3">
                <feature.icon className="mt-1 text-[#222222] shrink-0" size={18} />
                <span>
                  <strong className="font-medium text-[#1C1C1C]">{feature.title}</strong> {feature.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Goal Planner Screenshot */}
        <div
          className={cn(
            "relative rounded-3xl overflow-hidden transition-all duration-700 delay-200 max-w-[320px] mx-auto",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
          )}
        >
          <img
            src="/app-img/goals.jpeg"
            alt="Goal Planner Interface"
            className="w-full max-h-[600px] object-contain rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
