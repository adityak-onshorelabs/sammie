"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export default function Logo({
  className = "",
  imgClassName = "h-20 w-auto",
}: {
  className?: string;
  imgClassName?: string;
}) {
  const pathname = usePathname();
  const lenis = useLenis();

  const onClick = (e: React.MouseEvent) => {
    // Already home: no route change fires, so scroll to top through Lenis.
    if (pathname === "/") {
      e.preventDefault();
      if (lenis) lenis.scrollTo(0, { force: true });
      else window.scrollTo({ top: 0 });
    }
  };

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="The Marketing Pulse Summit — home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/logos/marketing-pulse-white.png"
        alt="The Marketing Pulse Summit"
        width={526}
        height={278}
        priority
        className={imgClassName}
      />
    </Link>
  );
}
