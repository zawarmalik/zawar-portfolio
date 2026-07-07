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

// Technical Skills — grouped by category, no invented proficiency numbers
export const technicalSkills = {
  categories: [
    {
      title: "Statistics & Analysis",
      skills: ["R", "SPSS", "Minitab", "Regression", "Hypothesis Testing", "Data Cleaning"],
    },
    {
      title: "Programming & Data",
      skills: ["Python (Pandas)", "Excel (VLOOKUP, Pivot Tables)", "Google Sheets", "SQL (learning)"],
    },
    {
      title: "Research & Fieldwork",
      skills: ["Survey Design", "Structured Interviewing", "Qualitative Data Collection", "Compliance Auditing"],
    },
    {
      title: "AI & Tools",
      skills: ["Claude/LLM APIs", "Prompt Engineering", "React (basic)", "MS Office"],
    },
    {
      title: "Professional",
      skills: ["Report Writing", "Data Protection/GDPR", "Team Training", "Stakeholder Engagement"],
    },
  ],
};

// Soft skills — grounded in real, cited moments from Zawar's actual experience
export const softSkillsList = [
  { name: "Compliance & Accuracy", icon: "✅", desc: "Audited 500+ household beneficiary records to 100% accuracy standards against government protocols." },
  { name: "Community Engagement", icon: "🤝", desc: "Built trust with community leaders to raise participation on sensitive survey questions." },
  { name: "Team Training", icon: "🎓", desc: "Trained junior field staff on interview technique and ethical data handling." },
  { name: "Process Redesign", icon: "⚙️", desc: "Redesigned a donor-lookup workflow end-to-end, cutting matching time by 40%." },
  { name: "Stakeholder Communication", icon: "💬", desc: "Delivered financial-literacy sessions in plain language and wrote full policy reports." },
  { name: "Adaptability", icon: "🌟", desc: "Moved from fieldwork to data administration to statistical modelling to AI tooling — picking up each skillset as needed." },
];

export const projects = [
  {
    id: "zawar-job",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Zawar Job: AI Career System",
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
    id: "bisp-survey",
    number: "02",
    badge: null,
    title: "National Household Survey Operation (BISP)",
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
    number: "03",
    badge: null,
    title: "Emergency Blood-Donor Database Optimisation",
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
    number: "04",
    badge: null,
    title: "Predictive Student Performance Analysis",
    type: "Statistical modelling · University research",
    year: null,
    problem: null,
    whatIDid: [
      "Built a multiple-regression model in R to identify at-risk students early, achieving 85% predictive accuracy.",
      "Delivered a full written report with policy recommendations for educational institutions.",
    ],
    result:
      "A working early-warning approach institutions could act on — and a demonstration of the full modelling cycle: data cleaning → model building → validation → communication.",
    tech: ["R", "Multiple Regression", "Statistical Reporting"],
    isFlagship: false,
  },
  {
    id: "online-vs-physical-learning",
    number: "05",
    badge: null,
    title: "Online vs. Physical Learning: A Comparative Study",
    type: "End-to-end research study",
    year: null,
    problem: null,
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
    role: "Field Compliance Officer & Community Interviewer",
    organization: "Benazir Income Support Programme (Govt. of Pakistan)",
    duration: "2021 – 2023",
    badge: "Field Research",
  },
  {
    role: "Data Administrator & Coordinator",
    organization: "Hayatian Blood Society",
    duration: "2020 – 2021",
    badge: "Data Administration",
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
