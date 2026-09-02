export type Capability = {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  description: string;
  technologies: string[];
  signals: string[];
};

export const capabilities: Capability[] = [
  {
    id: "interfaces",
    index: "01",
    title: "Product interfaces",
    shortTitle: "Interfaces",
    description:
      "Modern responsive application experiences built with React, Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    signals: ["App Router", "Responsive UI", "Typed components"],
  },
  {
    id: "data",
    index: "02",
    title: "Data-backed systems",
    shortTitle: "Data",
    description:
      "Cloud-backed application data, persistence, and serverless workflows using Supabase, PostgreSQL, and Serverless Functions.",
    technologies: ["Supabase", "PostgreSQL", "Serverless Functions", "Node.js"],
    signals: ["Persistence", "Schema design", "Backend flow"],
  },
  {
    id: "platform",
    index: "03",
    title: "Cross-platform delivery",
    shortTitle: "Desktop",
    description:
      "Web and Windows Desktop product delivery using Electron with Next.js and TypeScript.",
    technologies: ["Electron", "Next.js", "TypeScript"],
    signals: ["Web", "Windows Desktop", "Release path"],
  },
  {
    id: "automation",
    index: "04",
    title: "Integration and automation",
    shortTitle: "Automation",
    description:
      "Useful product automation through API integrations, scheduled jobs, synchronization workflows, and external data integration.",
    technologies: ["LINE Messaging API", "Cron Jobs", "Supabase", "Node.js"],
    signals: ["Notifications", "Sync workflows", "External data"],
  },
  {
    id: "delivery",
    index: "05",
    title: "Delivery and tooling",
    shortTitle: "Delivery",
    description:
      "Project delivery practices supported by Git, GitHub Releases, Vercel, and cloud deployment workflows.",
    technologies: ["Git", "GitHub Releases", "Vercel"],
    signals: ["Version control", "Cloud deployment", "Release artifacts"],
  },
];
