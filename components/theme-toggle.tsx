"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const htmlElement = document.documentElement
    setIsDark(htmlElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    const htmlElement = document.documentElement
    if (isDark) {
      htmlElement.classList.remove("dark")
      setIsDark(false)
    } else {
      htmlElement.classList.add("dark")
      setIsDark(true)
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-9 h-9 p-0 flex justify-center" aria-label="Toggle theme">
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
