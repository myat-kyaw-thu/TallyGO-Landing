"use client"

import { ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Is TallyGO free?",
    answer:
      "Yes, the core features of TallyGO are free to use. I may introduce optional premium themes or advanced export features later, but the core tracking will always remain accessible.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. You can start using TallyGO instantly in Guest Mode. Data is stored on your phone. You only need an account if you want to sync between devices.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. If you create an account, your data is encrypted and stored securely via Supabase. I do not sell your data to third parties.",
  },
  {
    question: "What happens to my data in Guest Mode?",
    answer:
      "In Guest Mode, your data is stored locally on your device and automatically cleaned up after 30 days. If you want permanent storage and multi-device access, create an account with Sync Mode.",
  },
]

export function FaqSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 bg-[#F9F6F0] border-t border-[#F3EFE7]">
      <div ref={ref} className="max-w-2xl mx-auto">
        <h2
          className={cn(
            "text-xl sm:text-2xl font-medium text-[#1C1C1C] mb-8 text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          Common Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className={cn(
                "group bg-[#FFFDF8] p-5 rounded-lg border border-[#F3EFE7] cursor-pointer transition-all duration-500 hover:shadow-md",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <summary className="flex justify-between items-center font-medium text-[#1C1C1C] list-none">
                {faq.question}
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <p className="text-[#5C5C5C] mt-3 text-sm leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
