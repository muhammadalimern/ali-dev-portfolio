import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Download } from "lucide-react";

const CV_URL =
  "https://drive.google.com/file/d/1bGNMrSY8tdDUiqVOUurMAthJLs9ZydDq/view?usp=sharing";
import profile from "@/assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 -left-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for freelance
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Muhammad Ali</span>
          </h1>
          <p className="mt-3 text-xl sm:text-2xl text-muted-foreground font-display">
            Full Stack MERN Developer · n8n Automation & AI Chatbot Builder
          </p>
          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            I build fast, scalable web applications with the MERN Stack and
            develop AI-powered automations, chatbots, and WhatsApp solutions
            using n8n to help businesses save time and boost productivity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-all"
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors font-medium"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors font-medium"
            >
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a
              href="https://github.com/muhammadaliwebs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-ali-mern"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadalimehboob54@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-40 blur-2xl" />
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full p-1 bg-gradient-primary shadow-elegant">
              <img
                src={profile}
                alt="Muhammad Ali"
                width={768}
                height={768}
                className="h-full w-full rounded-full object-cover border-4 border-background"
                style={{ objectPosition: "center 5%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
