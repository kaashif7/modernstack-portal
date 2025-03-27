
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add("animate-visible");
        }
      });
    };

    // Initial check
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
