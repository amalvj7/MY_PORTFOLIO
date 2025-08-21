import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
}

const ProjectCard = ({ title, description, tags, image, demoLink, githubLink }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-70"
      }`}>
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200 mb-3 line-clamp-2">{description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Action buttons - only show on hover */}
          <div className={`flex gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {demoLink && (
              <Button size="sm" className="bg-primary/90 hover:bg-primary">
                <Eye className="w-4 h-4 mr-2" />
                View Project
              </Button>
            )}
            {githubLink && (
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            )}
            <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;