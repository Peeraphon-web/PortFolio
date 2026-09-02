"use client";

import { useLayoutEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { motionAllowedMediaQuery } from "@/lib/motion-preferences";

type TypewriterLineProps = {
  className?: string;
  text: string;
};

export function TypewriterLine({ text, className = "" }: TypewriterLineProps) {
  const outputRef = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const output = outputRef.current;
    const caret = caretRef.current;
    if (!output || !caret) return;

    const { gsap } = getGsap();
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(motionAllowedMediaQuery, () => {
        const typingState = { characters: 0 };

        output.textContent = "";
        gsap.set(caret, { autoAlpha: 1 });

        gsap.to(typingState, {
          characters: text.length,
          delay: 0.9,
          duration: 2.35,
          ease: "none",
          snap: { characters: 1 },
          onUpdate: () => {
            output.textContent = text.slice(0, typingState.characters);
          },
        });

        gsap.to(caret, {
          autoAlpha: 0,
          delay: 0.45,
          duration: 0.48,
          ease: "steps(1)",
          repeat: -1,
          yoyo: true,
        });
      });
    }, output.parentElement ?? output);

    return () => {
      media.revert();
      context.revert();
      output.textContent = text;
    };
  }, [text]);

  return (
    <p className={`typewriter-line ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="typewriter-layout">
        {text}
      </span>
      <span aria-hidden="true" className="typewriter-live">
        <span ref={outputRef}>{text}</span>
        <span ref={caretRef} className="typewriter-caret" />
      </span>
    </p>
  );
}
