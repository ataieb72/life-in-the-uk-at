import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md bg-paper-2 px-3.5 text-base text-ink shadow-[0_0_0_1px_var(--line)] placeholder:text-muted/80 outline-none transition-[box-shadow] duration-150 focus-visible:shadow-[0_0_0_2px_var(--crimson)]",
        className,
      )}
      {...props}
    />
  );
}
