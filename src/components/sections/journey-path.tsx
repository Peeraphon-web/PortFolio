"use client";

import { useEffect, useRef } from "react";
import { journeySteps } from "@/data/journey";

export function JourneyPath() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const steps = Array.from(root.querySelectorAll<HTMLElement>(".journey-step"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.dataset.active = "true";
          }
        });
      },
      { rootMargin: "-18% 0px -28% 0px", threshold: 0.1 },
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="journey-path">
      {journeySteps.map((step) => (
        <article key={step.index} className="journey-step">
          <div className="journey-step-index">{step.index}</div>
          <div className="journey-step-copy">
            <p>{step.label}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <div className="journey-step-details">
              {step.details.map((detail) => (
                <span key={detail}>{detail}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
