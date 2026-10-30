import { useRef, useState } from 'react';
import Reveal from './Reveal.jsx';
import { IconArrow } from './icons.jsx';
import './Contact.css';

const PROJECT_TYPES = [
  'Residential',
  'Commercial',
  'Interior Design',
  'Hospitality',
  'Landscape',
  'Other',
];

const BUDGETS = ['Under 250k', '250k – 750k', '750k – 2M', '2M +'];

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Please tell us about your project.';
  else if (values.message.trim().length < 10) {
    errors.message = 'Please describe your project in a little more detail.';
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      const firstInvalid = Object.keys(nextErrors)[0];
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        if (payload?.errors) setErrors(payload.errors);
        setStatus('error');
        return;
      }

      setValues(EMPTY);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const fieldError = (field) =>
    errors[field] ? (
      <span className="field__error" id={`${field}-error`} role="alert">
        {errors[field]}
      </span>
    ) : null;

  const describedBy = (field) => (errors[field] ? `${field}-error` : undefined);

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal className="contact__intro">
          <span className="eyebrow">Enquiries</span>
          <h2 className="h2" id="contact-title">
            Let&rsquo;s Create Something Exceptional.
          </h2>
          <p className="lede">
            Have a project in mind? Let&rsquo;s discuss your vision and turn it into an extraordinary
            space.
          </p>

          <ul className="contact__list">
            <li className="contact__item">
              <span className="contact__label">Email</span>
              <a className="contact__value" href="mailto:studio@agenvo.com">
                studio@agenvo.com
              </a>
            </li>
            <li className="contact__item">
              <span className="contact__label">Phone</span>
              <a className="contact__value" href="tel:+41442087310">
                +41 44 208 73 10
              </a>
            </li>
            <li className="contact__item">
              <span className="contact__label">Studio</span>
              <span className="contact__value">Seefeldstrasse 24, 8008 Zürich</span>
            </li>
            <li className="contact__item">
              <span className="contact__label">Hours</span>
              <span className="contact__value">Monday – Friday, 09:00 – 18:00</span>
            </li>
          </ul>
        </Reveal>

        <Reveal className="contact__form-wrap" delay={120}>
          <form className="form" ref={formRef} onSubmit={onSubmit} noValidate>
            <div className="form__row">
              <div className={`field${errors.name ? ' has-error' : ''}`}>
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={update('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={describedBy('name')}
                  placeholder="Your name"
                />
                {fieldError('name')}
              </div>

              <div className={`field${errors.email ? ' has-error' : ''}`}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={update('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={describedBy('email')}
                  placeholder="you@studio.com"
                />
                {fieldError('email')}
              </div>
            </div>

            <div className="form__row">
              <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={update('phone')}
                  placeholder="+41 …"
                />
              </div>

              <div className="field">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={values.projectType}
                  onChange={update('projectType')}
                >
                  <option value="">Select</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="budget">Estimated Budget</label>
              <select id="budget" name="budget" value={values.budget} onChange={update('budget')}>
                <option value="">Select a range</option>
                {BUDGETS.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div className={`field${errors.message ? ' has-error' : ''}`}>
              <label htmlFor="message">Project Description</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={values.message}
                onChange={update('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={describedBy('message')}
                placeholder="Site, scale, timeline and ambition…"
              />
              {fieldError('message')}
            </div>

            <div className="form__foot">
              <button className="btn btn--gold" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit Your Request'}
                <IconArrow size={15} />
              </button>

              <p className="form__status" role="status" aria-live="polite">
                {status === 'sent' &&
                  'Thank you — your request has been received. The studio will reply within two working days.'}
                {status === 'error' &&
                  'We could not send your request. Please try again or email studio@agenvo.com.'}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
