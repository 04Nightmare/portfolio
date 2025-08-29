"use client"
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Github from "./assets/SVG/github";
import LinkedIn from "./assets/SVG/linkdin";
import Instagram from "./assets/SVG/insta";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
    return(
        <section id="about" className="py-20 px-6 bg-muted/30" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-30 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-5 underline">Sam.details</h2>
              <div className="text-muted-foreground mb-3 leading-relaxed">
                <span className="text-lg"> Location:</span>
                <div className="px-4">
                  Kolkata, West Bengal..
                </div>
              </div>
              <div className="text-muted-foreground mb-3 leading-relaxed">
                <span className="text-lg"> Interests:</span>
                <div className="px-4">
                  Coding, PC building, Piano, Swimming....
                </div>
              </div>
              <div className="text-muted-foreground mb-6 leading-relaxed">
                <span className="text-lg"> Education: </span>
                <div className="px-4">
                  B.Tech in Computer Science and System Engineering, KIIT University, Bhubaneshwar....
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="sm">
                    <a href="https://github.com/SamannyoPal" target="_blank" rel="noopener noreferrer">
                        <Github />
                        GitHub
                    </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.linkedin.com/in/samannyo-pal-92258827a" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.instagram.com/samannyo_pal" target="_blank" rel="noopener noreferrer">
                    <Instagram/>
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Axum", "MySQL", "PostgreSQL", "WebSockets", "Blockchain", "Github","AWS", "Docker"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["C", "Rust", "Java", "SQL", "js/ts", "Python"].map((tool) => (
                    <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </section>
    )
}