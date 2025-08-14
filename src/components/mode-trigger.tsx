import { useSettings } from "@/hooks/use-settings";
import { Button } from "./ui/button";
import { DynamicIcon } from "./dynamic-icon";
import { useCallback } from "react";
import type { ModeType } from "@/types";

const ModeTrigger = () => {
  const { settings, updateSettings } = useSettings();

  const mode = settings.mode;

  const setMode = useCallback(
    (modeName: ModeType) => {
      updateSettings({ ...settings, mode: modeName });
    },
    [settings, updateSettings]
  );

  return (
    <Button
      variant="ghost"
      size="icon"
      arial-label="Toggle Full Screen"
      className="hidden md:inline-flex"
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
      }}
    >
      <DynamicIcon name={mode === "dark" ? "Sun" : "Moon"} className="size-4" />
    </Button>
  );
};

export { ModeTrigger };
