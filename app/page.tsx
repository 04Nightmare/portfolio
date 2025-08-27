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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <AboutMe/>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of recent work that showcases my skills in full-stack development, UI/UX design, and
              problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Project1/>

            {/* Project 2 */}
            <Project2/>

            {/* Project 3 */}
            <Project3/>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
