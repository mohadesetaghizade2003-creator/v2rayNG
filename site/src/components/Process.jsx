import Reveal from './Reveal.jsx';
import './Process.css';

const faNum = (n) => n.toLocaleString('fa-IR');

const STEPS = [
  {
    title: 'کشف و پژوهش',
    text: 'سایت، بستر و جاه‌طلبی تا زمانی که طرحنامه دقیق شود بررسی می‌شوند.',
  },
  {
    title: 'توسعه مفهوم',
    text: 'مطالعات توده، نور و مصالح ایده معماری را پایه می‌گذارند.',
  },
  {
    title: 'طراحی و تجسم بصری',
    text: 'نقشه‌ها، مدل‌ها و رندرها طراحی را با جزئیات کامل حل می‌کنند.',
  },
  {
    title: 'اجرا و تحویل',
    text: 'مهندسی و نظارت کارگاهی نتیجه ساخته‌شده را وفادار به نیت نگه می‌دارد.',
  },
];

export default function Process() {
  return (
    <section className="section section--raised process" aria-labelledby="process-title">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <span className="eyebrow">روش کار</span>
            <h2 className="h2" id="process-title">
              نحوه کار ما
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              دنباله‌ای سنجیده — چهار مرحله که پروژه را از نخستین پرسش تا تحویل کلید پیش می‌برد.
            </p>
          </Reveal>
        </div>

        <div className="process__track">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 110} className="step">
              <div className="step__head">
                <span className="step__num">{faNum(index + 1)}</span>
                <span className="step__dot" aria-hidden="true" />
              </div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
