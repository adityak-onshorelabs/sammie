import type { ComponentType } from "react";
import type { MicrositeConfig, SectionId } from "@/config/types";
import Hero from "./Hero";
import Stats from "./Stats";
import Overview from "./Overview";
import Conversations from "./Conversations";
import Jury from "./Jury";
import Agenda from "./Agenda";
import Ecosystem from "./Ecosystem";
import Partners from "./Partners";
import RegisterCTA from "./RegisterCTA";

export type SectionProps = { site: MicrositeConfig };

/**
 * Home-page blocks, keyed by the ids a microsite lists in `home.sections`.
 * Order and composition are config, not code — a new event can drop the jury
 * carousel or lead with its agenda without a new page component.
 */
export const sectionRegistry: Record<SectionId, ComponentType<SectionProps>> = {
  hero: Hero,
  stats: Stats,
  overview: Overview,
  conversations: Conversations,
  jury: Jury,
  agenda: Agenda,
  ecosystem: Ecosystem,
  partners: Partners,
  registerCTA: RegisterCTA,
};
