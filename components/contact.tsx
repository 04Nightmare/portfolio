import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ContactForm } from "./ui/contactform";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FormData{
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" })
    return(
    <section id="contact" className="py-20 px-6 bg-muted/30" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, I'll try my best to get back to you!
          </p>
          <ContactForm/>
          </motion.div>
        </div>
      </section>
    )
}