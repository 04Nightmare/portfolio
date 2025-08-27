import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Github from "./assets/SVG/github";
import LinkedIn from "./assets/SVG/linkdin";


export default function AboutMe() {
    return(
        <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in web development, I'm passionate about creating digital solutions that
                make a difference. I believe in the power of clean code, thoughtful design, and continuous learning.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
                sharing knowledge with the developer community.
              </p>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="sm">
                    <a href="https://github.com/SamannyoPal" target="_blank" rel="noopener noreferrer">
                        <Github />
                        GitHub
                    </a>
                </Button>
                <Button variant="outline" size="sm">
                  <LinkedIn />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Design Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe Creative Suite", "Sketch", "Framer"].map((tool) => (
                    <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}