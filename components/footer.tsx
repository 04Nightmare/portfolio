import { Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"
import Github from "./assets/SVG/github"
import LinkedIn from "./assets/SVG/linkdin"



export default function Footer() {
    return(
        <footer className="py-8 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2024 Portfolio. Built with Next.js and Tailwind CSS.</p>
          <div className="flex gap-4">
            <Button asChild variant="ghost" size="lg">
            <a href="https://github.com/SamannyoPal" target="_blank" rel="noopener noreferrer">
                <Github />
            </a>
            </Button>
            <Button variant="ghost" size="lg">
              <LinkedIn/>
            </Button>
            <Button variant="ghost" size="lg">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    )
}

