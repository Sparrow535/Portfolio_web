import { ContactForm } from "@/components/ContactForm";
import { social } from "@/components/Icons";
import { site } from "@/data/site";

export const metadata = { title: "Contacts — Rohan Rai" };

export default function ContactsPage() {
  return (
    <>
      <section className="container-content pt-10 lg:pt-16">
        <h1 className="text-[32px] font-medium text-white"><span className="text-primary">/</span>contacts</h1>
        <p className="mt-2">AI, data and web projects · Bhutan</p>
      </section>

      <section className="container-content mt-12 grid items-start gap-4 lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col gap-5">
          <div className="box p-[15px]">
            <h2 className="text-[22px] font-medium text-white">#get-in-touch</h2>
            <p className="mt-7 text-sm">Email</p>
            <a href={`mailto:${site.email}`} className="mt-1 block break-all text-[15px] font-medium text-primary">{site.email}</a>
            <p className="mt-6 text-sm">Location</p>
            <p className="mt-1 text-[15px] font-medium text-white">{site.location}</p>
            <a href={site.cvMailto} className="link-accent mt-7 block text-[15px]">Request CV ↗</a>
          </div>

          <div className="box p-[15px]">
            <h2 className="text-[22px] font-medium text-white">#connect</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-center gap-2">
                <social.github size={22} />
                <a href={site.github} target="_blank" rel="noreferrer" className="link-accent">GitHub ↗</a>
              </li>
              <li className="flex items-center gap-2">
                <social.linkedin size={22} />
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="link-accent">LinkedIn ↗</a>
              </li>
              <li className="flex items-center gap-2">
                <social.x size={22} />
                <span>X</span>
              </li>
            </ul>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
