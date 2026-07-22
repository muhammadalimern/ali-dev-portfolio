import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Sparkles,
  Bot,
  Workflow,
  MessageCircle,
} from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Clean Code",
    text: "Readable, scalable, and maintainable architecture using modern best practices.",
  },
  {
    icon: Rocket,
    title: "MERN Focused",
    text: "Currently mastering MongoDB, Express, React, and Node.js to build full-stack apps.",
  },
  {
    icon: Sparkles,
    title: "Design Minded",
    text: "I obsess over the details — spacing, motion, and the small things that delight users.",
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    text: "I design and ship end-to-end automation workflows in n8n that connect APIs, databases, and tools to save real hours.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    text: "I build smart AI chatbots powered by LLMs that handle support, lead gen, and 24/7 conversations for businesses.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chatbots",
    text: "I create WhatsApp chatbots and automations to engage customers, automate replies, and grow sales on autopilot.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase">
            About
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            A bit about <span className="text-gradient">me</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer on a journey to master the MERN stack. I
            love building things for the web — from pixel-perfect landing pages
            to full stack applications that solve real problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gradient-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-elegant transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4">
                <c.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
