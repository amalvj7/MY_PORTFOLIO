import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [typingText, setTypingText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["ML", "NLP", "Gen AI"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTypingText("");
    const currentText = texts[currentIndex];
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < currentText.length) {
        setTypingText(currentText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-bg relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full opacity-80 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AMAL NATH VJ
              </span>
            </h1>
            <div className="flex items-center gap-4 text-lg text-muted-foreground min-h-[28px]">
              <span className="text-primary font-medium">{typingText}</span>
              <span className="animate-pulse">|</span>
              <span className="text-accent font-medium">Specialist</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-primary hover:shadow-hover transition-all duration-300 hover:scale-105">
              View My Work →
            </Button>
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              About Me
            </Button>
            <Button className="bg-gradient-secondary hover:shadow-hover transition-all duration-300 hover:scale-105">
              Resume ↓
            </Button>
          </div>
        </div>
        
        {/* Right side - Profile image */}
        <div className="flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative group">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-card backdrop-blur-sm border border-white/20 shadow-glow overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 group-hover:shadow-primary/20">
              <img 
                src="/lovable-uploads/300b2bb6-6f4b-44c8-8c57-4b5b2ee41b0b.png"
                alt="Amal Nath VJ - Professional Portrait"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground">
              <span className="text-primary hover:text-primary-glow transition-colors cursor-pointer">INNOVATE</span> | 
              <span className="text-accent hover:text-accent/80 transition-colors cursor-pointer mx-1">CREATE</span> | 
              <span className="text-secondary hover:text-secondary/80 transition-colors cursor-pointer">INSPIRE</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;