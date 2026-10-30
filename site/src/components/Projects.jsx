import Reveal from './Reveal.jsx';
import { IconArrow } from './icons.jsx';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Corporate Tower',
    meta: 'Commercial · Dubai',
    text: 'A vertical landmark articulated in glass and bronze, composed for the night skyline.',
    img: '/img/project-1.jpg',
    alt: 'Illuminated modern skyscraper rising above a nocturnal city skyline',
  },
  {
    title: 'Futuristic Pavilion',
    meta: 'Cultural · Basel',
    text: 'Geometric concrete volumes floating above a still reflecting pool.',
    img: '/img/project-2.jpg',
    alt: 'Minimalist concrete pavilion with warm interior light beside a reflecting pool',
  },
  {
    title: 'Conceptual Render',
    meta: 'Visualization · Study',
    text: 'Monumental geometry in warm light — a study in mass, shadow and proportion.',
    img: '/img/project-3.jpg',
    alt: 'Dramatic architectural study of monumental concrete forms in warm sunlight',
  },
];

export default function Projects() {
  return (
    <section className="section section--raised projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <span className="eyebrow">Portfolio</span>
            <h2 className="h2" id="projects-title">
              Selected Projects
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              Architecture shaped by vision, precision, and purpose.
            </p>
          </Reveal>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <Reveal as="article" key={project.title} delay={index * 110} className="project">
              <a className="project__frame" href="#contact" aria-label={`View project: ${project.title}`}>
                <img
                  src={project.img}
                  alt={project.alt}
                  width="1200"
                  height="900"
                  loading="lazy"
                />
                <span className="project__overlay" aria-hidden="true" />
                <span className="project__view">
                  View Project <IconArrow size={14} />
                </span>
              </a>
              <div className="project__body">
                <p className="project__meta">{project.meta}</p>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__text">{project.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects__more">
          <a className="btn btn--outline" href="#contact">
            Explore All Projects
          </a>
        </Reveal>
      </div>
    </section>
  );
}
