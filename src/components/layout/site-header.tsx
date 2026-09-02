import Link from "next/link";
import { profile } from "@/data/profile";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <Link href="/" className="font-mono text-sm font-semibold text-foreground">
          {profile.shortName}
        </Link>
        <div className="hidden items-center gap-4 text-sm text-muted md:flex md:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
        <details className="header-menu relative md:hidden">
          <summary aria-label="Open navigation menu" className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center border border-line px-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">
            Menu
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-48 border border-line bg-panel p-2 shadow-[0_18px_48px_rgba(0,0,0,0.38)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center px-3 text-sm text-muted transition hover:bg-accent-soft hover:text-accent focus:bg-accent-soft focus:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
