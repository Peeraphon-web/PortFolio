"use client";

import { useLayoutEffect, useRef } from "react";
import { projects, type Project } from "@/data/projects";
import { getGsap } from "@/lib/gsap";

function GoodLifeVisual() {
  return (
    <div aria-hidden="true" className="project-visual project-visual-goodlife">
      <div className="project-visual-caption">Editorial system study / timetable sync</div>
      <div className="goodlife-calendar">
        <div className="goodlife-calendar-top"><span>WEB</span><span>DESKTOP</span></div>
        <div className="goodlife-calendar-grid">
          <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
          <b className="calendar-block calendar-block-one" />
          <b className="calendar-block calendar-block-two" />
          <b className="calendar-block calendar-block-three" />
        </div>
      </div>
      <svg className="goodlife-sync" viewBox="0 0 560 420" fill="none" role="presentation">
        <path className="sync-path sync-path-primary" d="M74 301H204L282 210H394L478 126" />
        <path className="sync-path sync-path-secondary" d="M204 301V357M394 210V301H487" />
        <circle className="sync-node sync-node-a" cx="204" cy="301" r="8" />
        <circle className="sync-node sync-node-b" cx="282" cy="210" r="11" />
        <circle className="sync-node sync-node-c" cx="394" cy="210" r="8" />
        <circle className="sync-node sync-node-d" cx="487" cy="301" r="7" />
      </svg>
      <div className="goodlife-signal goodlife-signal-one">.ics</div>
      <div className="goodlife-signal goodlife-signal-two">SYNC</div>
      <div className="goodlife-signal goodlife-signal-three">LINE</div>
    </div>
  );
}

function JodjumVisual() {
  return (
    <div aria-hidden="true" className="project-visual project-visual-jodjum">
      <div className="project-visual-caption">Editorial system study / task state</div>
      <div className="jodjum-flow">
        <div className="jodjum-lane"><span>CREATE</span><i /><i className="task-mark" /><i /></div>
        <div className="jodjum-lane"><span>TRACK</span><i /><i /><i className="task-mark" /></div>
        <div className="jodjum-lane"><span>UPDATE</span><i className="task-mark" /><i /><i /></div>
      </div>
      <svg className="jodjum-routing" viewBox="0 0 560 360" fill="none" role="presentation">
        <path d="M108 106H186L244 180H310L369 254H463" />
        <path d="M186 106V40M310 180V105M369 254V316" />
        <circle cx="186" cy="106" r="8" /><circle cx="310" cy="180" r="11" /><circle cx="369" cy="254" r="8" />
      </svg>
      <div className="jodjum-state jodjum-state-one">STATE</div>
      <div className="jodjum-state jodjum-state-two">CRUD</div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return <div className="case-study-visual-inner">{project.visual === "timetable" ? <GoodLifeVisual /> : <JodjumVisual />}</div>;
}

function ProjectCaseStudy({ project, inverted }: { project: Project; inverted?: boolean }) {
  return (
    <article className={`case-study case-study--${project.slug}`}>
      <div className={`case-study-layout ${inverted ? "case-study-layout--inverted" : ""}`}>
        <div className="case-study-copy">
          <div className="case-study-meta">
            <span>{project.classification}</span>
            <span className="case-study-status"><i />{project.status}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="case-study-summary">{project.description}</p>

          <dl className="case-study-brief">
            <div><dt>Problem</dt><dd>{project.problem}</dd></div>
            <div><dt>Approach</dt><dd>{project.solution}</dd></div>
          </dl>

          <div className="case-study-evidence">
            <p>Engineering focus</p>
            <ul>
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>

          <div className="case-study-stack" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
        <div className="case-study-visual-wrap"><ProjectVisual project={project} /></div>
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const { gsap } = getGsap();
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".case-study-visual-inner").forEach((visual) => {
          const article = visual.closest(".case-study");
          if (!article) return;

          gsap.to(visual, {
            y: -28,
            scale: 1.015,
            ease: "none",
            scrollTrigger: { trigger: article, start: "top bottom", end: "bottom top", scrub: 0.65 },
          });
        });
      });
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="featured-work">
      <div className="featured-work-intro mx-auto max-w-6xl px-5 md:px-8">
        <h2>Selected work</h2>
        <p>Practical software products explored through the systems, decisions, and workflows behind them.</p>
      </div>
      <div className="featured-work-cases mx-auto max-w-6xl px-5 md:px-8">
        <ProjectCaseStudy project={projects[0]} />
        <div aria-hidden="true" className="project-transition"><span /></div>
        <ProjectCaseStudy project={projects[1]} inverted />
      </div>
    </section>
  );
}
