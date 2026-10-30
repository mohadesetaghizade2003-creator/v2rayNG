import Reveal from './Reveal.jsx';
import { IconArrow } from './icons.jsx';
import './Projects.css';

const PROJECTS = [
  {
    title: 'برج تجاری',
    meta: 'تجاری · دبی',
    text: 'نشانه‌ای عمودی بیان‌شده در شیشه و برنز، ساخته‌شده برای افق شبانه.',
    img: '/img/project-1.jpg',
    alt: 'آسمان‌خانۀ مدرن روشن بر فراز افق شبانۀ شهر',
  },
  {
    title: 'غرفه آینده‌نگر',
    meta: 'فرهنگی · بازل',
    text: 'حجم‌های بتنی هندسی شناور بر فراز استخر بازتابی آرام.',
    img: '/img/project-2.jpg',
    alt: 'غرفه بتنی مینیمال با نور گرم داخلی کنار استخر بازتابی',
  },
  {
    title: 'رندر مفهومی',
    meta: 'تجسم بصری · مطالعه',
    text: 'هندسه‌ای یادمانی در نور گرم — مطالعه‌ای در توده، سایه و تناسب.',
    img: '/img/project-3.jpg',
    alt: 'مطالعه معماری دراماتیک از فرم‌های بتنی یادمانی در نور گرم خورشید',
  },
];

export default function Projects() {
  return (
    <section className="section section--raised projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <span className="eyebrow">نمونه کارها</span>
            <h2 className="h2" id="projects-title">
              پروژه‌های منتخب
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              معماری شکل‌گرفته از چشم‌انداز، دقت و هدف.
            </p>
          </Reveal>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <Reveal as="article" key={project.title} delay={index * 110} className="project">
              <a className="project__frame" href="#contact" aria-label={`مشاهده پروژه: ${project.title}`}>
                <img
                  src={project.img}
                  alt={project.alt}
                  width="1200"
                  height="900"
                  loading="lazy"
                />
                <span className="project__overlay" aria-hidden="true" />
                <span className="project__view">
                  مشاهده پروژه <IconArrow size={14} />
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
            مشاهده همه پروژه‌ها
          </a>
        </Reveal>
      </div>
    </section>
  );
}
