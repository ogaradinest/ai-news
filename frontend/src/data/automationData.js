// 15 AI Automation Use Cases for SMBs
export const useCases = [
  {
    id: 1,
    title: "Customer Support Chatbot",
    category: "service",
    industry: ["service"],
    description: "24/7 AI-powered customer support handling FAQs, order tracking, and basic troubleshooting",
    tools: ["ChatGPT", "Claude", "Vapi"],
    roiMetrics: {
      timeSaved: "40 hrs/week",
      costReduction: "60%",
      roiMultiplier: "5x",
      paybackPeriod: "2 months"
    },
    implementation: {
      difficulty: "Easy",
      timeline: "1-2 weeks",
      cost: "$50-200/mo"
    },
    icon: "MessageSquare",
    color: "#3B82F6"
  },
  {
    id: 2,
    title: "Invoice Processing",
    category: "manufacturing",
    industry: ["manufacturing", "service"],
    description: "Automated extraction of data from invoices, POs, and receipts with validation",
    tools: ["ChatGPT", "n8n", "Zapier"],
    roiMetrics: {
      timeSaved: "20 hrs/week",
      costReduction: "75%",
      roiMultiplier: "8x",
      paybackPeriod: "1 month"
    },
    implementation: {
      difficulty: "Medium",
      timeline: "2-3 weeks",
      cost: "$100-300/mo"
    },
    icon: "FileText",
    color: "#10B981"
  },
  {
    id: 3,
    title: "Email Marketing Automation",
    category: "service",
    industry: ["service"],
    description: "AI-generated personalized email campaigns with smart segmentation and A/B testing",
    tools: ["ChatGPT", "Claude", "Zapier"],
    roiMetrics: {
      timeSaved: "15 hrs/week",
      costReduction: "50%",
      roiMultiplier: "6x",
      paybackPeriod: "2 months"
    },
    implementation: {
      difficulty: "Easy",
      timeline: "1 week",
      cost: "$30-150/mo"
    },
    icon: "Mail",
    color: "#8B5CF6"
  },
  {
    id: 4,
    title: "Quality Control Vision",
    category: "manufacturing",
    industry: ["manufacturing"],
    description: "Computer vision for defect detection on production lines with real-time alerts",
    tools: ["OpenClaw", "ChatGPT", "n8n"],
    roiMetrics: {
      timeSaved: "30 hrs/week",
      costReduction: "80%",
      roiMultiplier: "12x",
      paybackPeriod: "3 months"
    },
    implementation: {
      difficulty: "Hard",
      timeline: "4-6 weeks",
      cost: "$500-1500/mo"
    },
    icon: "Eye",
    color: "#F59E0B"
  },
  {
    id: 5,
    title: "Meeting Transcription & Summary",
    category: "service",
    industry: ["service", "manufacturing"],
    description: "Auto-transcribe meetings, extract action items, and generate follow-up emails",
    tools: ["ElevenLabs", "ChatGPT", "Zapier"],
    roiMetrics: {
      timeSaved: "10 hrs/week",
      costReduction: "90%",
      roiMultiplier: "10x",
      paybackPeriod: "1 month"
    },
    implementation: {
      difficulty: "Easy",
      timeline: "1 week",
      cost: "$20-80/mo"
    },
    icon: "Mic",
    color: "#EF4444"
  },
  {
    id: 6,
    title: "Inventory Forecasting",
    category: "manufacturing",
    industry: ["manufacturing"],
    description: "AI-powered demand prediction and inventory optimization to reduce stockouts",
    tools: ["ChatGPT", "n8n", "Emergent"],
    roiMetrics: {
      timeSaved: "25 hrs/week",
      costReduction: "40%",
      roiMultiplier: "7x",
      paybackPeriod: "3 months"
    },
    implementation: {
      difficulty: "Hard",
      timeline: "4-8 weeks",
      cost: "$300-800/mo"
    },
    icon: "Package",
    color: "#06B6D4"
  },
  {
    id: 7,
    title: "Social Media Content",
    category: "service",
    industry: ["service"],
    description: "Generate, schedule, and analyze social media posts across all platforms",
    tools: ["ChatGPT", "Claude", "Zapier"],
    roiMetrics: {
      timeSaved: "20 hrs/week",
      costReduction: "70%",
      roiMultiplier: "4x",
      paybackPeriod: "1 month"
    },
    implementation: {
      difficulty: "Easy",
      timeline: "1 week",
      cost: "$50-200/mo"
    },
    icon: "Share2",
    color: "#EC4899"
  },
  {
    id: 8,
    title: "Lead Qualification",
    category: "service",
    industry: ["service"],
    description: "AI scoring and routing of leads based on behavior, demographics, and intent",
    tools: ["ChatGPT", "Vapi", "n8n"],
    roiMetrics: {
      timeSaved: "30 hrs/week",
      costReduction: "55%",
      roiMultiplier: "9x",
      paybackPeriod: "2 months"
    },
    implementation: {
      difficulty: "Medium",
      timeline: "2-3 weeks",
      cost: "$100-400/mo"
    },
    icon: "UserCheck",
    color: "#14B8A6"
  },
  {
    id: 9,
    title: "Predictive Maintenance",
    category: "manufacturing",
    industry: ["manufacturing"],
    description: "Sensor data analysis to predict equipment failures before they happen",
    tools: ["n8n", "ChatGPT", "Emergent"],
    roiMetrics: {
      timeSaved: "50 hrs/week",
      costReduction: "70%",
      roiMultiplier: "15x",
      paybackPeriod: "4 months"
    },
    implementation: {
      difficulty: "Hard",
      timeline: "6-10 weeks",
      cost: "$800-2000/mo"
    },
    icon: "Settings",
    color: "#F97316"
  },
  {
    id: 10,
    title: "Document Generation",
    category: "service",
    industry: ["service", "manufacturing"],
    description: "Auto-generate contracts, proposals, reports, and legal documents from templates",
    tools: ["ChatGPT", "Claude", "Zapier"],
    roiMetrics: {
      timeSaved: "15 hrs/week",
      costReduction: "65%",
      roiMultiplier: "5x",
      paybackPeriod: "1 month"
    },
    implementation: {
      difficulty: "Easy",
      timeline: "1-2 weeks",
      cost: "$30-100/mo"
    },
    icon: "FileEdit",
    color: "#6366F1"
  },
  {
    id: 11,
    title: "Voice AI Receptionist",
    category: "service",
    industry: ["service"],
    description: "AI phone system that handles calls, schedules appointments, and answers questions",
    tools: ["Vapi", "ElevenLabs", "ChatGPT"],
    roiMetrics: {
      timeSaved: "40 hrs/week",
      costReduction: "75%",
      roiMultiplier: "8x",
      paybackPeriod: "2 months"
    },
    implementation: {
      difficulty: "Medium",
      timeline: "2-4 weeks",
      cost: "$150-500/mo"
    },
    icon: "Phone",
    color: "#22C55E"
  },
  {
    id: 12,
    title: "Supply Chain Optimization",
    category: "manufacturing",
    industry: ["manufacturing"],
    description: "AI analysis of supplier performance, logistics, and procurement decisions",
    tools: ["ChatGPT", "n8n", "Emergent"],
    roiMetrics: {
      timeSaved: "35 hrs/week",
      costReduction: "45%",
      roiMultiplier: "6x",
      paybackPeriod: "4 months"
    },
    implementation: {
      difficulty: "Hard",
      timeline: "6-8 weeks",
      cost: "$400-1200/mo"
    },
    icon: "Truck",
    color: "#0EA5E9"
  },
  {
    id: 13,
    title: "HR Onboarding Assistant",
    category: "service",
    industry: ["service", "manufacturing"],
    description: "Automated employee onboarding with document collection, training, and Q&A",
    tools: ["ChatGPT", "Zapier", "n8n"],
    roiMetrics: {
      timeSaved: "20 hrs/week",
      costReduction: "60%",
      roiMultiplier: "4x",
      paybackPeriod: "2 months"
    },
    implementation: {
      difficulty: "Medium",
      timeline: "2-3 weeks",
      cost: "$100-300/mo"
    },
    icon: "Users",
    color: "#A855F7"
  },
  {
    id: 14,
    title: "Workflow Automation Agent",
    category: "service",
    industry: ["service", "manufacturing"],
    description: "AI agents that handle complex multi-step workflows across tools and systems",
    tools: ["Emergent", "n8n", "ChatGPT"],
    roiMetrics: {
      timeSaved: "45 hrs/week",
      costReduction: "80%",
      roiMultiplier: "11x",
      paybackPeriod: "2 months"
    },
    implementation: {
      difficulty: "Medium",
      timeline: "3-4 weeks",
      cost: "$200-600/mo"
    },
    icon: "Workflow",
    color: "#3B82F6"
  },
  {
    id: 15,
    title: "Data Analytics Dashboard",
    category: "manufacturing",
    industry: ["service", "manufacturing"],
    description: "AI-powered business intelligence with natural language queries and insights",
    tools: ["ChatGPT", "Claude", "Emergent"],
    roiMetrics: {
      timeSaved: "25 hrs/week",
      costReduction: "50%",
      roiMultiplier: "6x",
      paybackPeriod: "3 months"
    },
    implementation: {
      difficulty: "Medium",
      timeline: "3-5 weeks",
      cost: "$200-500/mo"
    },
    icon: "BarChart3",
    color: "#84CC16"
  }
];

