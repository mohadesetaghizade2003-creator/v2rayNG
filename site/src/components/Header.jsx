import { useEffect, useRef, useState } from 'react';
import { LogoMark } from './icons.jsx';
import './Header.css';

const NAV = [
  { label: 'خانه', href: '#home' },
  { label: 'درباره ما', href: '#about' },
  { label: 'خدمات', href: '#services' },
  { label: 'پروژه‌ها', href: '#projects' },
  // No journal section exists yet: the editorial statement is the closest anchor.
  { label: 'نشریه', href: '#philosophy' },
  { label: 'تماس', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 260);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="site-header__inner container">
          <a className="brand" href="#home" aria-label="AGENVO — home">
            <span className="brand__mark">
              <LogoMark />
            </span>
            <span className="brand__word">AGENVO</span>
          </a>

          <nav className="nav" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.label} className="nav__link" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="btn btn--ghost header-cta" href="#contact">
              شروع پروژه
            </a>
            <button
              type="button"
              className={`burger${open ? ' is-open' : ''}`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'بستن منو' : 'باز کردن منو'}
              onClick={() => setOpen((value) => !value)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`mobile-nav${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        inert={open ? undefined : ''}
      >
        <div className="mobile-nav__grid" aria-hidden="true" />
        <nav className="mobile-nav__list" aria-label="Mobile">
          {NAV.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              style={{ transitionDelay: `${open ? 120 + index * 55 : 0}ms` }}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-nav__index">{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-nav__foot">
          <a className="btn btn--gold" href="#contact" onClick={() => setOpen(false)}>
            شروع پروژه
          </a>
          <p className="mobile-nav__coords">35.6892&deg; N — 51.3890&deg; E</p>
        </div>
      </div>
    </>
  );
}
