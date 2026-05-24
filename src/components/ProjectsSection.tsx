import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projectsData";

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-16 lg:pt-24 pb-32 bg-[#FAFAF8] relative">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-indigo-500 uppercase mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="mx-auto w-12 h-0.5 bg-indigo-400 rounded mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            End-to-end solutions spanning machine learning, deep learning, NLP, and full-stack development.
            Click any project to explore the details.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              shortDescription={project.shortDescription}
              tags={project.tags}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
