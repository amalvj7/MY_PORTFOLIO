import imgCreditRisk from "@/assets/thumbnails/credit_risk.svg";
import imgFlipkart from "@/assets/thumbnails/flipkart_chatbot.svg";
import imgCarCrash from "@/assets/thumbnails/car_crash.svg";
import imgLogClassifier from "@/assets/thumbnails/log_classifier.svg";
import imgMedical from "@/assets/Medical.jpg";

export interface TechStackRow {
  component: string;
  technology: string;
}

export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  tags: string[];
  image: string;
  githubLink: string;
  overview: string;
  features: string[];
  techStack?: TechStackRow[];
  modelNote?: string;
  categories?: string[];
  setupSteps?: string[];
}

export const projects: ProjectData[] = [
  {
    id: "credit-card-risk-prediction",
    title: "Credit Card Risk Prediction",
    shortDescription:
      "ML pipeline predicting credit default probability using multi-bureau historical data, WoE/IV feature selection, and XGBoost with Optuna hyperparameter tuning.",
    tags: ["Python", "XGBoost", "Logistic Regression", "Optuna", "SMOTE", "Pandas", "Scikit-learn"],
    image: imgCreditRisk,
    githubLink: "https://github.com/amalvj7/credit-card-risk-model",
    overview:
      "A credit risk modeling project built from scratch to predict the likelihood that a customer will default on a loan or credit product. The pipeline integrates three data sources — loan-level data, customer profiles, and bureau credit history — through a rigorous EDA, feature engineering, and model selection workflow. The final artifact is a serialized model ready for inference.",
    features: [
      "Exploratory Data Analysis (EDA) with pandas, seaborn, and matplotlib",
      "Data cleaning: missing values, duplicates, and inconsistent category handling",
      "Feature engineering: ratios, delinquency-related signals, bureau aggregates",
      "Feature selection using VIF, Weight of Evidence (WoE), and Information Value (IV)",
      "Scaling and normalization with MinMaxScaler",
      "Class imbalance handling: RandomUnderSampler and SMOTETomek",
      "Model training: Logistic Regression, Random Forest, XGBoost",
      "Hyperparameter tuning with RandomizedSearchCV and Optuna",
      "Evaluation: classification report, ROC-AUC, KS statistic, Gini coefficient, rank ordering",
      "Serialized model artifact via joblib for deployment",
    ],
    techStack: [
      { component: "Language", technology: "Python 3.10+" },
      { component: "Data Processing", technology: "Pandas, NumPy" },
      { component: "Visualization", technology: "Matplotlib, Seaborn" },
      { component: "ML Models", technology: "Logistic Regression, Random Forest, XGBoost" },
      { component: "Tuning", technology: "Optuna, RandomizedSearchCV" },
      { component: "Imbalance", technology: "imbalanced-learn (SMOTE, RUS)" },
      { component: "Notebook", technology: "Jupyter Notebook" },
      { component: "Serialization", technology: "Joblib" },
    ],
  },
  {
    id: "flipkart-ecommerce-chatbot",
    title: "Flipkart E-Commerce Chatbot",
    shortDescription:
      "AI-powered chatbot that answers platform FAQs via RAG and handles natural language product searches by generating and executing SQL queries — with smart intent routing.",
    tags: ["Python", "Streamlit", "Groq", "LLaMA 3.3", "ChromaDB", "Semantic Router", "SQLite"],
    image: imgFlipkart,
    githubLink: "https://github.com/amalvj7/FLIPKART_COMMEREC_CHATBOT",
    overview:
      "An AI-powered e-commerce chatbot that handles two distinct intents: answering frequently asked questions using Retrieval-Augmented Generation over a ChromaDB knowledge base, and processing natural language product searches by converting them to SQL and querying a product database. Semantic Router classifies every incoming message and directs it to the correct pipeline, powered by LLaMA 3.3 70B via Groq.",
    features: [
      "FAQ intent: RAG pipeline over a FAQ knowledge base stored in ChromaDB",
      "SQL intent: natural language → SQL generation → SQLite execution → human-readable response",
      "Smart routing via Semantic Router to auto-classify user queries",
      "Sentence Transformers (all-MiniLM-L6-v2) for embedding and retrieval",
      "Streamlit frontend for a clean, interactive chat experience",
      "Modular architecture: separate modules for FAQ, SQL, and routing logic",
    ],
    techStack: [
      { component: "Frontend", technology: "Streamlit" },
      { component: "LLM", technology: "LLaMA 3.3 70B via Groq" },
      { component: "Vector Store", technology: "ChromaDB" },
      { component: "Embeddings", technology: "Sentence Transformers (all-MiniLM-L6-v2)" },
      { component: "Intent Routing", technology: "Semantic Router" },
      { component: "Product Database", technology: "SQLite" },
    ],
  },
  {
    id: "car-crash-damage-classifier",
    title: "Car Crash Damage Classifier",
    shortDescription:
      "Deep learning system classifying vehicle damage into 6 categories (front/rear × breakage/crushed/normal) using fine-tuned ResNet50 with a Streamlit web interface.",
    tags: ["Python", "PyTorch", "ResNet50", "Transfer Learning", "Streamlit", "Computer Vision"],
    image: imgCarCrash,
    githubLink: "https://github.com/amalvj7/CAR_CRASH_DAMAGE_CLASSIFIER",
    overview:
      "A deep learning-based vehicle damage detection and classification system that uses transfer learning on ResNet50 to distinguish six damage categories from car images. The model fine-tunes Layer4 and the final FC layer on a custom dataset, with a lightweight Streamlit web app allowing users to upload an image and receive an instant damage classification.",
    features: [
      "6-class classification: Front/Rear × Breakage / Crushed / Normal",
      "Transfer learning on pre-trained ResNet50 (ImageNet weights)",
      "Fine-tuning: Layer4 and custom FC layer with Dropout(0.2)",
      "Hyperparameter tuning notebook for systematic optimization",
      "Streamlit web app for easy image upload and live prediction",
      "Preprocessing: 224×224 resizing, ImageNet mean/std normalization",
      "Model weights serialized to .pth for reproducibility",
    ],
    categories: [
      "Front Breakage",
      "Front Crushed",
      "Front Normal",
      "Rear Breakage",
      "Rear Crushed",
      "Rear Normal",
    ],
    techStack: [
      { component: "Framework", technology: "PyTorch 2.0+" },
      { component: "Base Model", technology: "ResNet50 (torchvision)" },
      { component: "Frontend", technology: "Streamlit" },
      { component: "Image Processing", technology: "Pillow, torchvision transforms" },
      { component: "Tuning Notebook", technology: "Jupyter Notebook" },
      { component: "Language", technology: "Python 3.8+" },
    ],
  },
  {
    id: "hybrid-log-classifier",
    title: "Log Classification Framework",
    shortDescription:
      "Hybrid log classification combining Regex for structured patterns, Sentence Transformer + Logistic Regression for complex data, and LLM fallback for poorly-labeled entries — served via FastAPI.",
    tags: ["Python", "FastAPI", "NLP", "Sentence Transformers", "Logistic Regression", "LLM"],
    image: imgLogClassifier,
    githubLink: "https://github.com/amalvj7/NLP_LLM_LOGCLASSIFIER",
    overview:
      "A hybrid log classification system that intelligently routes log entries through three complementary approaches depending on pattern complexity and data availability. The system is exposed as a REST API (FastAPI) that accepts CSV uploads with source and log_message columns, and returns the same file enriched with a predicted target_label column.",
    features: [
      "Tier 1 — Regex: fast rule-based classification for structured, predictable patterns",
      "Tier 2 — Sentence Transformer + Logistic Regression: embedding-based ML for complex patterns with sufficient labeled data",
      "Tier 3 — LLM fallback: zero-shot inference for novel or poorly-labeled patterns",
      "FastAPI REST endpoint: POST CSV → receive labeled CSV",
      "Swagger UI and ReDoc documentation at /docs and /redoc",
      "Modular training scripts for Sentence Transformer embeddings and LR model",
      "Serialized model artifacts for production-ready inference",
    ],
    techStack: [
      { component: "API", technology: "FastAPI + Uvicorn" },
      { component: "Tier 1", technology: "Regular Expressions" },
      { component: "Tier 2 Embeddings", technology: "Sentence Transformers" },
      { component: "Tier 2 Classifier", technology: "Logistic Regression (Scikit-learn)" },
      { component: "Tier 3", technology: "LLM (zero-shot)" },
      { component: "Language", technology: "Python 3.10+" },
    ],
  },
  {
    id: "medical-ai-agent",
    title: "Medical AI Agent",
    shortDescription:
      "Multidisciplinary AI consultation system using Google Gemini. Simulates concurrent specialist consultations across Cardiology, Psychology, and Pulmonology for comprehensive patient assessments.",
    tags: ["Python", "Google Gemini AI", "Multi-Agent", "Healthcare AI", "Concurrent Processing"],
    image: imgMedical,
    githubLink: "https://github.com/amalvj7/MEDICAL_AI_AGENT",
    overview:
      "An AI-powered medical analysis system that simulates a panel of specialist consultations using Google's Gemini AI. When a patient case is submitted, three independent AI agents — Cardiologist, Psychologist, and Pulmonologist — analyze it concurrently, then a synthesizer agent combines their findings into a unified medical report. Designed for educational and demonstration purposes.",
    features: [
      "Multi-specialist simulation: Cardiologist, Psychologist, Pulmonologist agents",
      "Concurrent processing: all specialist agents run in parallel for fast responses",
      "Synthesis agent: consolidates all specialist outputs into a comprehensive report",
      "Powered by Google Gemini AI for high-quality medical reasoning",
      "Modular agent architecture for easy specialist addition or replacement",
      "Designed for educational and portfolio demonstration purposes",
    ],
    techStack: [
      { component: "AI Model", technology: "Google Gemini AI" },
      { component: "Architecture", technology: "Multi-Agent System" },
      { component: "Concurrency", technology: "Python asyncio / threading" },
      { component: "Language", technology: "Python 3.10+" },
    ],
  },
];
