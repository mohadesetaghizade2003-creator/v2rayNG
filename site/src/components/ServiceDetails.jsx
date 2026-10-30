import Reveal from './Reveal.jsx';
import {
  IconArchitecture,
  IconInterior,
  IconResidential,
  IconCommercial,
  IconVisualization,
  IconLandscape,
  IconStructural,
  IconRenovation,
  IconArrow,
} from './icons.jsx';
import './ServiceDetails.css';

const DETAILS = [
  {
    icon: IconArchitecture,
    title: 'Architectural Design',
    text: 'Concept-to-construction design leadership across every stage of a project.',
  },
  {
    icon: IconInterior,
    title: 'Interior Design',
    text: 'Material palettes, custom joinery and lighting composed for daily life.',
  },
  {
    icon: IconResidential,
    title: 'Residential Architecture',
    text: 'Private residences shaped around light, landscape and the rituals of home.',
  },
  {
    icon: IconCommercial,
    title: 'Commercial Architecture',
    text: 'Workplaces and retail environments engineered for brand, flow and longevity.',
  },
  {
    icon: IconVisualization,
    title: '3D Visualization',
    text: 'Photoreal imagery and walkthroughs that test an idea before it is built.',
  },
  {
    icon: IconLandscape,
    title: 'Landscape Architecture',
    text: 'Courtyards, terraces and planting that extend the architecture outward.',
  },
  {
    icon: IconStructural,
    title: 'Architectural Engineering',
    text: 'Structural and environmental systems resolved hand in hand with the design.',
  },
  {
    icon: IconRenovation,
    title: 'Renovation & Restoration',
    text: 'Sensitive reinvention of existing structures and historic fabric.',
  },
];

export default function ServiceDetails() {
  return (
    <section className="section details" aria-labelledby="details-title">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <span className="eyebrow">Practice</span>
            <h2 className="h2" id="details-title">
              Professional Services
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              Eight disciplines, one continuous line of thought — from the first sketch to the final
              detail.
            </p>
          </Reveal>
        </div>

        <Reveal className="details__grid">
          {DETAILS.map(({ icon: Icon, title, text }) => (
            <article className="detail" key={title}>
              <div className="detail__row">
                <span className="detail__icon">
                  <Icon />
                </span>
                <span className="detail__arrow" aria-hidden="true">
                  <IconArrow size={15} />
                </span>
              </div>
              <h3 className="detail__title">{title}</h3>
              <p className="detail__text">{text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
