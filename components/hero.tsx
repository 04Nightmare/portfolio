import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { ProfilePicture } from "./ui/logo"

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-6" id="hero">
        <div className="max-w-6xl mx-auto flex flex-wrap">
            <ProfilePicture src="/pictures/sampic.jpg" size={180}/>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight pl-10">
              Samannyo
              <span className="block text-orange-500">Pal . . .</span>
            </h1>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap">
          <div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "If debugging is the process of removing bugs, then programming is the process of putting them in."
            </p>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">--by me</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a
                href="https://drive.google.com/file/d/1QajRGE_NJQI9fwghIgwEATZ7710t13J_/view?usp=sharing"
                target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-1.5 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Resume.pdf
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}