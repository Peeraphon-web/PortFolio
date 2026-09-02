"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { capabilities } from "@/data/capabilities";

export function CapabilitySystem() {
  const [activeId, setActiveId] = useState(capabilities[0].id);
  const reduceMotion = useReducedMotion();
  const activeCapability =
    capabilities.find((capability) => capability.id === activeId) ??
    capabilities[0];

  return (
    <div className="capability-system">
      <div className="capability-index" aria-label="Engineering capability areas">
        {capabilities.map((capability) => (
          <button
            key={capability.id}
            id={`capability-tab-${capability.id}`}
            type="button"
            aria-pressed={capability.id === activeCapability.id}
            aria-controls="capability-panel"
            className="capability-tab"
            onClick={() => setActiveId(capability.id)}
          >
            <span>{capability.index}</span>
            <strong>{capability.title}</strong>
          </button>
        ))}
      </div>

      <div id="capability-panel" className="capability-panel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCapability.id}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="capability-panel-kicker">
              {activeCapability.index} / {activeCapability.shortTitle}
            </p>
            <h3>{activeCapability.title}</h3>
            <p>{activeCapability.description}</p>

            <div
              className="capability-tech"
              aria-label={`${activeCapability.title} technologies`}
            >
              {activeCapability.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="capability-signals" aria-hidden="true">
              {activeCapability.signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
