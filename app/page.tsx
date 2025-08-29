"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { Project1, Project2, Project3 } from "@/components/projects"
import AboutMe from "@/components/about"
import Hero from "@/components/hero"
import Navbar from "@/components/navigation"
import { useRef } from "react"
import { useInView, motion } from "framer-motion"

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <AboutMe/>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
        >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of recent work that showcases my skills in full-stack development, UI/UX design, and
              problem-solving.
            </p>
          </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid gap-10 md:grid-cols-2 md:m-30">
                {/* Project 1 */}
                <Project1/>

                {/* Project 2 */}
                {/* <Project2/> */}

                {/* Project 3 */}
                <Project3/>
              </div>
            </motion.div>
        </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
