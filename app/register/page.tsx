import GoldRule from "@/components/ui/GoldRule";
import { event } from "@/data/event";

export const metadata = { title: "Register — The Marketing Pulse Summit" };

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">Registration</span>
      </div>
      <h1 className="display text-4xl text-text sm:text-6xl">Register Now</h1>
      <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted">
        {event.name}. {event.date} &middot; {event.time}. Limited seats, secure
        your place below.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-bg-raised">
        <iframe
          title="SAMMIE Registration Form"
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
