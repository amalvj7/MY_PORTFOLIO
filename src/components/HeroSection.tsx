import { useState, useEffect, useRef } from "react";
import { ChevronDown, Linkedin, Twitter, Instagram, Download } from "lucide-react";
import resumePDF from "@/assets/AMALNATH_VJ_resume_UST.pdf";

// Photo background particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => {
    const isRightSide = i < 12; // 60% on right side
    return {
      id: i,
      size: Math.random() * 4 + 2,
      x: isRightSide ? 50 + Math.random() * 50 : Math.random() * 50, // Right 50-100%, Left 0-50%
      y: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 12 + 16,
      color: i % 6 === 0 ? 'rgba(61,218,180,0.45)' : 'rgba(108,99,255,0.25)', // Mint and purple dots
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            opacity: 1,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Social buttons component - purple colored with large hover effects
const SocialButtons = () => {
  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div 
      className="social-buttons-fixed hidden xl:flex flex-col gap-4"
      style={{ 
        position: 'fixed',
        right: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 40,
        visibility: 'visible'
      }}
    >
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className="group relative w-12 h-12 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center transition-all duration-500 hover:border-purple-500 hover:bg-purple-500 text-purple-600 hover:text-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-purple-500/25 hover:scale-150 hover:shadow-xl hover:shadow-purple-500/30"
        >
          <Icon className="w-5 h-5 transition-all duration-500 relative z-10 group-hover:scale-110" />
          
          {/* Large glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 scale-0 group-hover:scale-[2] transition-all duration-700 opacity-0 group-hover:opacity-100 blur-md"></div>
        </a>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'AMALNATH_VJ_resume_UST.pdf';
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
      {/* Balanced floating particles */}
      <FloatingParticles />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-x-16 xl:gap-x-20 gap-y-16 items-center relative z-10 max-w-7xl">
        {/* Left side - Text content with max-width */}
        <div className={`space-y-8 transition-all duration-1000 max-w-[66ch] ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-6">
            {/* Enhanced headline with hover underline */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-gray-900 tracking-tight whitespace-nowrap" style={{ lineHeight: '1.05', letterSpacing: '-0.02em' }}>
              Hi, I'm{' '}
              <span className="relative group cursor-pointer transition-all duration-500">
                Amal Nath VJ
                {/* Hover-only underline */}
                <div className="absolute left-0 -bottom-2 w-0 h-1 bg-purple-600 rounded-full transition-all duration-500 group-hover:w-full group-hover:bg-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/50" style={{ height: '4px', bottom: '-8px' }}></div>
              </span>
            </h1>
            
            {/* Enhanced tag row with proper colors */}
            <div className="flex items-center gap-4 text-lg font-medium">
              <span className="text-purple-600 hover:text-purple-700 transition-colors cursor-default">ML</span>
              <span className="text-gray-300">|</span>
              <span className="text-purple-600 hover:text-purple-700 transition-colors cursor-default">NLP</span>
              <span className="text-gray-300">|</span>
              <span className="text-teal-500 hover:text-teal-600 transition-colors cursor-default">Gen AI</span>
            </div>
          </div>
          
          {/* Enhanced CTA buttons with proper focus styles */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA */}
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 focus-visible:outline-none"
            >
              My Work
            </button>
            
            {/* Secondary CTA */}
            <button 
              onClick={() => scrollToSection('about')}
              className="btn-secondary bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 focus-visible:outline-none"
              style={{ borderWidth: '1.5px' }}
            >
              My Story
            </button>
            
            {/* Tertiary CTA */}
            <button 
              onClick={() => scrollToSection('resume')}
              className="btn-tertiary text-gray-600 hover:text-purple-600 font-medium px-6 py-3 transition-all duration-300 focus-visible:outline-none"
            >
              Resume
            </button>
            
            {/* Download Resume CTA */}
            <button 
              onClick={handleResumeDownload}
              className="btn-download flex items-center gap-2 text-gray-600 hover:text-purple-600 font-medium px-6 py-3 transition-all duration-300 focus-visible:outline-none hover:bg-purple-50 rounded-lg"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </div>
        
        {/* Right side - Photo card */}
        <div className={`flex justify-center lg:justify-end relative transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`}>
          <div className="relative group lg:ml-16 xl:ml-20">
            {/* Photo card container with enhanced shadow */}
            <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">
              
              {/* Enhanced purple aura shadow */}
              <div 
                className="absolute inset-0 rounded-2xl transition-all duration-700 -z-10"
                style={{ 
                  boxShadow: '0 30px 80px rgba(108,99,255,0.18)',
                  filter: 'blur(1px)'
                }}
              ></div>
              
              {/* Main card */}
              <div 
                className="photo-card relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 border"
                style={{ 
                  backgroundColor: '#F7F9FC',
                  borderColor: 'rgba(255,255,255,0.6)',
                  borderWidth: '1px',
                  boxShadow: '0 10px 30px rgba(16,24,40,0.08)'
                }}
              >
                
                {/* Photo with enhanced texture overlay */}
                <img 
                  src="/lovable-uploads/300b2bb6-6f4b-44c8-8c57-4b5b2ee41b0b.png"
                  alt="Amal Nath VJ - Professional Portrait"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                  loading="lazy"
                />
                
                {/* Enhanced texture overlay with multiple layers - always visible */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/12 via-blue-500/8 to-teal-500/10 opacity-85 mix-blend-overlay group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/8 via-transparent to-purple-400/6 opacity-75 mix-blend-soft-light group-hover:opacity-85 transition-opacity duration-500" />
                
                {/* Enhanced hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Subtle floating accent dots */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 group-hover:animate-bounce" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 group-hover:scale-125 group-hover:animate-pulse" style={{ backgroundColor: '#3DDAB4' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll down indicator */}
      <div 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="flex flex-col items-center gap-2 text-slate-600 hover:text-purple-600 transition-all duration-300 group-hover:scale-110">
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="p-2 rounded-full bg-white/80 border border-purple-200 group-hover:bg-purple-50 transition-all duration-300 shadow-lg">
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;