import { LogoMark, IconSocial } from './icons.jsx';
import './Footer.css';

const LINKS = [
  { label: 'خانه', href: '#home' },
  { label: 'درباره ما', href: '#about' },
  { label: 'خدمات', href: '#services' },
  { label: 'پروژه‌ها', href: '#projects' },
  { label: 'نشریه', href: '#philosophy' },
  { label: 'تماس', href: '#contact' },
];

const SERVICES = [
  'معماری',
  'طراحی داخلی',
  'مهندسی',
  'تجسم سه‌بعدی',
  'طراحی منظره',
];

const SOCIALS = [
  { name: 'instagram', label: 'اینستاگرام' },
  { name: 'pinterest', label: 'پینترست' },
  { name: 'linkedin', label: 'لینکدین' },
  { name: 'behance', label: 'بیهانس' },
];

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="brand" href="#home" aria-label="آژنو — خانه">
            <span className="brand__mark">
              <LogoMark size={28} />
            </span>
            <span className="brand__word">AGENVO</span>
          </a>
          <p className="footer__about">
            استودیویی برای معماری و طراحی داخلی که فضاهای معنادار را از طریق دقت، هوش مصالحی و
            زیبایی‌شناسی جاودانه شکل می‌دهد.
          </p>

          <ul className="socials">
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  href="#site-footer"
                  aria-label={social.label}
                  className="social"
                  title={social.label}
                >
                  <IconSocial name={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer__col" aria-labelledby="footer-links-title">
          <h3 className="footer__title" id="footer-links-title">
            دسترسی سریع
          </h3>
          <ul className="footer__list">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footer__title">خدمات ما</h3>
          <ul className="footer__list">
            {SERVICES.map((service) => (
              <li key={service}>
                <a href="#services">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">تماس</h3>
          <ul className="footer__list footer__list--contact">
            <li>
              <a href="tel:+41442087310">+41 44 208 73 10</a>
            </li>
            <li>
              <a href="mailto:studio@agenvo.com">studio@agenvo.com</a>
            </li>
            <li>
              Seefeldstrasse 24
              <br />
              8008 Zürich, Switzerland
            </li>
            <li className="footer__hours">دوشنبه تا جمعه، ۰۹:۰۰ تا ۱۸:۰۰</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; ۲۰۲۶ آژنو. تمامی حقوق محفوظ است.</p>
        <div className="footer__legal">
          <a href="#site-footer">سیاست حریم خصوصی</a>
          <span aria-hidden="true">·</span>
          <a href="#site-footer">شرایط و قوانین</a>
        </div>
      </div>

      <span className="footer__watermark" aria-hidden="true">
        AGENVO
      </span>
    </footer>
  );
}
