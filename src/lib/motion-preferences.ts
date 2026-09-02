const productionRespectsReducedMotion = process.env.NODE_ENV === "production";

export const motionAllowedMediaQuery = productionRespectsReducedMotion
  ? "(prefers-reduced-motion: no-preference)"
  : "(min-width: 0px)";

export const desktopMotionAllowedMediaQuery = productionRespectsReducedMotion
  ? "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
  : "(min-width: 1024px)";

export function shouldReduceMotion() {
  return (
    productionRespectsReducedMotion &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