// Tool comparison data
export const tools = [
  {
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    category: "LLM",
    pricing: {
      free: true,
      starter: "$20/mo",
      pro: "$200/mo"
    },
    bestFor: ["Content Generation", "Analysis", "Coding"],
    rating: 4.8,
    color: "#10A37F"
  },
  {
    name: "Claude",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Claude_AI_logo.svg",
    category: "LLM",
    pricing: {
      free: true,
      starter: "$20/mo",
      pro: "$100/mo"
    },
    bestFor: ["Long Documents", "Analysis", "Research"],
    rating: 4.7,
    color: "#CC785C"
  },
  {
    name: "Zapier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Zapier_logo.svg",
    category: "Automation",
    pricing: {
      free: true,
      starter: "$29/mo",
      pro: "$73/mo"
    },
    bestFor: ["App Integration", "Workflows", "No-Code"],
    rating: 4.6,
    color: "#FF4A00"
  },
  {
    name: "n8n",
    logo: null,
    category: "Automation",
    pricing: {
      free: true,
      starter: "$20/mo",
      pro: "$50/mo"
    },
    bestFor: ["Self-Hosted", "Complex Workflows", "Developers"],
    rating: 4.5,
    color: "#EA4B71"
  },
  {
    name: "Vapi",
    logo: null,
    category: "Voice AI",
    pricing: {
      free: false,
      starter: "$0.05/min",
      pro: "Custom"
    },
    bestFor: ["Voice Agents", "Phone Bots", "Real-time"],
    rating: 4.4,
    color: "#6366F1"
  },
  {
    name: "ElevenLabs",
    logo: null,
    category: "Voice AI",
    pricing: {
      free: true,
      starter: "$5/mo",
      pro: "$99/mo"
    },
    bestFor: ["Voice Cloning", "TTS", "Audio Content"],
    rating: 4.7,
    color: "#1E1E1E"
  },
  {
    name: "OpenClaw",
    logo: null,
    category: "Vision AI",
    pricing: {
      free: false,
      starter: "$49/mo",
      pro: "$199/mo"
    },
    bestFor: ["Image Analysis", "OCR", "Quality Control"],
    rating: 4.3,
    color: "#0891B2"
  },
  {
    name: "Emergent",
    logo: null,
    category: "AI Platform",
    pricing: {
      free: true,
      starter: "$29/mo",
      pro: "$99/mo"
    },
    bestFor: ["AI Agents", "Full-Stack Apps", "Automation"],
    rating: 4.8,
    color: "#8B5CF6"
  }
];

