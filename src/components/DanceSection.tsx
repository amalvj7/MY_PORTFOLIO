import { useState } from "react";
import dance1 from "@/assets/dance-1.jpg";
import dance2 from "@/assets/dance-2.jpg";
import dance3 from "@/assets/dance-3.jpg";

const DanceSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const danceImages = [
    {
      src: dance1,
      alt: "Professional dance performance with crew",
      caption: "Leading the college crew to national-level performances"
    },
    {
      src: dance2,
      alt: "Solo contemporary dance performance",
      caption: "Contemporary dance expression and artistry"
    },
    {
      src: dance3,
      alt: "Group synchronized dance formation",
      caption: "Team choreography and synchronized movements"
    },
    {
      src: dance1,
      alt: "Dance competition performance",
      caption: "Competitive dance showcasing technical skills"
    },
    {
      src: dance2,
      alt: "Artistic dance photography",
      caption: "Capturing the beauty of movement and expression"
    },
    {
      src: dance3,
      alt: "Dance workshop leadership",
      caption: "Teaching and sharing dance knowledge with others"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            DANCE
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Passionate about dance, having led my college crew to national-level performances. 
            Blending technical expertise with creative expression.
          </p>
        </div>
        
        {/* Dance Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {danceImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300">
            <div className="text-3xl font-bold text-secondary mb-2">National</div>
            <div className="text-muted-foreground">Level Performances</div>
          </div>
          <div className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">Leader</div>
            <div className="text-muted-foreground">College Dance Crew</div>
          </div>
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
              className="w-full h-full object-contain rounded-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
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