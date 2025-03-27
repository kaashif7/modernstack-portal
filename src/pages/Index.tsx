
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

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
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary/30 rounded-full"></div>
          </div>
          <p className="mt-4 text-muted-foreground">Loading portfolio...</p>
          <p className="text-sm text-muted-foreground/70 mt-2">Dhonitaker • Full-Stack Developer</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-background/95">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <Skills />
        <Projects />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
