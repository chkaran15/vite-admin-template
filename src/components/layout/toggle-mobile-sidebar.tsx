import { AlignLeft } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import { Button } from "../ui/button";

export function ToggleMobileSidebar() {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  if (isMobile) {
    return (
      <Button
        data-sidebar="trigger"
        variant="secondary"
        size="icon"
        onClick={() => setOpenMobile(!openMobile)}
        aria-label="Toggle sidebar"
      >
        <AlignLeft className="h-5 w-5" />
      </Button>
    );
  }
}
