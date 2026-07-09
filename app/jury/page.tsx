import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import JuryCard from "@/components/ui/JuryCard";
import { jury } from "@/data/jury";
import { event } from "@/data/event";

export const metadata = {
  title: "Jury — The Marketing Pulse Summit",
  description:
    "Meet the jury of SAMMIE: The Marketing Pulse Summit, the leaders deciding India's best social media brands.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">The Jury</span>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="display max-w-3xl text-5xl text-text sm:text-7xl">
            Meet the Jury
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
            The leaders and category-definers judging India&rsquo;s best, and
            shaping the conversations at SAMMIE: The Marketing Pulse Summit.
          </p>
        </div>
        <Button href={event.registerUrl} variant="ghost">
          Register Now
        </Button>
      </div>

      <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {jury.map((m, i) => (
          <JuryCard key={m.id} member={m} index={i} />
        ))}
      </div>
    </section>
  );
}
