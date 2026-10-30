import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { IconChevron } from './icons.jsx';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote:
      'آژنو یک طرحنامه غیرممکن را به خانه‌ای تبدیل کرد که گریزناپذیر به نظر می‌رسد. هر خط دید، هر آستانه، هر سایه‌ای دو بار سنجیده شد — یک‌بار برای زیبایی، یک‌بار برای زندگی در آن.',
    name: 'Elena Marchetti',
    role: 'مشتری خصوصی — اقامتگاه لکه کومو',
  },
  {
    quote:
      'دقت مهندسی آن‌ها با سلیقه‌شان برابر بود. هندسه پیچیده حل‌شده، در بودجه و دقیقاً مطابق نقشه به کارگاه رسید. این ترکیب واقعاً کمیاب است.',
    name: 'Daniel Okonkwo',
    role: 'مدیر توسعه — گروه مریدین',
  },
  {
    quote:
      'کار با استودیو مانند یک گفت‌وگوی طولانی و دقیق بود. گوش دادند، سپس چیزی بهتر از آنچه برای خود تصور می‌کردیم پیشنهاد دادند.',
    name: 'Sara Haddad',
    role: 'بنیان‌گذار — آتلیه نورد',
  },
];

const faNum = (n) => n.toLocaleString('fa-IR', { minimumIntegerDigits: 2, useGrouping: false });

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];
  const total = TESTIMONIALS.length;

  const move = (delta) => setIndex((current) => (current + delta + total) % total);

  return (
    <section
      className="section testimonials"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container testimonials__inner">
        <Reveal>
          <span className="eyebrow">صدای مشتریان</span>
          <h2 className="sr-only" id="testimonials-title">
            نظرات مشتریان
          </h2>

          <figure className="quote">
            <span className="quote__mark" aria-hidden="true">
              &rdquo;
            </span>

            <div className="quote__live" aria-live="polite">
              <blockquote className="quote__body" key={index}>
                <p>{active.quote}</p>
              </blockquote>
              <figcaption className="quote__author" key={`author-${index}`}>
                <span className="quote__name">{active.name}</span>
                <span className="quote__role">{active.role}</span>
              </figcaption>
            </div>

            <div className="quote__nav">
              <button
                type="button"
                className="quote__arrow"
                onClick={() => move(-1)}
                aria-label="نظر قبلی"
              >
                <IconChevron direction="left" />
              </button>
              <span className="quote__count" aria-hidden="true">
                {faNum(index + 1)} / {faNum(total)}
              </span>
              <button
                type="button"
                className="quote__arrow"
                onClick={() => move(1)}
                aria-label="نظر بعدی"
              >
                <IconChevron />
              </button>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
