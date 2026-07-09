"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Speaker Enquiry",
  "Partnership Enquiry",
  "Registration",
];

const field =
  "w-full rounded-xl border border-line bg-bg-raised px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none transition-colors focus:border-gold";
const label =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-text-faint";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const type = String(data.get("type") ?? "General Enquiry");
    const message = String(data.get("message") ?? "");

    const subject = `[${type}] SAMMIE Summit enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Enquiry: ${type}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:hello@socialsamosa.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={label}>
            Company
          </label>
          <input id="company" name="company" placeholder="Company / Brand" className={field} />
        </div>
        <div>
          <label htmlFor="type" className={label}>
            Enquiry Type
          </label>
          <select id="type" name="type" defaultValue="General Enquiry" className={field}>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t} value={t} className="bg-bg-raised text-text">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className={`${field} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-gold-metallic gold-shine px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-bg transition-[filter] duration-300 hover:brightness-110"
      >
        Send Message
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
      </button>

      {sent && (
        <p className="text-sm text-gold">
          Opening your email client. If nothing happens, write to us at
          hello@socialsamosa.com.
        </p>
      )}
    </form>
  );
}
