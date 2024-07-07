"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { MenuIcon, XIcon } from "lucide-react";
import { NAV_MENU_ITEMS, COMPANY_LOCATIONS } from "@/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MainLogoIcon } from "@/components/items/svg";

const NavBar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-screen  bg-background/50   p-4 px-4 shadow-sm md:px-8 lg:px-12">
      <nav className="flex items-center  justify-between">
        <MainLogoIcon className=" w-28 md:w-32 lg:w-40" />
        <div className="hidden  md:flex   ">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_MENU_ITEMS.map((navItem, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={navItem.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "uppercase")}
                    >
                      {navItem.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="uppercase">
                  locations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=" flex flex-col gap-1 bg-background p-2">
                    {COMPANY_LOCATIONS.map((item) => (
                      <li
                        key={item.label}
                        className="min-w-40 text-sm text-foreground transition-colors hover:text-primary  md:min-w-60  md:text-lg  "
                      >
                        <NavigationMenuLink asChild>
                          <Link href={item.href}>{item.label}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex">
          <Button>
            <span>book now</span>
          </Button>
        </div>
        <div className="flex gap-2 md:hidden">
          <Drawer>
            <DrawerTrigger className="">
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex justify-end p-2">
                <DrawerClose>
                  <XIcon />
                </DrawerClose>
              </div>
              <ul className="flex flex-col  gap-4 p-4 text-foreground ">
                {NAV_MENU_ITEMS.map((navItem) => (
                  <li
                    key={navItem.label}
                    className=" border-primary pb-2 capitalize [&:not(:last-child)]:border-b  "
                  >
                    <Link
                      href={navItem.href}
                      className="transition-colors hover:text-primary"
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
