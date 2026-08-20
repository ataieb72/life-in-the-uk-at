import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 origin-center transition-[scale,background-color,color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        default: "bg-navy text-navy-fg hover:bg-navy/90",
        crimson: "bg-crimson text-paper-2 hover:bg-crimson/90",
        outline:
          "bg-transparent text-ink shadow-[0_0_0_1px_var(--line)] hover:bg-paper",
        ghost: "bg-transparent text-ink-soft hover:bg-ink/5 hover:text-ink",
        soft: "bg-navy/8 text-navy hover:bg-navy/12 dark:bg-navy/10 dark:text-navy",
      },
      size: {
        default: "h-11 rounded-md px-4 text-[15px]",
        sm: "h-9 rounded-sm px-3 text-sm",
        lg: "h-12 rounded-md px-5 text-base",
        icon: "size-10 rounded-md",
        pill: "h-10 rounded-full px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
