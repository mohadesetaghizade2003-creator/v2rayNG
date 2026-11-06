import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import heroVilla from "@/assets/hero-villa.jpg";
import interior from "@/assets/interior.jpg";

export type Deal = "buy" | "rent";

export interface Filters {
  deal: Deal;
  city: string;
  propertyType: string;
}

export const defaultFilters: Filters = {
  deal: "buy",
  city: "all",
  propertyType: "all",
};

export const cities = ["تهران", "کرج", "اصفهان", "شیراز"];

export const propertyTypes = ["آپارتمان", "ویلا", "خانه"];

export interface Property {
  id: string;
  title: string;
  city: string;
  district: string;
  deal: Deal;
  type: string;
  price?: string;
  deposit?: string;
  rent?: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
  tag?: string;
}

export const properties: Property[] = [
  {
    id: "p1",
    title: "آپارتمان لوکس زعفرانیه",
    city: "تهران",
    district: "زعفرانیه، خیابان مقدس اردبیلی",
    deal: "buy",
    type: "آپارتمان",
    price: "۲۸ میلیارد تومان",
    beds: 3,
    baths: 2,
    area: 180,
    image: prop1,
    tag: "ویژه",
  },
  {
    id: "p2",
    title: "ویلای دوبلکس لواسان",
    city: "تهران",
    district: "لواسان، شهرک نجارکلا",
    deal: "buy",
    type: "ویلا",
    price: "۴۵ میلیارد تومان",
    beds: 4,
    baths: 3,
    area: 320,
    image: heroVilla,
    tag: "جدید",
  },
  {
    id: "p3",
    title: "آپارتمان مدرن سعادت‌آباد",
    city: "تهران",
    district: "سعادت‌آباد، بلوار دریا",
    deal: "rent",
    type: "آپارتمان",
    deposit: "۸۰۰ میلیون تومان",
    rent: "۴۵ میلیون تومان",
    beds: 2,
    baths: 1,
    area: 110,
    image: prop2,
  },
  {
    id: "p4",
    title: "خانه حیاط‌دار مهرشهر",
    city: "کرج",
    district: "مهرشهر، بلوار ارم",
    deal: "buy",
    type: "خانه",
    price: "۱۲ میلیارد تومان",
    beds: 3,
    baths: 2,
    area: 240,
    image: prop3,
    tag: "فرصت سرمایه‌گذاری",
  },
  {
    id: "p5",
    title: "سوئیت مبله جلفا",
    city: "اصفهان",
    district: "جلفا، خیابان نظر شرقی",
    deal: "rent",
    type: "آپارتمان",
    deposit: "۲۰۰ میلیون تومان",
    rent: "۱۲ میلیون تومان",
    beds: 1,
    baths: 1,
    area: 65,
    image: interior,
  },
  {
    id: "p6",
    title: "آپارتمان نوساز معالی‌آباد",
    city: "شیراز",
    district: "معالی‌آباد، بلوار شاهد",
    deal: "rent",
    type: "آپارتمان",
    deposit: "۵۰۰ میلیون تومان",
    rent: "۳۰ میلیون تومان",
    beds: 2,
    baths: 2,
    area: 125,
    image: prop1,
    tag: "کلید نخورده",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "سارا محمدی",
    role: "خریدار آپارتمان، تهران",
    text: "در کمتر از سه هفته خانه‌ای پیدا کردم که دقیقاً با بودجه و سلیقه‌ام هم‌خوان بود. مشاوره‌ی تیم آریا واقعاً حرفه‌ای بود.",
  },
  {
    id: "t2",
    name: "امیر رضایی",
    role: "فروشنده ویلا، لواسان",
    text: "ملکم را با عکس‌های حرفه‌ای و بازدید مجازی ثبت کردند و در ۱۰ روز با قیمت منصفانه فروش رفت.",
  },
  {
    id: "t3",
    name: "نگین کاظمی",
    role: "مستأجر، اصفهان",
    text: "قرارداد و مراحل اداری را کامل مدیریت کردند. حس امنیت و شفافیت مهم‌ترین چیزی بود که تجربه کردم.",
  },
];
