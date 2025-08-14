/* eslint-disable react-refresh/only-export-components */

import type { SettingsType } from "@/types";
import { createContext, useCallback, useEffect, useState } from "react";
import { useCookie } from "react-use";

export const defaultSettings: SettingsType = {
  theme: "zinc",
  mode: "system",
  layout: "vertical",
  colorSchema: "apparent",
  preset: "green",
  fontFamily: "public-sans",
  customThemes: [],
  customFonts: [],
};

export const SettingsContext = createContext<
  | {
      settings: SettingsType;
      updateSettings: (newSettings: SettingsType) => void;
      resetSettings: () => void;
    }
  | undefined
>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [storedSettings, setStoredSettings, deleteStoredSettings] =
    useCookie("settings");
  const [settings, setSettings] = useState<SettingsType | null>(null);

  useEffect(() => {
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    } else {
      setSettings({ ...defaultSettings });
    }
  }, [storedSettings]);

  const updateSettings = useCallback(
    (newSettings: SettingsType) => {
      setStoredSettings(JSON.stringify(newSettings));
      setSettings(newSettings);
    },
    [setStoredSettings]
  );

  const resetSettings = useCallback(() => {
    deleteStoredSettings();
    setSettings(defaultSettings);
  }, [deleteStoredSettings]);

  if (!settings) {
    return null;
  }

  return (
    <SettingsContext.Provider
      value={{ settings, updateSettings, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
