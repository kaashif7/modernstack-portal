
import { X, ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Technology {
  name: string;
  color?: string;
}

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    role: string;
    tech: Technology[];
    detailedDescription?: string;
    responsibilities?: string[];
    demoLink?: string;
    githubLink?: string;
    screenshots?: string[];
  };
}

const ProjectDetail = ({ isOpen, onClose, project }: ProjectDetailProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-base text-foreground/80">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div>
            <h3 className="font-medium mb-2">Role</h3>
            <p className="text-sm text-muted-foreground">{project.role}</p>
          </div>
          
          {project.detailedDescription && (
            <div>
              <h3 className="font-medium mb-2">Project Overview</h3>
              <p className="text-sm text-muted-foreground">{project.detailedDescription}</p>
            </div>
          )}
          
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <h3 className="font-medium mb-2">Key Responsibilities</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.responsibilities.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div>
            <h3 className="font-medium mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech.name} variant="secondary" className="text-xs">
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
          
          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3 className="font-medium mb-2">Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <img 
                    key={index}
                    src={screenshot} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-md shadow-sm w-full h-auto object-cover"
                  />
                ))}
              </div>
            </div>
          )}
          
          <div className="flex gap-4 mt-6">
            {project.demoLink && (
              <Button asChild className="gap-2">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            
            {project.githubLink && (
              <Button variant="outline" asChild className="gap-2">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub Repo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
