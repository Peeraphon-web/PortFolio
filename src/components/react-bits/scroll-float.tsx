"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { motionAllowedMediaQuery } from "@/lib/motion-preferences";

// Adapted from React Bits ScrollFloat (TypeScript + Tailwind registry variant).
// https://www.reactbits.dev/text-animations/scroll-float
type ScrollFloatProps = {
  id?: string;
  text: string;
  className?: string;
};

export function ScrollFloat({ id, text, className = "" }: ScrollFloatProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const characters = useMemo(() => Array.from(text), [text]);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { gsap } = getGsap();
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(motionAllowedMediaQuery, () => {
        const characterElements = element.querySelectorAll<HTMLElement>(
          ".react-bits-scroll-float-char",
        );

        gsap.fromTo(
          characterElements,
          {
            opacity: 0,
            yPercent: 115,
            scaleY: 1.9,
            scaleX: 0.78,
            filter: "blur(8px)",
            transformOrigin: "50% 0%",
          },
          {
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            filter: "blur(0px)",
            stagger: 0.035,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "top 48%",
              scrub: 0.65,
            },
          },
        );
      });
    }, element);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <h2
      ref={ref}
      id={id}
      aria-label={text}
      className={`react-bits-scroll-float ${className}`}
    >
      <span aria-hidden="true">
        {characters.map((character, index) => (
          <span className="react-bits-scroll-float-char" key={`${character}-${index}`}>
            {character === " " ? "\u00a0" : character}
          </span>
        ))}
      </span>
    </h2>
  );
}
