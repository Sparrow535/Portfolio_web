import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Dots } from "@/components/Dots";
import { Logo } from "@/components/Logo";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TechCard } from "@/components/TechCard";
import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-content grid items-center gap-10 pt-10 lg:grid-cols-[537px_1fr] lg:pt-16">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <h1 className="text-[28px] font-semibold leading-tight text-white sm:text-[32px]">
            I turn ideas into useful software. Wild idea, I know.
          </h1>
          <p className="text-gray">Rohan Rai · AI, data and full-stack web · Bhutan</p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button href="/projects">View projects</Button>
            <a href={site.cvMailto} className="link-accent text-white">Request CV ↗</a>
          </div>
        </div>

        <div className="relative order-1 mx-auto h-[420px] w-full max-w-[470px] lg:order-2 lg:h-[561px]">
          <div className="absolute left-0 top-[35%] h-[155px] w-[155px]"><Logo size={155} variant="light" /></div>
          <Dots className="absolute -right-4 bottom-[15%]" />
          <Image
            src="/images/hero-portrait.png"
            alt="Portrait sketch of Rohan"
            fill
            priority
            sizes="470px"
            className="object-cover mix-blend-color-dodge"
          />
          <div className="absolute -bottom-6 right-0 flex w-[min(402px,100%)] items-center gap-[10px] border border-gray bg-bg p-2 font-medium">
            <span className="h-4 w-4 shrink-0 border border-primary bg-primary" />
            Making AI useful. On purpose.
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="container-content mt-24 flex justify-center">
        <blockquote className="relative max-w-[683px] border border-gray p-8">
          <span className="absolute -top-4 left-3 bg-bg px-2 text-5xl leading-none text-primary">“</span>
          <p className="text-2xl font-medium text-white">Less buzzword bingo. More working software.</p>
          <span className="absolute -bottom-4 right-4 bg-bg px-2 text-5xl leading-none text-primary">”</span>
          <footer className="absolute -bottom-[62px] right-0 border border-gray bg-bg p-4 font-medium text-white">— Rohan Rai</footer>
        </blockquote>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="container-content mt-32 scroll-mt-8">
        <SectionHeading title="featured-projects" href="/projects" />
        <div className="grid gap-4 md:grid-cols-2 md:gap-x-4 md:gap-y-4">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section id="technologies" className="container-content mt-24 scroll-mt-8">
        <SectionHeading title="technologies" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((t) => <TechCard key={t.title} tech={t} />)}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container-content mt-24 scroll-mt-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_327px]">
          <div>
            <SectionHeading title="about-me" />
            <p className="max-w-[515px] leading-relaxed">
              Hello, I’m Rohan Rai! I’m a computer science student in Bhutan focused on AI and data science. I turn messy
              information into tools people can actually use; the world has enough dashboards nobody opens. I work across
              frontend interfaces, APIs, databases, and deployment. Recent projects include an insurance knowledge
              assistant, travel websites, and a real estate platform. I care about what happens after the demo, too.
            </p>
            <div className="mt-8"><Button href="/about">Read more →</Button></div>
          </div>
          <div className="relative mx-auto h-[420px] w-[291px] lg:h-[605px]">
            <Image src="/images/about-portrait.png" alt="Sketch portrait of Rohan" fill sizes="291px" className="object-cover" />
            <Dots cols={4} rows={4} className="absolute -left-3 top-12" />
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="container-content mt-24 scroll-mt-8">
        <SectionHeading title="achievements" />
        <div className="box grid overflow-hidden md:grid-cols-[302px_1fr]">
          <div className="relative min-h-[200px] border-b border-gray bg-gray/10 md:border-b-0 md:border-r">
            <Image src="/images/certificate.png" alt="Google UX Design certificate" fill sizes="302px" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 md:p-[22px]">
            <h3 className="text-2xl font-medium text-white">Google UX Design Professional Certificate</h3>
            <p className="text-lg text-gray">Coursera · 8 courses completed</p>
            <p className="text-gray">
              Coursework covered design foundations, research, wireframes, prototypes, usability testing, responsive
              interfaces, and preparing for work.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container-content mt-24 scroll-mt-8">
        <SectionHeading title="contact" />
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <p className="max-w-[505px]">
            Open to AI, data, and web projects. Tell me what needs to work; mysterious briefs are less helpful than they sound.
          </p>
          <div className="box w-full p-4 md:w-[281px]">
            <p className="mb-3 font-medium text-white">Message me here</p>
            <a href={`mailto:${site.email}`} className="block break-all text-sm hover:text-white">{site.email}</a>
            <div className="mt-2 flex gap-4 text-sm">
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="link-accent">LinkedIn ↗</a>
              <a href={site.cvMailto} className="link-accent">Request CV ↗</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
