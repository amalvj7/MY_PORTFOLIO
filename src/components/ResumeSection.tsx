import { useEffect, useRef, useState } from "react";
import resumePDF from "@/assets/AMALNATH_VJ_resume_UST.pdf";
import { Download, FileText, Eye } from "lucide-react";

const ResumeSection = () => {
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'AMALNATH_VJ_resume_UST.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      id="resume"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Resume & Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download my comprehensive resume to learn more about my skills, experience, and achievements.
          </p>
        </div>

        {/* Resume Card */}
        <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Resume Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AMALNATH VJ</h3>
                  <p className="text-sm text-gray-500">Software Engineer & Developer</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Comprehensive resume showcasing my technical skills, project experience, 
                and professional achievements in software development and engineering.
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  React & TypeScript
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Full Stack Development
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Project Management
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  Technical Leadership
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleView}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                <Eye className="w-4 h-4" />
                View Resume
              </button>
              
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.4s' }}>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl mb-3">📚</div>
            <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
            <p className="text-sm text-gray-600">Bachelor's in Computer Science</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl mb-3">💼</div>
            <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
            <p className="text-sm text-gray-600">Software Development & Engineering</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl mb-3">🎯</div>
            <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
            <p className="text-sm text-gray-600">Full Stack & Modern Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
