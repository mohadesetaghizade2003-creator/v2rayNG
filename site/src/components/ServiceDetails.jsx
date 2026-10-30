import Reveal from './Reveal.jsx';
import {
  IconArchitecture,
  IconInterior,
  IconResidential,
  IconCommercial,
  IconVisualization,
  IconLandscape,
  IconStructural,
  IconRenovation,
  IconArrow,
} from './icons.jsx';
import './ServiceDetails.css';

const DETAILS = [
  {
    icon: IconArchitecture,
    title: 'طراحی معماری',
    text: 'رهبری طراحی از مفهوم تا ساخت در تمام مراحل پروژه.',
  },
  {
    icon: IconInterior,
    title: 'طراحی داخلی',
    text: 'پالت مصالح، نجاری سفارشی و نورپردازی متناسب با زندگی روزمره.',
  },
  {
    icon: IconResidential,
    title: 'معماری مسکونی',
    text: 'اقامتگاه‌های خصوصی شکل‌گرفته بر اساس نور، چشم‌انداز و آیین‌های خانه.',
  },
  {
    icon: IconCommercial,
    title: 'معماری تجاری',
    text: 'محیط‌های کاری و فروشگاهی طراحی‌شده برای برند، جریان و ماندگاری.',
  },
  {
    icon: IconVisualization,
    title: 'تجسم سه‌بعدی',
    text: 'تصاویر واقع‌گرایانه و بازدید مجازی که ایده را پیش از ساخت می‌آزماید.',
  },
  {
    icon: IconLandscape,
    title: 'معماری منظرسازی',
    text: 'حیاط‌ها، تراس‌ها و فضای سبز که معماری را به بیرون گسترش می‌دهند.',
  },
  {
    icon: IconStructural,
    title: 'مهندسی معماری',
    text: 'سیستم‌های سازه‌ای و محیطی همگام با طراحی حل می‌شوند.',
  },
  {
    icon: IconRenovation,
    title: 'بازسازی و مرمت',
    text: 'بازآفرینی حساس ساختارهای موجود و بافت تاریخی.',
  },
];

export default function ServiceDetails() {
  return (
    <section className="section details" aria-labelledby="details-title">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <span className="eyebrow">حرفه</span>
            <h2 className="h2" id="details-title">
              خدمات حرفه‌ای
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              هشت رشته، یک خط فکری پیوسته — از نخستین طرح تا جزئیات نهایی.
            </p>
          </Reveal>
        </div>

        <Reveal className="details__grid">
          {DETAILS.map(({ icon: Icon, title, text }) => (
            <article className="detail" key={title}>
              <div className="detail__row">
                <span className="detail__icon">
                  <Icon />
                </span>
                <span className="detail__arrow" aria-hidden="true">
                  <IconArrow size={15} />
                </span>
              </div>
              <h3 className="detail__title">{title}</h3>
              <p className="detail__text">{text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
