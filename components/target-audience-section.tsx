"use client"

import { CheckCircle2, XCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const perfectFor = [
  "You feel overwhelmed by complex budgeting apps.",
  "You want to track expenses in under 5 seconds.",
  "You value minimalism and clean design.",
  "You are a student, freelancer, or solo worker.",
]

const notFor = [
  "You need automated bank connections (PSD2/Plaid).",
  "You require complex double-entry accounting.",
  "You want crypto or investment portfolio tracking.",
]

export function TargetAudienceSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 bg-[#F9F6F0]">
      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <div
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
          )}
        >
          <h3 className="text-lg font-medium text-[#1C1C1C] mb-6">Perfect for you if...</h3>
          <ul className="space-y-3">
            {perfectFor.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-[#5C5C5C]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 size={18} className="mt-0.5 text-[#222222] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={cn(
            "transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
          )}
        >
          <h3 className="text-lg font-medium text-[#1C1C1C] mb-6">Not for you if...</h3>
          <ul className="space-y-3">
            {notFor.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[#5C5C5C]">
                <XCircle size={18} className="mt-0.5 text-[#5C5C5C] opacity-50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
