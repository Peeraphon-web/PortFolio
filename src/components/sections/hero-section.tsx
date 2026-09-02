import { profile } from "@/data/profile";
import { HeroSystem } from "@/components/sections/hero-system";

export function HeroSection() {
  return (
    <section className="hero-stage relative isolate flex min-h-[46rem] px-5 pb-16 pt-28 md:min-h-screen md:px-8 md:pb-20 md:pt-32 lg:pt-36">
      <div
        aria-hidden="true"
        className="hero-aurora absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(135,206,250,0.22),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_28%),linear-gradient(180deg,#05070d_0%,#08101e_52%,#05070d_100%)]"
      />
      <div
        aria-hidden="true"
        className="hero-grid absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(135,206,250,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(135,206,250,0.12)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <div className="hero-layout mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="hero-copy">
          <p className="hero-line hero-line-1 font-mono text-sm uppercase tracking-[0.32em] text-accent">
            {profile.title}
          </p>
          <h1 className="hero-line hero-line-2 mt-7 max-w-4xl text-5xl font-semibold leading-none md:mt-8 md:text-7xl lg:text-8xl">
            {profile.name.toUpperCase()}
          </h1>
          <p className="hero-line hero-line-3 mt-10 max-w-2xl text-lg leading-8 text-muted md:mt-12 md:text-xl">
            I build digital products that turn real problems into useful
            experiences.
          </p>
          <div className="hero-line hero-line-4 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center bg-accent px-5 font-semibold text-[#05111f] transition hover:bg-accent-strong"
            >
              View featured projects
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center border border-line px-5 font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              Contact Peeraphon
            </a>
          </div>

          <div aria-hidden="true" className="hero-mobile-system mt-12 lg:hidden">
            <svg viewBox="0 0 360 116" fill="none" role="presentation">
              <path className="mobile-system-path" d="M8 75H72L108 35H190L228 75H352" />
              <path className="mobile-system-path mobile-system-path-secondary" d="M42 106V76M190 35V9M286 75V108" />
              <circle className="mobile-system-node mobile-system-node-a" cx="72" cy="75" r="5" />
              <circle className="mobile-system-node mobile-system-node-b" cx="190" cy="35" r="6" />
              <circle className="mobile-system-node mobile-system-node-c" cx="286" cy="75" r="5" />
            </svg>
          </div>
        </div>

        <HeroSystem />
      </div>
    </section>
  );
}
