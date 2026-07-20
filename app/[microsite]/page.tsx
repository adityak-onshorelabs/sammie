import { getMicrosite } from "@/lib/microsite";
import { sectionRegistry } from "@/components/sections/registry";

// The home page is assembled from `home.sections` in the microsite config, so
// every event composes its own landing page without a bespoke page component.
export default async function Page({
  params,
}: {
  params: Promise<{ microsite: string }>;
}) {
  const { microsite } = await params;
  const site = getMicrosite(microsite);

  return (
    <>
      {site.home.sections.map((id) => {
        const Section = sectionRegistry[id];
        return Section ? <Section key={id} site={site} /> : null;
      })}
    </>
  );
}
