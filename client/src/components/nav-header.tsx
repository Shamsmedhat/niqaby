import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import logo from "../public/img/logo2.png";
export function NavHeader() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "الصفحة الرئيسية", href: "/" },
    { label: "المنتجات", href: "#products" },
    { label: "من نحن", href: "#about" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b ">
      <div className="container mx-auto px-4 h-fit flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 py-2">
          <img src={logo} className="w-36 h-auto"/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-6 ">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium hover:text-primary transition-colors "
            >
              {item.label}
            </a>
          ))}

        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
