import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import JuryCard from "@/components/ui/JuryCard";
import { getMicrositePage } from "@/lib/microsite";

type Props = { params: Promise<{ microsite: string }> };

export async function generateMetadata({ params }: Props) {
  const { microsite } = await params;
  const { site, copy } = getMicrositePage(microsite, "voices");
  return {
    title: `${copy.title} — ${site.event.name}`,
    description: copy.description,
  };
}

export default async function Page({ params }: Props) {
  const { microsite } = await params;
  const { site, copy } = getMicrositePage(microsite, "voices");
  const jury = site.content.jury ?? [];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">{copy.kicker}</span>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="display max-w-3xl text-5xl text-text sm:text-7xl">
            {copy.heading}
          </h1>
          {copy.blurb && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
              {copy.blurb}
            </p>
          )}
        </div>
        <Button href={site.event.registerUrl} variant="ghost">
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
