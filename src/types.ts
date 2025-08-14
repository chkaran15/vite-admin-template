import type { icons, LucideIcon } from "lucide-react";
import { themes, type radii } from "./configs/themes";
import type { ComponentType, SVGAttributes } from "react";

export type LayoutType = "vertical" | "horizontal";

export type DirectionType = "ltr" | "rtl";

export type ModeType = "light" | "dark" | "system";

export type RadiusType = (typeof radii)[number];

export type ThemeType = keyof typeof themes;

interface CustomTheme {
  id: string;
  name: string;
  color: string;
}

interface CustomFont {
  id: string;
  name: string;
  family: string;
}

export type ColorSchema = "integrate" | "apparent";
export type Preset = "green" | "blue" | "purple" | "orange" | "red" | string;
export type FontFamily =
  | "public-sans"
  | "inter"
  | "dm-sans"
  | "nunito-sans"
  | string;

export type SettingsType = {
  theme: ThemeType;
  mode: ModeType;
  layout: LayoutType;
  colorSchema: ColorSchema;
  customThemes: CustomTheme[];
  preset: Preset;
  customFonts: CustomFont[];
  fontFamily: FontFamily;
};

export interface IconProps extends SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
}

export type IconType = ComponentType<IconProps> | LucideIcon;

export type DynamicIconNameType = keyof typeof icons;

export interface NotificationType {
  unreadCount: number;
  notifications: Array<{
    id: string;
    iconName: DynamicIconNameType;
    content: string;
    url: string;
    date: Date;
    isRead: boolean;
  }>;
}

export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  password: string;
  username: string;
  role: string;
  avatar: string;
  background: string;
  status: string;
  phoneNumber: string;
  email: string;
  state: string;
  country: string;
  address: string;
  zipCode: string;
  language: string;
  timeZone: string;
  currency: string;
  organization: string;
  twoFactorAuth: boolean;
  loginAlerts: boolean;
  accountReoveryOption?: "email" | "sms" | "codes";
  connections: number;
  followers: number;
}

export interface NavigationType {
  title: string;
  items: NavigationRootItem[];
}

export type NavigationRootItem =
  | NavigationRootItemWithHrefType
  | NavigationRootItemWithItemsType;

export interface NavigationRootItemBasicType {
  title: string;
  label?: string;
  iconName: DynamicIconNameType;
}

export interface NavigationRootItemWithHrefType
  extends NavigationRootItemBasicType {
  href: string;
  items?: never;
}

export interface NavigationRootItemWithItemsType
  extends NavigationRootItemBasicType {
  items: (
    | NavigationNestedItemWithHrefType
    | NavigationNestedItemWithItemsType
  )[];
  href?: never;
}

export interface NavigationNestedItemBasicType {
  title: string;
  label?: string;
}

export interface NavigationNestedItemWithHrefType
  extends NavigationNestedItemBasicType {
  href: string;
  items?: never;
}

export interface NavigationNestedItemWithItemsType
  extends NavigationNestedItemBasicType {
  items: (
    | NavigationNestedItemWithHrefType
    | NavigationNestedItemWithItemsType
  )[];
  href?: never;
}

export type NavigationNestedItem =
  | NavigationNestedItemWithHrefType
  | NavigationNestedItemWithItemsType;
