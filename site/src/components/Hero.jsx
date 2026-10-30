import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const mediaRef = useRef(null);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame = 0;

    const update = () => {
      frame = 0;
      const offset = Math.min(window.scrollY, window.innerHeight);
      media.style.transform = `translate3d(0, ${offset * 0.12}px, 0) scale(1.06)`;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__media" ref={mediaRef}>
        <img
          src="/img/hero.jpg"
          alt="Contemporary villa of glass and concrete at twilight, reflected in a still pool"
          width="1800"
          height="1200"
          fetchpriority="high"
        />
      </div>

      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__blueprint" aria-hidden="true" />

      <svg
        className="hero__polygon"
        viewBox="0 0 400 560"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="#C6A47C" strokeWidth="0.9">
          <path d="M120 40 372 210 268 540 18 392Z" opacity="0.28" />
          <path d="M120 40 268 540" opacity="0.16" />
          <path d="M372 210 18 392" opacity="0.16" />
          <path d="M246 118 372 210 322 372 196 288Z" opacity="0.12" />
        </g>
      </svg>

      <div className="container hero__inner">
        <p className="hero__brand">AGENVO — Architecture &amp; Design</p>

        <h1 className="hero__title">
          <span>Advancing</span>
          <span className="hero__title-accent">Architectural</span>
          <span>Excellence</span>
        </h1>

        <p className="hero__lede">
          Innovative architecture and interior design solutions for the spaces of tomorrow.
        </p>

        <div className="hero__cta">
          <a className="btn btn--gold" href="#services">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
