import { DynamicIcon } from "@/components/dynamic-icon";
import { Badge } from "@/components/ui/badge";
import {
  Menubar,
  MenubarMenu,
  MenubarSub,
  MenubarContent,
  MenubarItem,
  MenubarSubContent,
  MenubarTrigger,
  MenubarSubTrigger,
} from "@/components/ui/menubar";
import { navigationsData } from "@/data/navigationData";
import { isActivePathname } from "@/lib/isActivePathname";
import { cn } from "@/lib/utils";
import type { NavigationNestedItem, NavigationRootItem } from "@/types";

import { Link } from "@tanstack/react-router";
import React from "react";
import { CommandMenu } from "../command-menu";
import { useSettings } from "@/hooks/use-settings";

export function TopBarHeaderMenubar() {
  const renderMenuItem = (item: NavigationRootItem | NavigationNestedItem) => {
    const title = item.title;
    const label = item.label;

    //  If the item has nested items, render it with a MenubarSub.
    if (item.items) {
      return (
        <MenubarSub>
          <MenubarSubTrigger>
            {"iconName" in item && (
              <DynamicIcon name={item.iconName} className="me-2 h-4 w-4" />
            )}
            <span>{title}</span>
            {"label" in item && <Badge variant="secondary"> {label}</Badge>}
          </MenubarSubTrigger>
          <MenubarSubContent className="max-h-[90vh] flex flex-col flex-wrap gap-1">
            {item.items.map((subItem: NavigationNestedItem) => {
              return (
                <MenubarItem key={subItem.title} className="p-0">
                  {renderMenuItem(subItem)}
                </MenubarItem>
              );
            })}
          </MenubarSubContent>
        </MenubarSub>
      );
    }

    // otherwise, render the item with a link
    if ("href" in item) {
      const isActive = isActivePathname(
        item.href,
        window.location.pathname,
        true
      );
      return (
        <MenubarItem asChild>
          <Link
            to={item.href}
            className={cn(
              `w-full gap-2`,
              isActive
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground"
            )}
          >
            {"iconName" in item ? (
              <DynamicIcon name={item.iconName} className=" h-4 w-4" />
            ) : (
              <DynamicIcon name="Circle" className="h-4 w-4" />
            )}
            <span>{title}</span>
            {"label" in item && <Badge variant="secondary"> {label}</Badge>}
          </Link>
        </MenubarItem>
      );
    }
  };

  return (
    <Menubar className="border-0 bg-transparent">
      {navigationsData.map((nav) => {
        const title = nav.title;

        return (
          <MenubarMenu key={nav.title}>
            <MenubarTrigger>{title}</MenubarTrigger>
            <MenubarContent>
              {nav.items.map((item) => (
                <React.Fragment key={item.title}>
                  {renderMenuItem(item)}
                </React.Fragment>
              ))}
            </MenubarContent>
          </MenubarMenu>
        );
      })}
    </Menubar>
  );
}

export function TopBarHeader() {
  const { settings } = useSettings();

  return (
    <div
      className={cn(
        " ",
        settings.colorSchema === "integrate" && settings.mode === "light"
          ? "bg-primary text-primary-foreground"
          : "bg-sidebar"
      )}
    >
      <div className="container w-full  hidden justify-between items-center py-1 lg:flex">
        <TopBarHeaderMenubar />
        <CommandMenu buttonClassName="h-8" />
      </div>
    </div>
  );
}
