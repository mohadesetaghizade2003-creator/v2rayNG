import interior from "@/assets/interior.jpg";
import { ArrowLeft, BadgeCheck, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const points = [
  "بازدید حضوری و آنلاین از ملک",
  "استعلام سند و مالکیت پیش از معامله",
  "قیمت‌گذاری بر پایه داده‌های واقعی بازار",
  "پشتیبانی کامل پس از تحویل کلید",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border-4 border-background shadow-card">
            <img
              src={interior}
              alt="فضای داخلی خانه‌ی نوساز"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card sm:right-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-cta text-white">
              <BadgeCheck className="size-6" />
            </span>
            <div>
              <p className="text-xl font-extrabold text-navy">۱۵+ سال</p>
              <p className="text-xs text-muted-foreground">تجربه در بازار املاک ایران</p>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <span className="text-xs font-bold tracking-wide text-violet">درباره آریا املاک</span>
          <h2 className="mt-2 text-2xl font-extrabold leading-relaxed text-navy sm:text-3xl">
            کنار شما هستیم تا تصمیم درست را بگیرید
          </h2>
          <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
            از سال ۱۳۸۹ در کنار خانواده‌های ایرانی بوده‌ایم؛ با این باور که خرید خانه نباید
            استرس‌آور باشد. تیم ما با شناخت دقیق محله‌ها، شفافیت در قیمت و همراهی تا لحظه‌ی
            امضای قرارداد، این مسیر را ساده می‌کند.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint/60 text-navy">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-6 text-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="mt-8 h-12 rounded-xl bg-cta px-7 text-base font-semibold text-white shadow-soft hover:opacity-90"
          >
            <a href="tel:+982191000000">
              گفتگو با مشاور
              <ArrowLeft />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
