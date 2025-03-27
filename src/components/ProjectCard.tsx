
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface Technology {
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tech: Technology[];
  delay?: number;
}

const ProjectCard = ({ title, description, role, tech, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md group animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item.name}
              className="inline-block px-3 py-1 rounded-full text-xs bg-secondary dark:bg-accent text-accent-foreground"
            >
              {item.name}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-sm font-medium text-primary transition-all duration-300">
          <span>View Details</span>
          <ChevronRight 
            className={`ml-1 h-4 w-4 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
