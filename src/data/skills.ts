import { capabilities } from "@/data/capabilities";

export const skillGroups = capabilities.map((capability) => ({
  title: capability.title,
  items: capability.technologies,
}));
