import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectsSection = () => {
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
    <section className="py-20 bg-gradient-bg relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
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