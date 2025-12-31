"use client"

import { ShieldCheck } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function SecuritySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-12 md:py-16 px-6 bg-[#FFFDF8]">
      <div
        ref={ref}
        className={cn(
          "max-w-3xl mx-auto text-center border-t border-b border-[#F3EFE7] py-10 md:py-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <ShieldCheck size={32} className="text-[#1C1C1C] mb-4 mx-auto" />
        <h2 className="text-xl sm:text-2xl font-medium text-[#1C1C1C] mb-4">Secure by Design</h2>
        <p className="text-[#5C5C5C]">
          I use Supabase for enterprise-grade authentication and row-level security. I collect no unnecessary data, no
          location tracking, and absolutely no advertising data.
        </p>
      </div>
    </section>
  )
}
