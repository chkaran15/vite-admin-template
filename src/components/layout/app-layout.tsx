import { useIsVertical } from "@/hooks/use-isVertical";
import { VerticalLayout } from "./vertical-layout";
import { HorizontalLayout } from "./horizontal-layout";
import Customizer from "../customizer";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const isVertical = useIsVertical();

  return (
    <>
      <Customizer />
      {isVertical ? (
        <VerticalLayout>{children}</VerticalLayout>
      ) : (
        <HorizontalLayout>{children}</HorizontalLayout>
      )}
    </>
  );
}
