import { LogoMark, IconSocial } from './icons.jsx';
import './Footer.css';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journal', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  'Architecture',
  'Interior Design',
  'Engineering',
  '3D Visualization',
  'Landscape Design',
];

const SOCIALS = [
  { name: 'instagram', label: 'Instagram' },
  { name: 'pinterest', label: 'Pinterest' },
  { name: 'linkedin', label: 'LinkedIn' },
  { name: 'behance', label: 'Behance' },
];

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="brand" href="#home" aria-label="AGENVO — home">
            <span className="brand__mark">
              <LogoMark size={28} />
            </span>
            <span className="brand__word">AGENVO</span>
          </a>
          <p className="footer__about">
            An architecture and interior design studio shaping meaningful spaces through precision,
            material intelligence and timeless aesthetics.
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
            Quick Links
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
          <h3 className="footer__title">Our Services</h3>
          <ul className="footer__list">
            {SERVICES.map((service) => (
              <li key={service}>
                <a href="#services">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Contact</h3>
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
            <li className="footer__hours">Mon – Fri, 09:00 – 18:00</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; 2026 AGENVO. All Rights Reserved.</p>
        <div className="footer__legal">
          <a href="#site-footer">Privacy Policy</a>
          <span aria-hidden="true">·</span>
          <a href="#site-footer">Terms &amp; Conditions</a>
        </div>
      </div>

      <span className="footer__watermark" aria-hidden="true">
        AGENVO
      </span>
    </footer>
  );
}
