"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Mail } from "lucide-react"

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", form)
    // EmailJS, Nodemailer, or API route
  }

  return (
    <Dialog>
            <DialogTrigger asChild>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
            </DialogTrigger>

    <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Let's Work Together</DialogTitle>
          <DialogDescription>
            Have a project in mind or simply want to connect? Fill out the form and I'll get back to you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            {/* <Label htmlFor="name">Name</Label> */}
            <Input id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          </div>

          <div>
            {/* <Label htmlFor="email">Email</Label> */}
            <Input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>

          <div>
            {/* <Label htmlFor="mobile">Mobile Number</Label> */}
            <Input id="mobile" name="mobile" type="tel" placeholder="+xx mobile no." value={form.mobile} onChange={handleChange} />
          </div>

          <div>
            {/* <Label htmlFor="subject">Subject</Label> */}
            <Input id="subject" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
          </div>

          <div>
            {/* <Label htmlFor="message">Message</Label> */}
            <Textarea id="message" name="message" placeholder="Type your message here..." value={form.message} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Send Message
          </Button>
        </form>
      </DialogContent>
      </Dialog>
  )
}
