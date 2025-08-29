"use client"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
                <div className="max-w-6xl mx-auto px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-xl">
                        <a href="#hero">
                            Portfolio
                        </a>
                    </div>
                    {/* Desktop Links */}
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
                      <ThemeToggle />
                      </div>
                    </div>

                    {/* Mobile Links */}
                    <div className="md:hidden flex items-center ">
                       <ThemeToggle />
                      <Sheet open={open} onOpenChange={setOpen}>
                        <SheetHeader className="px-0 py-0">
                          <SheetTitle>
                            <SheetTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <Menu className="h-6 w-6" />
                              </Button>
                            </SheetTrigger>
                        </SheetTitle>
                      </SheetHeader>
                        
                        <SheetContent side="right" className="w-64">
                          <div className="flex flex-col space-y-6 mt-10">
                            <a
                              href="#about"
                              className="text-lg text-muted-foreground hover:text-foreground transition-colors flex justify-center"
                              onClick={()=> setOpen(false)}
                            >
                              About
                            </a>
                            <a
                              href="#projects"
                              className="text-lg text-muted-foreground hover:text-foreground transition-colors flex justify-center"
                              onClick={()=> setOpen(false)}
                            >
                              Projects
                            </a>
                            <a
                              href="#contact"
                              className="text-lg text-muted-foreground hover:text-foreground transition-colors flex justify-center"
                              onClick={()=> setOpen(false)}
                            >
                              Contact
                            </a>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </div>
              </nav>
    );
}