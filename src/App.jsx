import Navbar from "@/components/portfolio/Navbar.jsx";
import Hero from "@/components/portfolio/Hero.jsx";
import About from "@/components/portfolio/About.jsx";
import Skills from "@/components/portfolio/Skills.jsx";
import Projects from "@/components/portfolio/Projects.jsx";
import Contact from "@/components/portfolio/Contact.jsx";
import Footer from "@/components/portfolio/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
