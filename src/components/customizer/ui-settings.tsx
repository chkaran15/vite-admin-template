import { useEffect, useState } from "react";
import { Info, RotateCcw } from "lucide-react";
import {
  NavIntegrateIcon,
  LayoutSidebarLeft,
  LayoutTopbar,
  LayoutCard,
  PresetSwatch,
} from "./ui-settings-icons";
import { useSettings } from "@/hooks/use-settings";
import { useSidebar } from "../ui/sidebar";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { hexToRgba, lightenColor } from "@/lib/color-calculator";
import { Button } from "../ui/button";

const colorPresets = [
  {
    name: "green",
    color: "#10b981",
  },
  {
    name: "blue",
    color: "#3b82f6",
  },
  {
    name: "purple",
    color: "#8b5cf6",
  },
  {
    name: "orange",
    color: "#f59e0b",
  },
  {
    name: "red",
    color: "#ef4444",
  },
  {
    name: "darkBlue",
    color: "#002aff",
  },
];

const fontOptions = [
  { id: "public-sans", name: "Public Sans", preview: "Aa" },
  { id: "inter", name: "Inter", preview: "Aa" },
  { id: "dm-sans", name: "DM Sans", preview: "Aa" },
  { id: "nunito-sans", name: "Nunito Sans", preview: "Aa" },
];

type ColorMode = "integrate" | "apparent";

interface UISettingsProps {
  className?: string;
}

