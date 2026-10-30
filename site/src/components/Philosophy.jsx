import Reveal from './Reveal.jsx';
import './Philosophy.css';

export default function Philosophy() {
  return (
    <section className="philosophy" id="philosophy" aria-labelledby="philosophy-title">
      <img className="philosophy__bg" src="/img/philosophy.jpg" alt="" aria-hidden="true" loading="lazy" />
      <div className="philosophy__veil" aria-hidden="true" />

      <Reveal className="container philosophy__inner">
        <span className="eyebrow">Philosophy</span>
        <h2 className="philosophy__title" id="philosophy-title">
          Architecture Beyond Imagination
        </h2>
        <p className="philosophy__text">
          We believe exceptional architecture is not simply about creating buildings. It is about
          shaping experiences, emotions, and the future of living.
        </p>
      </Reveal>
    </section>
  );
}
