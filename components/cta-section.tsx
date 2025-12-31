"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function CtaSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="download" className="py-24 md:py-32 px-6 text-center">
      <div
        ref={ref}
        className={cn(
          "transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1C1C] tracking-tight mb-6 text-balance">
          Start your calm financial journey.
        </h2>
        <p className="text-[#5C5C5C] text-base md:text-lg mb-10 max-w-xl mx-auto">
          Free to download. No hidden subscriptions. Just a better way to track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-[#222222] text-[#FFFDF8] rounded-xl font-medium hover:bg-[#3B3B3B] transition-all duration-300 w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98]">
            Download for iOS
          </button>
          <button className="px-8 py-4 bg-[#FFFDF8] border border-[#F3EFE7] text-[#1C1C1C] rounded-xl font-medium hover:bg-[#F9F6F0] transition-all duration-300 w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98]">
            Download for Android
          </button>
        </div>
      </div>
    </section>
  )
}
