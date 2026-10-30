import Reveal from './Reveal.jsx';
import { IconEngineering, IconConcept, IconSustainable } from './icons.jsx';
import './Services.css';

const SERVICES = [
  {
    icon: IconEngineering,
    title: 'Cutting-Edge Engineering',
    text: 'Advanced architectural engineering solutions combining precision, innovation, and structural excellence.',
  },
  {
    icon: IconConcept,
    title: 'Visionary Conceptual Designs',
    text: 'Transforming ambitious ideas into exceptional architectural concepts and sophisticated spatial experiences.',
  },
  {
    icon: IconSustainable,
    title: 'Sustainable Technologies',
    text: 'Integrating sustainable materials, intelligent systems, and environmentally responsible architectural solutions.',
  },
];

export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="sr-only">
          Our expertise
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
