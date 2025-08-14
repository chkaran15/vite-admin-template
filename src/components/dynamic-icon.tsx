import type { DynamicIconNameType } from "@/types";
import { icons, type LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: DynamicIconNameType;
}
// component that render a dynamic Lucid icon based on its name.
export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const LucidIcon = icons[name]; //Dynamically retrieve the icon by name.

  //   Return null if the icon name is invalid.
  if (!LucidIcon) return null;

  return <LucidIcon {...props} />;
}
