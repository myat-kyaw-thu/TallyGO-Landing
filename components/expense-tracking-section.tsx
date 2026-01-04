"use client"

import { Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const features = [
  { title: "Simple Entry:", description: "Amount, description, and date. Quick and straightforward." },
  { title: "Master Totals:", description: "Running daily totals always visible." },
  { title: "Zero Stress:", description: "Edit or delete entries anytime." },
]

export function ExpenseTrackingSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="features" className="py-20 md:py-24 px-6 bg-[#FFFDF8] border-t border-[#F3EFE7]">
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Expense Tracking Screenshot */}
        <div
          className={cn(
            "order-2 md:order-1 relative transition-all duration-700 max-w-[280px] sm:max-w-[300px] mx-auto",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
          )}
        >
          <img
            src="/app-img/expnces.jpeg"
            alt="Expense Tracking Interface"
            className="w-full h-auto rounded-[2.5rem] shadow-xl"
            style={{
              maxHeight: "500px",
              objectFit: "contain",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          />
        </div>

        {/* Content */}
        <div
          className={cn(
            "order-1 md:order-2 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
          )}
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-[#1C1C1C] tracking-tight mb-4">
            Frictionless Expense Tracking
          </h2>
          <p className="text-[#5C5C5C] text-base md:text-lg font-light mb-8">
            Capture spending quickly and easily. No categories to manage, no complex budgets to set up unless you want to.
          </p>
          <ul className="space-y-4 text-[#3A3A3A]">
            {features.map((feature, index) => (
              <li key={feature.title} className="flex items-start gap-3" style={{ animationDelay: `${index * 100}ms` }}>
                <Check className="mt-1 text-[#222222] shrink-0" size={18} />
                <span>
                  <strong className="font-medium text-[#1C1C1C]">{feature.title}</strong> {feature.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
