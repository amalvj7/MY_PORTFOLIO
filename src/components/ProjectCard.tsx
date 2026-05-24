import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  shortDescription: string;
  tags: string[];
  image: string;
  index: number;
}

const ProjectCard = ({ id, title, shortDescription, tags, image, index }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/project/${id}`)}
      className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer
                 shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.13)]
                 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Number badge */}
        <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
          <span className="text-xs font-bold text-gray-500">{String(index + 1).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-200 leading-snug">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5 flex-1">
          {shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full border border-gray-200"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-2.5 py-0.5 text-xs font-medium text-gray-400 bg-gray-50 rounded-full border border-gray-200">
              +{tags.length - 4} more
            </span>
          )}
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">View Project</span>
          <span className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-indigo-600 transition-colors duration-200">
            <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors duration-200" />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
