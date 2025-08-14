import { SidebarTrigger } from "@/components/ui/sidebar";
import { ToggleMobileSidebar } from "../toggle-mobile-sidebar";
import { NotificationDropdown } from "../notification-dropdown";
import { FullScreenToggle } from "../full-screen-toggle";
import { ModeTrigger } from "@/components/mode-trigger";
import { UserDropdown } from "../user-dropdown";

export function VerticalLayoutHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-sidebar-border">
      <div className="container flex h-14 justify-between items-center gap-4">
        <ToggleMobileSidebar />

        <div className="grow flex justify-end gap-2 pr-2">
          <SidebarTrigger className="hidden lg:flex lg:me-auto" />
          <NotificationDropdown />
          <FullScreenToggle />
          <ModeTrigger />
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
