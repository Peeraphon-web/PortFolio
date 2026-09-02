"use client";

import { useEffect, useRef } from "react";

export function HeroSystem() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const render = () => {
      element.style.setProperty("--pointer-x", `${x}px`);
      element.style.setProperty("--pointer-y", `${y}px`);
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
      y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const reset = () => {
      x = 0;
      y = 0;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    element.addEventListener("pointermove", handlePointerMove, { passive: true });
    element.addEventListener("pointerleave", reset);

    return () => {
      element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerleave", reset);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="hero-diagram relative hidden aspect-square overflow-hidden border border-line bg-panel lg:block"
    >
      <div className="diagram-depth absolute inset-0">
        <div className="diagram-glow absolute inset-0" />
        <div className="diagram-frame absolute inset-7" />
        <svg className="diagram-network absolute inset-0 h-full w-full" viewBox="0 0 520 520" fill="none" role="presentation">
          <path className="diagram-route diagram-route-main" d="M65 328H149L210 220H296L371 134H457" />
          <path className="diagram-route diagram-route-secondary" d="M149 328V419M296 220V360H397" />
          <path className="diagram-route diagram-route-tertiary" d="M210 220V92H288" />
          <circle className="diagram-ring" cx="210" cy="220" r="42" />
          <circle className="diagram-ring diagram-ring-offset" cx="371" cy="134" r="25" />
          <circle className="diagram-node diagram-node-a" cx="149" cy="328" r="9" />
          <circle className="diagram-node diagram-node-b" cx="210" cy="220" r="12" />
          <circle className="diagram-node diagram-node-c" cx="371" cy="134" r="8" />
          <circle className="diagram-node diagram-node-d" cx="397" cy="360" r="8" />
          <circle className="diagram-node diagram-node-e" cx="149" cy="419" r="7" />
        </svg>
        <div className="diagram-scan absolute inset-x-7 top-1/2 h-px" />
        <div className="diagram-label diagram-label-origin absolute left-10 top-10">SYSTEM / 01</div>
        <div className="diagram-label diagram-label-sync absolute right-9 top-28">SYNC</div>
        <div className="diagram-label diagram-label-signal absolute bottom-12 left-11">SIGNAL PATH</div>
      </div>
    </div>
  );
}
