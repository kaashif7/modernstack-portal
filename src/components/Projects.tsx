
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Monitor, Server, RefreshCcw } from "lucide-react";

// Define the main project data with more detailed information
const projects = [
  {
    title: "Insurance Management System",
    description: "An online portal where insurance agents onboard customers as leads, generate quotations from multiple providers, and allow users to compare and choose the best insurance plan.",
    role: "Backend Developer",
    category: "backend",
    tech: [
      { name: "NestJS" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "TypeORM" },
      { name: "Playwright" },
      { name: "REST API" },
      { name: "JWT Token" },
      { name: "Swagger API" },
      { name: "JIRA" },
      { name: "Git" },
      { name: "Postman" },
      { name: "DBeaver" }
    ],
    detailedDescription: "This insurance management system streamlines the process of generating and comparing insurance quotes from multiple providers. It helps agents efficiently onboard customers and allows users to make informed decisions by comparing various insurance plans.",
    responsibilities: [
      "Developed RESTful APIs for customer onboarding and lead management",
      "Implemented secure authentication using JWT tokens",
      "Created automated testing using Playwright",
      "Designed and optimized PostgreSQL database schemas",
      "Integrated with multiple insurance provider APIs"
    ],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Food-Based Application",
    description: "An online ordering portal for users and a complete restaurant asset management system for admins.",
    role: "Backend Developer",
    category: "backend",
    tech: [
      { name: "NestJS" },
      { name: "TypeScript" },
      { name: "JEST" },
      { name: "Docker" },
      { name: "PostgreSQL" },
      { name: "TypeORM" },
      { name: "REST API" },
      { name: "JWT Token" },
      { name: "JIRA" },
      { name: "NATS" },
      { name: "Git" },
      { name: "Postman" },
      { name: "DBeaver" },
      { name: "Swagger API" }
    ],
    detailedDescription: "This comprehensive food delivery and restaurant management platform serves both customers and restaurant administrators. It features a streamlined ordering process for users and a robust management system for restaurant owners.",
    responsibilities: [
      "Developed the 'Delivery-by-Zone' functionality",
      "Created API endpoints for order processing and restaurant management",
      "Implemented real-time notifications using NATS",
      "Designed containerized deployment using Docker",
      "Implemented comprehensive testing with JEST"
    ],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Applications Management System",
    description: "A concept application designed for senior executives to efficiently oversee and manage 4-5 applications.",
    role: "Mobile Application Developer",
    category: "frontend",
    tech: [
      { name: "React Native" },
      { name: "JavaScript" },
      { name: "SQLite" },
      { name: "QR Scanner" },
      { name: "Git" },
      { name: "Postman" },
      { name: "REST API" },
      { name: "AsyncStorage" },
      { name: "Microsoft Single Sign-On" },
      { name: "JWT Token" }
    ],
    detailedDescription: "This proof-of-concept application provides senior executives with a unified interface to oversee multiple applications. It streamlines workflow and improves efficiency by consolidating access and management functions.",
    responsibilities: [
      "Developed mobile UI/UX for executive dashboard",
      "Implemented Microsoft Single Sign-On for secure authentication",
      "Created offline data storage using SQLite and AsyncStorage",
      "Integrated QR scanning functionality for quick access",
      "Built API integration layer for connecting with multiple systems"
    ],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Street Vendor Management",
    description: "An innovative platform connecting street vendors with customers, bridging the gap between local products and consumers.",
    role: "Mobile Application Developer",
    category: "frontend",
    tech: [
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Google Maps" },
      { name: "Firebase" },
      { name: "File Upload" },
      { name: "Notifications" },
      { name: "OpenAPI YAML" },
      { name: "Git" },
      { name: "Postman" },
      { name: "REST API" },
      { name: "JIRA" },
      { name: "Swagger API" }
    ],
    detailedDescription: "This platform bridges the gap between street vendors and consumers by providing location-based discovery of local products. It empowers small vendors with digital presence and customers with convenient access to local goods.",
    responsibilities: [
      "Implemented location-based vendor discovery using Google Maps",
      "Developed real-time notifications for order updates",
      "Created file upload system for vendor product images",
      "Integrated with Firebase for real-time data synchronization",
      "Built responsive UI for both vendor and customer interfaces"
    ],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Healthcare Asset Management",
    description: "A comprehensive system for managing and accessing biomedical equipment data, including breakdown and preventive maintenance records.",
    role: "Mobile Application Developer",
    category: "frontend",
    tech: [
      { name: "React Native" },
      { name: "SQLite" },
      { name: "QR Scanner" },
      { name: "Offline Data" },
      { name: "AsyncStorage" },
      { name: "Signature Panel" },
      { name: "MySQL" },
      { name: "JMeter" },
      { name: "Manual Testing" },
      { name: "Git" },
      { name: "Postman" },
      { name: "REST API" },
      { name: "JavaScript" },
      { name: "JWT Token" },
      { name: "JIRA" },
      { name: "DBeaver" },
      { name: "File Upload & Download" }
    ],
    detailedDescription: "This healthcare asset management system digitizes the tracking and maintenance of biomedical equipment. It provides comprehensive tools for logging breakdowns, scheduling preventive maintenance, and managing equipment lifecycle.",
    responsibilities: [
      "Developed mobile interface for technicians and healthcare staff",
      "Implemented QR code scanning for quick equipment identification",
      "Created offline data functionality for use in areas with poor connectivity",
      "Built digital signature capture for maintenance verification",
      "Optimized performance for low-end devices commonly used in healthcare settings"
    ],
    demoLink: "#",
    githubLink: "#"
  }
];

// Filter type definition
type FilterCategory = "all" | "frontend" | "backend";

const Projects = () => {
  const [filter, setFilter] = useState<FilterCategory>("all");
  
  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => 
        filter === "frontend" 
          ? project.role.toLowerCase().includes("mobile") 
          : project.role.toLowerCase().includes("backend")
      );

  return (
    <section id="projects" className="section-padding bg-secondary/30 dark:bg-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-10">
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

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            onClick={() => setFilter("all")}
            className="gap-2 transition-all"
          >
            <BadgeCheck className="h-4 w-4" />
            All Projects
          </Button>
          <Button 
            variant={filter === "frontend" ? "default" : "outline"} 
            onClick={() => setFilter("frontend")}
            className="gap-2 transition-all"
          >
            <Monitor className="h-4 w-4" />
            Frontend/Mobile
          </Button>
          <Button 
            variant={filter === "backend" ? "default" : "outline"} 
            onClick={() => setFilter("backend")}
            className="gap-2 transition-all"
          >
            <Server className="h-4 w-4" />
            Backend
          </Button>
        </div>

        {/* Projects grid with animation when filter changes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                role={project.role}
                tech={project.tech}
                category={project.category as "frontend" | "backend" | "fullstack"}
                detailedDescription={project.detailedDescription}
                responsibilities={project.responsibilities}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                delay={index * 100}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <RefreshCcw className="h-10 w-10 mx-auto mb-4 text-muted-foreground animate-spin" />
              <p className="text-muted-foreground">No projects match the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
