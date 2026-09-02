import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/reveal";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { EngineeringProfile } from "@/components/sections/engineering-profile";
import { HeroSection } from "@/components/sections/hero-section";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <HeroSection />

      <FeaturedProjects />

      <EngineeringProfile />

      <section id="contact" className="contact-finale px-5 py-24 md:px-8">
        <Reveal className="contact-finale-inner mx-auto max-w-6xl">
          <div className="contact-finale-route" aria-hidden="true">
            <span />
            <i />
            <b />
          </div>
          <div className="contact-finale-copy">
            <h2>Let&apos;s build something together.</h2>
            <p>Bring a practical problem, a product idea, or a system worth making clearer.</p>
          </div>
          <a className="contact-finale-link" href={`mailto:${profile.email}`}>
            <span>{profile.email}</span>
            <i aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <footer className="site-footer px-5 py-7 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>{profile.name}</span>
          <span>Software Engineer / Full-stack Developer</span>
        </div>
      </footer>
      </main>
    </>
  );
}
