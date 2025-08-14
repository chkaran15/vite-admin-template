import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DynamicIcon } from "../dynamic-icon";

// Extend the global 'Document' and 'HTMLElement' interfaces to handle fullscreen API variations across browsers
declare global {
  interface Document {
    webkitExistFullScreen?: () => Promise<void>;
    msExistFullScreen?: () => Promise<void>;
    webkitFullScreenElement?: Element | null;
    msFullScreenElement?: Element | null;
  }

  interface HTMLElement {
    webkitRequestFullScreen?: () => Promise<void>;
    msRequestFullScreen?: () => Promise<void>;
  }
}

export function FullScreenToggle() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  //   If fullscreen mode is not active, activate it
  const toggleFullScreen = () => {
    const element = document.documentElement;

    if (!isFullScreen) {
      if (element.requestFullscreen) {
        // standard fullscreen API
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        // Safari
        element.webkitRequestFullScreen();
      } else if (element.msRequestFullScreen) {
        // IE/Edge
        element.msRequestFullScreen();
      }
    } else {
      if (document.exitFullscreen) {
        // standard fullscreen API
        document.exitFullscreen();
      } else if (document.webkitExistFullScreen) {
        // For Safari
        document.webkitExistFullScreen();
      } else if (document.msExistFullScreen) {
        // For IE/Edge
        document.msExistFullScreen();
      }
    }
  };

  const handleFullScreenChange = () => {
    // Update the fullscreen state when fullscreen changes

    setIsFullScreen(
      !!document.fullscreenElement ||
        !!document.webkitFullScreenElement ||
        !!document.msFullScreenElement
    );
  };

  useEffect(() => {
    // Add event listeners for fullscreen changes across various browsers
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    // Cleanup event listeners to avoid memory leaks
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      arial-label="Toggle Full Screen"
      className="hidden md:inline-flex"
      onClick={toggleFullScreen}
    >
      <DynamicIcon
        name={isFullScreen ? "Shrink" : "Expand"}
        className="size-4"
      />
    </Button>
  );
}
