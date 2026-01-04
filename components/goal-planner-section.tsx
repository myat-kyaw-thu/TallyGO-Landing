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
      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
        {/* Content - Takes 3 columns */}
        <div
          className={cn(
            "order-1 md:order-1 md:col-span-3 transition-all duration-700",
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
            {features.map((feature, index) => (
              <li key={feature.title} className="flex items-start gap-3" style={{ animationDelay: `${index * 100}ms` }}>
                <feature.icon className="mt-1 text-[#222222] shrink-0" size={18} />
                <span>
                  <strong className="font-medium text-[#1C1C1C]">{feature.title}</strong> {feature.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Goal Planner Screenshot - Takes 2 columns */}
        <div
          className={cn(
            "order-2 md:order-2 md:col-span-2 relative transition-all duration-700 delay-200 max-w-[280px] sm:max-w-[300px] mx-auto",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
          )}
        >
          <img
            src="/app-img/goals.jpeg"
            alt="Goal Planner Interface"
            className="w-full h-auto rounded-[2.5rem] shadow-xl"
            style={{
              maxHeight: "500px",
              objectFit: "contain",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          />
        </div>
      </div>
    </section>
  )
}
