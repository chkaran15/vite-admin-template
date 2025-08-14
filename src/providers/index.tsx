import { SettingsProvider } from "@/context/settings-context";

import { ModeProvider } from "./mode-provider";
import { ThemeProvider } from "./theme-provider";
import { DirectionProvider } from "./direction-provider";
import type { DirectionType } from "@/types";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppLayout } from "@/components/layout/app-layout";

function Providers({
  direction,
  children,
}: {
  direction: DirectionType;
  children: React.ReactNode;
}) {
  return (
    <SettingsProvider>
      <ModeProvider>
        <ThemeProvider>
          <DirectionProvider direction={direction}>
            <SidebarProvider
              style={
                {
                  "--sidebar-width": "calc(var(--spacing) * 72)",
                  "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
              }
            >
              <AppLayout>{children}</AppLayout>
            </SidebarProvider>
          </DirectionProvider>
        </ThemeProvider>
      </ModeProvider>
    </SettingsProvider>
  );
}

export default Providers;
