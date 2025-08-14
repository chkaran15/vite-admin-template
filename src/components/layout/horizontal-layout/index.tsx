import type { ReactNode } from "react";

import { Footer } from "../footer";
import { HorizontalLayoutHeader } from "./horizontal-layout-header";
import { AppSidebar } from "../app-sidebar";

export function HorizontalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppSidebar />
      <div className="w-full">
        <HorizontalLayoutHeader />
        <main className="min-h-[calc(100svh-9.85rem)] bg-muted/40">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
