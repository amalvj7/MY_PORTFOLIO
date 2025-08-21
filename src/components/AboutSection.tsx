import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Main Description */}
          <div className="text-lg text-muted-foreground leading-relaxed mb-12 animate-fade-in-up">
            <p className="mb-6">
              I'm a passionate software engineer and dancer, blending technical expertise with creative expression.
            </p>
            
            <p className="mb-6">
              I'm a B.Tech Computer Science and Engineering graduate from the College of Engineering 
              Trivandrum (CET) and a proud <span className="text-primary font-medium">Siemens Scholar</span>. 
              I'm currently working at UVI Technology as a Software Developer, where I build innovative, impactful solutions.
            </p>
            
            <p className="mb-6">
              Outside of work, I'm passionate about <span className="text-accent font-medium">dance</span>, 
              having led my college crew to national-level performances, and I love sharing knowledge as a{" "}
              <span className="text-secondary font-medium">tutor</span> in physics and math.
            </p>
            
            <p>
              In tech, my interests lie in Machine Learning, Deep Learning, and Natural Language 
              Processing, and I'm driven to merge these with creativity to develop solutions that inspire 
              and create positive change.
            </p>
          </div>
          
          {/* Skill Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground">
              🎓 Education
            </Button>
            <Button variant="outline" className="bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground">
              🏆 Siemens Scholar
            </Button>
            <Button variant="outline" className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary hover:text-secondary-foreground">
              💃 Dance & Leadership
            </Button>
            <Button variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground">
              📚 Physics & Math Tutor
            </Button>
          </div>
          
          {/* 3D Cube Illustration */}
          <div className="flex justify-center animate-float">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-gradient-primary rounded-lg transform rotate-12 opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-secondary rounded-lg transform -rotate-12 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-lg transform rotate-6 opacity-90"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;