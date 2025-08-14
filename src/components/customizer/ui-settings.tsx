import { useState } from "react";
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

// OKLCH color presets with proper contrast
const colorPresets = [
  {
    name: "Green",
    primary: "oklch(0.646 0.222 142.495)", // green-500
    secondary: "oklch(0.961 0.044 142.495)", // green-50
    tint: "oklch(0.984 0.022 142.495)", // green-25
  },
  {
    name: "Blue",
    primary: "oklch(0.6 0.118 264.052)", // blue-500
    secondary: "oklch(0.97 0.024 264.052)", // blue-50
    tint: "oklch(0.985 0.012 264.052)", // blue-25
  },
  {
    name: "Purple",
    primary: "oklch(0.569 0.196 293.89)", // purple-500
    secondary: "oklch(0.976 0.039 293.89)", // purple-50
    tint: "oklch(0.988 0.02 293.89)", // purple-25
  },
  {
    name: "Blue2",
    primary: "oklch(0.6 0.118 264.052)", // blue-500 (duplicate for 6 total)
    secondary: "oklch(0.97 0.024 264.052)", // blue-50
    tint: "oklch(0.985 0.012 264.052)", // blue-25
  },
  {
    name: "Orange",
    primary: "oklch(0.705 0.169 70.67)", // orange-500
    secondary: "oklch(0.98 0.034 70.67)", // orange-50
    tint: "oklch(0.99 0.017 70.67)", // orange-25
  },
  {
    name: "Red",
    primary: "oklch(0.637 0.237 25.331)", // red-500
    secondary: "oklch(0.98 0.047 25.331)", // red-50
    tint: "oklch(0.99 0.024 25.331)", // red-25
  },
];

type ColorMode = "integrate" | "apparent";
type LayoutType = "sidebar" | "topbar" | "card";

interface UISettingsProps {
  className?: string;
}

export default function UISettings({ className }: UISettingsProps) {
  const [selectedColorMode, setSelectedColorMode] =
    useState<ColorMode>("integrate");
  const { settings, updateSettings } = useSettings();
  const { setOpen } = useSidebar();
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>("sidebar");
  const [selectedPreset, setSelectedPreset] = useState(2); // Purple as default

  const currentPreset = colorPresets[selectedPreset];

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
                setSelectedLayout("sidebar");
                setOpen(true);
                updateSettings({ ...settings, layout: "vertical" });
              }}
              className={`transition-all rounded-lg hover:scale-105 border ${
                selectedLayout === "sidebar" ? "ring-2 ring-primary  " : ""
              }`}
            >
              <LayoutSidebarLeft
                primary={
                  selectedLayout === "sidebar"
                    ? currentPreset.primary
                    : "oklch(0.5 0 0)"
                }
                secondary={
                  selectedLayout === "sidebar"
                    ? currentPreset.secondary
                    : "oklch(0.9 0 0)"
                }
              />
            </button>
            <button
              onClick={() => {
                setSelectedLayout("topbar");
                updateSettings({ ...settings, layout: "horizontal" });
              }}
              className={`transition-all rounded-lg hover:scale-105 border ${
                selectedLayout === "topbar" ? "ring-2 ring-primary  " : ""
              }`}
            >
              <LayoutTopbar
                primary={
                  selectedLayout === "topbar"
                    ? currentPreset.primary
                    : "oklch(0.5 0 0)"
                }
                secondary={
                  selectedLayout === "topbar"
                    ? currentPreset.secondary
                    : "oklch(0.9 0 0)"
                }
              />
            </button>
            <button
              onClick={() => {
                setSelectedLayout("card");
                setOpen(false);
                updateSettings({ ...settings, layout: "vertical" });
              }}
              className={`transition-all rounded-lg hover:scale-105 border ${
                selectedLayout === "card" ? "ring-2 ring-primary  " : ""
              }`}
            >
              <LayoutCard
                primary={
                  selectedLayout === "card"
                    ? currentPreset.primary
                    : "oklch(0.5 0 0)"
                }
                secondary={
                  selectedLayout === "card"
                    ? currentPreset.secondary
                    : "oklch(0.9 0 0)"
                }
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
              aria-label="customized-integrate"
              onClick={() => setSelectedColorMode("integrate")}
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
                  primary={currentPreset.primary}
                  secondary={currentPreset.secondary}
                />
              </div>
              <span className="capitalize text-xs ">integrate</span>
            </button>
            <button
              aria-label="customized-apparent"
              onClick={() => setSelectedColorMode("apparent")}
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
                  secondary={currentPreset.secondary}
                />
              </div>
              <span className="capitalize text-xs">apparent</span>
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
              key={preset.name}
              onClick={() => setSelectedPreset(index)}
              className={`transition-all rounded-lg hover:scale-105 border ${
                selectedPreset === index ? "ring-2 ring-primary " : ""
              }`}
            >
              <PresetSwatch
                color={preset.primary}
                tint={preset.tint}
                className="overflow-hidden"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
