import { Calculator, FileCheck2, Video, UsersRound } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "ارزیابی دقیق قیمت",
    text: "قیمت ملک شما بر اساس داده‌های واقعی معاملات منطقه و بازدید کارشناس تعیین می‌شود.",
  },
  {
    icon: Video,
    title: "بازدید مجازی سه‌بعدی",
    text: "پیش از سفر و قرار حضوری، ملک را کامل و از نزدیک در تور مجازی ببینید.",
  },
  {
    icon: FileCheck2,
    title: "قرارداد امن و شفاف",
    text: "تمام مراحل حقوقی، استعلام و تنظیم قرارداد با نظارت تیم حقوقی انجام می‌شود.",
  },
  {
    icon: UsersRound,
    title: "مشاور اختصاصی",
    text: "یک مشاور متخصص از اولین تماس تا تحویل کلید همراه شماست.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-card px-6 py-10 shadow-soft sm:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-wide text-violet">چرا آریا املاک</span>
            <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
              معامله‌ای مطمئن، از جستجو تا کلید
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              همه‌ی چیزی که برای یک تصمیم بزرگ نیاز دارید، در یک مجموعه گرد آمده است.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-muted p-5 transition-colors hover:border-violet/25 hover:bg-lavender/40"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-lavender text-violet">
                  <service.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
