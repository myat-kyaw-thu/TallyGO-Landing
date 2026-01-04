"use client"

import Link from "next/link"
import { Apple, Smartphone, Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <header ref={ref} className="pt-12 md:pt-20 pb-24 md:pb-32 px-6 max-w-5xl mx-auto text-center">
      {/* Version Badge */}
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F6F0] border border-[#F3EFE7] text-xs text-[#5C5C5C] mb-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <span className="w-2 h-2 rounded-full bg-[#222222]"></span>
        <span>Version 1.0.2 Available Now</span>
      </div>

      {/* Headline */}
      <h1
        className={cn(
          "text-4xl sm:text-5xl md:text-7xl font-medium text-[#1C1C1C] tracking-tight mb-6 leading-[1.1] text-balance transition-all duration-700 delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        Everything you need.
        <br />
        Nothing you don't.
      </h1>

      {/* Description */}
      <p
        className={cn(
          "text-base sm:text-lg md:text-xl text-[#5C5C5C] max-w-2xl mx-auto mb-10 font-light leading-relaxed text-pretty transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        TallyGO is a beautifully simple mobile app that helps you track daily expenses and plan personal goals without
        clutter, complexity, or unnecessary features.
      </p>

      {/* CTA Buttons */}
      <div
        className={cn(
          "flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-20 transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        <button
          disabled
          className="w-full sm:w-auto px-8 py-3.5 bg-[#222222] text-[#FFFDF8] rounded-xl font-medium opacity-60 cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Apple size={20} />
          <span>Coming Soon for iOS</span>
        </button>
        <Link
          href="https://drive.google.com/file/d/1_seo-ND3JVfQunVLTk2qY6HZujwi8-lV/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-3.5 bg-[#FFFDF8] border border-[#F3EFE7] text-[#3A3A3A] rounded-xl font-medium hover:bg-[#F9F6F0] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Smartphone size={20} />
          <span>Download for Android</span>
        </Link>
      </div>

      {/* Phone Mockup with App Screenshot */}
      <div
        className={cn(
          "relative mx-auto max-w-[280px] sm:max-w-[320px] transition-all duration-1000 delay-400",
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95",
        )}
      >
        <img
          src="/app-img/landing.jpeg"
          alt="TallyGO App Screenshot"
          className="w-full h-auto rounded-[2.5rem] shadow-2xl"
          style={{
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        />
      </div>
    </header>
  )
}
