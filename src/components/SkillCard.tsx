
import React from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  className?: string;
}

const SkillCard = ({ icon, title, skills, className }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] animate-scale-in", 
        className
      )}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 text-primary">{icon}</div>
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-primary/70 mr-2"></span>
            <span className="text-sm text-muted-foreground">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
