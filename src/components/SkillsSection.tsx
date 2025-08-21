import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
      icon: "💻"
    },
    {
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision"],
      icon: "🤖"
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Express", "HTML/CSS", "REST APIs", "GraphQL"],
      icon: "🌐"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Linux"],
      icon: "🛠️"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="pt-16 lg:pt-24 pb-32 bg-gray-50 relative"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;