"use client"

import { Code2, FileType2, Database, Navigation } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const techStack = [
  { icon: Code2, name: "React Native" },
  { icon: FileType2, name: "TypeScript" },
  { icon: Database, name: "Supabase" },
  { icon: Navigation, name: "Expo" },
]

export function TechStackSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="stack" className="py-20 md:py-24 px-6 bg-[#F9F6F0]">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div
          className={cn(
            "flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-[#1C1C1C] tracking-tight">
            Built on Modern Foundations
          </h2>
          <p className="text-[#5C5C5C]">Performance, stability, and longevity.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={cn(
                "bg-[#FFFDF8] p-4 border border-[#F3EFE7] rounded-lg text-sm font-medium text-[#3A3A3A] flex items-center gap-2 hover:shadow-md transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <tech.icon size={18} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
