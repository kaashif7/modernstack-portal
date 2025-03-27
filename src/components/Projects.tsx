
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Monitor, Server, RefreshCcw, Filter, Code, Database, Briefcase, FolderGit2 } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Define the main project data with more detailed information
const professionalProjects = [
  {
    title: "Insurance Management System",
    description: "Enterprise platform for insurance agents to manage leads, generate and compare quotations, and onboard customers.",
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
    detailedDescription: "A secure insurance management platform designed to streamline the process of lead management and quote generation. The system allows insurance agents to efficiently onboard customers and provide competitive quotes from multiple providers.",
    responsibilities: [
      "Developed RESTful APIs for user authentication and management",
      "Implemented secure data handling practices",
      "Created automated testing workflows using Playwright",
      "Designed and optimized database schemas for performance",
      "Implemented robust error handling and logging"
    ],
    demoLink: null, // NDA compliant - no demo link
    githubLink: null, // NDA compliant - no GitHub link
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Conceptual+Dashboard+Design",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Abstract+Quote+Comparison+UI"
    ]
  },
  {
    title: "Food-Based Application",
    description: "Online ordering system with restaurant asset management for admins.",
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
    detailedDescription: "A comprehensive food ordering and restaurant management platform that serves both customers and restaurant administrators. The system enables streamlined ordering process for users and provides robust tools for restaurant owners.",
    responsibilities: [
      "Architected the 'Delivery-by-Zone' functionality",
      "Developed API endpoints for order processing",
      "Implemented event-driven architecture using NATS",
      "Created containerized deployment using Docker",
      "Designed and implemented comprehensive test suites"
    ],
    demoLink: null, // NDA compliant - no demo link
    githubLink: null, // NDA compliant - no GitHub link
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Abstract+Admin+UI",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Conceptual+Dashboard"
    ]
  },
  {
    title: "Applications Management System",
    description: "Internal tool to help executives oversee and manage multiple applications.",
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
    detailedDescription: "A proof-of-concept mobile application that provides senior executives with a unified interface to oversee multiple applications. The tool streamlines workflow and improves efficiency through intuitive navigation and data visualization.",
    responsibilities: [
      "Developed the mobile interface with React Native",
      "Implemented Microsoft Single Sign-On for secure authentication",
      "Built local data storage using SQLite and AsyncStorage",
      "Integrated QR scanning functionality for quick access",
      "Created API integration layer to connect with enterprise systems"
    ],
    demoLink: null, // NDA compliant - no demo link
    githubLink: null, // NDA compliant - no GitHub link
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Conceptual+Mobile+UI",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Abstract+Dashboard+Design"
    ]
  },
  {
    title: "Street Vendor Management",
    description: "Connecting local street vendors with consumers through an online marketplace.",
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
    detailedDescription: "A marketplace platform that connects street vendors with customers looking for local products. The application provides location-based discovery, real-time notifications, and a streamlined ordering process.",
    responsibilities: [
      "Implemented location-based vendor discovery using Google Maps",
      "Developed real-time notifications for order updates",
      "Created file upload system for product images",
      "Integrated with Firebase for real-time data synchronization",
      "Built responsive UI for both vendor and customer interfaces"
    ],
    demoLink: null, // NDA compliant - no demo link
    githubLink: null, // NDA compliant - no GitHub link
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Conceptual+Map+View",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Abstract+Vendor+Interface"
    ]
  },
  {
    title: "Healthcare Asset Management",
    description: "Biomedical equipment tracking system with maintenance logs.",
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
    detailedDescription: "A healthcare asset management system that digitizes the tracking and maintenance of biomedical equipment. The application provides tools for logging breakdowns, scheduling preventive maintenance, and managing equipment lifecycle.",
    responsibilities: [
      "Developed mobile interface for technicians and healthcare staff",
      "Implemented QR code scanning for equipment identification",
      "Created offline data functionality for use in areas with poor connectivity",
      "Built digital signature capture for maintenance verification",
      "Optimized performance for various device types and network conditions"
    ],
    demoLink: null, // NDA compliant - no demo link
    githubLink: null, // NDA compliant - no GitHub link
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Conceptual+Asset+Tracking+UI",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Abstract+Maintenance+Form"
    ]
  }
];

