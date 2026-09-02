"use client";

import Script from "next/script";
import { createElement, useEffect, useRef, useState } from "react";

const SPLINE_VIEWER_SRC =
  "https://cdn.spline.design/@splinetool/viewer@2.0.29/build/spline-viewer.js";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/pdjvESKFlQVUdw10/scene.splinecode";

function SplineFallback({ status }: { status: "idle" | "loading" | "error" | "reduced" }) {
  const label =
    status === "error"
      ? "Interactive scene unavailable"
      : status === "reduced"
        ? "Static system preview"
        : "Loading interactive system scene";

  return (
    <div className="spline-fallback" aria-hidden="true">
      <div className="spline-fallback-grid" />
      <div className="spline-fallback-core">
        <span />
        <i />
      </div>
      <p>{label}</p>
    </div>
  );
}

export function SplineScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scriptState, setScriptState] = useState<"idle" | "loading" | "ready" | "error">(
    "idle",
  );

  useEffect(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setPrefersReducedMotion(reduceMotionQuery.matches);

    updateReducedMotion();
    reduceMotionQuery.addEventListener("change", updateReducedMotion);

    return () => reduceMotionQuery.removeEventListener("change", updateReducedMotion);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          setScriptState("loading");
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px", threshold: 0.01 },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (scriptState !== "loading") {
      return;
    }

    const timeout = window.setTimeout(() => {
      setScriptState((current) => (current === "loading" ? "error" : current));
    }, 12000);

    return () => window.clearTimeout(timeout);
  }, [scriptState]);

  const fallbackStatus = prefersReducedMotion
    ? "reduced"
    : scriptState === "error"
      ? "error"
      : scriptState === "loading"
        ? "loading"
        : "idle";

  return (
    <div ref={rootRef} className="spline-scene" data-state={scriptState}>
      {isNearViewport && !prefersReducedMotion ? (
        <Script
          id="spline-viewer"
          src={SPLINE_VIEWER_SRC}
          strategy="lazyOnload"
          type="module"
          onReady={() => setScriptState("ready")}
          onError={() => setScriptState("error")}
        />
      ) : null}

      <SplineFallback status={fallbackStatus} />

      {scriptState === "ready" && !prefersReducedMotion
        ? (
            <div className="spline-viewer-wrap" aria-hidden="true">
              {/*
                React does not need a Spline runtime dependency here; the CDN
                script defines this custom element after idle loading.
              */}
              {createElement("spline-viewer", {
                url: SPLINE_SCENE_URL,
                loading: "lazy",
              })}
            </div>
          )
        : null}
    </div>
  );
}
