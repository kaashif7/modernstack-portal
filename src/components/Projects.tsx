
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Asset Management",
      description: "A comprehensive system for managing biomedical equipment data, including breakdown and preventive maintenance records.",
      role: "Mobile Application Developer",
      tech: [
        { name: "React Native" },
        { name: "SQLite" },
        { name: "QR Scanner" },
        { name: "MySQL" },
        { name: "REST API" },
        { name: "JWT" }
      ]
    },
    {
      title: "Street Vendor Management",
      description: "An innovative platform connecting street vendors with customers, bridging the gap between local products and consumers.",
      role: "Mobile Application Developer",
      tech: [
        { name: "React Native" },
        { name: "TypeScript" },
        { name: "Google Maps" },
        { name: "Firebase" },
        { name: "Notifications" },
        { name: "OpenAPI" }
      ]
    },
    {
      title: "Applications Management System",
      description: "An application enabling senior executives to oversee and manage multiple applications efficiently.",
      role: "Mobile Application Developer",
      tech: [
        { name: "React Native" },
        { name: "JavaScript" },
        { name: "SQLite" },
        { name: "QR Scanner" },
        { name: "Microsoft SSO" },
        { name: "REST API" }
      ]
    },
    {
      title: "Food-Based Application",
      description: "An online ordering portal for users and a complete restaurant asset management system for admins.",
      role: "Backend Developer",
      tech: [
        { name: "NestJS" },
        { name: "TypeScript" },
        { name: "JEST" },
        { name: "Docker" },
        { name: "PostgreSQL" },
        { name: "TypeORM" }
      ]
    },
    {
      title: "Insurance Management System",
      description: "An online portal where insurance agents onboard customers as leads, generate quotations from multiple providers, and enable users to compare and choose the best insurance plan.",
      role: "Backend Developer",
      tech: [
        { name: "NestJS" },
        { name: "TypeScript" },
        { name: "PostgreSQL" },
        { name: "TypeORM" },
        { name: "Playwright" },
        { name: "REST API" }
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30 dark:bg-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-2">
            <div className="h-[1px] w-12 bg-primary mr-4"></div>
            <span className="text-primary font-medium">Portfolio</span>
            <div className="h-[1px] w-12 bg-primary ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Showcase</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing a diverse range of projects that demonstrate my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              role={project.role}
              tech={project.tech}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
