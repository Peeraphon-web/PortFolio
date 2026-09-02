"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { motionAllowedMediaQuery } from "@/lib/motion-preferences";

// Adapted from React Bits ScrollReveal (TypeScript + Tailwind registry variant).
// https://www.reactbits.dev/text-animations/scroll-reveal
type ScrollRevealTextProps = {
  id?: string;
  text: string;
  className?: string;
};

export function ScrollRevealText({
  id,
  text,
  className = "",
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = useMemo(() => text.split(/(\s+)/), [text]);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { gsap } = getGsap();
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(motionAllowedMediaQuery, () => {
        const wordElements = element.querySelectorAll<HTMLElement>(
          ".react-bits-scroll-reveal-word",
        );

        gsap.fromTo(
          element,
          { rotate: 2.4, y: 12, transformOrigin: "0% 50%" },
          {
            rotate: 0,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "bottom 58%",
              scrub: 0.7,
            },
          },
        );

        gsap.fromTo(
          wordElements,
          { opacity: 0.1, y: 14, filter: "blur(9px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.045,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              end: "bottom 58%",
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
      className={`react-bits-scroll-reveal ${className}`}
    >
      <span aria-hidden="true">
        {words.map((word, index) =>
          /^\s+$/.test(word) ? (
            word
          ) : (
            <span className="react-bits-scroll-reveal-word" key={`${word}-${index}`}>
              {word}
            </span>
          ),
        )}
      </span>
    </h2>
  );
}
