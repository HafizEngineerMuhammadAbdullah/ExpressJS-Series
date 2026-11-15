const projectData = {
  overall: {
    totalProjects: 6,
    activeProjects: 5,
    completedProjects: 1,
    totalTeamMembers: 19,
    projectManagers: 6,
    categories: {
      websites: 1,
      ai: 1,
      ml: 1,
      agentic_ai: 1,
      rag: 1,
      data_science: 1
    },
    averageTeamSize: 3.17
  },
  projects: [
    {
      projectId: "PRJ-WEB-101",
      name: "Corporate Website Redesign",
      category: "Websites",
      status: "In Progress",
      projectManager: "Ayesha Khan",
      teamMembers: [
        "Hamza Ali",
        "Maira Noor",
        "Usman Tariq",
        "Sara Imran"
      ],
      description: "Modernize the company website with better UI/UX, responsive pages, and conversion-focused design.",
      startDate: "2026-01-10",
      endDate: "2026-03-25"
    },
    {
      projectId: "PRJ-AI-202",
      name: "AI Chat Assistant",
      category: "AI",
      status: "In Progress",
      projectManager: "Bilal Ahmed",
      teamMembers: [
        "Noor Fatima",
        "Ali Raza",
        "Hassan Iqbal"
      ],
      description: "Build an AI-powered support assistant for customer queries and internal knowledge retrieval.",
      startDate: "2026-02-01",
      endDate: "2026-05-18"
    },
    {
      projectId: "PRJ-ML-303",
      name: "Demand Forecast Model",
      category: "Machine Learning",
      status: "Review",
      projectManager: "Sana Mehmood",
      teamMembers: [
        "Taha Malik",
        "Rimsha Qureshi",
        "Faisal Ahmed",
        "Areeba Tariq"
      ],
      description: "Develop an ML forecasting model to predict product demand and reduce inventory risks.",
      startDate: "2025-12-15",
      endDate: "2026-04-10"
    },
    {
      projectId: "PRJ-AGI-404",
      name: "Agentic Workflow Platform",
      category: "Agentic AI",
      status: "In Progress",
      projectManager: "Omer Farooq",
      teamMembers: [
        "Zainab Shafi",
        "Adnan Ali",
        "Muneeb Khan",
        "Hira Bukhari"
      ],
      description: "Create an autonomous workflow system where AI agents coordinate tasks across departments.",
      startDate: "2026-01-20",
      endDate: "2026-06-30"
    },
    {
      projectId: "PRJ-RAG-505",
      name: "Enterprise RAG Knowledge Base",
      category: "RAG",
      status: "Completed",
      projectManager: "Maryam Siddiqui",
      teamMembers: [
        "Ibrahim Shah",
        "Maham Javed",
        "Noman Riaz"
      ],
      description: "Deploy a retrieval augmented generation system that improves enterprise document search and Q&A.",
      startDate: "2025-10-01",
      endDate: "2026-01-15"
    },
    {
      projectId: "PRJ-DS-606",
      name: "Data Science Analytics Suite",
      category: "Data Science",
      status: "In Progress",
      projectManager: "Khalid Hussain",
      teamMembers: [
        "Javeria Ali",
        "Talha Nadeem",
        "Ayan Sheikh",
        "Eman Zaidi",
        "Sameer Khan"
      ],
      description: "Build a data analytics suite for customer insights, anomaly detection, and executive dashboards.",
      startDate: "2026-02-18",
      endDate: "2026-07-05"
    }
  ]
};

module.exports = projectData;
