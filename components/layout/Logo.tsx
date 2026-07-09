import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="SAMMIE — home"
      className={`group flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden
        className="inline-block h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-gold transition-transform duration-300 group-hover:translate-x-0.5"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-black uppercase tracking-tight text-text">
          SAMMIE
        </span>
        <span className="mt-0.5 text-[0.5rem] font-medium uppercase tracking-[0.25em] text-text-faint">
          Best Social Media Brands
        </span>
      </span>
    </Link>
  );
}
