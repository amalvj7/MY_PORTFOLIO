import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("HOME");
  
  const navItems = [
    "HOME", "ABOUT", "EDUCATION", "PROJECTS", "SKILLS", "EXPERIENCE", "DANCE", "RESUME"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  activeSection === item 
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;