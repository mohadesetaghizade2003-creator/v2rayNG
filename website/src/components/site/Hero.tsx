import heroVilla from "@/assets/hero-villa.jpg";
import { ArrowLeft, BadgeCheck, MapPin, Phone, Sparkles, Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SearchCard } from "@/components/site/SearchCard";
import type { Filters } from "@/data";

const stats = [
  { value: "۱۲,۰۰۰+", label: "ملک فعال" },
  { value: "۹۸٪", label: "رضایت مشتری" },
  { value: "۱۵ سال", label: "تجربه در بازار" },
  { value: "۳۲", label: "مشاور متخصص" },
];

const visitors = ["س", "ا", "ن", "م"];

interface HeroProps {
  onSearch: (filters: Filters) => void;
}

export function Hero({ onSearch }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-28 size-[26rem] rounded-full bg-lavender/70 blur-3xl" />
        <div className="absolute -left-24 top-48 size-80 rounded-full bg-blush/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge
              variant="secondary"
              className="gap-1.5 rounded-full border border-violet/15 bg-lavender px-3 py-1.5 text-xs font-semibold text-deep"
            >
              <Sparkles className="size-3.5 text-violet" />
              بیش از ۱۲,۰۰۰ ملک تأییدشده در سراسر ایران
            </Badge>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.25] text-navy sm:text-5xl">
              خانه‌ی رویایی‌تان را
              <span className="relative mx-2 inline-block text-violet">
                همین امروز
                <span className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-mint/60" />
              </span>
              پیدا کنید
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              خرید، فروش و اجاره‌ی ملک بدون دغدغه؛ با ارزیابی دقیق قیمت، بازدید مجازی و مشاوره‌ی
              تخصصی تیمی که ۱۵ سال در بازار املاک کنار شما بوده است.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="h-12 rounded-xl bg-cta px-7 text-base font-semibold text-white shadow-soft hover:opacity-90"
              >
                <a href="#properties">
                  مشاهده املاک
                  <ArrowLeft />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-navy/15 bg-background px-7 text-base font-semibold text-navy shadow-soft hover:bg-accent"
              >
                <a href="tel:+982191000000">
                  <Phone />
                  مشاوره رایگان
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center">
                {visitors.map((letter, index) => (
                  <Avatar
                    key={letter}
                    className={`size-10 border-2 border-background bg-lavender ${index > 0 ? "-mr-3" : ""}`}
                  >
                    <AvatarFallback className="bg-lavender text-xs font-bold text-deep">
                      {letter}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star key={item} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ms-1 text-xs font-bold text-navy">۴.۹ از ۵</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  امتیاز ۲,۳۰۰ مشتری واقعی آریا املاک
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] border-4 border-background shadow-card">
              <img
                src={heroVilla}
                alt="ویلای دوبلکس لوکس با استخر"
                className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
              />
            </div>

            <span className="absolute -top-4 left-4 flex items-center gap-1.5 rounded-full bg-mint px-4 py-2 text-xs font-bold text-navy shadow-soft">
              <BadgeCheck className="size-4" />
              بازدید تأییدشده
            </span>

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border bg-card/95 p-4 shadow-card backdrop-blur sm:inset-x-auto sm:right-4 sm:w-72">
              <p className="text-sm font-bold text-navy">ویلای دوبلکس لواسان</p>
              <p className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <MapPin className="size-3.5 text-violet" />
                لواسان، شهرک نجارکلا
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">قیمت کل</span>
                <span className="text-sm font-extrabold text-violet">۴۵ میلیارد تومان</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 lg:mt-12">
          <SearchCard onSearch={onSearch} />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card px-5 py-4 text-center shadow-soft"
            >
              <p className="text-2xl font-extrabold text-navy sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
