import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ContactForm } from "./ui/contactform";

export default function Contact() {
    return(
    <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, I'll try my best to get back to you!
          </p>
          <ContactForm/>
        </div>
      </section>
    )
}