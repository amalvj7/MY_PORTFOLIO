import { useState } from "react";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import bgSiemens from "../../resources/Siemens.jpg";
import bgStaff from "../../resources/staff.jpg";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  accentColor: string;
  badgeColor: string;
  logo: string;
  image?: string;
  bullets: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    id: "uvj",
    company: "UVJ Technology",
    role: "Software Engineer",
    period: "2025 – Present",
    location: "Trivandrum, Kerala · On-site",
    accentColor: "from-indigo-500 to-purple-600",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    logo: "U",
    bullets: [
      "Engineered TempTrack AI, a proactive risk prediction platform for pharmaceutical cold-chain shipments, addressing $50K+ losses from temperature excursions through pre-departure risk assessment and real-time monitoring.",
      "Architected a dual-model ML system: Random Forest for pre-shipment evaluation (24 hrs before departure) and XGBoost for in-transit monitoring, enabling logistics teams to prevent failures rather than react to them.",
      "Built a physics-based thermal simulation engine modeling PCM phase transitions and heat transfer through vacuum-insulated containers, generating synthetic training data and physics-informed features for ML models.",
      "Developed an automated QC report extraction pipeline using Claude API, reducing shipper onboarding from manual data entry to a document-upload workflow while maintaining thermal modeling accuracy.",
    ],
    tags: ["Random Forest", "XGBoost", "Physics-informed ML", "Claude API", "FastAPI", "Cold-chain Logistics"],
  },
  {
    id: "siemens",
    company: "Siemens Technology & Services Pvt. Ltd",
    role: "Siemens Scholar · Support Engineer Intern",
    period: "Dec 2021 – Oct 2024",
    location: "Chennai / Hybrid",
    accentColor: "from-teal-500 to-emerald-600",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    logo: "S",
    image: bgSiemens,
    bullets: [
      "Selected as a Siemens Scholar (Dec 2021 – Jun 2025) — recognised among top engineering students in India based on academic merit; engaged in continuous mentorship and structured learning programs.",
      "Completed 5-month Support Engineer internship at Siemens Technology, working on smart building projects involving access controllers (Sipass), System Design Tool (SDT), and surveillance systems.",
      "Gained hands-on experience with Desigo building management system, SQL-based reporting, and end-to-end system integration in the smart infrastructure domain.",
      "Completed advanced mechatronics training at SITRAIN Bengaluru (Jan–Feb 2024), covering PLC programming, system integration, and hands-on industrial automation labs.",
    ],
    tags: ["Sipass", "SDT", "Desigo", "Building Automation", "PLC", "SQL", "Siemens Scholar"],
  },
  {
    id: "citylink",
    company: "Citylink Travel Corporation",
    role: "Counter Staff",
    period: "Feb 2025 – May 2025",
    location: "Trivandrum, Kerala · On-site",
    accentColor: "from-amber-500 to-orange-500",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    logo: "C",
    image: bgStaff,
    bullets: [
      "Handled front-desk operations and direct client interactions in a fast-paced travel agency environment.",
      "Managed air ticket bookings, itinerary planning, and end-to-end travel documentation for domestic and international routes.",
      "Developed strong customer communication, negotiation, and problem-resolution skills in a service-oriented role.",
    ],
    tags: ["Customer Service", "Air Ticket Booking", "Communication", "Client Handling"],
  },
];

const AccordionItem = ({ exp, isOpen, onToggle }: { exp: Experience; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden
        ${isOpen
          ? "border-indigo-200 shadow-[0_8px_32px_-8px_rgba(99,102,241,0.18)]"
          : "border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md"
        } bg-white`}
    >
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="w-full text-left px-7 py-5 flex items-center gap-5 group"
        aria-expanded={isOpen}
      >
        {/* Logo badge */}
        <div className={`shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${exp.accentColor} flex items-center justify-center text-white font-bold text-lg shadow-sm`}>
          {exp.logo}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
            <h3 className={`font-serif text-lg font-bold text-gray-900 transition-colors ${isOpen ? "text-indigo-700" : "group-hover:text-indigo-700"}`}>
              {exp.company}
            </h3>
            <span className={`text-sm font-medium px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
              {exp.role}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <div className={`shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-indigo-50 border-indigo-200 rotate-180" : "bg-gray-50 group-hover:bg-gray-100"}`}>
          <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? "text-indigo-600" : "text-gray-400"}`} />
        </div>
      </button>

      {/* Expanded body */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-7 pb-7">
          {/* Divider */}
          <div className={`h-px w-full bg-gradient-to-r ${exp.accentColor} opacity-20 mb-6`} />

          {/* Optional image accent */}
          {exp.image && (
            <div className="mb-5 rounded-xl overflow-hidden h-32 relative">
              <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="text-white font-semibold text-sm">{exp.company}</p>
              </div>
            </div>
          )}

          {/* Bullets */}
          <ul className="space-y-3 mb-6">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.accentColor} shrink-0`} />
                <span className="text-gray-600 text-sm leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const [openId, setOpenId] = useState<string>("uvj");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? "" : id));

  return (
    <section id="experience" className="pt-16 lg:pt-24 pb-32 bg-[#FAFAF8]">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-indigo-500 uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="mx-auto w-12 h-0.5 bg-indigo-400 rounded mb-5" />
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            Roles and milestones across software engineering, research, and industry.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
            >
              <AccordionItem
                exp={exp}
                isOpen={openId === exp.id}
                onToggle={() => toggle(exp.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
