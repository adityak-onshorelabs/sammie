import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Overview from "@/components/sections/Overview";
import Conversations from "@/components/sections/Conversations";
import Jury from "@/components/sections/Jury";
import Agenda from "@/components/sections/Agenda";
import Ecosystem from "@/components/sections/Ecosystem";
import Partners from "@/components/sections/Partners";
import RegisterCTA from "@/components/sections/RegisterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Overview />
      <Conversations />
      <Jury />
      <Agenda />
      <Ecosystem />
      <Partners />
      <RegisterCTA />
    </>
  );
}
