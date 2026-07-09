import GoldRule from "./GoldRule";
import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  action,
}: {
  kicker: string;
  title: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <GoldRule width="2rem" />
          <span className="kicker">{kicker}</span>
        </div>
        <Reveal>
          <h2 className="display text-4xl text-text sm:text-5xl">{title}</h2>
        </Reveal>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
