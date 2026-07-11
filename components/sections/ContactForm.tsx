"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronDown, Check } from "lucide-react";
import { easeOutExpo } from "@/lib/motion";

const ENQUIRY_TYPES = [
  "Speaker and Event",
  "Partnership Enquiry",
  "Registration",
];

const field =
  "w-full rounded-xl border border-line bg-bg-raised px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none transition-colors focus:border-gold";
const label =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-text-faint";

// Required-field asterisk.
const Req = () => <span className="ml-0.5 text-gold">*</span>;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [typeOpen, setTypeOpen] = useState(false);
  const typeRef = useRef<HTMLDivElement>(null);

  // Close the custom dropdown on outside click / Escape.
  useEffect(() => {
    if (!typeOpen) return;
    function onDown(e: MouseEvent) {
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) {
        setTypeOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setTypeOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [typeOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Custom dropdown isn't a native field, so validate it here.
    if (!enquiryType) {
      setError("Please select an enquiry type.");
      setStatus("error");
      setTypeOpen(true);
      return;
    }

    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      type: enquiryType,
      message: String(data.get("message") ?? ""),
    };

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }
      form.reset();
      setEnquiryType("");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name<Req />
          </label>
          <input id="name" name="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email<Req />
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
            Company<Req />
          </label>
          <input id="company" name="company" required placeholder="Company / Brand" className={field} />
        </div>
        <div>
          <span className={label}>
            Enquiry Type<Req />
          </span>
          <div ref={typeRef} className="relative">
            <button
              type="button"
              onClick={() => setTypeOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={typeOpen}
              className={`${field} flex items-center justify-between text-left ${
                typeOpen ? "border-gold" : ""
              }`}
            >
              <span className={enquiryType ? "" : "text-text-faint"}>
                {enquiryType || "Select an enquiry type"}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${typeOpen ? "rotate-180" : ""}`}
                strokeWidth={1.75}
              />
            </button>
            <AnimatePresence>
              {typeOpen && (
                <motion.ul
                  role="listbox"
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: easeOutExpo }}
                  style={{ transformOrigin: "top" }}
                  className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-line bg-bg-raised/95 p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-sm"
                >
                  {ENQUIRY_TYPES.map((t) => {
                    const active = t === enquiryType;
                    return (
                      <li key={t}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={active}
                          onClick={() => {
                            setEnquiryType(t);
                            setTypeOpen(false);
                          }}
                          className={`group flex w-full items-center justify-between gap-3 rounded-lg px-3.5 py-3 text-left text-sm transition-all duration-200 ${
                            active
                              ? "bg-gold/10 text-gold"
                              : "text-text-muted hover:bg-bg hover:pl-4 hover:text-text"
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <span
                              aria-hidden
                              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                                active ? "bg-gold" : "bg-line group-hover:bg-gold/60"
                              }`}
                            />
                            {t}
                          </span>
                          {active && <Check className="h-4 w-4 shrink-0" strokeWidth={2} />}
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
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
        disabled={sending}
        className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-gold-metallic gold-shine px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-bg transition-[filter] duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send Message"}
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
      </button>

      {status === "sent" && (
        <p className="text-sm text-gold">
          Thanks — your message is on its way. We&rsquo;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          {error} You can also write to us directly at hello@socialsamosa.com.
        </p>
      )}
    </form>
  );
}
