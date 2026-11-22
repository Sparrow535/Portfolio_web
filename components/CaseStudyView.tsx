import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, Item } from "@/data/caseStudies";
import { shared } from "@/data/caseStudies";
import { Button } from "./Button";

const card = "border border-line bg-surface";

function Heading({ title, n }: { title: string; n: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="flex shrink-0 text-[26px] font-medium sm:text-[32px]">
        <span className="text-primary">#</span>
        <span className="text-white">{title}</span>
      </h2>
      <span className="h-px flex-1 bg-gray/50" />
      <span className="w-8 text-sm">{n}</span>
    </div>
  );
}

function Cards({ items, cols = 3, padding = "p-6" }: { items: Item[]; cols?: 2 | 3; padding?: string }) {
  return (
    <div className={`grid gap-4 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2 md:gap-6"}`}>
      {items.map((it) => (
        <div key={it.title} className={`${card} ${padding} flex flex-col gap-3`}>
          <h3 className="text-lg font-medium leading-snug text-white">{it.title}</h3>
          <p className="text-[15px] leading-relaxed">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="flex flex-col gap-6 py-10">{children}</section>
);

export function CaseStudyView({ cs }: { cs: CaseStudy }) {
  return (
    <article className="container-content">
      {/* HERO */}
      <section className="flex flex-col gap-6 py-10">
        <Link href="/projects" className="w-fit text-sm hover:text-white">← all projects</Link>
        <p className="text-sm font-medium text-primary">/case-study / {cs.category}</p>
        <h1 className="text-[34px] font-medium leading-tight text-white sm:text-[44px]">{cs.title}</h1>

        <div className="grid gap-10 lg:grid-cols-[552px_1fr]">
          <div className="flex flex-col gap-5">
            <p className="text-[22px] font-medium leading-snug text-white sm:text-[25px]">{cs.headline}</p>
            <p className="leading-relaxed">{cs.intro}</p>
            <div className="flex flex-wrap gap-4">
              {cs.links.map((l) => <Button key={l.label} href={l.href} external>{l.label}</Button>)}
            </div>
          </div>
          <div className="relative h-[240px] border border-line sm:h-[300px]">
            <Image src={cs.image} alt={`${cs.title} preview`} fill sizes="432px" className="object-contain" priority />
          </div>
        </div>

        <ul className="flex flex-wrap gap-3">
          {cs.tags.map((t) => <li key={t} className="border border-gray p-2">{t}</li>)}
        </ul>
      </section>

      {/* 01 OVERVIEW */}
      <Section>
        <Heading title="overview" n="01" />
        <p className="leading-relaxed">{cs.overview}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {cs.facts.map((f) => (
            <div key={f.label} className={`${card} flex flex-col gap-3 p-5`}>
              <p className="text-[13px] font-medium text-primary">{f.label}</p>
              <p className="font-medium text-white">{f.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 02 OPPORTUNITY */}
      <Section>
        <Heading title="the-opportunity" n="02" />
        <p className="text-[13px] font-medium text-primary">Problem framing / design interpretation</p>
        <Cards cols={2} padding="p-6" items={[
          { title: "The challenge", text: cs.challenge },
          { title: "The direction", text: cs.direction },
        ]} />
        <Cards cols={2} items={cs.audiences} />
      </Section>

      {/* 03 USER JOURNEY */}
      <Section>
        <Heading title="user-journey" n="03" />
        <p className="text-sm">{shared.journeyNote}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cs.steps.map((s, i) => (
            <div key={s.title} className={`${card} flex flex-col gap-3 p-5`}>
              <p className="text-2xl font-medium text-primary">{String(i + 1).padStart(2, "0")} /</p>
              <h3 className="text-lg font-medium text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 04 IMPLEMENTATION */}
      <Section>
        <Heading title="implementation" n="04" />
        <div className={`${card} flex flex-col gap-3 p-6`}>
          <p className="text-xs font-medium text-primary">SYSTEM / CONTENT FLOW</p>
          <p className="text-lg font-medium leading-snug text-white">{cs.flow}</p>
        </div>
        <Cards items={cs.implementation} />
      </Section>

      {/* 05 INTERFACE */}
      <Section>
        <Heading title="interface-walkthrough" n="05" />
        <div className="relative aspect-[1024/711] w-full border border-line">
          <Image src={cs.image} alt={`${cs.title} live capture`} fill sizes="1024px" className="object-contain" />
        </div>
        <p className="text-[13px] leading-relaxed">{cs.imageCaption}</p>
        <Cards items={cs.decisions} />
      </Section>

      {/* 06 VALIDATION */}
      <Section>
        <Heading title="validation-plan" n="06" />
        <p className="text-xs font-medium text-primary">{shared.validationLabel}</p>
        <Cards items={cs.tests} />
        <p className="text-[13px] leading-relaxed">{shared.validationNote}</p>
      </Section>

      {/* 07 REFLECTIONS */}
      <Section>
        <Heading title="reflections" n="07" />
        <p className="text-xl font-medium leading-snug text-white">{cs.reflection}</p>
        <Cards cols={2} items={[
          { title: "Constraints to keep visible", text: cs.constraints },
          { title: "What comes next", text: cs.next },
        ]} />
      </Section>

      {/* 08 SOURCES */}
      <Section>
        <Heading title="project-sources" n="08" />
        <dl className="flex flex-col gap-4">
          {cs.sources.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 md:flex-row md:gap-6">
              <dt className="font-medium text-white md:w-[340px] md:shrink-0">{s.label}</dt>
              <dd className="break-all text-sm">
                <a href={s.href} target="_blank" rel="noreferrer" className="text-primary hover:opacity-80">{s.text}</a>
              </dd>
            </div>
          ))}
        </dl>
        <p className="text-[13px] leading-relaxed">{shared.sourcesNote}</p>
      </Section>
    </article>
  );
}
