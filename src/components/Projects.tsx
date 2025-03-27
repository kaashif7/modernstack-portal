
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Monitor, Server, RefreshCcw, Filter } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
    githubLink: "#",
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Insurance+Platform+Dashboard",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Quote+Comparison+View"
    ]
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
    githubLink: "#",
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Food+Delivery+Admin+Panel",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Restaurant+Dashboard"
    ]
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
    githubLink: "#",
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Executive+Dashboard",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Application+Overview"
    ]
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
    githubLink: "#",
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Vendor+Map+View",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Customer+Order+Interface"
    ]
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
    githubLink: "#",
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Asset+Tracking+Interface",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Maintenance+Form+with+Signature"
    ]
  }
];

// Filter type definition
type FilterCategory = "all" | "frontend" | "backend" | "fullstack";
type TechFilter = string | null;

const Projects = () => {
  const [categoryFilter, setCategoryFilter] = useState<FilterCategory>("all");
  const [techFilter, setTechFilter] = useState<TechFilter>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get unique tech stacks for filter
  const uniqueTechStacks = Array.from(
    new Set(
      projects.flatMap(project => project.tech.map(tech => tech.name))
    )
  ).sort();

  // Filter projects based on selected category and tech
  const filteredProjects = projects.filter(project => {
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;
    const matchesTech = !techFilter || project.tech.some(tech => tech.name === techFilter);
    return matchesCategory && matchesTech;
  });

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

        {/* Filter section with toggle */}
        <div className="mb-8">
          <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="w-full">
            <div className="flex justify-center mb-6">
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  {isFilterOpen ? "Hide Filters" : "Show Filters"}
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="space-y-4">
              {/* Category filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <Button 
                  variant={categoryFilter === "all" ? "default" : "outline"} 
                  onClick={() => setCategoryFilter("all")}
                  className="gap-2 transition-all"
                >
                  <BadgeCheck className="h-4 w-4" />
                  All Projects
                </Button>
                <Button 
                  variant={categoryFilter === "frontend" ? "default" : "outline"} 
                  onClick={() => setCategoryFilter("frontend")}
                  className="gap-2 transition-all"
                >
                  <Monitor className="h-4 w-4" />
                  Frontend/Mobile
                </Button>
                <Button 
                  variant={categoryFilter === "backend" ? "default" : "outline"} 
                  onClick={() => setCategoryFilter("backend")}
                  className="gap-2 transition-all"
                >
                  <Server className="h-4 w-4" />
                  Backend
                </Button>
              </div>

              {/* Tech stack filters */}
              <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                <Button
                  variant={!techFilter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTechFilter(null)}
                  className="text-xs mb-2"
                >
                  All Tech
                </Button>
                {uniqueTechStacks.map((tech) => (
                  <Button
                    key={tech}
                    variant={techFilter === tech ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTechFilter(tech)}
                    className="text-xs mb-2"
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
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
                screenshots={project.screenshots}
                delay={index * 100}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <RefreshCcw className="h-10 w-10 mx-auto mb-4 text-muted-foreground animate-spin" />
              <p className="text-muted-foreground">No projects match the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
