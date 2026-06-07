import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  Cpu,
  GitBranch,
  Server,
  MessageSquare,
  Layers,
  Zap,
  Cloud,
  BarChart2,
  FlaskConical,
  Table,
  MonitorSmartphone,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  categoryIcon: JSX.Element;
  accent: string;
  span?: "full" | "half";
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    subtitle: "Core programming languages",
    categoryIcon: <Code2 className="w-5 h-5" />,
    accent: "from-indigo-500 to-violet-600",
    span: "full",
    skills: [
      { name: "Python", icon: <Code2 className="w-4 h-4 text-indigo-500" /> },
      { name: "SQL", icon: <Database className="w-4 h-4 text-sky-600" /> },
    ],
  },
  {
    title: "ML / Deep Learning",
    subtitle: "Models, frameworks & tuning",
    categoryIcon: <Brain className="w-5 h-5" />,
    accent: "from-purple-500 to-pink-500",
    span: "half",
    skills: [
      { name: "PyTorch", icon: <Brain className="w-4 h-4 text-rose-500" /> },
      { name: "Scikit-learn", icon: <Brain className="w-4 h-4 text-indigo-500" /> },
      { name: "XGBoost", icon: <Zap className="w-4 h-4 text-amber-500" /> },
      { name: "Random Forest", icon: <Layers className="w-4 h-4 text-green-600" /> },
      { name: "HuggingFace Transformers", icon: <Layers className="w-4 h-4 text-yellow-500" /> },
      { name: "spaCy", icon: <Brain className="w-4 h-4 text-teal-500" /> },
      { name: "torchvision", icon: <Cpu className="w-4 h-4 text-rose-400" /> },
      { name: "Optuna", icon: <Zap className="w-4 h-4 text-purple-500" /> },
      { name: "imbalanced-learn", icon: <FlaskConical className="w-4 h-4 text-pink-500" /> },
    ],
  },
  {
    title: "NLP & LLMs",
    subtitle: "Language models, agents & retrieval",
    categoryIcon: <MessageSquare className="w-5 h-5" />,
    accent: "from-emerald-500 to-teal-500",
    span: "half",
    skills: [
      { name: "CrewAI", icon: <Cpu className="w-4 h-4 text-violet-500" /> },
      { name: "Sentence Transformers", icon: <MessageSquare className="w-4 h-4 text-emerald-600" /> },
      { name: "LangChain", icon: <Layers className="w-4 h-4 text-indigo-500" /> },
      { name: "LLaMA", icon: <Brain className="w-4 h-4 text-orange-500" /> },
      { name: "Groq API", icon: <Zap className="w-4 h-4 text-green-500" /> },
      { name: "Claude API", icon: <Cloud className="w-4 h-4 text-violet-500" /> },
      { name: "Google Gemini", icon: <Cloud className="w-4 h-4 text-blue-500" /> },
      { name: "RAG", icon: <Database className="w-4 h-4 text-teal-600" /> },
      { name: "Semantic Router", icon: <Cpu className="w-4 h-4 text-sky-500" /> },
      { name: "ChromaDB", icon: <Database className="w-4 h-4 text-indigo-400" /> },
    ],
  },
  {
    title: "Data & Visualization",
    subtitle: "Analysis, EDA & plotting",
    categoryIcon: <BarChart2 className="w-5 h-5" />,
    accent: "from-sky-500 to-blue-600",
    span: "half",
    skills: [
      { name: "Pandas", icon: <Table className="w-4 h-4 text-blue-600" /> },
      { name: "NumPy", icon: <Cpu className="w-4 h-4 text-indigo-500" /> },
      { name: "Matplotlib", icon: <BarChart2 className="w-4 h-4 text-sky-600" /> },
      { name: "Seaborn", icon: <BarChart2 className="w-4 h-4 text-teal-500" /> },
      { name: "Plotly", icon: <BarChart2 className="w-4 h-4 text-purple-500" /> },
      { name: "Jupyter Notebook", icon: <Code2 className="w-4 h-4 text-orange-500" /> },
    ],
  },
  {
    title: "APIs & Data Tools",
    subtitle: "Serving models, databases & dev workflow",
    categoryIcon: <Server className="w-5 h-5" />,
    accent: "from-amber-500 to-orange-500",
    span: "half",
    skills: [
      { name: "FastAPI", icon: <Server className="w-4 h-4 text-teal-500" /> },
      { name: "Streamlit", icon: <MonitorSmartphone className="w-4 h-4 text-red-500" /> },
      { name: "MySQL", icon: <Database className="w-4 h-4 text-blue-700" /> },
      { name: "SQLite", icon: <Database className="w-4 h-4 text-sky-500" /> },
      { name: "Uvicorn", icon: <Zap className="w-4 h-4 text-green-600" /> },
      { name: "Git", icon: <GitBranch className="w-4 h-4 text-orange-500" /> },
      { name: "GitHub", icon: <GitBranch className="w-4 h-4 text-gray-700" /> },
    ],
  },
];

const domains = [
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Large Language Models",
  "Generative AI",
  "Multi-Agent Orchestration",
  "Agentic AI",
  "Computer Vision",
  "Physics-informed ML",
  "Cold-chain Logistics AI",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" },
  }),
};

const SkillCard = ({ cat, index }: { cat: SkillCategory; index: number }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm
               hover:shadow-[0_12px_36px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1
               transition-all duration-300 flex flex-col"
  >
    {/* Top accent */}
    <div className={`h-1 w-full rounded-full bg-gradient-to-r ${cat.accent} mb-7`} />

    {/* Header */}
    <div className="flex items-start gap-4 mb-6">
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.accent} flex items-center justify-center text-white shadow-md shrink-0`}>
        {cat.categoryIcon}
      </div>
      <div>
        <h3 className="font-serif text-xl font-bold text-gray-900 leading-tight">{cat.title}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{cat.subtitle}</p>
      </div>
      <span className="ml-auto text-2xl font-bold text-gray-100 select-none">{cat.skills.length}</span>
    </div>

    {/* Chips */}
    <div className="flex flex-wrap gap-2.5 mt-auto">
      {cat.skills.map((skill) => (
        <span
          key={skill.name}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                     text-gray-700 bg-gray-50 border border-gray-200
                     hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700
                     transition-all duration-200 cursor-default select-none"
        >
          {skill.icon}
          {skill.name}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const fullCards = skillCategories.filter((c) => c.span === "full");
  const halfCards = skillCategories.filter((c) => c.span === "half");

  return (
    <section id="skills" className="pt-16 lg:pt-24 pb-32 bg-[#FAFAF8] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-indigo-500 uppercase mb-3">Expertise</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="mx-auto w-12 h-0.5 bg-indigo-400 rounded mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Every tool here was used in a real project — from EDA and model training to LLM pipelines and REST APIs.
          </p>
        </div>

        {/* Full-width row (Languages) */}
        <div className="mb-6">
          {fullCards.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>

        {/* 2-col grid for the rest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {halfCards.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i + 1} />
          ))}
        </div>

        {/* Domains strip */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl border border-gray-200 bg-white px-10 py-8 shadow-sm"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-5 text-center">
            Domain Focus
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {domains.map((d) => (
              <span
                key={d}
                className="px-5 py-2 rounded-full text-sm font-semibold bg-gray-50 border border-indigo-200
                           text-indigo-700 shadow-sm hover:bg-indigo-600 hover:text-white hover:border-indigo-600
                           transition-all duration-200 cursor-default"
              >
                {d}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
