import Providers from "@/providers";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <Providers direction="ltr">
        <Outlet />
      </Providers>
    );
  },
});
