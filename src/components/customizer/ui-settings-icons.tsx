import React from "react";

/**
 * Color‑Configurable SVG Icon Set + Example UI
 * -------------------------------------------------
 * - All icons are pure SVG and accept colors via props.
 * - Designed to match the style in the screenshot: soft rounded rectangles,
 *   simple blocks, and subtle strokes.
 * - Works great with Tailwind; you can also pass hex/RGB/HSL strings.
 *
 * Usage:
 *  <NavIntegrateIcon primary="#6D28D9" secondary="#EDE9FE" />
 *  <PresetSwatch color="#22C55E" />
 *
 * The default export renders a small demo panel showing the icons.
 */

// -----------------------------
// Types & Utilities
// -----------------------------

type Color = string; // e.g., "#A3A3A3" | "hsl(260 100% 60%)" | "rgb(0,0,0)"

interface IconProps {
  size?: number; // pixel size (both width/height)
  radius?: number; // corner radius
  primary?: Color; // main accent (e.g., nav strip)
  secondary?: Color; // surface / cards
  stroke?: Color; // outline color
  background?: Color; // icon tile background (rarely used inside)
  className?: string;
}

const withDefaults = (p: IconProps) => ({
  size: 64,
  radius: 12,
  primary: "hsl(222.2 47.4% 11.2%)", // slate-900
  secondary: "hsl(210 40% 98%)", // slate-50
  stroke: "hsl(214.3 31.8% 91.4%)", // slate-200
  background: "hsl(0 0% 100%)", // white
  ...p,
});

// Utility wrapper to keep viewBox consistent.
const Svg: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 64,
  children,
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {children}
  </svg>
);

// Soft shadow (subtle)
const Shadow: React.FC = () => (
  <filter id="softShadow" x="-50%" y="-50%" width="100%" height="100%">
    <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
  </filter>
);

// -----------------------------
// Core Icon Shapes
// -----------------------------

/** NavIntegrateIcon — Sidebar blends into content */
export const NavIntegrateIcon: React.FC<IconProps> = (props) => {
  const { primary, stroke, secondary } = withDefaults(props);
  return (
    <Svg role="img" aria-label="Integrated Nav" stroke={stroke}>
      <defs>
        <Shadow />
      </defs>

      {/* App window */}
      <rect x={3} y={3} width={90} height={90} rx={10} fill={secondary} />
      {/* Sidebar (integrated) */}
      <rect x={16} y={22} width={20} height={52} rx={6} fill={primary} />
      {/* Content blocks */}
      <rect
        x={40}
        y={24}
        width={40}
        height={16}
        rx={5}
        fill="#FFFFFF"
        opacity={0.85}
      />
      <rect
        x={40}
        y={44}
        width={40}
        height={28}
        rx={6}
        fill="#FFFFFF"
        opacity={0.85}
      />
    </Svg>
  );
};

/** LayoutSidebarLeft — Classic left sidebar layout icon */
export const LayoutSidebarLeft: React.FC<IconProps> = (props) => {
  const { primary, secondary, stroke } = withDefaults(props);
  return (
    <Svg role="img" aria-label="Layout with left sidebar">
      <rect
        x={3}
        y={3}
        width={90}
        height={90}
        rx={10}
        fill={secondary}
        stroke={stroke}
      />
      <rect x={16} y={20} width={25} height={56} rx={6} fill={primary} />
      <circle cx={25} cy={28} r={3} fill="#FFFFFF" opacity={0.9} />
      <rect
        x={20}
        y={36}
        width={17}
        height={4}
        rx={2}
        fill="#FFFFFF"
        opacity={0.9}
      />
      <rect
        x={20}
        y={44}
        width={17}
        height={4}
        rx={2}
        fill="#FFFFFF"
        opacity={0.9}
      />
      <rect
        x={20}
        y={52}
        width={17}
        height={4}
        rx={2}
        fill="#FFFFFF"
        opacity={0.9}
      />
      <rect
        x={45}
        y={24}
        width={35}
        height={16}
        rx={5}
        fill="#FFFFFF"
        opacity={0.85}
      />
      <rect
        y={44}
        x={45}
        width={35}
        height={28}
        rx={6}
        fill="#FFFFFF"
        opacity={0.85}
      />
    </Svg>
  );
};

/** LayoutTopbar — Top navigation layout icon */
export const LayoutTopbar: React.FC<IconProps> = (props) => {
  const { primary, secondary, stroke } = withDefaults(props);
  return (
    <Svg role="img" aria-label="Layout with top bar">
      <rect
        x={3}
        y={3}
        width={90}
        height={90}
        rx={10}
        fill={secondary}
        stroke={stroke}
      />
      <rect x={16} y={20} width={64} height={12} rx={6} fill={primary} />
      <circle cx={22} cy={26} r={2.5} fill="#FFFFFF" opacity={0.9} />
      <rect
        x={28}
        y={24}
        width={12}
        height={4}
        rx={2}
        fill="#FFFFFF"
        opacity={0.9}
      />
      <rect
        x={16}
        y={36}
        width={64}
        height={36}
        rx={6}
        fill="#FFFFFF"
        opacity={0.85}
      />
    </Svg>
  );
};

/** LayoutCard — Card-heavy layout (grid) */
export const LayoutCard: React.FC<IconProps> = (props) => {
  const { primary, secondary, stroke } = withDefaults(props);
  return (
    <Svg role="img" aria-label="Layout with left sidebar">
      <rect
        x={3}
        y={3}
        width={90}
        height={90}
        rx={10}
        fill={secondary}
        stroke={stroke}
      />
      <rect x={16} y={20} width={17} height={56} rx={6} fill={primary} />
      <circle cx={25} cy={28} r={3} fill="#FFFFFF" opacity={0.9} />
      <rect
        x={20}
        y={36}
        width={10}
        height={4}
        rx={2}
        fill="#FFFFFF"
        opacity={0.9}
      />
      <rect
        x={20}
        y={44}
        width={10}
        height={4}
        rx={2}
        fill="#FFFFFF"
        opacity={0.9}
      />
      <rect
        x={20}
        y={52}
        width={10}
        height={4}
        rx={2}
        fill="#FFFFFF"
        opacity={0.9}
      />
      <rect
        y={24}
        x={36}
        width={42}
        height={16}
        rx={5}
        fill="#FFFFFF"
        opacity={0.85}
      />
      <rect
        y={44}
        x={36}
        width={42}
        height={28}
        rx={6}
        fill="#FFFFFF"
        opacity={0.85}
      />
    </Svg>
  );
};

/** PresetSwatch — Small color chip with mini layout glyph */
export const PresetSwatch: React.FC<{
  color: Color; // main hue of the swatch
  tint?: Color; // background tint
  size?: number; // overall size
  className?: string;
}> = ({ color, tint, className }) => {
  return (
    <Svg className={className} role="img" aria-label="Preset swatch">
      <rect x={3} y={3} width={90} height={90} fill={tint} rx={12} />

      <rect
        x={12}
        y={12}
        width={72}
        height={72}
        rx={10}
        fill="#FFFFFF"
        opacity={0.95}
      />
      <rect x={20} y={28} width={18} height={24} rx={6} fill={color} />
      <rect
        x={42}
        y={30}
        width={30}
        height={6}
        rx={5}
        fill={color}
        opacity={0.4}
      />
      <rect
        x={42}
        y={40}
        width={30}
        height={10}
        rx={5}
        fill={color}
        opacity={0.4}
      />
    </Svg>
  );
};
