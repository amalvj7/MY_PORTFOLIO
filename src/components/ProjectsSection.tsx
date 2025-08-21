import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AI-Powered Dashboard",
      description: "Modern web application with machine learning capabilities for data analytics and visualization.",
      tags: ["React", "Python", "TensorFlow", "ML"],
      image: project1,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Neural Network Analyzer",
      description: "Deep learning model for natural language processing with real-time sentiment analysis.",
      tags: ["NLP", "Deep Learning", "Python", "Flask"],
      image: project2,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Mobile Learning App",
      description: "Cross-platform educational application with personalized learning algorithms.",
      tags: ["React Native", "AI", "Firebase", "Mobile"],
      image: project3,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Computer Vision System",
      description: "Real-time object detection and tracking system using advanced computer vision techniques.",
      tags: ["OpenCV", "Python", "AI", "Computer Vision"],
      image: project1,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Generative AI Platform",
      description: "Platform for creating and deploying generative AI models with intuitive user interface.",
      tags: ["Gen AI", "PyTorch", "React", "API"],
      image: project2,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Data Science Toolkit",
      description: "Comprehensive toolkit for data scientists with automated machine learning pipelines.",
      tags: ["Data Science", "AutoML", "Python", "Scikit-learn"],
      image: project3,
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="pt-16 lg:pt-24 pb-32 bg-white relative"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions in machine learning, web development, and AI applications
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;