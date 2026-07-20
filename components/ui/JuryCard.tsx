"use client";

import { motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";
import type { JuryMember } from "@/config/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function JuryCard({
  member,
  index = 0,
}: {
  member: JuryMember;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: easeOutExpo }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-bg-raised">
        {/* initials placeholder (shows until a photo exists) */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              "radial-gradient(90% 80% at 50% 0%, oklch(0.28 0.06 70 / 0.7), oklch(0.13 0.008 85))",
          }}
        >
          <span className="font-display text-6xl font-black text-line transition-colors duration-500 group-hover:text-gold/40">
            {initials(member.name)}
          </span>
        </div>
        {/* photo overlay: 404s fall through to the initials, no broken-image icon */}
        {member.photo && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url("${member.photo}")` }}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,var(--color-bg-raised),transparent)]" />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lg font-bold uppercase tracking-tight text-text">
          {member.name}
        </h3>
        <p className="mt-1 text-sm leading-snug text-text-muted">{member.role}</p>
        <p className="text-sm text-text-faint">{member.company}</p>
      </div>
    </motion.article>
  );
}
