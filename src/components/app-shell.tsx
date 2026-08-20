import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Home,
  Layers,
  ClipboardCheck,
  ChartNoAxesColumn,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SignedOut } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { dueCards, useStudy } from "@/lib/store";
import { cn } from "@/lib/utils";
import { CommandSearch } from "./command-search";
import { ThemeToggle } from "./theme-toggle";
import { UserButton } from "@/lib/auth/gates";

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/read", label: "Read", icon: BookOpen },
  { to: "/cards", label: "Cards", icon: Layers },
  { to: "/test", label: "Test", icon: ClipboardCheck },
  { to: "/progress", label: "Progress", icon: ChartNoAxesColumn },
] as const;

function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="size-8 animate-pulse rounded-full bg-ink/10" />;
  }
  if (user) return <UserButton />;
  return (
    <SignedOut>
      <Link to="/login" className="text-sm font-medium text-muted hover:text-ink">
        Sign in
      </Link>
    </SignedOut>
  );
}

function Crest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-7", className)} aria-hidden="true">
      <rect width="32" height="32" rx="7" className="fill-navy" />
      <path d="M4 15.2h24v1.6H4z" className="fill-paper-2" />
      <path d="M15.2 4h1.6v24h-1.6z" className="fill-paper-2" />
      <path d="M4 15.7h24v.6H4z" className="fill-crimson" />
      <path d="M15.7 4h.6v24h-.6z" className="fill-crimson" />
    </svg>
  );
}

function isActive(pathname: string, to: string) {
  return to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const cards = useStudy((s) => s.cards);
  const [due, setDue] = useState(0);

  useEffect(() => {
    setDue(dueCards().length);
  }, [cards]);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-paper-2 focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <aside className="fixed top-0 bottom-0 left-0 z-20 hidden w-56 flex-col border-r border-line bg-paper-2 md:flex">
        <Link to="/" className="flex items-center gap-2.5 px-5 pt-6 pb-5">
          <Crest />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-tight">
              Life in the UK
            </span>
            <span className="block text-[11px] tracking-wide text-muted uppercase">
              Study handbook
            </span>
          </span>
        </Link>
        <nav className="flex flex-1 flex-col gap-0.5 px-3" aria-label="Main">
          {NAV.map((item) => {
            const active = isActive(pathname, item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative flex h-11 items-center gap-3 rounded-md px-3 text-[15px] font-medium transition-[background-color,color] duration-150",
                  active ? "bg-navy/8 text-navy" : "text-ink-soft hover:bg-ink/4 hover:text-ink",
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {item.label}
                {item.to === "/cards" && due > 0 && (
                  <span className="ml-auto grid min-w-5 place-items-center rounded-full bg-crimson px-1.5 text-[10px] font-bold text-paper-2">
                    {due}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-line px-4 py-4">
          <AuthSlot />
        </div>
      </aside>

      <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-line bg-paper/85 px-3 backdrop-blur-md md:ml-56 md:px-6">
        <Link to="/" className="flex items-center gap-2 md:hidden">
          <Crest className="size-6" />
          <span className="font-display text-sm font-semibold">Life in the UK</span>
        </Link>
        <div className="ml-auto flex items-center gap-1">
          <CommandSearch />
          <ThemeToggle />
          <div className="md:hidden">
            <AuthSlot />
          </div>
        </div>
      </header>

      <div className="md:ml-56">
        <main id="main" className="mx-auto w-full max-w-3xl px-4 pt-6 pb-28 md:px-8 md:pt-9 md:pb-16">
          {children}
        </main>
      </div>

      <nav
        className="fixed right-0 bottom-0 left-0 z-30 flex border-t border-line bg-paper-2/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
        aria-label="Main"
      >
        {NAV.map((item) => {
          const active = isActive(pathname, item.to);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium tracking-wide uppercase",
                active ? "text-crimson" : "text-muted",
              )}
            >
              <Icon className="size-[18px]" strokeWidth={1.75} />
              {item.label}
              {item.to === "/cards" && due > 0 && (
                <span className="absolute top-1.5 right-[calc(50%-18px)] grid min-w-4 place-items-center rounded-full bg-crimson px-1 text-[9px] font-bold text-paper-2">
                  {due}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