// Implementation checklist
export const implementationChecklist = [
  {
    phase: "Discovery",
    duration: "Week 1",
    tasks: [
      "Identify pain points and manual processes",
      "Calculate current time and cost per task",
      "Define success metrics and KPIs",
      "Get stakeholder buy-in"
    ]
  },
  {
    phase: "Selection",
    duration: "Week 2",
    tasks: [
      "Evaluate tools against requirements",
      "Request demos and trial accounts",
      "Check integration compatibility",
      "Compare pricing models"
    ]
  },
  {
    phase: "Setup",
    duration: "Week 3-4",
    tasks: [
      "Configure tool accounts and API keys",
      "Build initial automation workflows",
      "Set up monitoring and alerts",
      "Create documentation"
    ]
  },
  {
    phase: "Testing",
    duration: "Week 5",
    tasks: [
      "Run pilot with small data set",
      "Validate outputs and accuracy",
      "Gather user feedback",
      "Refine prompts and logic"
    ]
  },
  {
    phase: "Launch",
    duration: "Week 6",
    tasks: [
      "Roll out to full team",
      "Train employees on new workflows",
      "Monitor performance metrics",
      "Iterate based on results"
    ]
  }
];

// Stats for hero section
export const heroStats = [
  { value: "15", label: "Use Cases", suffix: "+" },
  { value: "60", label: "Avg Cost Reduction", suffix: "%" },
  { value: "8", label: "Tools Compared", suffix: "" },
  { value: "6", label: "Week Implementation", suffix: "" }
];
