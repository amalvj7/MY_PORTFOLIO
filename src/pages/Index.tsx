import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import DanceSection from "@/components/DanceSection";
import ResumeSection from "@/components/ResumeSection";
import ScrollProgress from "@/components/ScrollProgress";
import { useEffect } from "react";

const Index = () => {
  // Add smooth scrolling to the document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      
      <section id="about">
        <AboutSection />
      </section>
      
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="experience">
        <ExperienceSection />
      </section>
      
      <section id="dance">
        <DanceSection />
      </section>
      
      <section id="resume">
        <ResumeSection />
      </section>
    </div>
  );
};

export default Index;
