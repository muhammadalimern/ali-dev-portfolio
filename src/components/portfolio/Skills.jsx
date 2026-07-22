import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "React.js", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 72 },
  { name: "MongoDB", level: 70 },
  { name: "n8n Automation", level: 88 },
  { name: "AI Chatbots", level: 85 },
  { name: "WhatsApp Chatbots", level: 85 },
  { name: "Workflow Automation", level: 86 },
  { name: "Git", level: 85 },
  { name: "GitHub", level: 88 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm text-primary font-medium tracking-widest uppercase">
            Skills
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            My <span className="text-gradient">tech stack</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-sm text-muted-foreground">
                  {s.level}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.1 + i * 0.05,
                    ease: "easeOut",
                  }}
                  className="h-full bg-gradient-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
