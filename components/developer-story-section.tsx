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
        <h3 className="text-xl font-medium text-[#1C1C1C] mb-4">A Note from the Developer</h3>
        <p className="text-[#5C5C5C] leading-relaxed mb-6 font-light">
          Hi, I'm Myat Kyaw Thu. I built TallyGO because I was tired of finance apps that felt like casinos. I wanted a
          tool that respected my time and helped me focus on what actually matters—my goals and my daily habits.
        </p>
        <p className="text-[#5C5C5C] leading-relaxed font-light">
          This is a solo project, crafted with personal attention to detail. When you email support, you're talking to
          me. I'm committed to keeping TallyGO simple, fast, and reliable for the long haul.
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
