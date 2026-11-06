import { Building2, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";

const quickLinks = ["خرید خانه", "اجاره خانه", "ثبت آگهی ملک", "ارزیابی رایگان"];
const services = ["مشاوره تخصصی", "بازدید مجازی", "مشاوره حقوقی", "سرمایه‌گذاری ملکی"];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-cta">
                <Building2 className="size-6 text-white" />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-extrabold text-white">آریا املاک</span>
                <span className="block text-xs text-white/50">مشاور املاک هوشمند</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-7">
              از سال ۱۳۸۹ همراه خانواده‌های ایرانی در انتخاب خانه‌ای که دوستش دارند؛ با شفافیت،
              تخصص و مسئولیت‌پذیری.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[Instagram, Send, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="شبکه اجتماعی"
                  className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-violet"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">دسترسی سریع</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#properties" className="text-sm transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">خدمات ما</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">تماس با ما</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-mint" />
                تهران، خیابان ولیعصر، برج آریا، طبقه ۷
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-mint" />
                <a href="tel:+982191000000" className="hover:text-white">
                  ۰۲۱-۹۱۰۰۰۰۰۰
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-mint" />
                <a href="mailto:info@ariaamlak.ir" className="hover:text-white">
                  info@ariaamlak.ir
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="mx-auto max-w-7xl px-4 text-center text-xs text-white/45 sm:px-6 lg:px-8">
          © ۱۴۰۴ آریا املاک. تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
