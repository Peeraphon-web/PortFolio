"use client";

import { MotionConfig } from "motion/react";
import { type ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion={process.env.NODE_ENV === "production" ? "user" : "never"}
    >
      {children}
    </MotionConfig>
  );
}
