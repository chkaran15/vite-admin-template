import { useSettings } from "./use-settings";
import { useMedia } from "react-use";

export function useIsDarkMode() {
  const { settings } = useSettings();
  const isDarkModePreferred = useMedia("(prefer-color-scheme:dark");

  let resolvedMode = settings.mode;

  if (resolvedMode === "system") {
    resolvedMode = isDarkModePreferred ? "dark" : "light";
  }

  return resolvedMode === "dark";
}
