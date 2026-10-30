import Reveal from './Reveal.jsx';
import './About.css';

const STATS = [
  { value: '۱۲+', label: 'سال تجربه' },
  { value: '۸۵+', label: 'پروژه کامل‌شده' },
  { value: '۳۰+', label: 'همکار حرفه‌ای' },
];

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__copy">
          <span className="eyebrow">استودیو</span>
          <h2 className="h2 about__title" id="about-title">
            طراحی فضاها.
            <br />
            تعریف آینده‌ها.
          </h2>
          <p className="lede">
            آژنو استودیویی برای معماری و طراحی داخلی است که به خلق فضاهای معنادار از طریق تفکر
            نوآورانه، زیبایی‌شناسی جاودانه و تعالی فنی می‌پردازد.
          </p>

          <dl className="about__stats">
            {STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <dt className="stat__value">{stat.value}</dt>
                <dd className="stat__label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="about__media" delay={140}>
          <img
            src="/img/about.jpg"
            alt="داخلی مینیمال و لوکس با نور گرمی که بر سنگ و شیشه می‌تابد"
            width="1100"
            height="1375"
            loading="lazy"
          />
          <span className="about__rule" aria-hidden="true" />
          <span className="about__caption">استودیو — آتلیه IV</span>
        </Reveal>
      </div>
    </section>
  );
}
