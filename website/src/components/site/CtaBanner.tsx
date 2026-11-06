import { useState } from "react";
import { toast } from "sonner";
import { PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CtaBanner() {
  const [phone, setPhone] = useState("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (phone.trim().length < 10) {
      toast.error("شماره تماس معتبر وارد کنید.");
      return;
    }
    toast.success("درخواست شما ثبت شد. کارشناسان ما به‌زودی تماس می‌گیرند.");
    setPhone("");
  };

  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-banner px-6 py-10 shadow-card sm:px-12 sm:py-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-20 size-64 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 right-1/3 size-72 rounded-full bg-mint/20 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white">
                <PhoneCall className="size-3.5" />
                ارزیابی رایگان ملک
              </span>
              <h2 className="mt-4 text-2xl font-extrabold leading-relaxed text-white sm:text-3xl">
                نمی‌دانید ملک‌تان چند می‌ارزد؟
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                شماره‌تان را بگذارید؛ کارشناس ارزیابی در کمتر از ۲۴ ساعت با شما تماس می‌گیرد و
                گزارش قیمت ملک را رایگان دریافت می‌کنید.
              </p>
            </div>

            <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
              <Input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="شماره تماس شما"
                inputMode="tel"
                aria-label="شماره تماس شما"
                className="h-12 rounded-xl border-white/20 bg-white/95 px-4 text-sm text-navy shadow-none placeholder:text-muted-foreground focus-visible:ring-white/60"
              />
              <Button
                type="submit"
                className="h-12 shrink-0 rounded-xl bg-white px-6 text-sm font-bold text-navy shadow-soft hover:bg-lavender"
              >
                دریافت ارزیابی رایگان
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
