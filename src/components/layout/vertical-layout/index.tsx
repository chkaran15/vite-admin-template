import { VerticalLayoutHeader } from "./vertical-layout-header";
import { Footer } from "../footer";
import { AppSidebar } from "../app-sidebar";

export function VerticalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppSidebar />
      <div className="w-full">
        <VerticalLayoutHeader />
        <main className="min-h-[calc(100vh-7rem)] bg-muted/40">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
