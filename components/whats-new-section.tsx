"use client"

import { Globe, Check, Sparkles, Moon, Lock, Key } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function WhatsNewSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 bg-[#F9F6F0] border-y border-[#F3EFE7]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
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
            Major new features and improvements to enhance your TallyGO experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Localization */}
          <div
            className={cn(
              "bg-[#FFFDF8] rounded-2xl p-6 border border-[#F3EFE7] shadow-lg transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-[#222222] flex items-center justify-center">
              <Globe size={24} className="text-[#FFFDF8]" />
            </div>
            <h3 className="text-lg font-medium text-[#1C1C1C] mb-3">Myanmar Language</h3>
            <ul className="space-y-2 text-sm text-[#5C5C5C]">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 text-[#222222] shrink-0" size={14} />
                <span>Complete interface translation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 text-[#222222] shrink-0" size={14} />
                <span>Localized currency formatting</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 text-[#222222] shrink-0" size={14} />
                <span>Cultural date formats</span>
              </li>
            </ul>
          </div>

          {/* Dark Mode */}
          <div
            className={cn(
              "bg-[#FFFDF8] rounded-2xl p-6 border border-[#F3EFE7] shadow-lg transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-[#222222] flex items-center justify-center">
              <Moon size={24} className="text-[#FFFDF8]" />
            </div>
            <h3 className="text-lg font-medium text-[#1C1C1C] mb-3">Light/Dark Mode</h3>
            <ul className="space-y-2 text-sm text-[#5C5C5C]">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 text-[#222222] shrink-0" size={14} />
                <span>System theme detection</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 text-[#222222] shrink-0" size={14} />
                <span>Manual theme switching</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 text-[#222222] shrink-0" size={14} />
                <span>Comfortable viewing anytime</span>
              </li>
            </ul>
          </div>

          {/* Security Features */}
          <div
            className={cn(
              "bg-[#FFFDF8] rounded-2xl p-6 border border-[#F3EFE7] shadow-lg transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="w-12 h-12 mb-4 rounded-xl bg-[#222222] flex items-center justify-center">
              <Lock size={24} className="text-[#FFFDF8]" />
            </div>
            <h3 className="text-lg font-medium text-[#1C1C1C] mb-3">Enhanced Security</h3>
            <ul className="space-y-2 text-sm text-[#5C5C5C]">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 text-[#222222] shrink-0" size={14} />
                <span>Password change in-app</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 text-[#222222] shrink-0" size={14} />
                <span>Secure password reset</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 text-[#222222] shrink-0" size={14} />
                <span>Enhanced account protection</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={cn(
            "text-center transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="bg-[#FFFDF8] rounded-2xl p-6 border border-[#F3EFE7] inline-block">
            <p className="text-sm text-[#5C5C5C] mb-2">Plus improvements:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#5C5C5C]">
              <span>• Enhanced performance</span>
              <span>• Better offline sync</span>
              <span>• UI polish & bug fixes</span>
              <span>• Improved accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}