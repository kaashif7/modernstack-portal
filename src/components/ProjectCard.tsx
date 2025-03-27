
import { ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import ProjectDetail from "./ProjectDetail";

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
      <div 
        className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10 group animate-scale-in cursor-pointer transform hover:-translate-y-1"
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        <div className="p-6">
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
          
          <div className="flex items-center text-sm font-medium text-primary transition-all duration-300 mt-auto">
            <span>View Details</span>
            <ChevronRight 
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                isHovered ? 'translate-x-1' : ''
              }`} 
            />
          </div>
        </div>
      </div>

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
