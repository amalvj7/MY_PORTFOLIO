import { useEffect, useRef } from "react";

const AboutSection = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const about = aboutRef.current;
    const illustration = illustrationRef.current;
    
    if (!about || !illustration) return;

    // Initially hide the illustration
    illustration.style.transform = 'translate(-50%, 40px) scale(0.98)';
    illustration.style.opacity = '0';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate to visible state
          illustration.style.transform = 'translate(-50%, 0) scale(1)';
          illustration.style.opacity = '1';
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(about);

    return () => observer.disconnect();
  }, []);

  const badges = [
    { text: "🎓 Education", variant: "primary" },
    { text: "🏆 Siemens Scholar", variant: "primary" },
    { text: "💃 Dance & Leadership", variant: "mint" },
    { text: "📚 Physics & Math Tutor", variant: "primary" }
  ];

  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="about pt-16 lg:pt-24 pb-32 lg:pb-48 relative bg-white"
    >
      <div className="container mx-auto px-6 max-w-4xl relative" style={{ zIndex: 10 }}>
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            About Me
          </h2>
        </div>
        
        {/* Main Content */}
        <div className="text-center lg:text-left max-w-none lg:max-w-[65ch] mx-auto lg:mx-0 mb-12">
          <div className="text-lg leading-relaxed space-y-6 text-gray-600">
            <p>
              I'm a passionate software engineer and dancer, blending technical expertise with creative expression.
            </p>
            
            <p>
              I'm a B.Tech Computer Science and Engineering graduate from the College of Engineering 
              Trivandrum (CET) and a proud{" "}
              <span className="font-medium text-purple-600">Siemens Scholar</span>. 
              I'm currently working at UVI Technology as a Software Developer, where I build innovative, impactful solutions.
            </p>
            
            <p>
              Outside of work, I'm passionate about{" "}
              <span className="font-medium text-teal-500">dance</span>, 
              having led my college crew to national-level performances, and I love sharing knowledge as a{" "}
              <span className="font-medium text-purple-600">tutor</span>{" "}
              in physics and math.
            </p>
            
            <p>
              In tech, my interests lie in Machine Learning, Deep Learning, and Natural Language 
              Processing, and I'm driven to merge these with creativity to develop solutions that inspire 
              and create positive change.
            </p>
          </div>
        </div>
        
        {/* Skill Badges */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`badge ${badge.variant} inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white text-gray-800 hover:border-purple-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                }
              }}
            >
              {badge.text}
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Illustration */}
      <div 
        ref={illustrationRef}
        className="about-illustration absolute left-1/2 bottom-0 transform -translate-x-1/2 pointer-events-none opacity-0"
        aria-hidden="true"
        style={{
          transition: 'all 650ms cubic-bezier(0.22,1,0.36,1)',
          zIndex: -1
        }}
      >
        <img 
          src="/about_us_page.svg" 
          alt=""
          loading="lazy"
          className="w-full max-w-4xl h-auto"
          style={{
            filter: 'drop-shadow(0 18px 50px rgba(108,99,255,0.15))'
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;