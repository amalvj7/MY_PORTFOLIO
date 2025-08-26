import { useState, useEffect, useRef } from "react";
import dance1 from "@/assets/dance-1.jpg";
import dance2 from "@/assets/dance-2.jpg";
import dance3 from "@/assets/dance-3.jpg";
// Import all the new dance photos
import img2869 from "@/assets/IMG_2869.JPG";
import img6519 from "@/assets/IMG_6519.JPEG";
import img8205 from "@/assets/IMG_8205.PNG";
import img8750 from "@/assets/IMG_8750.JPG";
// import img7261 from "@/assets/IMG_7261.HEIC"; // HEIC format not supported
import img20240209 from "@/assets/IMG-20240209-WA0061.jpg";
import img20240413_1 from "@/assets/IMG-20240413-WA0001.jpg";
import img20240413_2 from "@/assets/IMG-20240413-WA0032.jpg";
import img20230402 from "@/assets/IMG-20230402-WA0033.jpg";
import img20221028 from "@/assets/IMG-20221028-WA0025.jpg";
import img18 from "@/assets/18.jpeg";
import img5151 from "@/assets/IMG_5151.JPG";
import omj6997 from "@/assets/OMJ_6997.JPG";

const DanceSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
  
  const danceImages = [
    {
      src: img2869,
      alt: "Professional dance performance with crew",
      caption: "Leading the college crew to national-level performances"
    },
    {
      src: img6519,
      alt: "Solo contemporary dance performance",
      caption: "Contemporary dance expression and artistry"
    },
    {
      src: img8205,
      alt: "Group synchronized dance formation",
      caption: "Team choreography and synchronized movements"
    },
    {
      src: img8750,
      alt: "Dance competition performance",
      caption: "Competitive dance showcasing technical skills"
    },
    {
      src: img18,
      alt: "Artistic dance photography",
      caption: "Capturing the beauty of movement and expression"
    },
    {
      src: img20240209,
      alt: "Dance workshop leadership",
      caption: "Teaching and sharing dance knowledge with others"
    },
    {
      src: img20240413_1,
      alt: "Stage performance moment",
      caption: "Memorable stage performances and audience engagement"
    },
    {
      src: img20240413_2,
      alt: "Dance crew collaboration",
      caption: "Working together as a team to create amazing performances"
    },
    {
      src: img20230402,
      alt: "Dance practice session",
      caption: "Dedicated practice sessions to perfect every move"
    },
    {
      src: img20221028,
      alt: "Dance event participation",
      caption: "Active participation in various dance events and competitions"
    },

    {
      src: img5151,
      alt: "Professional dance showcase",
      caption: "Professional dance showcases and exhibitions"
    },
    {
      src: omj6997,
      alt: "Dance artistry and creativity",
      caption: "Expressing creativity and artistry through dance"
    }
  ];

  const achievements = [
    { number: "5+", label: "Years of Experience", icon: "🕺" },
    { number: "National", label: "Level Performances", icon: "🏆" },
    { number: "Leader", label: "College Dance Crew", icon: "👥" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="dance"
      className="pt-16 lg:pt-24 pb-32 bg-gray-50 relative"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Dance & Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about dance, having led my college crew to national-level performances. 
            Blending technical expertise with creative expression.
          </p>
        </div>
        
        {/* Dance Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {danceImages.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-square overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
              
              {/* View icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                <span className="text-white text-sm">👁️</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Achievements */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.6s' }}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-2xl mb-3">{achievement.icon}</div>
              <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                {achievement.number}
              </div>
              <div className="text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Enlarged dance photo"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DanceSection;