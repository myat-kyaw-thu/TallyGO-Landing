import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { PrinciplesSection } from "@/components/principles-section"
import { ExpenseTrackingSection } from "@/components/expense-tracking-section"
import { GoalPlannerSection } from "@/components/goal-planner-section"
import { ConsistencySection } from "@/components/consistency-section"
import { InsightsSection } from "@/components/insights-section"
import { UserModesSection } from "@/components/user-modes-section"
import { OfflineFirstSection } from "@/components/offline-first-section"
import { WhatsNewSection } from "@/components/whats-new-section"
import { DeveloperStorySection } from "@/components/developer-story-section"
import { UpcomingFeaturesSection } from "@/components/upcoming-features-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF8] text-[#3A3A3A] selection:bg-[#F3EFE7] selection:text-[#1C1C1C] pb-20 md:pb-0">
      <Navigation />
      <HeroSection />
      <WhatsNewSection />
      <PhilosophySection />
      <PrinciplesSection />
      <ExpenseTrackingSection />
      <GoalPlannerSection />
      <ConsistencySection />
      <InsightsSection />
      <UserModesSection />
      <OfflineFirstSection />
      <DeveloperStorySection />
      <UpcomingFeaturesSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
