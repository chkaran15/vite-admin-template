import { Info } from "lucide-react";
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
import { Button } from "../ui/button";
import { themes } from "@/configs/themes";
import type { ThemeType } from "@/types";

const fontOptions = [
  { id: "public-sans", name: "Public Sans", preview: "Aa" },
  { id: "inter", name: "Inter", preview: "Aa" },
  { id: "dm-sans", name: "DM Sans", preview: "Aa" },
  { id: "nunito-sans", name: "Nunito Sans", preview: "Aa" },
];

interface UISettingsProps {
  className?: string;
}

export default function UISettings({ className }: UISettingsProps) {
  const { settings, updateSettings } = useSettings();
  const { setOpen, open } = useSidebar();

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
                settings.layout === "vertical" && open
                  ? "ring-2 ring-primary  "
                  : ""
              }`}
            >
              <LayoutSidebarLeft
                primary={
                  settings.layout === "vertical"
                    ? `hsl(${settings.preset})`
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
                    ? `hsl(${settings.preset})`
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
                settings.layout === "vertical" && !open
                  ? "ring-2 ring-primary  "
                  : ""
              }`}
            >
              <LayoutCard
                primary={
                  settings.layout === "vertical"
                    ? `hsl(${settings.preset})`
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
                updateSettings({ ...settings, colorSchema: "apparent" });
              }}
              className={`transition-all rounded-lg hover:scale-105 `}
            >
              <div
                className={cn(
                  settings.colorSchema === "apparent"
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
                updateSettings({ ...settings, colorSchema: "integrate" });
              }}
              className={`transition-all rounded-lg hover:scale-105 `}
            >
              <div
                className={cn(
                  settings.colorSchema === "integrate"
                    ? "ring-2 ring-primary  border rounded-lg"
                    : ""
                )}
              >
                <NavIntegrateIcon
                  primary={`hsl(${settings.preset})`}
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
          <span>Presets</span>
        </Badge>

        <div className="flex flex-row flex-wrap  gap-4 mt-2 p-4  ">
          {Object.entries(themes).map(([name]) => {
            const color = themes[name as ThemeType].activeColor.dark;
            return (
              <button
                key={name}
                onClick={() => {
                  updateSettings({
                    ...settings,
                    preset: color,
                    theme: name as ThemeType,
                  });
                }}
                className={`transition-all rounded-lg hover:scale-105 border ${
                  settings.theme === name ? "ring-2 ring-primary " : ""
                }`}
              >
                <PresetSwatch
                  color={`hsl(${color})`}
                  tint={"oklch(0.9 0 0)"}
                  className="overflow-hidden"
                />
              </button>
            );
          })}
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