// Define personal projects (GitHub showcase)
const personalProjects = [
  {
    title: "IoT Dashboard for Tire Manufacturing",
    description: "Real-time monitoring dashboard for IoT sensors in a tire manufacturing process (in progress).",
    role: "Full-Stack Developer",
    category: "fullstack",
    tech: [
      { name: "React Native" },
      { name: "NestJS" },
      { name: "PostgreSQL" },
      { name: "WebSockets" },
      { name: "TypeScript" },
      { name: "Docker" },
      { name: "Chart.js" },
      { name: "Redis" }
    ],
    detailedDescription: "A comprehensive IoT dashboard that provides real-time monitoring of sensors deployed throughout a tire manufacturing process. The dashboard visualizes critical metrics, sends alerts for anomalies, and provides historical data analysis.",
    responsibilities: [
      "Designing and implementing real-time data visualization",
      "Creating backend services for data processing and storage",
      "Implementing WebSocket communication for live updates",
      "Building responsive UI that works across multiple devices",
      "Developing data analysis features for historical trends"
    ],
    demoLink: "#",
    githubLink: "https://github.com/dhonitaker/iot-dashboard",
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=IoT+Dashboard+UI",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Sensor+Metrics+Charts"
    ]
  },
  {
    title: "Expense Tracker App",
    description: "Personal finance application for tracking expenses and generating insights.",
    role: "Mobile Application Developer",
    category: "frontend",
    tech: [
      { name: "React Native" },
      { name: "SQLite" },
      { name: "TypeScript" },
      { name: "Chart.js" },
      { name: "AsyncStorage" },
      { name: "Jest" },
      { name: "GitHub Actions" }
    ],
    detailedDescription: "A mobile application for tracking personal expenses with features like categorization, budget planning, and financial insights. The app works offline and provides visualization of spending patterns.",
    responsibilities: [
      "Designing intuitive UI for expense tracking",
      "Implementing local database for offline functionality",
      "Creating visualization components for financial insights",
      "Building automated tests with Jest",
      "Setting up CI/CD pipeline with GitHub Actions"
    ],
    demoLink: "https://expense-tracker-demo.vercel.app",
    githubLink: "https://github.com/dhonitaker/expense-tracker",
    screenshots: [
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Expense+Tracker+Dashboard",
      "https://placehold.co/800x600/e2e8f0/1e293b?text=Budget+Analysis+Charts"
    ]
  }
];

// Combine both project types
const allProjects = [...professionalProjects, ...personalProjects];

// Filter type definition
type FilterCategory = "all" | "frontend" | "backend" | "fullstack";
type ProjectType = "all" | "professional" | "personal";
type TechFilter = string | null;

const Projects = () => {
  const [categoryFilter, setCategoryFilter] = useState<FilterCategory>("all");
  const [typeFilter, setTypeFilter] = useState<ProjectType>("all");
  const [techFilter, setTechFilter] = useState<TechFilter>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get unique tech stacks for filter
  const uniqueTechStacks = Array.from(
    new Set(
      allProjects.flatMap(project => project.tech.map(tech => tech.name))
    )
  ).sort();

  // Filter projects based on selected category, type and tech
  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;
    const matchesTech = !techFilter || project.tech.some(tech => tech.name === techFilter);
    const isProfessional = professionalProjects.some(p => p.title === project.title);
    const matchesType = typeFilter === "all" || 
                        (typeFilter === "professional" && isProfessional) || 
                        (typeFilter === "personal" && !isProfessional);
    return matchesCategory && matchesTech && matchesType;
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
              {/* Project type filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <Button 
                  variant={typeFilter === "all" ? "default" : "outline"} 
                  onClick={() => setTypeFilter("all")}
                  className="gap-2 transition-all"
                >
                  <BadgeCheck className="h-4 w-4" />
                  All Projects
                </Button>
                <Button 
                  variant={typeFilter === "professional" ? "default" : "outline"} 
                  onClick={() => setTypeFilter("professional")}
                  className="gap-2 transition-all"
                >
                  <Briefcase className="h-4 w-4" />
                  Professional Work
                </Button>
                <Button 
                  variant={typeFilter === "personal" ? "default" : "outline"} 
                  onClick={() => setTypeFilter("personal")}
                  className="gap-2 transition-all"
                >
                  <FolderGit2 className="h-4 w-4" />
                  Personal Projects
                </Button>
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <Button 
                  variant={categoryFilter === "all" ? "default" : "outline"} 
                  onClick={() => setCategoryFilter("all")}
                  className="gap-2 transition-all"
                >
                  <Code className="h-4 w-4" />
                  All Categories
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
                <Button 
                  variant={categoryFilter === "fullstack" ? "default" : "outline"} 
                  onClick={() => setCategoryFilter("fullstack")}
                  className="gap-2 transition-all"
                >
                  <Database className="h-4 w-4" />
                  Full-Stack
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
