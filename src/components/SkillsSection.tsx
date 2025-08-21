const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
      color: "primary"
    },
    {
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision"],
      color: "secondary"
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Express", "HTML/CSS", "REST APIs", "GraphQL"],
      color: "accent"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Linux"],
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                        : category.color === "secondary"
                        ? "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        : "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground"
                    }`}
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