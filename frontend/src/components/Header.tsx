import { Shield, MapPin, AlertTriangle, Users, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navItems = [
    { name: "Safety Map", icon: MapPin, href: "#map" },
    { name: "Report Incident", icon: AlertTriangle, href: "#report" },
    { name: "Tourist ID", icon: Shield, href: "#id" },
    { name: "Community", icon: Users, href: "#community" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold gradient-primary text-center bg-clip-text">
            Trishta
            </h1>
            <p className="text-xs text-muted-foreground">Seven Sisters Security</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex ml-8">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  href={item.href}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-smooth hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 justify-end items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Emergency: 112
          </Button>
          <Button variant="hero" size="sm">
            Get Digital ID
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-lg font-medium hover:text-primary transition-smooth"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </a>
                ))}
                <div className="pt-4 border-t">
                  <Button variant="hero" className="w-full">
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