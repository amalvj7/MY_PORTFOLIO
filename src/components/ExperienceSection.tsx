import { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
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

  const experiences = [
    {
      company: "UVI Technology",
      role: "Software Developer",
      period: "2023 - Present",
      description: "Building innovative, impactful solutions using cutting-edge technologies. Developing scalable web applications and machine learning models.",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      icon: "💼"
    },
    {
      company: "College of Engineering Trivandrum",
      role: "B.Tech Computer Science & Engineering",
      period: "2019 - 2023",
      description: "Graduated with expertise in software engineering, machine learning, and data structures. Led college dance crew to national-level performances.",
      technologies: ["Data Structures", "Algorithms", "ML", "Software Engineering"],
      icon: "🎓"
    },
    {
      company: "Siemens Scholar Program",
      role: "Research Scholar",
      period: "2022 - 2023",
      description: "Selected for prestigious Siemens scholarship program focusing on advanced technology research and innovation in engineering.",
      technologies: ["Research", "Innovation", "Engineering", "Technology"],
      icon: "🔬"
    },
    {
      company: "Physics & Math Tutoring",
      role: "Private Tutor",
      period: "2020 - Present",
      description: "Sharing knowledge as a tutor in physics and mathematics, helping students excel in their academic pursuits.",
      technologies: ["Teaching", "Physics", "Mathematics", "Communication"],
      icon: "📚"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience"
      className="pt-16 lg:pt-24 pb-32 bg-white relative"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey through technology, education, and continuous learning
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-mint-500 hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                {/* Content */}
                <div className="md:ml-20 bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full group">
                  <div className="flex items-start mb-4">
                    <span className="text-2xl mr-4 mt-1">{exp.icon}</span>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{exp.role}</h3>
                          <h4 className="text-lg text-indigo-600 font-medium">{exp.company}</h4>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;