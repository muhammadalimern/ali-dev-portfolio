import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "muhammadalimehboob54@gmail.com",
    href: "mailto:muhammadalimehboob54@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/muhammadaliwebs",
    href: "https://github.com/muhammadaliwebs",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-ali-mern",
    href: "www.linkedin.com/in/muhammad-ali-mern",
  },
];

const SERVICE_ID = "service_jys0bhw";
const TEMPLATE_ID = "template_ttgn6ck";
const PUBLIC_KEY = "_689KlebpTjhDuWdX";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY,
      )
      .then(() => {
        setSent(true);
        setSending(false);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError(true);
        setSending(false);
        setTimeout(() => setError(false), 4000);
      });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm text-primary font-medium tracking-widest uppercase">
            Contact
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Let's <span className="text-gradient">work together</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-card border border-border hover:-translate-y-0.5 hover:shadow-elegant transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {c.label}
                  </p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card border border-border rounded-2xl p-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {sent ? (
                "Message sent ✓"
              ) : error ? (
                "Failed, try again"
              ) : sending ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
