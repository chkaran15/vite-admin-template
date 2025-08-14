import { useSettings } from "@/hooks/use-settings";
import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useSettings();

  useEffect(() => {
    const bodyElement = document.body;

    // Update class names is the <body> tag

    Array.from(bodyElement.classList)
      .filter(
        (className) =>
          className.startsWith("theme-") || className.startsWith("radius-")
      )
      .forEach((className) => {
        bodyElement.classList.remove(className);
      });

    bodyElement.classList.add(`theme-${settings.theme}`);
    bodyElement.classList.add(`radius-${settings.radius}`);
  }, [settings.theme, settings.radius]);

  return <>{children}</>;
}
