"use client";
import { ChevronsDown, Menu } from "lucide-react";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/borderbeam"
import logo from "/public/logo.png";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#team", label: "About" },
  { href: "#testimonials", label: "Service" },
  { href: "#sap", label: "SAP" },
  { href: "#faq", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="w-full mx-auto mt-1 z-40 flex justify-between items-center py-4 px-6 md:px-10 bg-card">
      <Link href="/" className="font-bold text-xl flex items-center">
        {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
        <Image
          className="w-7 h-7 object-cover mr-2"
          src={logo}
          alt="logo"
        />
        Designing
        <span className="font-normal text-lg ml-1"> Solutions</span>
      </Link>
      {/* Mobile Menu */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    Designing Solutions
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-sm font-medium"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation with Hover Animation */}
      <NavigationMenu className="hidden lg:flex mx-auto list-none">
        <NavigationMenuItem>
          {routeList.map(({ href, label }) => (
            <NavigationMenuLink key={href} asChild>
              <Link
                href={href}
                className="relative px-4 py-3 text-sm border-l border-b border-[#F1F1F1] first:border-l-0 overflow-hidden group inline-block"
              >
                <div className="relative h-[20px] leading-[20px] overflow-hidden">
                  <span className="block text-zinc-600 translate-y-0 group-hover:-translate-y-full transition-transform duration-[1125ms] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    {label}
                  </span>
                  <span className="absolute text-black left-0 top-full group-hover:top-0 transition-all duration-[1125ms] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    {label}
                  </span>
                </div>

              </Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <div>
          <Link
            href="#"
            className="group relative overflow-hidden border-2 py-3 px-5 rounded-full flex items-center gap-2 hover:text-white font-semibold"
          >
            <BorderBeam
              size={60}
              initialOffset={30}
              className="from-transparent via-orange-500 to-transparent"
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
            />

            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-[#1a1a1a] translate-y-full transition-transform duration-500 text-white ease-out group-hover:translate-y-14"></span>
            <span className="relative z-10 flex items-center gap-2">
              Let&apos;s Talk
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.03629 9.72484C8.04689 9.73414 8.37179 9.80525 8.75822 9.88282C9.14471 9.96038 9.46509 10.012 9.47025 9.99759C9.47535 9.98314 9.51534 9.74889 9.55906 9.477C9.6469 8.93102 9.85958 8.29355 10.0868 7.89487C10.7952 6.65237 12.0661 5.82966 13.6075 5.61583L14 5.56136L14 5.01248L14 4.46356L13.6442 4.41144C11.3134 4.06995 9.79382 2.54799 9.50955 0.270372C9.491 0.121646 9.46882 7.51559e-07 9.46028 7.52278e-07C9.38167 7.58905e-07 8.07913 0.274135 8.05449 0.295852C8.03668 0.311555 8.04993 0.45098 8.08399 0.605634C8.4609 2.31815 9.54012 3.71167 10.9406 4.29433L11.2766 4.4341L4.36832 4.44505L-4.67662e-07 4.452L-3.74024e-07 5.56284L4.37956 5.5698L11.2715 5.58079L10.8474 5.76845C9.7471 6.25525 8.87599 7.21016 8.36301 8.49189C8.21682 8.85705 7.99625 9.68954 8.03629 9.72484Z" fill="currentcolor"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>

    </header>
  );
};
