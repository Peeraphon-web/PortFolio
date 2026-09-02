"use client";

import {
  useLayoutEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { getGsap } from "@/lib/gsap";
import { motionAllowedMediaQuery } from "@/lib/motion-preferences";

// Adapted from React Bits FadeContent (TypeScript + Tailwind registry variant).
// https://www.reactbits.dev/animations/fade-content
type FadeContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  blur?: boolean;
  delay?: number;
  distance?: number;
  duration?: number;
  threshold?: number;
};

export function FadeContent({
  children,
  blur = true,
  delay = 0,
  distance = 38,
  duration = 0.78,
  threshold = 0.1,
  className = "",
  ...props
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { gsap } = getGsap();
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(motionAllowedMediaQuery, () => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: distance,
            scale: 0.988,
            filter: blur ? "blur(12px)" : "blur(0px)",
            clipPath: "inset(0 0 10% 0)",
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            clipPath: "inset(0 0 0% 0)",
            duration,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: `top ${(1 - threshold) * 100}%`,
              once: true,
            },
          },
        );
      });
    }, element);

    return () => {
      media.revert();
      context.revert();
    };
  }, [blur, delay, distance, duration, threshold]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}
