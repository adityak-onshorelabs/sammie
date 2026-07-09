import Button from "@/components/ui/Button";

export default function CTABanner({
  title,
  body,
  href,
  cta = "Register Now",
  note,
}: {
  title: string;
  body?: React.ReactNode;
  href: string;
  cta?: string;
  note?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-raised p-8">
      {/* gold glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.12_85/0.2),transparent_70%)] blur-2xl"
      />

      <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-text">
            {title}
          </h3>
          {body && (
            <p className="mt-2 text-sm text-text-muted">{body}</p>
          )}
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <Button href={href}>{cta}</Button>
          {note && (
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-text-faint">
              {note}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
