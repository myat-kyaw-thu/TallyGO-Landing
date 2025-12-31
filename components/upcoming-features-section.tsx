"use client"

import { Upload, Moon, User, Share2, Tag, DollarSign } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const upcomingFeatures = [
  {
    icon: Upload,
    title: "Guest Data Migration",
    description: "Seamlessly upgrade from Guest to Sync Mode without losing your data",
    priority: "Critical",
    status: "In Development",
  },
  {
    icon: Moon,
    title: "Light/Dark Mode",
    description: "Choose your preferred theme for comfortable viewing anytime",
    priority: "High",
    status: "Coming Soon",
  },
  {
    icon: User,
    title: "User Profile",
    description: "Personalize your experience with profile pictures, display names, and more",
    priority: "Medium",
    status: "Planned",
  },
  {
    icon: Share2,
    title: "Share Goals",
    description: "Share your progress and achievements with friends for social accountability",
    priority: "High",
    status: "Planned",
  },
  {
    icon: Tag,
    title: "Expense Categories",
    description: "Organize expenses with custom categories and get detailed breakdowns",
    priority: "High",
    status: "Planned",
  },
  {
    icon: DollarSign,
    title: "Budget Limits & Alerts",
    description: "Set spending limits and get notified when approaching your budget",
    priority: "Medium",
    status: "Planned",
  },
]

const priorityColors = {
  Critical: "bg-red-100 text-red-700 border-red-200",
  High: "bg-orange-100 text-orange-700 border-orange-200",
  Medium: "bg-blue-100 text-blue-700 border-blue-200",
}

export function UpcomingFeaturesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-24 px-6 bg-[#FFFDF8] border-t border-[#F3EFE7]">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-[#1C1C1C] tracking-tight mb-4">
            What's Coming Next
          </h2>
          <p className="text-[#5C5C5C] max-w-2xl mx-auto">
            I'm actively working on these features based on user feedback. Your input shapes TallyGO's future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={cn(
                  "p-6 rounded-2xl border border-[#F3EFE7] bg-[#F9F6F0] hover:shadow-lg transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#222222] flex items-center justify-center text-[#FFFDF8]">
                    <Icon size={24} />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium px-2 py-1 rounded border",
                      priorityColors[feature.priority as keyof typeof priorityColors],
                    )}
                  >
                    {feature.priority}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-[#1C1C1C] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#5C5C5C] mb-4 leading-relaxed">{feature.description}</p>
                <span className="text-xs text-[#5C5C5C] bg-[#E5E5E5] px-2 py-1 rounded">{feature.status}</span>
              </div>
            )
          })}
        </div>

        <div
          className={cn(
            "mt-12 text-center transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-sm text-[#5C5C5C] mb-4">Have a feature request?</p>
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#222222] text-[#FFFDF8] rounded-xl font-medium hover:bg-[#3A3A3A] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Share Your Ideas
          </a>
        </div>
      </div>
    </section>
  )
}
