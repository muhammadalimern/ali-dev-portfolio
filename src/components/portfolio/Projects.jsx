import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import todo from "@/assets/project-todo.jpg";
import pwd from "@/assets/project-password.jpg";
import amazon from "@/assets/project-amazon.jpg";
import weather from "@/assets/project-weather-app.png";
import spotify from "@/assets/project-spotify-clone.png";
import google from "@/assets/project-google-clone.png";
import signup from "@/assets/project-signup-form.png";
import calculator from "@/assets/project-calculator.png";
import table from "@/assets/project-table-generator.png";
import student from "@/assets/project-student-report-card.png";
import producthub from "@/assets/producthub_crud_portfolio_banner.png";
import bulb from "@/assets/project-bulb-toggle.png";

const projects = [
  {
    title: "MERN Stack Todo App",
    description:
      "A full-stack todo app with jwt authentication, CRUD operations, and a polished UI built on the MERN stack.",
    image: todo,
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demo: "https://mern-todo-app-me.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/mern-todo-app",
  },
  {
    title: "ProductHub CRUD App",
    description:
      "A full-stack CRUD application for managing products, built with React, Node.js, Express, and MongoDB.",
    image: producthub,
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demo: "https://ecommerce-mern123.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/ecommerce-mern",
  },
  {
    title: "Password Generator",
    description:
      "A secure, customizable password generator with strength meter and one-click copy.",
    image: pwd,
    stack: ["React", "Tailwind CSS"],
    demo: "https://password-generator-ma.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/password-generator",
  },
  {
    title: "Amazon Clone",
    description:
      "E-commerce front-end clone featuring product listings, cart, and a smooth checkout flow.",
    image: amazon,
    stack: ["React", "Tailwind CSS"],
    demo: "https://ali2-amazon.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/Amazone-clone",
  },

  {
    title: "Weather App",
    description:
      "A responsive weather application with real-time data and a clean, modern UI.",
    image: weather,
    stack: ["React", "Tailwind CSS", "OpenWeather API"],
    demo: "https://weather-appbyali.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/weather-app",
  },
  {
    title: "Spotify Clone",
    description:
      "A responsive clone of the popular music streaming platform, featuring a sleek UI and real-time playback.",
    image: spotify,
    stack: ["React", "Tailwind CSS", "Spotify API"],
    demo: "https://ali-spotifyclone.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/Spotify-Clone",
  },
  {
    title: "Google Clone",
    description:
      "A pixel-perfect Google homepage clone built with HTML and CSS.",
    image: google,
    stack: ["HTML", "CSS"],
    demo: "https://ali-google.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/Google-Clone",
  },
  {
    title: "Sign In & Sign Up Form",
    description:
      "A clean and responsive authentication form with password suggestions, built with vanilla HTML, CSS, and JavaScript.",
    image: signup,
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://signinandsignupformbym-a.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/Sign-in-and-Sign-up-Form",
  },
  {
    title: "Calculator",
    description:
      "A fully functional calculator with a beautiful teal and pink gradient UI, built with HTML, CSS, and JavaScript.",
    image: calculator,
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://calculatorbym-a.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/Calculator",
  },
  {
    title: "Project Table Generator",
    description:
      "A simple tool to generate responsive project tables with ease.",
    image: table,
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://table-maths.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/table.js",
  },
  {
    title: "Student Report Card",
    description:
      "A simple yet effective student report card generator with customizable fields.",
    image: student,
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://student-report-card1.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/student-report-card",
  },
  {
    title: "Light Switch Simulator",
    description:
      "A simple interactive simulator for practicing light switch operations.",
    image: bulb,
    stack: ["React", "Tailwind CSS"],
    demo: "https://light-switch-simulator.netlify.app/",
    repo: "https://github.com/muhammadaliwebs/light-switch-simulator-/tree/main",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm text-primary font-medium tracking-widest uppercase">
            Projects
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work and learning projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-gradient-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-elegant transition-all"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/50 hover:bg-card text-sm font-medium transition-colors"
                  >
                    <Github size={15} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
