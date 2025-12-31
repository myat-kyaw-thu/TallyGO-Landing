"use client"

import { Focus, SlidersHorizontal, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const principles = [
  {
    icon: Focus,
    title: "Clarity",
    description:
      "Interfaces designed to be understood in seconds, not minutes. Information is presented with clear hierarchy and generous whitespace.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control",
    description:
      "Your data, your rules. Whether you want to track every cent or just the big purchases, the system adapts to you without judgment.",
  },
  {
    icon: Zap,
    title: "Offline-First",
    description:
      "Life happens everywhere. TallyGO works perfectly without an internet connection, syncing silently when you're back online.",
  },
]

export function PrinciplesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {principles.map((principle, index) => (
          <div
            key={principle.title}
            className={cn(
              "group transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="w-10 h-10 bg-[#F9F6F0] rounded-lg flex items-center justify-center mb-6 text-[#1C1C1C] group-hover:scale-110 transition-transform duration-300">
              <principle.icon size={20} />
            </div>
            <h3 className="text-lg font-medium text-[#1C1C1C] mb-3">{principle.title}</h3>
            <p className="text-[#5C5C5C] font-light leading-relaxed">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
