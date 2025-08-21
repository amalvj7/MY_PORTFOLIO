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
      className="group relative rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
        
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`} />
        
        {/* Action buttons overlay */}
        <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
          {demoLink && (
            <Button 
              size="sm" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Eye className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {githubLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-white/90 hover:bg-white border-gray-200 text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;