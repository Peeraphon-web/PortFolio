import { CapabilitySystem } from "@/components/sections/capability-system";
import { Reveal } from "@/components/motion/reveal";
import { ScrollRevealText } from "@/components/react-bits/scroll-reveal-text";
import { SplineScene } from "@/components/sections/spline-scene";
import { JourneyPath } from "@/components/sections/journey-path";

export function EngineeringProfile() {
  return (
    <section
      id="about"
      className="engineering-profile"
      aria-labelledby="about-heading"
    >
      <div className="engineering-profile-inner mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="about-editorial" delay="none">
          <div className="about-marker" aria-hidden="true">
            <span>About</span>
            <i />
          </div>
          <div>
            <ScrollRevealText
              id="about-heading"
              text="I build practical software across web, data, automation, and desktop experiences."
            />
            <p>
              I&apos;m an Information Technology and Computing student at
              Sripatum University focused on turning real workflow problems into
              useful full-stack products.
            </p>
            <p>
              My work connects product interfaces, cloud-backed data flows,
              synchronization, API integrations, scheduled automation, and
              cross-platform delivery.
            </p>
          </div>
        </Reveal>

        {/* <Reveal className="phase-four-scene" delay="short">
          <div className="phase-four-scene-copy">
            <p>Applied systems</p>
            <h2>Interface, data, sync, and delivery working together.</h2>
          </div>
          <SplineScene />
        </Reveal> */}

        <section
          id="stack"
          className="capabilities-section"
          aria-labelledby="capabilities-heading"
        >
          <Reveal className="section-lede">
            <h2 id="capabilities-heading">Engineering capabilities</h2>
            <p>
              Technologies are grouped by what they support in the product:
              interfaces, data, platform delivery, automation, and release
              workflows.
            </p>
          </Reveal>
          <Reveal delay="short">
            <CapabilitySystem />
          </Reveal>
        </section>

        <section
          className="journey-section"
          aria-labelledby="journey-heading"
        >
          <Reveal className="section-lede">
            <h2 id="journey-heading">Engineering journey</h2>
            <p>
              A concise path from university foundation into real product
              development, shown as a learning and building narrative rather
              than employment history.
            </p>
          </Reveal>
          <Reveal delay="short">
            <JourneyPath />
          </Reveal>
        </section>
      </div>
    </section>
  );
}
