import GoldRule from "@/components/ui/GoldRule";
import { getMicrositePage } from "@/lib/microsite";

type Props = { params: Promise<{ microsite: string }> };

export async function generateMetadata({ params }: Props) {
  const { microsite } = await params;
  const { site, copy } = getMicrositePage(microsite, "register");
  return {
    title: `${copy.title} — ${site.event.name}`,
    description: copy.description,
  };
}

export default async function Page({ params }: Props) {
  const { microsite } = await params;
  const { site, copy } = getMicrositePage(microsite, "register");
  const { event } = site;

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">{copy.kicker}</span>
      </div>
      <h1 className="display text-4xl text-text sm:text-6xl">{copy.heading}</h1>
      <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted">
        {event.name}. {event.date} &middot; {event.time}. Limited seats, secure
        your place below.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-bg-raised">
        <iframe
          title={`${event.name} registration form`}
          src={event.registerUrl}
          className="h-[900px] w-full"
          loading="lazy"
        />
      </div>

      <p className="mt-6 text-sm text-text-faint">
        Trouble loading the form?{" "}
        <a
          href={event.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline underline-offset-4"
        >
          Open it in a new tab
        </a>
        .
      </p>
    </section>
  );
}
