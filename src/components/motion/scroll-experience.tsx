"use client";

import { useLayoutEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { shouldReduceMotion } from "@/lib/motion-preferences";

const interactiveSelector =
  "a, button, summary, input, textarea, select, [role='button'], [data-cursor='interactive']";

export function ScrollExperience() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const percentageRef = useRef<HTMLOutputElement>(null);
  const sectionRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const cursor = cursorRef.current;
    const progress = progressRef.current;
    const percentage = percentageRef.current;
    const sectionLabel = sectionRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const { gsap, ScrollTrigger } = getGsap();

    if (!cursor || !progress || !percentage || !sectionLabel) return;

    const context = gsap.context(() => {
      const progressTrigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          progress.style.transform = `scaleY(${self.progress})`;
          percentage.value = `${Math.round(self.progress * 100)
            .toString()
            .padStart(2, "0")}%`;
        },
      });

      const labeledSections = [
        { element: document.querySelector(".hero-stage"), label: "INTRO" },
        { element: document.querySelector("#projects"), label: "WORK" },
        { element: document.querySelector("#about"), label: "PROFILE" },
        { element: document.querySelector("#contact"), label: "CONTACT" },
      ];

      labeledSections.forEach(({ element, label }) => {
        if (!element) return;

        ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            sectionLabel.textContent = label;
          },
          onEnterBack: () => {
            sectionLabel.textContent = label;
          },
        });
      });

      if (!shouldReduceMotion()) {
        gsap.to(".hero-aurora", {
          yPercent: 10,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-stage",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        gsap.to(".hero-grid", {
          yPercent: 16,
          opacity: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-stage",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        gsap.to(".hero-copy", {
          y: -42,
          opacity: 0.64,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-stage",
            start: "45% top",
            end: "bottom top",
            scrub: 0.65,
          },
        });
      }

      return () => progressTrigger.kill();
    });

    let frame = 0;
    let x = -60;
    let y = -60;

    const renderCursor = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = 0;
    };

    const setCursorSupport = () => {
      document.documentElement.classList.toggle("mac-cursor-active", finePointer.matches);
      cursor.dataset.enabled = finePointer.matches ? "true" : "false";
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!finePointer.matches) return;

      x = event.clientX;
      y = event.clientY;
      cursor.dataset.visible = "true";
      cursor.dataset.interactive =
        event.target instanceof Element && event.target.closest(interactiveSelector)
          ? "true"
          : "false";

      if (!frame) frame = window.requestAnimationFrame(renderCursor);
    };

    const handlePointerDown = () => {
      if (finePointer.matches) cursor.dataset.pressed = "true";
    };

    const handlePointerUp = () => {
      cursor.dataset.pressed = "false";
    };

    const hideCursor = () => {
      cursor.dataset.visible = "false";
      cursor.dataset.pressed = "false";
    };

    setCursorSupport();
    finePointer.addEventListener("change", setCursorSupport);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideCursor);
    window.addEventListener("blur", hideCursor);

    return () => {
      context.revert();
      document.documentElement.classList.remove("mac-cursor-active");
      finePointer.removeEventListener("change", setCursorSupport);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="mac-cursor"
        data-enabled="false"
        data-interactive="false"
        data-pressed="false"
        data-visible="false"
      >
        <span className="mac-cursor-aura" />
        <svg
          className="mac-cursor-arrow"
          viewBox="0 0 28 34"
          fill="none"
          role="presentation"
        >
          <path
            d="M2 1.7V26.4L8.4 20.2L13.2 31.7L18.1 29.6L13.2 18.5H22.1L2 1.7Z"
            fill="white"
            stroke="white"
            strokeWidth="3.4"
            strokeLinejoin="round"
          />
          <path
            d="M3.8 5.6V22.1L8.9 17.1L14.1 29.4L15.8 28.7L10.7 16.7H18L3.8 5.6Z"
            fill="#080B12"
            stroke="#080B12"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <aside className="scroll-telemetry" aria-hidden="true">
        <span ref={sectionRef} className="scroll-telemetry-section">
          INTRO
        </span>
        <span className="scroll-telemetry-track">
          <span ref={progressRef} className="scroll-telemetry-progress" />
        </span>
        <output ref={percentageRef} className="scroll-telemetry-value">
          00%
        </output>
      </aside>
    </>
  );
}
