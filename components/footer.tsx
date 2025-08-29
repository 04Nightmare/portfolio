import { Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"
import Github from "./assets/SVG/github"
import LinkedIn from "./assets/SVG/linkdin"
import Instagram from "./assets/SVG/insta"



export default function Footer() {
    return(
        <footer className="py-8 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© Portfolio. Built with Next.js by Samannyo Pal. 💙</p>
          <div className="flex gap-4">
            <Button asChild variant="ghost" size="lg">
            <a href="https://github.com/SamannyoPal" target="_blank" rel="noopener noreferrer">
                <Github />
            </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://www.linkedin.com/in/samannyo-pal-92258827a" target="_blank" rel="noopener noreferrer">
                <LinkedIn/>
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://www.instagram.com/samannyo_pal" target="_blank" rel="noopener noreferrer">
                <Instagram/>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    )
}

