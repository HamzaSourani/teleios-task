import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon, XIcon } from "lucide-react";
import { NAV_MENU_ITEMS } from "@/constants";

const BOOK_ITEMS = [
  { label: "dubai", href: "" },
  { label: "sharjah", href: "" },
];
const NavBar = () => {
  return (
    <header className="bg-background/80 z-50 fixed top-0  shadow-sm left-0  p-4 px-8 w-screen">
      <nav className="flex justify-between  items-center">
        <Image
          src="/assets/images/logo.png"
          className="w-24 sm:w-28 md:32 lg:w-40"
          quality={100}
          alt="teleios"
          width={160}
          height={160}
        />
        <ul className="hidden font-syncopate font-semibold text-xs md:flex text-foreground ">
          {NAV_MENU_ITEMS.map((item) => (
            <li
              key={item}
              className=" uppercase [&:not(:last-of-type)]:after:content-['/'] after:px-2  "
            >
              <Link href={""} className="hover:text-primary transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" capitalize">
                  Book Now
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="min-w-32 flex flex-col gap-1 p-2">
                    {BOOK_ITEMS.map((item) => (
                      <li
                        key={item.label}
                        className="hover:text-primary uppercase transition-colors  [&:not(:last-of-type)]:after:content-['']   [&:not(:last-of-type)]:after:block    [&:not(:last-of-type)]:after:my-1   [&:not(:last-of-type)]:after:border "
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
          <Drawer>
            <DrawerTrigger className="md:hidden">
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex justify-end p-2">
                <DrawerClose>
                  <XIcon />
                </DrawerClose>
              </div>
              <ul className="flex flex-col  p-4 gap-4 text-foreground ">
                {NAV_MENU_ITEMS.map((item) => (
                  <li
                    key={item}
                    className=" capitalize [&:not(:last-child)]:border-b border-primary pb-2  "
                  >
                    <Link
                      href={""}
                      className="hover:text-primary transition-colors"
                    >
                      {item}
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
