import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { IconChevron } from './icons.jsx';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote:
      'AGENVO turned an impossible brief into a house that feels inevitable. Every sightline, every threshold, every shadow was considered twice — once for beauty, once for how we would live inside it.',
    name: 'Elena Marchetti',
    role: 'Private Client — Lake Como Residence',
  },
  {
    quote:
      'Their engineering rigour matched their eye. Complex geometry arrived on site resolved, on budget, and exactly as drawn. That combination is genuinely rare.',
    name: 'Daniel Okonkwo',
    role: 'Development Director — Meridian Group',
  },
  {
    quote:
      'Working with the studio felt like a long, precise conversation. They listened, then proposed something better than what we had imagined for ourselves.',
    name: 'Sara Haddad',
    role: 'Founder — Atelier Nord',
  },
];

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
          <span className="eyebrow">Client Voices</span>
          <h2 className="sr-only" id="testimonials-title">
            Client testimonials
          </h2>

          <figure className="quote">
            <span className="quote__mark" aria-hidden="true">
              &ldquo;
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
                aria-label="Previous testimonial"
              >
                <IconChevron direction="left" />
              </button>
              <span className="quote__count" aria-hidden="true">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <button
                type="button"
                className="quote__arrow"
                onClick={() => move(1)}
                aria-label="Next testimonial"
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
