import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import imgEmail from "../../resources/email.jpg";
import imgLinkedIn from "../../resources/linkenin.jpg";
import imgOpenCV from "../../resources/OpenCV.jpg";
import imgWater from "../../resources/Smart Water Tank.jpg";

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
      title: "Gmail Automation",
      description:
        "AI-powered Gmail automation tool with email summarization using OpenAI GPT. Features secure OAuth2 integration, automatic email fetching, and intelligent content summarization.",
      tags: [
        "Python",
        "Gmail API",
        "OpenAI GPT",
        "OAuth2",
        "Email Automation"
      ],
      image: imgEmail,
      githubLink: "https://github.com/amalvj7/gmail-automation-project"
    },
    {
      title: "Fake Job Classification",
      description:
        ">90% accuracy classifying fake vs real job postings using TF‑IDF with Logistic Regression/Naive Bayes/Random Forest; includes job description preprocessing and a simple predictor UI.",
      tags: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "NLTK/Spacy"
      ],
      image: imgLinkedIn
    },

    {
      title: "OpenCV Computer Vision Projects",
      description:
        "Suite of CV apps: Virtual Paint (real-time object tracking + air-drawing), Document Scanner (contour + perspective warp), and Number Plate Detection (Haar + OCR).",
      tags: [
        "Python",
        "OpenCV",
        "NumPy",
        "Haar Cascade",
        "Tesseract OCR"
      ],
      image: imgOpenCV,
      githubLink: "https://github.com/amalvj7/VIRTUAL_PAINT_OPENCV"
    },
    {
      title: "Smart Water Tank Management System",
      description:
        "IoT-based tank monitoring with ultrasonic sensing and auto pump control; remote monitoring optional. Outcome: prevented overflow and optimized water usage.",
      tags: [
        "Arduino/Raspberry Pi",
        "Ultrasonic Sensor",
        "IoT",
        "Python/C++"
      ],
      image: imgWater,
      githubLink: "https://github.com/amalvj7/Smart_Water_Tank"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="pt-16 lg:pt-24 pb-32 bg-white relative"
    >
      <div className="container mx-auto px-6 max-w-6xl">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 md:gap-x-16 md:gap-y-20 items-stretch">
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