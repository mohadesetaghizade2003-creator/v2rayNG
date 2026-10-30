import Reveal from './Reveal.jsx';
import './Process.css';

const STEPS = [
  {
    title: 'Discovery & Research',
    text: 'Site, context and ambition are studied until the brief becomes precise.',
  },
  {
    title: 'Concept Development',
    text: 'Massing, light and material studies establish the architectural idea.',
  },
  {
    title: 'Design & Visualization',
    text: 'Drawings, models and renders resolve the design in complete detail.',
  },
  {
    title: 'Execution & Delivery',
    text: 'Engineering and site supervision keep the built result true to the intent.',
  },
];

export default function Process() {
  return (
    <section className="section section--raised process" aria-labelledby="process-title">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <span className="eyebrow">Method</span>
            <h2 className="h2" id="process-title">
              How We Work
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              A measured sequence — four stages that carry a project from first question to keys in
              hand.
            </p>
          </Reveal>
        </div>

        <div className="process__track">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 110} className="step">
              <div className="step__head">
                <span className="step__num">{String(index + 1).padStart(2, '0')}</span>
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