export default function UISettings({ className }: UISettingsProps) {
  const [selectedColorMode, setSelectedColorMode] =
    useState<ColorMode>("integrate");
  const { settings, updateSettings } = useSettings();
  const { setOpen } = useSidebar();

  useEffect(() => {
    const root = document.documentElement;

    // Apply color scheme
    root.setAttribute("data-color-scheme", settings.colorSchema);

    const currentColor =
      colorPresets.find((t) => t.name === settings.preset)?.name ||
      settings.preset;

    root.style.setProperty("--primary-color", currentColor);
    root.style.setProperty("--theme-primary", currentColor);
    root.style.setProperty(
      "--theme-primary-light",
      lightenColor(currentColor, 90)
    );

    root.style.setProperty(
      "--theme-primary-border",
      lightenColor(currentColor, 70)
    );
    root.style.setProperty(
      "--theme-primary-alpha",
      hexToRgba(currentColor, 0.2)
    );

    // setting up the fonts
    const fontFamilyMap: Record<string, string> = {
      "public-sans": "var(--font-public-sans)",
      inter: "var(--font-inter)",
      "dm-sans": "var(--font-dm-sans)",
      "nunito-sans": "var(--font-nunito-sans)",
    };

    // Add custom fonts to the map
    fontOptions.forEach((font) => {
      fontFamilyMap[font.name] = font.name;
    });

    const selectedFont =
      fontFamilyMap[settings.fontFamily] || settings.fontFamily;
    root.style.setProperty("--font-family-primary", selectedFont);

    // Save settings to localStorage
    localStorage.setItem("dashboard-settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <div className={`space-y-8  ${className}`}>
      {/* Nav Section */}
      <div className="border border-border rounded-lg relative ">
        <Badge className="text-sm absolute -top-4 left-2">
          <span>Nav</span>
          <Info size={14} className="opacity-70" />
        </Badge>

        <section className="w-full flex flex-col flex-wrap gap-4  mt-2 p-4  rounded-lg">
          <label className="font-medium text-sm text-muted-foreground">
            Layout
          </label>

          <div className="flex flex-row flex-wrap gap-4">
            <button
              onClick={() => {
                setOpen(true);
                updateSettings({ ...settings, layout: "vertical" });
              }}
              className={`transition-all rounded-lg hover:scale-105 border ${
                settings.layout === "vertical" ? "ring-2 ring-primary  " : ""
              }`}
            >
              <LayoutSidebarLeft
                primary={
                  settings.layout === "vertical"
                    ? settings.preset
                    : "oklch(0.5 0 0)"
                }
                secondary={"oklch(0.9 0 0)"}
              />
            </button>
            <button
              onClick={() => {
                updateSettings({ ...settings, layout: "horizontal" });
              }}
              className={`transition-all rounded-lg hover:scale-105 border ${
                settings.layout === "horizontal" ? "ring-2 ring-primary  " : ""
              }`}
            >
              <LayoutTopbar
                primary={
                  settings.layout === "horizontal"
                    ? settings.preset
                    : "oklch(0.5 0 0)"
                }
                secondary={"oklch(0.9 0 0)"}
              />
            </button>
            <button
              onClick={() => {
                setOpen(false);
                updateSettings({ ...settings, layout: "vertical" });
              }}
              className={`transition-all rounded-lg hover:scale-105 border ${
                settings.layout === "vertical" ? "ring-2 ring-primary  " : ""
              }`}
            >
              <LayoutCard
                primary={
                  settings.layout === "vertical"
                    ? settings.preset
                    : "oklch(0.5 0 0)"
                }
                secondary={"oklch(0.9 0 0)"}
              />
            </button>
          </div>
        </section>

        <section className="w-full flex flex-col flex-wrap gap-4  px-4 pb-4  rounded-lg">
          <label className="text-sm font-medium text-muted-foreground">
            Color
          </label>

          <div className="flex flex-row flex-wrap gap-6">
            <button
              aria-label="customized-apparent"
              onClick={() => {
                setSelectedColorMode("apparent");
                updateSettings({ ...settings, colorSchema: "apparent" });
              }}
              className={`transition-all rounded-lg hover:scale-105 `}
            >
              <div
                className={cn(
                  selectedColorMode === "apparent"
                    ? "ring-2 ring-primary  rounded-lg border "
                    : ""
                )}
              >
                <NavIntegrateIcon
                  primary={"#FFFFFF"}
                  secondary={"oklch(0.9 0 0)"}
                />
              </div>
              <span className="capitalize text-xs">apparent</span>
            </button>

            <button
              aria-label="customized-integrate"
              onClick={() => {
                setSelectedColorMode("integrate");
                updateSettings({ ...settings, colorSchema: "integrate" });
              }}
              className={`transition-all rounded-lg hover:scale-105 `}
            >
              <div
                className={cn(
                  selectedColorMode === "integrate"
                    ? "ring-2 ring-primary  border rounded-lg"
                    : ""
                )}
              >
                <NavIntegrateIcon
                  primary={settings.preset}
                  secondary={"oklch(0.9 0 0)"}
                />
              </div>
              <span className="capitalize text-xs ">integrate</span>
            </button>
          </div>
        </section>
      </div>

      {/* Presets Section */}
      <div className="space-y-1.5 border border-border rounded-lg relative ">
        <Badge className="text-sm absolute -top-4 left-2">
          <RotateCcw size={14} className="opacity-70" />
          <span>Presets</span>
        </Badge>

        <div className="flex flex-row flex-wrap  gap-4 mt-2 p-4  ">
          {colorPresets.map((preset, index) => (
            <button
              key={preset.name + index}
              onClick={() => {
                const selectedPreset =
                  settings.preset === preset.name ? "gray" : preset.name;
                updateSettings({
                  ...settings,
                  preset: selectedPreset,
                });
              }}
              className={`transition-all rounded-lg hover:scale-105 border ${
                settings.preset === preset.name ? "ring-2 ring-primary " : ""
              }`}
            >
              <PresetSwatch
                color={preset.color}
                tint={"oklch(0.9 0 0)"}
                className="overflow-hidden"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1.5 border border-border rounded-lg relative ">
        <Badge className="text-sm absolute -top-4 left-2">
          <span>Fonts</span>
        </Badge>

        <div className="flex flex-row flex-wrap  gap-4 mt-2 p-4  ">
          {fontOptions?.map((font) => (
            <Button
              key={font.id}
              variant={
                settings.fontFamily === font.name ? "default" : "outline"
              }
              size="sm"
              onClick={() => {
                updateSettings({
                  ...settings,
                  fontFamily: font.name,
                });
              }}
              className="h-16 min-w-[120px]  flex flex-col items-center justify-center gap-1"
            >
              <div className="text-lg font-medium">{font.preview}</div>
              <div className="text-xs opacity-70">{font.name}</div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
