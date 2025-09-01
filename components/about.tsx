"use client"
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Github from "./assets/SVG/github";
import LinkedIn from "./assets/SVG/linkdin";
import Instagram from "./assets/SVG/insta";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Next from "./assets/SVG/next";
import AWS from "./assets/SVG/aws";
import Docker from "./assets/SVG/docker";
import { TbBrandMysql, TbBrandSocketIo } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiHiveBlockchain, SiTypescript } from 'react-icons/si';
import { FaRust, FaJava, FaPython } from 'react-icons/fa';
import { BsFiletypeSql } from 'react-icons/bs';
import CPP from "./assets/SVG/cpp";





export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const technology = [
    {name: "Next.js", icon: <Next/>},
    {name: "Axum", icon: <FaRust/>},
    {name: "MySQL", icon:<TbBrandMysql/>},
    {name: "PostgreSQL", icon: <BiLogoPostgresql/>},
    {name: "WebSockets", icon: <TbBrandSocketIo/>},
    {name: "Blockchain", icon: <SiHiveBlockchain/>},
    {name: "Github", icon: <Github/>},
    {name: "AWS", icon: <AWS/>},
    {name: "Docker", icon: <Docker/>},
  ]

  const language = [
    {name: "C", icon: <CPP/>},
    {name: "C++", icon: <CPP/>},
    {name: "Rust", icon: <FaRust/>},
    {name: "Java", icon: <FaJava/>},
    {name: "SQL", icon: <BsFiletypeSql/>},
    {name: "Js/Ts", icon: <SiTypescript/>},
    {name: "Python", icon: <FaPython/>},
  ]
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
              <h2 className="text-4xl font-bold mb-5 underline">Sam.details</h2>
              <div className="text-muted-foreground mb-3 leading-relaxed">
                <span className="text-lg"> Location:</span>
                <div className="px-4">
                  Kolkata, West Bengal..
                </div>
              </div>
              <div className="text-muted-foreground mb-3 leading-relaxed">
                <span className="text-lg"> Interests:</span>
                <div className="px-4">
                  Coding, PC building, Piano, Swimming, Cube Solving....
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
                    <a href="https://github.com/04Nightmare" target="_blank" rel="noopener noreferrer">
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
                <h3 className="font-semibold mb-3 text-xl">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {technology.map(({name, icon}) => (
                    <Badge key={name} variant="secondary" className="dark:hover:bg-gray-600 hover:bg-gray-200">
                        {icon}{name}
                      </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-xl">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {language.map(({name, icon}) => (
                    <Badge key={name} variant="secondary" className="dark:hover:bg-gray-600 hover:bg-gray-200">
                        {icon}{name}
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