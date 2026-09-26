// ============================================================
// portfolioData.js — Centralized configuration for Zawar Zohaib's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Zawar Zohaib",
  firstName: "Zawar",
  brandName: "Zawar Zohaib",
  title: "Data Scientist in Training",
  location: "Newport, Wales, UK",
  phone: "+44 7405 376702",
  emails: {
    primary: "zawarzohaib096@gmail.com",
  },
  summary:
    "MSc Data Science postgraduate at UWE Bristol with a BS in Statistics and 3+ years of professional experience in field research, survey operations, and data administration. Now adding machine learning, data engineering, and AI tooling to that foundation.",
  resumeUrl: "/Zawar_Zohaib_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/zawarmalik",
  linkedin: "https://www.linkedin.com/in/zawar-malik/",
};

export const heroContent = {
  greeting: "Hi, I'm Zawar",
  titleHighlight: "Data Scientist in Training",
  subtitle:
    "MSc Data Science @ UWE Bristol · 3+ years in field research, survey operations & data administration · Based in Newport, Wales",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:zawarzohaib096@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Zawar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Zawar_Zohaib_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `I'm a <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Data Science</span> postgraduate at the University of the West of England, Bristol, with a BS in Statistics and over three years of professional experience where data meets the real world. My career started on the ground — literally. As a Field Compliance Officer for Pakistan's national Benazir Income Support Programme, I conducted structured interviews across 500+ households, audited beneficiary records to 100% accuracy standards, and trained junior field staff. Before that, I managed a 1,000+ record emergency blood-donor database, where a workflow redesign I led cut donor-to-patient matching time by 40%. These days I'm adding machine learning, data engineering and AI tooling to that foundation — including building my own AI-powered career platform with React and the Claude API.`,
  techStack: ["Statistics", "Fieldwork", "AI Tooling"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn field data into real-world decisions",
  description:
    "I follow a structured, honest, and rigorous approach to turn raw data — surveys, interviews, datasets — into decisions people can act on.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the question, the community, and the constraints — designing survey instruments and interview protocols before collecting a single data point.",
    },
    {
      number: "02",
      title: "Collect",
      text: "Structured door-to-door interviews, compliance audits, and primary data collection — done honestly, with the people behind the data always front of mind.",
    },
    {
      number: "03",
      title: "Analyze",
      text: "Cleaning, structuring, and modelling the data — from regression and hypothesis testing in R to AI-powered analytics tools I build myself.",
    },
    {
      number: "04",
      title: "Report",
      text: "Clear, honest reporting and policy recommendations that institutions and teams can actually act on — the outcome, not just the analysis.",
    },
  ],
  endText: "Data you can trust!",
};

// Technical Skills — grouped by category, fully matching real capabilities
export const technicalSkills = {
  categories: [
    {
      title: "Machine Learning & NLP",
      skills: [
        "Python",
        "scikit-learn",
        "NLP (Word2Vec, BERT, TF-IDF)",
        "Recommender Systems (SVD)",
        "Model Evaluation (Macro-F1, Precision@K)",
      ],
    },
    {
      title: "Data Analysis & Statistics",
      skills: [
        "R",
        "pandas",
        "SQL",
        "Statistics & Hypothesis Testing",
        "Data Visualisation",
        "Excel (VLOOKUP, Pivot Tables)",
        "Data Cleaning",
      ],
    },
    {
      title: "Business & Strategy",
      skills: [
        "Market Analysis",
        "Customer Segmentation",
        "Marketing Strategy",
        "Client Management",
        "PRD Authoring & Scoping",
        "Process Mapping",
      ],
    },
    {
      title: "AI & Modern Tooling",
      skills: [
        "Claude/LLM APIs",
        "Prompt Engineering",
        "React",
        "Product Design & Wireframing",
        "Git",
      ],
    },
    {
      title: "Research & Field Operations",
      skills: [
        "Survey Design",
        "Structured Interviewing",
        "Qualitative Data Collection",
        "Compliance Auditing",
        "Data Ethics / GDPR",
      ],
    },
  ],
};

// Core Competencies — The three pillars of Project Handling, Problem Solving, and Data Interpretation
export const coreCompetencies = [
  {
    title: "Project Handling",
    icon: "📋",
    badge: "Execution & Delivery",
    points: [
      "Scoping work and writing detailed PRDs before anything is built.",
      "Managing timelines, team roles, and progress reports (led progress reporting on the Steam recommender project).",
      "Working directly with clients and business partners to translate real needs into clear delivery phases.",
    ],
  },
  {
    title: "Problem Solving",
    icon: "💡",
    badge: "Scientific Rigour",
    points: [
      "Tracing a business problem back to its root cause in the underlying data.",
      "Defending results with evidence when they defy expectations (e.g. Word2Vec + Random Forest outperforming fine-tuned BERT on imbalanced review sentiment).",
      "Building pragmatic workarounds when data is missing (synthetic samples, staged pipelines).",
    ],
  },
  {
    title: "Data Interpretation",
    icon: "📈",
    badge: "Insight & Decisions",
    points: [
      "Turning complex statistical outputs into plain-English, actionable business decisions.",
      "Choosing the right metric (prioritising macro-F1 over misleading accuracy on imbalanced datasets).",
      "Spotting data quality and survey bias early using 3+ years of ground-level field experience.",
    ],
  },
];

