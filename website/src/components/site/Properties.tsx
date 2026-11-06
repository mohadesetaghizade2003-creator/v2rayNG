import { Bath, BedDouble, MapPin, Maximize, RotateCcw } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { properties, type Filters, type Property } from "@/data";

const fa = (value: number) => value.toLocaleString("fa-IR");

function priceRows(property: Property) {
  if (property.deal === "buy") {
    return [{ label: "قیمت کل", value: property.price ?? "" }];
  }
  return [
    { label: "ودیعه", value: property.deposit ?? "" },
    { label: "اجاره ماهانه", value: property.rent ?? "" },
  ];
}

interface PropertiesProps {
  filters: Filters;
  onReset: () => void;
}

export function Properties({ filters, onReset }: PropertiesProps) {
  const list = properties.filter(
    (property) =>
      property.deal === filters.deal &&
      (filters.city === "all" || property.city === filters.city) &&
      (filters.propertyType === "all" || property.type === filters.propertyType),
  );

  return (
    <section id="properties" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold tracking-wide text-violet">پرتفوی آریا</span>
            <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
              {filters.deal === "buy" ? "املاک منتخب برای خرید" : "املاک منتخب برای رهن و اجاره"}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
              هر ملک پیش از انتشار توسط کارشناسان ما بازدید و قیمت‌گذاری شده است.
            </p>
          </div>
          <Badge
            variant="secondary"
            className="w-fit rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-deep shadow-soft"
          >
            {fa(list.length)} ملک یافت شد
          </Badge>
        </div>

        {list.length === 0 ? (
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-violet/30 bg-card px-6 py-14 text-center shadow-soft">
            <p className="text-base font-bold text-navy">ملکی با این فیلترها پیدا نشد</p>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              فیلترهای جستجو را تغییر دهید یا همه‌ی املاک را ببینید؛ کارشناسان ما هم می‌توانند ملک
              دلخواه شما را پیدا کنند.
            </p>
            <Button
              onClick={onReset}
              className="rounded-xl bg-cta text-white shadow-soft hover:opacity-90"
            >
              <RotateCcw />
              نمایش همه املاک
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((property) => (
              <Card
                key={property.id}
                className="group overflow-hidden rounded-2xl border-border bg-card shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                    <Badge className="border-0 bg-navy/90 text-white backdrop-blur">
                      {property.deal === "buy" ? "فروش" : "اجاره"}
                    </Badge>
                    {property.tag ? (
                      <Badge className="border-0 bg-mint text-navy">{property.tag}</Badge>
                    ) : null}
                  </div>
                </div>

                <CardHeader className="space-y-2 p-5 pb-3">
                  <CardTitle className="text-base font-bold text-navy">{property.title}</CardTitle>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="size-3.5 shrink-0 text-violet" />
                    {property.district}، {property.city}
                  </p>
                </CardHeader>

                <CardContent className="p-5 pt-0">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border py-3 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="size-4 text-violet" />
                      {fa(property.beds)} خواب
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="size-4 text-violet" />
                      {fa(property.baths)} سرویس
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize className="size-4 text-violet" />
                      {fa(property.area)} متر
                    </span>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div className="space-y-1">
                      {priceRows(property).map((row) => (
                        <p key={row.label} className="text-xs text-muted-foreground">
                          {row.label}:{" "}
                          <span className="text-sm font-extrabold text-navy">{row.value}</span>
                        </p>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-lg border-navy/15 text-navy hover:bg-accent"
                    >
                      جزئیات
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
