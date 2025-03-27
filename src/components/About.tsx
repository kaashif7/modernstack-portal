
import { Code, Cpu, Github, Server } from "lucide-react";
import { Box, Database, FileJson } from "lucide-react";

const About = () => {
  const tools = [
    { name: "GIT", icon: <Github className="h-5 w-5" /> },
    { name: "JIRA", icon: <Cpu className="h-5 w-5" /> },
    { name: "POSTMAN", icon: <Server className="h-5 w-5" /> },
    { name: "DBeaver", icon: <Database className="h-5 w-5" /> },
    { name: "Docker", icon: <Box className="h-5 w-5" /> },
    { name: "Swagger", icon: <FileJson className="h-5 w-5" /> }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="h-[1px] w-12 bg-primary mr-4"></div>
                <span className="text-primary font-medium">About Me</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Passionate Full-Stack Developer
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am an experienced Full-Stack Developer specializing in mobile and web applications, with a passion for creating efficient, scalable digital solutions.
              </p>
              <p>
                My comprehensive approach spans from conceptualization to deployment, ensuring seamless user experiences across platforms. I'm committed to continuous learning and staying current with emerging technologies.
              </p>
              <p>
                With a strong foundation in both frontend and backend development, I enjoy tackling complex problems and transforming ideas into functional, user-friendly applications.
              </p>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Tools & Version Control</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div 
                  key={tool.name}
                  className="flex flex-col items-center p-4 bg-secondary/50 dark:bg-accent/50 rounded-lg"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                    {tool.icon}
                  </div>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-medium mb-3">Core Strengths</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="text-sm">Building high-performance, scalable applications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="text-sm">Software architecture and development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="text-sm">Strong problem-solving skills</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="text-sm">Clean, maintainable code practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
