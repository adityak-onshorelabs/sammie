import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import { event } from "@/data/event";

export default function PageStub({
  kicker,
  title,
  blurb,
}: {
  kicker: string;
  title: string;
  blurb: string;
}) {
  return (
    <section className="mx-auto flex min-h-[70dvh] max-w-4xl flex-col justify-center px-6 py-40">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">{kicker}</span>
      </div>
      <h1 className="display text-5xl text-text sm:text-7xl">{title}</h1>
      <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted">
        {blurb}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href={event.registerUrl}>Register Now</Button>
        <Button href="/" variant="ghost">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
