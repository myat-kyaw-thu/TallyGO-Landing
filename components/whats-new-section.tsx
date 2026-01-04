"use client"

import { Globe, Check, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function WhatsNewSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 bg-[#F9F6F0] border-y border-[#F3EFE7]">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div
          className={cn(
            "text-center mb-10 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222222] text-[#FFFDF8] text-xs font-medium mb-4">
            <Sparkles size={12} />
            <span>What's New in v1.0.2</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium text-[#1C1C1C] tracking-tight mb-4">
            Latest Updates
          </h2>
          <p className="text-[#5C5C5C] max-w-2xl mx-auto">
            Fresh improvements and new features to make your expense tracking even better.
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {/* New Features */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Globe size={24} className="text-[#222222]" />
              <h3 className="text-xl font-medium text-[#1C1C1C]">Myanmar Language Support</h3>
            </div>
            
            <ul className="space-y-3 text-[#3A3A3A]">
              <li className="flex items-start gap-3">
                <Check className="mt-1 text-[#222222] shrink-0" size={18} />
                <span>Complete interface translation in Myanmar</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 text-[#222222] shrink-0" size={18} />
                <span>Localized currency formatting</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 text-[#222222] shrink-0" size={18} />
                <span>Cultural date and time formats</span>
              </li>
            </ul>

            <div className="pt-4">
              <p className="text-sm text-[#5C5C5C] mb-3">Plus improvements:</p>
              <ul className="text-sm text-[#5C5C5C] space-y-1">
                <li>• Enhanced performance and stability</li>
                <li>• Better offline sync reliability</li>
                <li>• UI polish and bug fixes</li>
              </ul>
            </div>
          </div>

          {/* Update Highlight */}
          <div className="relative">
            <div className="bg-[#FFFDF8] rounded-2xl p-8 border border-[#F3EFE7] shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#222222] flex items-center justify-center">
                  <Globe size={28} className="text-[#FFFDF8]" />
                </div>
                <h4 className="text-lg font-medium text-[#1C1C1C] mb-2">Language Support</h4>
                <p className="text-[#5C5C5C] text-sm mb-4">
                  TallyGO now supports Myanmar language with full localization
                </p>
                <div className="text-sm text-[#222222] font-medium bg-[#F3EFE7] px-3 py-1 rounded-full inline-block">
                  Free Update
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}