import { useIsDarkMode } from "@/hooks/use-mode";
import { useEffect } from "react";

const defaultMode = ["light", "dark"];

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const isDarkMode = useIsDarkMode();
  const mode = isDarkMode ? "dark" : "light";

  useEffect(() => {
    const rootElement = document.documentElement;

    // update classnames in the <html> tag
    rootElement.classList.remove(...defaultMode);
    rootElement.classList.add(mode);
  }, [mode]);

  return <>{children}</>;
}
