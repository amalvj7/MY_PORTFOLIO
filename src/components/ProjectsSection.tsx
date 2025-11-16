import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import imgLinkedIn from "@/assets/linkenin.jpg";
import imgCoderBuddy from "@/assets/codder_buddy.jpg";
import imgRAG from "@/assets/RAG.jpg";
import imgLog from "@/assets/LOG.png";
import imgLink from "@/assets/LINK.jpg";
import imgMedical from "@/assets/Medical.jpg";
import imgSpend from "@/assets/SPEND.jpg";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "AskMyDocs",
      description: "RAG-powered PDF Question Answering System using LangChain and GROQ. Intelligent document Q&A with smart chunking, vector search using ChromaDB, and AI-powered responses with source citations.",
      tags: ["Python", "RAG", "LangChain", "GROQ", "ChromaDB", "Vector Search", "PDF Processing"],
      image: imgRAG,
      githubLink: "https://github.com/amalvj7/AskMyDocs"
    },
    {
      title: "Coder Buddy",
      description: "AI-powered coding assistant built with LangGraph. Works like a multi-agent development team that can take a natural language request and transform it into a complete, working project — file by file — using real developer workflows.",
      tags: ["LangGraph", "Python", "Multi-Agent Systems", "AI", "Natural Language Processing", "Code Generation"],
      image: imgCoderBuddy,
      githubLink: "https://github.com/amalvj7/Coder-buddy"
    },
    {
      title: "Log Classification Framework",
      description: "Hybrid log classification system combining three approaches: Regex for predictable patterns, Sentence Transformer + Logistic Regression for complex patterns with sufficient data, and LLM for handling poorly-labeled data patterns.",
      tags: ["Python", "NLP", "Machine Learning", "Sentence Transformers", "Logistic Regression", "LLM", "FastAPI"],
      image: imgLog,
      githubLink: "https://github.com/amalvj7/NLP_LLM_LOGCLASSIFIER"
    },
    {
      title: "LinkLens",
      description: "AI-Powered URL Content Analyzer and Q&A System. Extract and analyze content from multiple URLs using advanced AI technology. Features vector search with FAISS, source citations, and persistent storage for future queries.",
      tags: ["Python", "Streamlit", "LangChain", "OpenAI", "FAISS", "Vector Search", "RAG"],
      image: imgLink,
      githubLink: "https://github.com/amalvj7/LINKLENS"
    },
    {
      title: "Medical AI Agent",
      description: "Multidisciplinary AI-powered medical analysis system using Google's Gemini AI. Simulates consultations with multiple specialists (Cardiologist, Psychologist, Pulmonologist) for comprehensive patient assessments with concurrent processing.",
      tags: ["Python", "Google Gemini AI", "Multi-Agent Systems", "Healthcare AI", "Concurrent Processing", "Medical Analysis"],
      image: imgMedical,
      githubLink: "https://github.com/amalvj7/MEDICAL_AI_AGENT"
    },
    {
      title: "SpendSmart",
      description: "Full-stack expense tracking application with FastAPI backend and Streamlit frontend. Features expense management, analytics dashboard, monthly insights, and MySQL database integration with comprehensive API endpoints.",
      tags: ["Python", "FastAPI", "Streamlit", "MySQL", "Full Stack", "Data Analytics", "REST API"],
      image: imgSpend,
      githubLink: "https://github.com/amalvj7/SpendSmart"
    },
    {
      title: "Fake Job Classification",
      description: ">90% accuracy classifying fake vs real job postings using TF‑IDF with Logistic Regression/Naive Bayes/Random Forest; includes job description preprocessing and a simple predictor UI.",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLTK/Spacy"],
      image: imgLinkedIn
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="pt-16 lg:pt-24 pb-32 bg-white relative"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions in machine learning, web development, and AI applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;