// Soft skills — grounded in real, cited moments from Zawar's actual experience
export const softSkillsList = [
  { name: "Compliance & Accuracy", icon: "✅", desc: "Audited 500+ household beneficiary records to 100% accuracy standards against government protocols." },
  { name: "Community Engagement", icon: "🤝", desc: "Built trust with community leaders to raise participation on sensitive survey questions." },
  { name: "Team Training", icon: "🎓", desc: "Trained junior field staff on interview technique and ethical data handling." },
  { name: "Process Redesign", icon: "⚙️", desc: "Redesigned a donor-lookup workflow end-to-end, cutting matching time by 40%." },
  { name: "Stakeholder Communication", icon: "💬", desc: "Delivered financial-literacy sessions in plain language and wrote full policy reports." },
  { name: "Adaptability", icon: "🌟", desc: "Moved from fieldwork to data administration to statistical modelling to AI tooling — picking up each skillset as needed." },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai-ml", label: "AI & Machine Learning" },
  { id: "business", label: "Business & Strategy" },
  { id: "research", label: "Fieldwork & Statistics" },
];

export const projects = [
  {
    id: "zawar-job",
    number: "01",
    badge: "🚀 Flagship Project",
    category: "ai-ml",
    title: "Zawar Job: AI Career System",
    role: "Solo Creator & AI Engineer",
    type: "Full product build (solo)",
    year: "2026",
    problem:
      "Job searching alongside a full-time MSc is slow and unscalable — generic applications get low response rates, and there's no visibility into your pipeline.",
    whatIDid: [
      "AI Recruitment Agent — an LLM agent (Claude API) that reads any UK job description, scores it 0–100 against my profile using a weighted framework (skills 35 / experience 30 / visa fit 20 / career alignment 15), then auto-generates a tailored cover letter and STAR-format interview prep.",
      "Application Tracker Dashboard — live pipeline (Saved → Applied → Interview → Offer) with response-rate analytics and colour-coded match scores.",
      "AIM Framework — my own Action → Input → Mission methodology, documented in a full Product Requirements Document I authored.",
    ],
    result:
      "Cuts per-application time from ~1 hour to ~20 minutes while enforcing a strict no-hallucination rule — the agent can never invent qualifications.",
    tech: ["React", "Claude (Anthropic) API", "Prompt Engineering", "Product Design"],
    screenshots: ["zawar-job-dashboard", "zawar-job-ai-agent", "zawar-job-tracker"],
    isFlagship: true,
  },
  {
    id: "steam-recommender",
    number: "02",
    badge: "🌟 Flagship ML",
    category: "ai-ml",
    title: "Sentiment-Weighted Game Recommender (Steam 2025)",
    role: "Data Scientist, Hybrid Recommender Lead (Team of 5)",
    type: "Machine Learning & NLP System",
    year: "2025",
    problem:
      "Star ratings and thumbs-up counts don't say why players liked a game. We wanted recommendations that take the actual review text into account.",
    whatIDid: [
      "Built the hybrid recommender: TF-IDF content-based model (baseline) combined with collaborative filtering using SVD matrix factorisation (advanced).",
      "Re-ranked recommendations using sentiment scores predicted from 37,778 reviews across 3,993 games.",
      "Evaluated with Precision@K and designed the pipeline to run on a synthetic sample until the real user data was plugged in.",
      "Worked with the team on the sentiment models: Word2Vec + Random Forest reached a macro-F1 of 0.89, beating the fine-tuned BERT model (0.80).",
    ],
    problemSolving:
      "When the professor expected BERT to win and our empirical results showed otherwise, we investigated class imbalance and overfitting, and defended the result with evidence instead of forcing the expected outcome.",
    result:
      "Delivered a production-ready hybrid recommendation engine with evidence-backed model architecture and superior macro-F1 sentiment scoring.",
    tech: ["Python", "scikit-learn", "Word2Vec", "BERT", "TF-IDF", "SVD", "pandas"],
    skills: ["Machine learning", "NLP", "Recommender systems", "Model evaluation", "Teamwork"],
    isFlagship: true,
  },
  {
    id: "gwent-digital",
    number: "03",
    badge: null,
    category: "business",
    title: "Gwent Digital: Agency Launch & Strategy",
    role: "Co-Founder & Strategy Lead",
    type: "Business Strategy & Agency Operations",
    year: "2026",
    problem:
      "A new agency with deep real-world business experience but zero initial online presence or defined market footprint.",
    whatIDid: [
      "Defined brand positioning: 'We run real businesses, analyse the data, and design strategy from it.'",
      "Organised service structures and price ranges for small businesses across Wales and the UK.",
      "Authored complete website PRDs and technical requirements for custom client solutions.",
    ],
    result:
      "Launched full operational agency framework with clear service packages and data-led client acquisition strategy.",
    skills: ["Business Strategy", "Project Scoping", "Branding", "Client Communication"],
    isFlagship: false,
  },
  {
    id: "fonetech-management",
    number: "04",
    badge: null,
    category: "business",
    title: "Fonetech Shop Management System",
    role: "Product Owner / Business Analyst",
    type: "System Architecture & PRD Design",
    year: "2025–2026",
    problem:
      "A fast-paced phone repair and resale retail shop tracking stock, repair statuses, and sales by hand on paper.",
    whatIDid: [
      "Mapped the entire shop operational workflow across inventory intake, technician assignments, repair staging, and point of sale.",
      "Wrote the comprehensive build PRD for a custom management system covering inventory, repair tracking, and financial reconciliation.",
    ],
    result:
      "Eliminated inventory leakage risks and defined a scalable digital operations blueprint ready for software engineering.",
    skills: ["Requirements Gathering", "Process Mapping", "System Design", "PRD Authoring"],
    isFlagship: false,
  },
  {
    id: "fonetech-acquisition",
    number: "05",
    badge: null,
    category: "business",
    title: "Fonetech Customer Acquisition System",
    role: "Growth Analyst & Strategy Lead",
    type: "Marketing Analytics & Growth",
    year: "2025–2026",
    problem:
      "The retail shop was overly dependent on passive walk-in foot traffic with no predictable new customer pipeline.",
    whatIDid: [
      "Designed an end-to-end customer acquisition engine combining targeted local social media campaigns with timed weekend repair offers.",
      "Implemented channel tracking mechanisms to attribute which online campaigns converted into in-store repair revenue.",
    ],
    result:
      "Transformed local footfall into a predictable acquisition funnel with measurable ROI across marketing channels.",
    skills: ["Marketing Analytics", "Funnel Thinking", "Local Growth Strategy", "Attribution"],
    isFlagship: false,
  },
  {
    id: "my-punjab",
    number: "06",
    badge: null,
    category: "business",
    title: "My Punjab Desi Kitchen: Turnaround Strategy",
    role: "Co-Owner / Strategy Consultant",
    type: "Hospitality Strategy & Revenue Turnaround",
    year: "2025–2026",
    problem:
      "A one-year-old restaurant needed higher weekly sales volume and consistent repeat patronage across weekday troughs.",
    whatIDid: [
      "Built a data-driven turnaround plan segmented around three distinct customer cohorts: university students, working professionals, and local families.",
      "Created the emotional advertising concept 'The Scent of Home (Ghar Ki Yaad)' with full scripts, timing, and social media captions.",
    ],
    result:
      "Optimised weekly sales rhythm and customer retention through targeted segment messaging and coordinated promotions.",
    skills: ["Data-Led Decision Making", "Customer Segmentation", "Stakeholder Presentation", "Campaign Strategy"],
    isFlagship: false,
  },
  {
    id: "bisp-survey",
    number: "07",
    badge: null,
    category: "research",
    title: "National Household Survey Operation (BISP)",
    role: "Field Compliance Officer & Community Interviewer",
    type: "Government field research",
    year: "2021–2023",
    problem:
      "Pakistan's largest poverty-alleviation programme needed accurate socioeconomic data from communities that are hard to reach and often distrustful of officials.",
    whatIDid: [
      "Conducted structured door-to-door interviews across 500+ households, maintaining 100% data accuracy against government protocols.",
      "Built relationships with community leaders to raise participation on sensitive questions, delivered financial-literacy sessions in plain language.",
      "Audited beneficiary records for discrepancies and trained junior field staff on interview technique and ethical data handling.",
    ],
    result:
      "Clean, compliant field data feeding directly into national programme decisions — and a personal masterclass in collecting honest data from real people.",
    skills: ["Survey Administration", "Compliance Auditing", "Community Engagement", "Team Training"],
    isFlagship: false,
  },
  {
    id: "blood-donor-db",
    number: "08",
    badge: null,
    category: "research",
    title: "Emergency Blood-Donor Database Optimisation",
    role: "Data Administrator & Coordinator",
    type: "Data administration & workflow redesign",
    year: "2020–2021",
    problem:
      "In a blood emergency, every minute matters — but donor lookups were slow and unstructured.",
    whatIDid: [
      "Restructured a 1,000+ record donor database by blood group, location and availability, and redesigned the retrieval workflow end-to-end.",
      "Screened new donors through outreach interviews and enforced strict medical-data privacy standards.",
    ],
    result:
      "Donor-to-patient matching time reduced by 40% — a data project where the outcome was measured in lives, not just KPIs.",
    skills: ["Database Administration", "Data Structuring", "Privacy Compliance", "Process Optimisation"],
    isFlagship: false,
  },
  {
    id: "student-performance",
    number: "09",
    badge: null,
    category: "research",
    title: "Predictive Student Performance Analysis",
    role: "Lead Researcher",
    type: "Statistical modelling · University research",
    year: "2023",
    problem:
      "Educational institutions struggle to identify at-risk students before final examinations when it is already too late for academic intervention.",
    whatIDid: [
      "Built a multiple-regression model in R to identify at-risk students early, achieving 85% predictive accuracy.",
      "Delivered a full written report with policy recommendations for educational institutions.",
    ],
    result:
      "A working early-warning approach institutions could act on — and a demonstration of the full modelling cycle: data cleaning → model building → validation → communication.",
    tech: ["R", "Multiple Regression", "Statistical Reporting"],
    skills: ["Regression Modelling", "Hypothesis Testing", "Data Cleaning"],
    isFlagship: false,
  },
  {
    id: "online-vs-physical-learning",
    number: "10",
    badge: null,
    category: "research",
    title: "Online vs. Physical Learning: A Comparative Study",
    role: "Principal Investigator",
    type: "End-to-end research study",
    year: "2023",
    problem:
      "Unclear institutional metrics on whether remote modalities compromised engagement compared to physical attendance.",
    whatIDid: [
      "Led a complete hypothesis-testing study comparing student engagement and institutional efficiency across learning modalities.",
      "Designed the survey instruments myself, collected primary data, ran the statistical tests, and presented findings.",
    ],
    result:
      "Proof I can own a research question from design to conclusion — not just analyse someone else's dataset.",
    skills: ["Hypothesis Testing", "Survey Instrument Design", "Primary Data Collection", "Presentation"],
    isFlagship: false,
  },
];

