"use client"

import { User, Cloud, Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function UserModesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 bg-[#FFFDF8]">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={cn(
            "text-center mb-10 md:mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-[#1C1C1C] tracking-tight mb-4">
            Your Data, Your Choice
          </h2>
          <p className="text-[#5C5C5C]">Start simply and upgrade only if you need to.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Guest Mode */}
          <div
            className={cn(
              "p-6 md:p-8 rounded-2xl border border-[#F3EFE7] bg-[#F9F6F0] transition-all duration-700 delay-100 hover:shadow-lg",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <User size={24} className="text-[#5C5C5C]" />
              <h3 className="text-xl font-medium text-[#1C1C1C]">Guest Mode</h3>
            </div>
            <ul className="space-y-3 text-[#5C5C5C] text-sm mb-8">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#222222]" /> No signup required
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#222222]" /> Data stored locally on device
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#222222]" /> Automatic cleanup rules
              </li>
            </ul>
            <span className="text-xs font-medium text-[#5C5C5C] bg-[#E5E5E5] px-2 py-1 rounded">Default</span>
          </div>

          {/* Sync Mode */}
          <div
            className={cn(
              "p-6 md:p-8 rounded-2xl border border-[#222222] bg-[#FFFDF8] relative overflow-hidden transition-all duration-700 delay-200 hover:shadow-lg",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="absolute top-0 right-0 bg-[#222222] text-[#FFFDF8] text-[10px] px-3 py-1 rounded-bl-lg font-medium">
              RECOMMENDED
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Cloud size={24} className="text-[#1C1C1C]" />
              <h3 className="text-xl font-medium text-[#1C1C1C]">Sync Mode</h3>
            </div>
            <ul className="space-y-3 text-[#3A3A3A] text-sm mb-8">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#222222]" /> Secure Email/Password login
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#222222]" /> Cloud sync via Supabase
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#222222]" /> Multi-device access
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#222222]" /> Permanent data history
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
