import * as React from "react";
import { Shield, MapPin, AlertTriangle, Users, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import MyIcon from '@/assets/Tirshta.svg?react';

interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Safety Map", icon: MapPin, href: "#map" },
  { name: "Report Incident", icon: AlertTriangle, href: "#report" },
  { name: "Tourist ID", icon: Shield, href: "#id" },
  { name: "Community", icon: Users, href: "#community" },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/60 relative">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-0">
            <MyIcon className="h-28 w-28 text-cyan-500" /> {/* Adjust size as needed */}
            <h1 className="text-3xl font-bold text-cyan-600">Trishta</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-8 flex-1 justify-center">
          <div className="flex space-x-2">
            {navItems.map(({ name, icon: Icon, href }) => (
              <Button
                key={name}
                variant="ghost"
                className="px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300"
                asChild
              >
                <a href={href} className="flex items-center">
                  <Icon className="mr-2 h-4 w-4" />
                  {name}
                </a>
              </Button>
            ))}
            <Button className="px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300">
              Get Digital ID
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex flex-1 justify-end items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map(({ name, icon: Icon, href }) => (
                  <Button
                    key={name}
                    variant="ghost"
                    className="w-full justify-start bg-cyan-400 text-black hover:bg-cyan-300"
                    asChild
                  >
                    <a href={href} className="flex items-center space-x-3 text-lg font-medium">
                      <Icon className="h-5 w-5" />
                      <span>{name}</span>
                    </a>
                  </Button>
                ))}
                <div className="pt-4 border-t">
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Get Digital ID
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

