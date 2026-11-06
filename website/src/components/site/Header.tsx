import { Building2, Menu, Phone, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { label: "خرید خانه", href: "#properties" },
  { label: "اجاره خانه", href: "#properties" },
  { label: "خدمات", href: "#services" },
  { label: "درباره ما", href: "#about" },
  { label: "نظرات", href: "#testimonials" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-cta shadow-soft">
            <Building2 className="size-6 text-white" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold text-navy">آریا املاک</span>
            <span className="block text-xs text-muted-foreground">مشاور املاک هوشمند</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+982191000000"
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-navy md:flex"
          >
            <Phone className="size-4 text-violet" />
            ۰۲۱-۹۱۰۰۰۰۰۰
          </a>
          <Button variant="ghost" className="hidden md:inline-flex">
            ورود
          </Button>
          <Button className="bg-cta text-white shadow-soft hover:opacity-90">
            <Plus />
            ثبت آگهی
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="منو">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <SheetHeader className="text-right">
                <SheetTitle className="text-navy">آریا املاک</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+982191000000"
                  className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-navy"
                >
                  <Phone className="size-4 text-violet" />
                  ۰۲۱-۹۱۰۰۰۰۰۰
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
