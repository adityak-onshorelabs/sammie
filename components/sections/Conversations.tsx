"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Globe,
  ShoppingCart,
  Eye,
  Bot,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { sessions } from "@/data/sessions";
import { easeOutExpo } from "@/lib/motion";

const topicIcon: Record<string, LucideIcon> = {
  "reality-check": TrendingUp,
  "culture-content-commerce": ShoppingCart,
  "regional-internet": Globe,
  "festivals-fandoms": MessageSquare,
  "ai-muscle": Bot,
  "media-moves-markets": Eye,
};

export default function Conversations() {
  return (
    <section id="conversations" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        kicker="The Conversations"
        title="The Forces Shaping Marketing Now"
        action={
          <Button href="/agenda" variant="ghost">
            View Full Agenda
          </Button>
        }
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((s, i) => {
          // last card spans the row when it would otherwise sit alone
          const isWide =
            i === sessions.length - 1 && sessions.length % 3 === 1;
          return (
          <motion.a
            key={s.id}
            href={`/agenda#${s.id}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: easeOutExpo }}
            className={`group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bg-raised p-6 transition-colors duration-500 hover:border-gold/50 ${
              isWide ? "sm:col-span-2 lg:col-span-3" : ""
            }`}
          >
            {/* image placeholder wash */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
              style={{
                background:
                  "radial-gradient(120% 120% at 100% 0%, oklch(0.3 0.08 70 / 0.5), transparent 60%)",
              }}
            />
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg/60 text-gold transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_26px_-8px_var(--color-gold)]">
                {(() => {
                  const Icon = topicIcon[s.id] ?? MessageSquare;
                  return <Icon className="h-5 w-5" strokeWidth={1.6} />;
                })()}
              </span>
              <span className="font-display text-xs uppercase tracking-[0.2em] text-text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-6 flex items-end justify-between gap-4">
              <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-text">
                {s.title}
              </h3>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-bg">
                &rarr;
              </span>
            </div>
          </motion.a>
          );
        })}
      </div>
    </section>
  );
}
