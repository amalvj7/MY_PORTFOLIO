import { useEffect, useRef } from "react";
import bgAbout from "../../resources/IMG_9933.JPG";
import { FaGraduationCap, FaAward, FaChalkboardTeacher, FaMusic } from "react-icons/fa";

const AboutSection = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const badges = [
    { icon: FaGraduationCap, text: "Education", color: "from-blue-500 to-purple-600" },
    { icon: FaAward, text: "Siemens Scholar", color: "from-purple-500 to-pink-600" },
    { icon: FaMusic, text: "Dance & Leadership", color: "from-pink-500 to-red-600" },
    { icon: FaChalkboardTeacher, text: "Physics & Math Tutor", color: "from-green-500 to-blue-600" },
  ];

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative min-h-[80vh] py-16 lg:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f3e8ff 0%, #e0f2fe 50%, #f0f9ff 100%)"
      }}
    >


      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* CET background image layer */}
        <div className="absolute inset-0 opacity-10">
          <img src={bgAbout} alt="About section background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* Main content card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">
          {/* Section Title with gradient underline */}
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Content container */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Intro paragraph with larger font */}
            <div className="text-center">
              <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium">
                I'm a B.Tech Computer Science and Engineering graduate from the{" "}
                <a 
                  href="https://www.cet.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline decoration-2 underline-offset-4 hover:decoration-purple-400 transition-all duration-300 font-bold"
                >
                  College of Engineering Trivandrum (CET)
                </a>{" "}
                and a proud <strong className="text-purple-600">Siemens Scholar</strong>, blending technical expertise with creative expression.
              </p>
            </div>

            {/* Animated divider */}
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animate-pulse"></div>
            </div>

            {/* Second paragraph */}
            <div className="text-center">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Outside of academics and work, I'm passionate about dance, having led my college crew to national-level performances, and I love sharing knowledge as a tutor in physics and math.
              </p>
            </div>

            {/* Animated divider */}
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full animate-pulse animation-delay-1000"></div>
            </div>

            {/* Third paragraph */}
            <div className="text-center">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                In tech, my interests lie in Machine Learning, Deep Learning, and Natural Language Processing, and I'm driven to merge these with creativity to develop solutions that inspire and create positive change.
              </p>
            </div>

            {/* Enhanced badges with icons and hover effects */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {badges.map((badge, index) => (
                <div
                  key={badge.text}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-gray-200 bg-white/90 backdrop-blur-sm text-gray-800 font-medium transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-300 cursor-pointer">
                    <badge.icon className="w-5 h-5 text-purple-600 group-hover:scale-125 transition-transform duration-300" />
                    {badge.text}
                  </span>
                  
                  {/* Gradient glow effect on hover */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 -z-10`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;