import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaMusic, FaBrain } from "react-icons/fa";

const badges = [
  { icon: FaBrain,        text: "AI / ML Engineer",    color: "from-indigo-500 to-violet-600" },
  { icon: FaAward,        text: "Siemens Scholar",      color: "from-violet-500 to-purple-600" },
  { icon: FaGraduationCap,text: "B.Tech CSE — CET",     color: "from-blue-500 to-indigo-600"  },
  { icon: FaMusic,        text: "Dance & Leadership",   color: "from-pink-500 to-rose-600"    },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const AboutSection = () => (
  <section
    id="about"
    className="pt-16 lg:pt-24 pb-32 bg-white relative overflow-hidden"
  >
    {/* Subtle background accents */}
    <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-50/70 blur-3xl" />
    <div className="pointer-events-none absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-violet-50/60 blur-3xl" />

    <div className="relative container mx-auto px-6 max-w-4xl">

      {/* Section header */}
      <motion.div
        custom={0} variants={fadeUp} initial="hidden"
        whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-14"
      >
        <p className="text-xs font-semibold tracking-[0.25em] text-indigo-500 uppercase mb-3">Who I am</p>
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">About Me</h2>
        <div className="mx-auto w-12 h-0.5 bg-indigo-400 rounded" />
      </motion.div>

      {/* Main content card */}
      <motion.div
        custom={1} variants={fadeUp} initial="hidden"
        whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        className="bg-[#FAFAF8] border border-gray-200 rounded-3xl p-10 lg:p-14 shadow-sm mb-10"
      >
        <div className="space-y-6 text-center max-w-2xl mx-auto">
          <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium">
            I'm an{" "}
            <span className="text-indigo-600 font-bold">AI & ML Engineer</span> — a B.Tech CSE
            graduate from the{" "}
            <a
              href="https://www.cet.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-bold underline decoration-2 underline-offset-4
                         hover:text-indigo-800 transition-colors"
            >
              College of Engineering Trivandrum (CET)
            </a>{" "}
            and a proud{" "}
            <span className="text-indigo-600 font-bold">Siemens Scholar</span>, building
            intelligent systems that solve real-world problems.
          </p>

          <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

          <p className="text-lg text-gray-600 leading-relaxed">
            My work spans <strong className="text-gray-800">Machine Learning</strong>,{" "}
            <strong className="text-gray-800">Deep Learning</strong>,{" "}
            <strong className="text-gray-800">NLP</strong>, and{" "}
            <strong className="text-gray-800">Generative AI</strong> — from physics-informed
            ML models for cold-chain logistics to LLM-powered RAG pipelines and multi-agent
            AI systems. I enjoy working close to both the research and the production side
            of AI.
          </p>

          <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

          <p className="text-lg text-gray-600 leading-relaxed">
            Beyond the code, I led my college dance crew to national-level finals and enjoy
            reading — from mindset and philosophy to entrepreneurship. It's how I stay sharp
            and think differently about the problems I build for.
          </p>
        </div>
      </motion.div>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.text}
            custom={i + 2} variants={fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            className="group relative"
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full
                             border border-gray-200 bg-white text-gray-800 font-medium
                             shadow-sm hover:shadow-md hover:border-indigo-300
                             hover:scale-105 transition-all duration-300 cursor-default">
              <badge.icon className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />
              {badge.text}
            </span>
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${badge.color}
                            opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-500 -z-10`} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
