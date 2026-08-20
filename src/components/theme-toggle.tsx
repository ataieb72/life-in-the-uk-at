import { Moon, Sun } from "lucide-react";
import { useStudy } from "@/lib/store";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const theme = useStudy((s) => s.theme);
  const setTheme = useStudy((s) => s.setTheme);
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="relative size-4">
        <Sun
          className={
            theme === "dark"
              ? "absolute inset-0 size-4 scale-100 opacity-100"
              : "absolute inset-0 size-4 scale-[0.25] opacity-0"
          }
        />
        <Moon
          className={
            theme === "dark"
              ? "absolute inset-0 size-4 scale-[0.25] opacity-0"
              : "absolute inset-0 size-4 scale-100 opacity-100"
          }
        />
      </span>
    </Button>
  );
}
