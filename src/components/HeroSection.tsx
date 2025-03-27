
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-4xl">
          <div className="flex items-center mb-6">
            <div className="h-[1px] w-12 bg-primary mr-4"></div>
            <span className="text-primary font-medium">Full-Stack Developer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Crafting digital experiences with code and creativity
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Passionate about building high-performance, scalable applications with expertise in frontend and backend technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:bg-secondary/70 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