// Work Experience timeline
export const experienceList = [
  {
    role: "Co-Founder & Owner",
    organization: "Gwent Digital Ltd",
    location: "Newport, Wales, UK",
    duration: "2026 – Present",
    badge: "Digital Agency & Strategy",
    points: [
      "Co-founded a digital agency that builds websites, custom business tools, and data-led growth strategies for small businesses.",
      "Lead data and analytics work: sales analysis, customer insight, and performance tracking for client businesses.",
      "Scope projects, write product requirement documents (PRDs), manage delivery timelines, and deal directly with clients.",
      "Apply lessons from running our own retail and hospitality businesses directly to client strategy.",
    ],
  },
  {
    role: "Field Compliance Officer & Community Interviewer",
    organization: "Benazir Income Support Programme (Govt. of Pakistan)",
    location: "Punjab, Pakistan",
    duration: "2021 – 2023",
    badge: "Field Research & Survey Ops",
    points: [
      "Planned and ran field surveys, managed data collection teams, and quality-checked responses across 500+ households.",
      "Maintained 100% data accuracy standards against strict government compliance protocols.",
      "Administered, cleaned, and audited large beneficiary datasets for national reporting.",
      "Trained junior field staff on interview technique and ethical data handling.",
    ],
  },
  {
    role: "Data Administrator & Coordinator",
    organization: "Hayatian Blood Society",
    location: "Gujrat, Pakistan",
    duration: "2020 – 2021",
    badge: "Data Administration",
    points: [
      "Administered and cleaned a 1,000+ record emergency blood-donor database structured by blood group, location, and availability.",
      "Redesigned donor-retrieval workflow end-to-end, cutting donor-to-patient matching time by 40%.",
      "Screened new donors through structured outreach interviews while enforcing strict medical privacy standards.",
    ],
  },
];

// Education timeline
export const educationList = [
  {
    degree: "MSc Data Science",
    institution: "University of the West of England, Bristol",
    duration: "2026 – 2027",
  },
  {
    degree: "BS Statistics",
    institution: "University of Gujrat",
    duration: "2019 – 2023",
  },
];

export const footerContent = {
  taglines: [
    "Data Science & Field Research",
    "R · Python · Statistics",
    "Survey Ops & AI Analytics",
  ],
  credential: "MSc Data Science · BS Statistics",
  copyright: `© ${new Date().getFullYear()} Zawar Zohaib | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
