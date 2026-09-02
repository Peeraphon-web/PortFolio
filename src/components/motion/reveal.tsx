import { type ReactNode } from "react";
import { FadeContent } from "@/components/react-bits/fade-content";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: "none" | "short" | "medium";
};

export function Reveal({ children, className = "", delay = "none" }: RevealProps) {
  const delayInSeconds = delay === "medium" ? 0.16 : delay === "short" ? 0.08 : 0;

  return (
    <FadeContent
      blur
      delay={delayInSeconds}
      threshold={0.09}
      className={`reveal ${className}`}
    >
      {children}
    </FadeContent>
  );
}
