import { useState, useEffect, useRef } from "react";
import { ChevronDown, Download } from "lucide-react";
import resumePDF from "@/assets/AMALNATH_resume_new.pdf";

// Typing animation hook
const useTypingAnimation = (phrases: string[], speed = 80, pause = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIdx, phrases, speed, pause]);

  return displayed;
};

// Floating particles
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => {
    const isRightSide = i < 12;
    return {
      id: i,
      size: Math.random() * 4 + 2,
      x: isRightSide ? 50 + Math.random() * 50 : Math.random() * 50,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 12 + 16,
      color: i % 6 === 0 ? "rgba(99,102,241,0.4)" : "rgba(139,92,246,0.22)",
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};


const TYPING_PHRASES = ["AI Engineer", "ML Practitioner", "GenAI Developer", "NLP Specialist"];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const typedText = useTypingAnimation(TYPING_PHRASES);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "AMALNATH_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden hero-bg"
    >
      <FloatingParticles />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-x-16 xl:gap-x-20 gap-y-16 items-center relative z-10 max-w-7xl">

        {/* Left — text */}
        <div className={`space-y-8 transition-all duration-1000 max-w-[66ch] ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}>
          <div className="space-y-6">

            {/* Open to opportunities badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                            bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open to AI / ML / GenAI roles
            </div>

            {/* Name */}
            <h1
              className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-gray-900 tracking-tight whitespace-nowrap"
              style={{ lineHeight: "1.05", letterSpacing: "-0.02em" }}
            >
              Hi, I'm{" "}
              <span className="relative group cursor-pointer transition-all duration-500">
                Amal Nath VJ
                <div
                  className="absolute left-0 w-0 h-1 bg-indigo-600 rounded-full transition-all duration-500
                             group-hover:w-full group-hover:shadow-lg group-hover:shadow-indigo-500/50"
                  style={{ height: "4px", bottom: "-8px" }}
                />
              </span>
            </h1>

            {/* Typing animation row */}
            <div className="flex items-center gap-3 text-lg font-medium min-h-[2rem]">
              <span className="text-indigo-600">{typedText}</span>
              <span className="inline-block w-0.5 h-5 bg-indigo-500 animate-pulse" />
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3
                         rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              My Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="bg-transparent border-2 border-indigo-600 text-indigo-600
                         hover:bg-indigo-600 hover:text-white font-bold px-6 py-3
                         rounded-xl transition-all duration-300"
            >
              My Story
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className="text-gray-600 hover:text-indigo-600 font-medium px-6 py-3
                         transition-all duration-300"
            >
              Resume
            </button>
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium
                         px-6 py-3 transition-all duration-300 hover:bg-indigo-50 rounded-lg"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </div>

        {/* Right — photo */}
        <div className={`flex justify-center lg:justify-end relative transition-all duration-1000 delay-300 ${isVisible ? "animate-scale-in" : "opacity-0 scale-90"}`}>
          <div className="relative group lg:ml-16 xl:ml-20">
            <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">

              {/* Aura shadow */}
              <div
                className="absolute inset-0 rounded-2xl -z-10 transition-all duration-700"
                style={{ boxShadow: "0 30px 80px rgba(99,102,241,0.18)", filter: "blur(1px)" }}
              />

              {/* Card */}
              <div
                className="photo-card relative w-full h-full rounded-2xl overflow-hidden
                           transition-all duration-500 border"
                style={{
                  backgroundColor: "#F7F9FC",
                  borderColor: "rgba(255,255,255,0.6)",
                  borderWidth: "1px",
                  boxShadow: "0 10px 30px rgba(16,24,40,0.08)",
                }}
              >
                <img
                  src="/lovable-uploads/300b2bb6-6f4b-44c8-8c57-4b5b2ee41b0b.png"
                  alt="Amal Nath VJ"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/12 via-blue-500/8 to-violet-500/10 opacity-85 mix-blend-overlay group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/8 via-transparent to-indigo-400/6 opacity-75 mix-blend-soft-light group-hover:opacity-85 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 group-hover:animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="flex flex-col items-center gap-2 text-slate-600 hover:text-indigo-600 transition-all duration-300 group-hover:scale-110">
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="p-2 rounded-full bg-white/80 border border-indigo-200 group-hover:bg-indigo-50 transition-all duration-300 shadow-lg">
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
