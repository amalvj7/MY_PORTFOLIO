import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
            <div className="flex items-center gap-4 text-lg text-muted-foreground">
              <span className="text-primary font-medium">ML</span>
              <span>|</span>
              <span className="text-accent font-medium">NLP</span>
              <span>|</span>
              <span className="text-secondary font-medium">Gen AI</span>
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
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-card backdrop-blur-sm border border-white/20 shadow-glow overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground">
              <span className="text-primary">WILL</span> | <span className="text-accent">SORT</span> | <span className="text-secondary">LATER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;