import { Quote, Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-wide text-violet">تجربه‌ی مشتریان</span>
          <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
            قصه‌ی خانه‌دار شدن، از زبان خودشان
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.id} className="rounded-2xl border-border bg-card shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <Quote className="size-8 text-lavender" />
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-foreground">{item.text}</p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <Avatar className="size-10 bg-lavender">
                    <AvatarFallback className="bg-lavender text-xs font-bold text-deep">
                      {item.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold text-navy">{item.name}</p>
                    <p className="text-[11px] text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
