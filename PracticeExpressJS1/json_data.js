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




const shoppingOrder = {
  orderId: "ORD-20261118-8492",
  status: "shipped", // e.g., "pending", "processing", "shipped", "delivered", "cancelled"
  createdAt: "2026-11-18T09:15:00Z",
  currency: "USD",

  customer: {
    customerId: "CUST-1042",
    firstName: "Ayesha",
    lastName: "Khan",
    email: "ayesha.khan@example.com",
    phone: "+92-300-1234567"
  },

  items: [
    {
      productId: "PROD-501",
      sku: "WH-1000XM5-BLK",
      name: "Wireless Noise-Cancelling Headphones",
      quantity: 1,
      unitPrice: 349.99,
      subtotal: 349.99
    },
    {
      productId: "PROD-812",
      sku: "USBC-CBL-2M",
      name: "Braided USB-C Charging Cable (2m)",
      quantity: 2,
      unitPrice: 15.00,
      subtotal: 30.00
    }
  ],

  pricing: {
    itemsSubtotal: 379.99,
    shippingCost: 10.00,
    taxAmount: 19.00,
    discountAmount: 20.00,
    promoCode: "WELCOME20",
    grandTotal: 388.99
  },

  shipping: {
    method: "Express Courier",
    carrier: "TCS Express",
    trackingNumber: "TRK992837465",
    estimatedDelivery: "2026-11-21",
    address: {
      street: "Block 7, Gulshan-e-Iqbal",
      city: "Karachi",
      state: "Sindh",
      postalCode: "75300",
      country: "Pakistan"
    }
  },

  payment: {
    method: "credit_card", // e.g., "credit_card", "cod", "wallet"
    status: "paid",
    transactionId: "TXN-774839201",
    cardBrand: "Visa",
    last4Digits: "4242"
  }
};

module.exports = { projectData, shoppingOrder };

// module.exports = projectData;
