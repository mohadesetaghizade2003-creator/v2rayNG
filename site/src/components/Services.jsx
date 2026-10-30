import Reveal from './Reveal.jsx';
import { IconEngineering, IconConcept, IconSustainable } from './icons.jsx';
import './Services.css';

const SERVICES = [
  {
    icon: IconEngineering,
    title: 'مهندسی پیشرفته',
    text: 'راه‌حل‌های مهندسی معماری پیشرفته که دقت، نوآوری و تعالی ساختاری را در کنار هم قرار می‌دهد.',
  },
  {
    icon: IconConcept,
    title: 'طراحی مفهومی چشم‌انداز',
    text: 'تبدیل ایده‌های جاه‌طلبانه به مفاهیم معماری استثنایی و تجربه‌های فضایی پیچیده.',
  },
  {
    icon: IconSustainable,
    title: 'فناوری‌های پایدار',
    text: 'یکپارچه‌سازی مصالح پایدار، سیستم‌های هوشمند و راه‌حل‌های معماری مسئولانه از نظر زیست‌محیطی.',
  },
];

export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="sr-only">
          تخصص ما
        </h2>

        <div className="services__grid">
          {SERVICES.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 120} className="service">
              <span className="service__icon">
                <Icon size={46} />
              </span>
              <h3 className="service__title">{title}</h3>
              <p className="service__text">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
