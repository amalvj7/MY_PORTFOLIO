import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Brain,
  Atom,
  Database,
  Box,
  GitBranch,
  Server,
  Cloud,
  Cpu,
} from "lucide-react";

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

  const skillIconMap: Record<string, JSX.Element> = {
    python: <Code2 className="w-3.5 h-3.5 text-indigo-500" />,
    javascript: <FileCode className="w-3.5 h-3.5 text-yellow-500" />,
    typescript: <FileCode className="w-3.5 h-3.5 text-blue-500" />,
    java: <Cpu className="w-3.5 h-3.5 text-red-500" />,
    "c++": <Cpu className="w-3.5 h-3.5 text-emerald-500" />,
    sql: <Database className="w-3.5 h-3.5 text-sky-600" />,
    tensorflow: <Brain className="w-3.5 h-3.5 text-orange-500" />,
    pytorch: <Brain className="w-3.5 h-3.5 text-rose-500" />,
    "scikit-learn": <Brain className="w-3.5 h-3.5 text-indigo-500" />,
    opencv: <Atom className="w-3.5 h-3.5 text-green-600" />,
    nlp: <Brain className="w-3.5 h-3.5 text-purple-500" />,
    "computer vision": <Atom className="w-3.5 h-3.5 text-teal-600" />,
    react: <Atom className="w-3.5 h-3.5 text-cyan-500" />,
    "node.js": <Server className="w-3.5 h-3.5 text-lime-600" />,
    express: <Server className="w-3.5 h-3.5 text-gray-600" />,
    "html/css": <FileCode className="w-3.5 h-3.5 text-pink-500" />,
    "rest apis": <Cloud className="w-3.5 h-3.5 text-indigo-500" />,
    graphql: <Cloud className="w-3.5 h-3.5 text-fuchsia-500" />,
    git: <GitBranch className="w-3.5 h-3.5 text-orange-600" />,
    docker: <Box className="w-3.5 h-3.5 text-sky-600" />,
    aws: <Cloud className="w-3.5 h-3.5 text-amber-500" />,
    mongodb: <Database className="w-3.5 h-3.5 text-green-600" />,
    postgresql: <Database className="w-3.5 h-3.5 text-blue-700" />,
    linux: <Cpu className="w-3.5 h-3.5 text-gray-700" />,
  };

  const cardGradients = [
    "from-indigo-50/70 via-purple-50/70 to-emerald-50/70",
    "from-purple-50/70 via-pink-50/70 to-indigo-50/70",
    "from-blue-50/70 via-cyan-50/70 to-indigo-50/70",
    "from-emerald-50/70 via-teal-50/70 to-indigo-50/70",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="pt-16 lg:pt-24 pb-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative gradient accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-400/20 via-purple-400/20 to-emerald-400/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-emerald-400/15 via-indigo-400/15 to-purple-400/15 blur-3xl animate-pulse" />

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}> 
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Skills & Expertise
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className={`group relative overflow-hidden rounded-xl p-10 border border-white/20 bg-white/30 backdrop-blur-md shadow-[0_10px_24px_-12px_rgba(0,0,0,0.22),0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.28),0_8px_20px_rgba(0,0,0,0.10)] transition-all duration-300 ease-out hover:-translate-y-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Pastel gradient background */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} opacity-70`} />
              <div className="relative">
                {/* Animated gradient bar */}
                <div className="mb-6 h-1.5 w-full rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400" />
                <div className="flex items-center mb-6">
                  <span className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-100 to-emerald-100 text-xl ring-1 ring-inset ring-indigo-200/60">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-b from-white/90 to-gray-50/90 text-gray-700 border border-gray-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_-6px_rgba(99,102,241,0.45)] hover:scale-[1.06] hover:border-indigo-300/70 hover:ring-2 hover:ring-indigo-300/40 transition-all duration-300 ease-out cursor-default"
                    >
                      {skillIconMap[skill.toLowerCase()] ?? <Code2 className="w-3.5 h-3.5 text-gray-500" />}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;