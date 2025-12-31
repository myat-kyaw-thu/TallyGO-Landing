"use client"

import Link from "next/link"
import { Home, Compass, Layers, Download } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track active section for mobile nav highlighting
  useEffect(() => {
    const sections = ["philosophy", "features", "stack", "download"]
    const handleSectionScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            return
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("home")
      }
    }
    window.addEventListener("scroll", handleSectionScroll)
    return () => window.removeEventListener("scroll", handleSectionScroll)
  }, [])

  const mobileNavItems = [
    { href: "#", icon: Home, label: "Home", id: "home" },
    { href: "#philosophy", icon: Compass, label: "Philosophy", id: "philosophy" },
    { href: "#features", icon: Layers, label: "Features", id: "features" },
    { href: "#download", icon: Download, label: "Get App", id: "download" },
  ]

  return (
    <>
      <header
        className={cn(
          "hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-[#FFFDF8]/90 backdrop-blur-md shadow-sm" : "bg-transparent",
        )}
      >
        <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
          <Link href="#" className="flex items-center gap-2 text-xl font-medium tracking-tight text-[#1C1C1C]">
            <img src="/app-img/logo.png" alt="TallyGO Logo" className="h-8 w-8" />
            <span>TallyGO</span>
          </Link>

          <div className="flex gap-8 text-sm font-normal text-[#5C5C5C]">
            <Link href="#philosophy" className="hover:text-[#1C1C1C] transition-colors duration-300">
              Philosophy
            </Link>
            <Link href="#features" className="hover:text-[#1C1C1C] transition-colors duration-300">
              Features
            </Link>
            <Link href="#stack" className="hover:text-[#1C1C1C] transition-colors duration-300">
              Technology
            </Link>
          </div>

          <Link
            href="#download"
            className="text-sm font-medium bg-[#222222] text-[#FFFDF8] px-5 py-2.5 rounded-lg hover:bg-[#3B3B3B] transition-colors duration-300"
          >
            Get Started
          </Link>
        </nav>
      </header>

      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#F3EFE7]">
        <div className="flex justify-center items-center py-3 px-4">
          <Link href="#" className="flex items-center gap-2 text-lg font-medium tracking-tight text-[#1C1C1C]">
            <img src="/app-img/logo.png" alt="TallyGO Logo" className="h-7 w-7" />
            <span>TallyGO</span>
          </Link>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FFFDF8]/95 backdrop-blur-md border-t border-[#F3EFE7] safe-area-inset-bottom">
        <div className="flex justify-around items-center py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
          {mobileNavItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300",
                activeSection === item.id ? "text-[#1C1C1C]" : "text-[#8A8A8A]",
              )}
            >
              <item.icon
                size={22}
                strokeWidth={activeSection === item.id ? 2.5 : 1.5}
                className="transition-all duration-300"
              />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Spacer for fixed desktop header */}
      <div className="hidden md:block h-16" />

      {/* Spacer for fixed mobile header */}
      <div className="md:hidden h-12" />
    </>
  )
}
