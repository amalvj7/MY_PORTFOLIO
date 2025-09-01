import { useEffect, useRef, useState } from "react";
import bgSiemens from "../../resources/Siemens.jpg";
import bgSiemensFiles from "../../resources/Siemens files.jpg";
import bgStaff from "../../resources/staff.jpg";

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
      company: "citylink Travel corporation",
      role: "Counter Staff (Full-time)",
      period: "Feb 2025 - May 2025 · 4 mos · Trivandrum, Kerala, India · On-site",
      description: "Handled front-desk operations and direct client interactions. Learned real-world client handling, air ticket booking, and digital marketing.",
      technologies: ["Communication", "Customer Service", "+1 skill"],
      icon: "🏢"
    },
    {
      company: "Siemens",
      role: "Siemens Scholar (Part-time)",
      period: "Dec 2021 - Jun 2025 · 3 yrs 7 mos · Hybrid",
      description: "Selected Siemens Scholar; engaged in continuous learning and projects under mentorship while pursuing academics.",
      technologies: ["Scholarship", "Mentorship", "Engineering"],
      icon: "🎓"
    },
    {
      company: "Siemens Technology and Private Limited",
      role: "Support Engineer (Internship)",
      period: "Jun 2024 - Oct 2024 · 5 mos · On-site",
      description: "Completed a 2‑month internship contributing as a support engineer and developer. Worked with building automation stack and tooling.",
      technologies: ["Desigo", "SQL", "+1 skill"],
      icon: "🧰"
    },
    {
      company: "SITRAIN - Advanced Mechatronics",
      role: "Trainee",
      period: "Jan 2024 - Feb 2024 · 2 mos · Bengaluru, India · On-site",
      description: "Completed advanced mechatronics training with focus on PLC programming, system integration, and hands-on labs.",
      technologies: ["PLC Programming", "Mechatronics"],
      icon: "⚙️"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience"
      className="pt-16 lg:pt-24 pb-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative">
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
            {experiences.map((exp, index) => {
              const lowerCompany = exp.company.toLowerCase();
              const lowerRole = exp.role.toLowerCase();
              const bgForCard =
                lowerCompany.includes('siemens technology') || lowerRole.includes('support engineer')
                  ? bgSiemensFiles
                  : lowerCompany.includes('siemens') || lowerRole.includes('siemens scholar')
                  ? bgSiemens
                  : lowerCompany.includes('citylink') || lowerRole.includes('counter staff')
                  ? bgStaff
                  : undefined;

              return (
              <div
                key={index}
                className={`relative flex items-start mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                {/* Content */}
                <div className="md:ml-20 bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full group relative overflow-hidden">
                  {/* Removed background image, replaced with pastel background color */}
                  <div className={`absolute inset-0 ${['bg-indigo-50','bg-purple-50','bg-emerald-50','bg-pink-50','bg-blue-50','bg-yellow-50'][index % 6]} opacity-100 pointer-events-none`} />
                  <div className="relative z-10">
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
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;