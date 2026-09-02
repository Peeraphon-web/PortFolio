export type Project = {
  slug: string;
  title: string;
  classification: string;
  visual: "timetable" | "workflow";
  description: string;
  problem: string;
  solution: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  status: "Active" | "Completed" | "Private";
};

export const projects: Project[] = [
  {
    slug: "goodlife",
    title: "GoodLife",
    classification: "Student Productivity & Auto-Sync Platform",
    visual: "timetable",
    description:
      "A cross-platform productivity platform for web and Windows Desktop that brings timetable data, synchronization, and notifications into one experience.",
    problem:
      "Student schedules and university information can be fragmented across different systems.",
    solution:
      "A Next.js and Electron platform that syncs timetable information, parses Moodle calendar data, and supports smarter notifications.",
    highlights: [
      "Built for web and Windows Desktop with Next.js, TypeScript, and Electron.",
      "Engineered automated synchronization using Supabase.",
      "Fetched and parsed Moodle .ics timetable data.",
      "Integrated LINE Messaging API notifications with scheduled Cron jobs.",
      "Included AI-assisted timetable scanning capability.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Electron",
      "Supabase",
      "LINE Messaging API",
      "Cron Jobs",
    ],
    status: "Active",
  },
  {
    slug: "jodjum",
    title: "JODJUM",
    classification: "Task Management Web Application",
    visual: "workflow",
    description:
      "A modern task-management web application built around quick task creation, status tracking, updates, and cloud-backed persistence.",
    problem: "People need a simple way to organize and track daily tasks.",
    solution:
      "A focused web application centered on CRUD workflows, task state, and reliable Supabase-backed data storage.",
    highlights: [
      "Developed the application architecture with Next.js.",
      "Integrated a Supabase cloud database schema.",
      "Implemented workflows for creating, tracking, and updating daily tasks.",
      "Handled application state for the task-management experience.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Cloud deployment",
    ],
    status: "Completed",
  },
];
