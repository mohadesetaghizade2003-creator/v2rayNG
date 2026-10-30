import Reveal from './Reveal.jsx';
import './About.css';

const STATS = [
  { value: '12+', label: 'Years of Experience' },
  { value: '85+', label: 'Completed Projects' },
  { value: '30+', label: 'Professional Collaborators' },
];

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__copy">
          <span className="eyebrow">The Studio</span>
          <h2 className="h2 about__title" id="about-title">
            Designing Spaces.
            <br />
            Defining Futures.
          </h2>
          <p className="lede">
            AGENVO is an architecture and interior design studio dedicated to creating meaningful
            spaces through innovative thinking, timeless aesthetics, and technical excellence.
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
            alt="Minimalist luxury interior with warm light falling across stone and glass"
            width="1100"
            height="1375"
            loading="lazy"
          />
          <span className="about__rule" aria-hidden="true" />
          <span className="about__caption">Studio &mdash; Atelier IV</span>
        </Reveal>
      </div>
    </section>
  );
}
