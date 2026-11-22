import Image from "next/image";
import { Dots } from "@/components/Dots";
import { SectionHeading } from "@/components/SectionHeading";
import { TechCard } from "@/components/TechCard";
import { facts, technologies } from "@/data/technologies";
import { site } from "@/data/site";

export const metadata = { title: "About — Rohan Rai" };

export default function AboutPage() {
  return (
    <>
      <section className="container-content relative pt-10 lg:pt-16">
        <h1 className="text-[32px] font-medium text-white"><span className="text-primary">/</span>about-me</h1>
        <p className="mt-2">Who am i?</p>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_506px]">
          <div className="max-w-[515px]">
            <p>Hello, I’m Rohan Rai!</p>
            <p className="mt-6 leading-relaxed">
              I’m a computer science student in Bhutan focused on AI and data science. I turn messy information into
              tools people can actually use; the world has enough dashboards nobody opens.
            </p>
            <p className="mt-6 leading-relaxed">
              I work across frontend interfaces, APIs, databases, and deployment. Recent projects include an insurance
              knowledge assistant, travel websites, and a real estate platform. I care about what happens after the demo, too.
            </p>
            <div className="mt-8 grid max-w-[340px] grid-cols-2 gap-x-8 gap-y-4">
              <a href={site.github} target="_blank" rel="noreferrer" className="link-accent">GitHub ↗</a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="link-accent">LinkedIn ↗</a>
              <a href={site.cvMailto} className="link-accent">Request CV ↗</a>
            </div>
          </div>
          <div className="relative mx-auto aspect-[506/521] w-full max-w-[506px] lg:justify-self-end">
            <Image src="/images/about-hero.png" alt="Hooded glasses portrait sketch" fill sizes="(min-width: 1024px) 506px, 100vw" className="object-cover" priority />
          </div>
        </div>
        <Dots cols={4} rows={4} className="absolute -left-[96px] top-[48%] hidden xl:grid" />
      </section>

      <section className="container-content mt-24">
        <SectionHeading title="technologies" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((t) => <TechCard key={t.title} tech={t} />)}
        </div>
      </section>

      <section className="container-content relative mt-24 pb-16">
        <SectionHeading title="what-i-work-on" />
        <ul className="flex max-w-[712px] flex-wrap gap-4">
          {facts.map((f) => (
            <li key={f} className="border border-gray p-2 text-gray">{f}</li>
          ))}
        </ul>
        <Image
          src="/images/abstract.svg"
          alt=""
          aria-hidden
          width={114}
          height={114}
          className="pointer-events-none absolute bottom-0 right-12 hidden lg:block"
        />
        <Dots cols={4} rows={4} className="absolute -right-[96px] bottom-4 hidden xl:grid" />
      </section>
    </>
  );
}
