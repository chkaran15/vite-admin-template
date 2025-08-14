import { useSettings } from "@/hooks/use-settings";
import type { ModeType } from "@/types";
import { useCallback } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { RotateCcw, Settings } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import UISettings from "./ui-settings";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

const Customizer = () => {
  const { settings, updateSettings, resetSettings } = useSettings();

  const handleSetMode = useCallback(
    (modeName: ModeType) => {
      updateSettings({ ...settings, mode: modeName });
    },
    [settings, updateSettings]
  );

  const handleReset = useCallback(() => {
    resetSettings();
  }, [resetSettings]);

  return (
    <Sheet>
      <SheetTrigger className="fixed bottom-20 end-0 z-50" asChild>
        <Button
          size="icon"
          className="rounded-e-none shadow-sm"
          aria-label="customizer"
        >
          <Settings className="shrink-0 h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetPortal>
        <SheetContent className="p-0" side="right">
          <ScrollArea className="h-full p-4">
            <div className="flex flex-1 flex-col space-y-6  ">
              <SheetHeader className="p-0 ">
                <SheetTitle>Customizer</SheetTitle>
                <SheetDescription>
                  Pick a style a color for the dashboard.
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-8">
                <div className="space-y-8 border border-border rounded-lg relative ">
                  <Badge className="text-sm absolute -top-4 left-2">Mode</Badge>

                  <div className="w-full flex flex-row flex-wrap gap-4  mt-4 p-4 rounded-lg">
                    <button
                      className=" rounded-lg  flex flex-col  gap-2  items-center justify-center transition-all  hover:scale-105"
                      onClick={() => handleSetMode("light")}
                    >
                      <img
                        src="/theme/light-mode-theme.png"
                        alt="Light Mode"
                        className={cn(
                          "shrink-0 w-24 h-24 me-2 rounded-lg",
                          settings.mode === "light" && "border ring-2"
                        )}
                      />
                      <span>Light</span>
                    </button>
                    <button
                      className=" rounded-lg  flex flex-col  gap-2  items-center justify-center transition-all  hover:scale-105"
                      onClick={() => handleSetMode("dark")}
                    >
                      <img
                        src="/theme/dark-mode-theme.png"
                        alt="Dark Mode"
                        className={cn(
                          "shrink-0 w-24 h-24 me-2 rounded-lg",
                          settings.mode === "dark" && "border ring-2"
                        )}
                      />
                      <span> Dark</span>
                    </button>
                  </div>
                </div>

                <UISettings />
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleReset}
              >
                <RotateCcw className="shrink-0 h-4 w-4 me-2" />
                Reset
              </Button>
            </div>
          </ScrollArea>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};

export default Customizer;
