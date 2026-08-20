import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "muted",
}: {
  children: ReactNode;
  className?: string;
  tone?: "muted" | "ok" | "bad" | "navy";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase",
        tone === "muted" && "bg-ink/6 text-muted",
        tone === "ok" && "bg-ok/12 text-ok",
        tone === "bad" && "bg-crimson/12 text-crimson",
        tone === "navy" && "bg-navy/10 text-navy",
        className,
      )}
    >
      {children}
    </span>
  );
}
