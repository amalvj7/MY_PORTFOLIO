const ExperienceSection = () => {
  const experiences = [
    {
      company: "UVI Technology",
      role: "Software Developer",
      period: "2023 - Present",
      description: "Building innovative, impactful solutions using cutting-edge technologies. Developing scalable web applications and machine learning models.",
      technologies: ["React", "Python", "TensorFlow", "AWS"]
    },
    {
      company: "College of Engineering Trivandrum",
      role: "B.Tech Computer Science & Engineering",
      period: "2019 - 2023",
      description: "Graduated with expertise in software engineering, machine learning, and data structures. Led college dance crew to national-level performances.",
      technologies: ["Data Structures", "Algorithms", "ML", "Software Engineering"]
    },
    {
      company: "Siemens Scholar Program",
      role: "Research Scholar",
      period: "2022 - 2023",
      description: "Selected for prestigious Siemens scholarship program focusing on advanced technology research and innovation in engineering.",
      technologies: ["Research", "Innovation", "Engineering", "Technology"]
    },
    {
      company: "Physics & Math Tutoring",
      role: "Private Tutor",
      period: "2020 - Present",
      description: "Sharing knowledge as a tutor in physics and mathematics, helping students excel in their academic pursuits.",
      technologies: ["Teaching", "Physics", "Mathematics", "Communication"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-bg relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-20 bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <h4 className="text-lg text-primary font-medium">{exp.company}</h4>
                    </div>
                    <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full"
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