
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import ProjectDetail from "./ProjectDetail";
import { Card, CardContent } from "@/components/ui/card";

interface Technology {
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tech: Technology[];
  detailedDescription?: string;
  responsibilities?: string[];
  demoLink?: string;
  githubLink?: string;
  screenshots?: string[];
  category: "frontend" | "backend" | "fullstack";
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  role, 
  tech, 
  detailedDescription,
  responsibilities,
  demoLink,
  githubLink,
  screenshots,
  delay = 0 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card 
        className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10 group animate-scale-in cursor-pointer transform hover:-translate-y-2 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800"
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Role:
            </span>
            <span className="ml-2 text-sm">{role}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.slice(0, 5).map((item) => (
              <Badge
                key={item.name}
                variant="secondary"
                className="text-xs bg-secondary/60 dark:bg-accent text-secondary-foreground"
              >
                {item.name}
              </Badge>
            ))}
            {tech.length > 5 && (
              <Badge
                variant="outline"
                className="text-xs"
              >
                +{tech.length - 5} more
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center text-sm font-medium text-primary transition-all duration-300">
              <span>View Details</span>
              <ChevronRight 
                className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`} 
              />
            </div>
            
            <div className="flex space-x-2">
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <ProjectDetail 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={{
          title,
          description,
          role,
          tech,
          detailedDescription,
          responsibilities,
          demoLink,
          githubLink,
          screenshots
        }}
      />
    </>
  );
};

export default ProjectCard;
