"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="philosophy" className="py-20 md:py-24 px-6 bg-[#F9F6F0]">
      <div
        ref={ref}
        className={cn(
          "max-w-2xl mx-auto text-center md:text-left transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1C1C1C] tracking-tight mb-6">
          Why TallyGO Exists
        </h2>
        <div className="prose prose-lg text-[#5C5C5C] font-light">
          <p className="mb-6">
            Modern finance apps are noisy. They bombard you with ads, upsells, complex charts, and features you never
            asked for. They turn a simple habit into a chore.
          </p>
          <p>
            I built TallyGO on a philosophy of radical simplicity. I believe that tracking your life shouldn't take
            time away from living it. By stripping away the non-essentials, I created a space that feels calm,
            intentional, and respectful of your attention.
          </p>
        </div>
      </div>
    </section>
  )
}
