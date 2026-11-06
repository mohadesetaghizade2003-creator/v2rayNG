import { useState } from "react";
import { Building2, MapPin, Search, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cities, propertyTypes, type Deal, type Filters } from "@/data";

interface SearchCardProps {
  onSearch: (filters: Filters) => void;
}

export function SearchCard({ onSearch }: SearchCardProps) {
  const [deal, setDeal] = useState<Deal>("buy");
  const [city, setCity] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch({ deal, city, propertyType });
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-border bg-card p-4 shadow-card sm:p-6"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Tabs value={deal} onValueChange={(value) => setDeal(value as Deal)}>
          <TabsList className="h-11 w-full rounded-xl bg-secondary p-1 sm:w-auto">
            <TabsTrigger
              value="buy"
              className="h-9 flex-1 px-6 text-navy data-[state=active]:bg-card data-[state=active]:text-navy sm:flex-none"
            >
              خرید
            </TabsTrigger>
            <TabsTrigger
              value="rent"
              className="h-9 flex-1 px-6 data-[state=active]:bg-card data-[state=active]:text-navy sm:flex-none"
            >
              رهن و اجاره
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="size-2 rounded-full bg-mint" />
          ۱,۲۴۸ ملک جدید در ۲۴ ساعت گذشته ثبت شده است
        </p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3 xl:grid-cols-[1fr_1fr_1fr_auto]">
        <div className="rounded-xl border border-input bg-background px-3 py-2 shadow-sm">
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-violet" />
            شهر
          </span>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="h-8 border-0 px-0 shadow-none focus:ring-0 [&>span]:text-sm [&>span]:font-semibold [&>span]:text-navy">
              <SelectValue placeholder="همه شهرها" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">همه شهرها</SelectItem>
              {cities.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-xl border border-input bg-background px-3 py-2 shadow-sm">
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
            <Building2 className="size-3.5 text-violet" />
            نوع ملک
          </span>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="h-8 border-0 px-0 shadow-none focus:ring-0 [&>span]:text-sm [&>span]:font-semibold [&>span]:text-navy">
              <SelectValue placeholder="همه انواع" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">همه انواع</SelectItem>
              {propertyTypes.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-xl border border-input bg-background px-3 py-2 shadow-sm">
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
            <Wallet className="size-3.5 text-violet" />
            بازه قیمت
          </span>
          <Select defaultValue="any">
            <SelectTrigger className="h-8 border-0 px-0 shadow-none focus:ring-0 [&>span]:text-sm [&>span]:font-semibold [&>span]:text-navy">
              <SelectValue placeholder="هر قیمتی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">هر قیمتی</SelectItem>
              <SelectItem value="low">تا ۱۰ میلیارد تومان</SelectItem>
              <SelectItem value="mid">۱۰ تا ۳۰ میلیارد تومان</SelectItem>
              <SelectItem value="high">بیش از ۳۰ میلیارد تومان</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="h-[52px] rounded-xl bg-cta px-8 text-base font-semibold text-white shadow-soft hover:opacity-90"
        >
          <Search />
          جستجو
        </Button>
      </div>
    </form>
  );
}
