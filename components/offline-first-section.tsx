"use client"

import { WifiOff } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function OfflineFirstSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 md:py-20 px-6 bg-[#F9F6F0] border-y border-[#F3EFE7]">
      <div
        ref={ref}
        className={cn(
          "max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <div className="w-16 h-16 rounded-full bg-[#E5E5E5] flex items-center justify-center text-[#1C1C1C] shrink-0">
          <WifiOff size={28} />
        </div>
        <div>
          <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Built for the real world</h3>
          <p className="text-[#5C5C5C]">
            Subway commutes? Remote cabins? Spotty reception? TallyGO works seamlessly offline. I queue your data and
            sync it automatically the moment you reconnect. No spinners, no errors.
          </p>
        </div>
      </div>
    </section>
  )
}
