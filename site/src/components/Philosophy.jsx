import Reveal from './Reveal.jsx';
import './Philosophy.css';

export default function Philosophy() {
  return (
    <section className="philosophy" id="philosophy" aria-labelledby="philosophy-title">
      <img className="philosophy__bg" src="/img/philosophy.jpg" alt="" aria-hidden="true" loading="lazy" />
      <div className="philosophy__veil" aria-hidden="true" />

      <Reveal className="container philosophy__inner">
        <span className="eyebrow">فلسفه</span>
        <h2 className="philosophy__title" id="philosophy-title">
          معماری فراتر از تخیل
        </h2>
        <p className="philosophy__text">
          ما معتقدیم معماری استثنایی صرفاً درباره ساختن بنا نیست. بلکه درباره شکل‌دهی به
          تجربه‌ها، احساسات و آینده زندگی است.
        </p>
      </Reveal>
    </section>
  );
}
