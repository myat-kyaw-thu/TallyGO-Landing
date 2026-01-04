"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function DeveloperStorySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 max-w-3xl mx-auto">
      <div
        ref={ref}
        className={cn(
          "bg-[#FFFDF8] border border-[#F3EFE7] p-6 md:p-8 lg:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <h3 className="text-xl font-medium text-[#1C1C1C] mb-4">Why I Built TallyGO</h3>
        <p className="text-[#5C5C5C] leading-relaxed mb-6 font-light">
          Hi, I'm Myat Kyaw Thu, a developer from Myanmar. I built TallyGO because I was frustrated with existing finance apps. 
          They were either too complex with features I never used, or too simple without the flexibility I needed.
        </p>
        <p className="text-[#5C5C5C] leading-relaxed mb-6 font-light">
          As someone who values simplicity but needs powerful functionality, I wanted an app that could work offline 
          (essential in Myanmar), respect my privacy, and let me track expenses without forcing me into rigid categories 
          or overwhelming budgeting systems.
        </p>
        <p className="text-[#5C5C5C] leading-relaxed font-light">
          This is a solo project built from my own daily struggles with money tracking. Every feature exists because 
          I personally needed it.I'm committed to keeping 
          TallyGO focused, reliable, and genuinely useful for people like us who just want to understand our spending better.
        </p>
        <div className="mt-8 pt-8 border-t border-[#F3EFE7] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F3EFE7] flex items-center justify-center text-[#1C1C1C] font-semibold text-sm">
            MK
          </div>
          <div>
            <div className="text-sm font-medium text-[#1C1C1C]">Myat Kyaw Thu</div>
            <div className="text-xs text-[#5C5C5C]">Creator of TallyGO</div>
          </div>
        </div>
      </div>
    </section>
  )
}
