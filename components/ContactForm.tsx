"use client";

import { useState } from "react";
import { site } from "@/data/site";

const input = "w-full border border-gray bg-bg px-[13px] py-[11px] text-sm text-white placeholder:text-gray focus:border-primary focus:outline-none";

// The design's "Open email ↗" button: builds a mailto link from the fields (no backend needed)
export function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", subject: "Project inquiry", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));

  const href = `mailto:${site.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(
    `${f.message}\n\n— ${f.name}${f.email ? ` (${f.email})` : ""}`
  )}`;

  return (
    <div className="box p-[23px]">
      <h2 className="text-[26px] font-medium text-white">#send-a-message</h2>
      <p className="mt-3 text-[15px]">Have a project or question? A clear goal helps more than a mysterious brief.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-white">Your name
          <input className={`${input} mt-2`} placeholder="Your name" value={f.name} onChange={set("name")} />
        </label>
        <label className="block text-sm font-medium text-white">Your email
          <input type="email" className={`${input} mt-2`} placeholder="you@example.com" value={f.email} onChange={set("email")} />
        </label>
        <label className="block text-sm font-medium text-white sm:col-span-2">Subject
          <input className={`${input} mt-2`} value={f.subject} onChange={set("subject")} />
        </label>
        <label className="block text-sm font-medium text-white sm:col-span-2">Message
          <textarea rows={8} className={`${input} mt-2 resize-y`} placeholder="Tell me about your project..." value={f.message} onChange={set("message")} />
        </label>
      </div>

      <a href={href} className="mt-8 inline-block bg-primary px-4 py-[10px] font-semibold text-bg transition-opacity hover:opacity-90">
        Open email ↗
      </a>
      <p className="mt-8 text-[13px]">You can also email me directly using the address on the left.</p>
    </div>
  );
}
