
import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { Code, Server, Database, Terminal, Wrench, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Define skill categories
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="h-6 w-6" />,
    skills: ["React Native", "React JS", "JavaScript", "TypeScript", "Redux", "HTML/CSS", "Responsive Design"]
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "NestJS", "Express.js", "REST API", "GraphQL", "Microservices", "JWT Authentication"]
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "TypeORM", "Mongoose", "Redis"]
  },
  {
    title: "Testing & Performance",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["JEST", "Playwright", "JMeter", "Cypress", "React Testing Library", "Performance Optimization"]
  },
  {
    title: "Tools & Version Control",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Git", "GitHub", "JIRA", "Postman", "Docker", "CI/CD", "Webpack", "Babel"]
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-6 w-6" />,
    skills: ["Effective Communication", "Problem-solving", "Adaptability", "Time Management", "Teamwork", "Leadership", "Critical Thinking"]
  }
];

// Define tech items with descriptions
const techItems = [
  { name: "React Native", description: "Expertise in building cross-platform mobile applications with React Native, implementing complex UI components and integrating with native modules." },
  { name: "React JS", description: "Experience developing responsive and interactive web applications using React JS and modern frontend practices." },
  { name: "Node.js", description: "Knowledge of building scalable server-side applications with Node.js, implementing event-driven architecture." },
  { name: "NestJS", description: "Proficiency in developing enterprise-grade backend applications using NestJS framework with TypeScript." },
  { name: "MySQL", description: "Experience with designing and optimizing relational database schemas, writing complex queries, and ensuring data integrity." },
  { name: "PostgreSQL", description: "Expertise in PostgreSQL database design, performance tuning, and implementing advanced features like JSON storage." },
  { name: "SQLite", description: "Knowledge of implementing lightweight database solutions for mobile applications with offline capabilities." },
  { name: "TypeScript", description: "Strong typing skills with TypeScript to build maintainable and scalable applications with reduced runtime errors." },
  { name: "JavaScript", description: "Deep understanding of JavaScript concepts, ES6+ features, asynchronous programming, and functional programming patterns." },
  { name: "JEST", description: "Experience writing unit and integration tests with Jest for both frontend and backend applications." },
  { name: "Playwright", description: "Expertise in end-to-end testing using Playwright for automated browser testing across multiple browsers." },
  { name: "JMeter", description: "Knowledge of performance testing and load testing applications to identify bottlenecks and optimize performance." }
];

// Skill filtering type
type SkillFilter = "all" | "frontend" | "backend" | "database" | "testing" | "tools" | "soft";

const Skills = () => {
  const [filter, setFilter] = useState<SkillFilter>("all");
  
  // Get filtered categories
  const getFilteredCategories = () => {
    if (filter === "all") return skillCategories;
    
    const filterMap: Record<SkillFilter, string[]> = {
      "all": [],
      "frontend": ["Frontend Development"],
      "backend": ["Backend Development"],
      "database": ["Databases"],
      "testing": ["Testing & Performance"],
      "tools": ["Tools & Version Control"],
      "soft": ["Soft Skills"]
    };
    
    return skillCategories.filter(category => 
      filterMap[filter].includes(category.title)
    );
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30 dark:bg-black/20">
      <div className="container mx-auto">
        <div className="animate-on-scroll">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-2">
              <div className="h-[1px] w-12 bg-primary mr-4"></div>
              <span className="text-primary font-medium">Expertise</span>
              <div className="h-[1px] w-12 bg-primary ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technical skills acquired through years of experience in developing innovative solutions.
            </p>
          </div>
          
          {/* Skill filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              size="sm"
              className="transition-all"
            >
              All Skills
            </Button>
            <Button 
              variant={filter === "frontend" ? "default" : "outline"} 
              onClick={() => setFilter("frontend")}
              size="sm"
              className="transition-all"
            >
              Frontend
            </Button>
            <Button 
              variant={filter === "backend" ? "default" : "outline"} 
              onClick={() => setFilter("backend")}
              size="sm"
              className="transition-all"
            >
              Backend
            </Button>
            <Button 
              variant={filter === "database" ? "default" : "outline"} 
              onClick={() => setFilter("database")}
              size="sm"
              className="transition-all"
            >
              Databases
            </Button>
            <Button 
              variant={filter === "testing" ? "default" : "outline"} 
              onClick={() => setFilter("testing")}
              size="sm"
              className="transition-all"
            >
              Testing
            </Button>
            <Button 
              variant={filter === "tools" ? "default" : "outline"} 
              onClick={() => setFilter("tools")}
              size="sm"
              className="transition-all"
            >
              Tools
            </Button>
            <Button 
              variant={filter === "soft" ? "default" : "outline"} 
              onClick={() => setFilter("soft")}
              size="sm"
              className="transition-all"
            >
              Soft Skills
            </Button>
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredCategories().map((category, index) => (
              <SkillCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                className={`transition-all duration-500`}
              />
            ))}
          </div>
          
          {/* Tech detail section */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-center mb-8">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techItems.map((tech) => (
                <HoverCard key={tech.name}>
                  <HoverCardTrigger asChild>
                    <div className="glass-card px-4 py-2 rounded-full cursor-pointer transition-all hover:shadow-md hover:-translate-y-1">
                      {tech.name}
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-4">
                    <h4 className="font-medium mb-2">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
