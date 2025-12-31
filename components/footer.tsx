"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function Footer() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <footer className="py-10 md:py-12 px-6 bg-[#FFFDF8] border-t border-[#F3EFE7]">
      <div
        ref={ref}
        className={cn(
          "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <div className="text-center md:text-left">
          <div className="text-lg font-medium text-[#1C1C1C] tracking-tight mb-1">TallyGO</div>
          <p className="text-sm text-[#5C5C5C]">Track money. Plan life.</p>
        </div>

        <div className="flex gap-6 text-sm text-[#5C5C5C]">
          <Link href="#" className="hover:text-[#1C1C1C] transition-colors duration-300">
            Privacy
          </Link>
          <Link href="#" className="hover:text-[#1C1C1C] transition-colors duration-300">
            Terms
          </Link>
          <Link href="#" className="hover:text-[#1C1C1C] transition-colors duration-300">
            Contact
          </Link>
        </div>

        <div className="text-sm text-[#5C5C5C] opacity-60">© 2026 TallyGO</div>
      </div>
    </footer>
  )
}
