import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
                <div className="max-w-6xl mx-auto px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-xl">
                        <a href="#hero">
                            Portfolio
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="hidden md:flex items-center gap-8">
                        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                          About
                        </a>
                        <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                          Projects
                        </a>
                        <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                          Contact
                        </a>
                      </div>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </nav>
    )
}