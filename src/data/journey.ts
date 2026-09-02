export type JourneyStep = {
  index: string;
  title: string;
  label: string;
  description: string;
  details: string[];
};

export const journeySteps: JourneyStep[] = [
  {
    index: "01",
    title: "Foundation",
    label: "Sripatum University",
    description:
      "Building an engineering foundation through Information Technology and Computing study.",
    details: [
      "Bachelor of Science in Information Technology and Computing (CSI)",
      "GPA 3.30",
    ],
  },
  {
    index: "02",
    title: "Building",
    label: "JODJUM",
    description:
      "Applying Next.js and Supabase to a focused task-management product with CRUD workflows and application state handling.",
    details: ["Task creation", "Task tracking", "Task updates", "Cloud deployment"],
  },
  {
    index: "03",
    title: "System thinking",
    label: "GoodLife",
    description:
      "Expanding into cross-platform product architecture, synchronization, API integrations, automation, and desktop delivery.",
    details: [
      "Web and Windows Desktop",
      "Moodle .ics parsing",
      "LINE Messaging API",
      "Cron Jobs",
    ],
  },
  {
    index: "04",
    title: "Now",
    label: "Practical product development",
    description:
      "Continuing to develop software engineering capability through real product development across web, data, integrations, and desktop applications.",
    details: ["Full-stack focus", "Cross-platform work", "Automation", "Product mindset"],
  },
];
