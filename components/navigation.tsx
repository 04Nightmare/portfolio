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
        <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-sm border-b z-50">
                <div className="max-w-6xl mx-auto px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-xl" onClick={() => {document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}}>
                            Portfolio
                    </div>
                    {/* Desktop Links */}
                    <div className="flex items-center gap-4">
                      <div className="hidden md:flex items-center gap-8">
                        <div className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => {document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}}>
                          About
                        </div>
                        <div className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => {document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}}>
                          Projects
                        </div>
                        <div className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => {document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}}>
                          Contact
                        </div>
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
                            <div
                              className="text-lg text-muted-foreground hover:text-foreground transition-colors flex justify-center"
                              onClick={()=> {setOpen(false); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}}
                            >
                              About
                            </div>
                            <div
                              className="text-lg text-muted-foreground hover:text-foreground transition-colors flex justify-center"
                              onClick={()=> {setOpen(false); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}}
                            >
                              Projects
                            </div>
                            <div
                              className="text-lg text-muted-foreground hover:text-foreground transition-colors flex justify-center"
                              onClick={()=> {setOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}}
                            >
                              Contact
                            </div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </div>
              </nav>
    );
}