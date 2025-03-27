
import { Code, Database, Layout, Server, Wrench } from "lucide-react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-5 w-5" />,
      skills: ["React Native", "React JS", "HTML/CSS", "Redux"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      skills: ["Node.js", "NestJS", "Express", "REST API"],
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["MySQL", "SQLite", "PostgreSQL", "TypeORM"],
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Testing & Performance",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["JEST", "Playwright", "JMeter", "Manual Testing"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in a wide range of technologies for building modern and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              className=""
            />
          ))}
        </div>
        
        <div className="mt-16 glass-card rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {["Effective Communication", "Problem-solving", "Adaptability", "Time Management", "Teamwork"].map((skill) => (
              <div 
                key={skill}
                className="bg-secondary/50 dark:bg-accent/50 rounded-lg px-4 py-3 text-center"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
