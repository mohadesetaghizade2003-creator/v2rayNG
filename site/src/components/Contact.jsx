import { useRef, useState } from 'react';
import Reveal from './Reveal.jsx';
import { IconArrow } from './icons.jsx';
import './Contact.css';

const PROJECT_TYPES = [
  'مسکونی',
  'تجاری',
  'طراحی داخلی',
  'مهمان‌نوازی',
  'منظرسازی',
  'سایر',
];

const BUDGETS = ['کمتر از ۲۵۰ هزار', '۲۵۰ تا ۷۵۰ هزار', '۷۵۰ هزار تا ۲ میلیون', 'بیش از ۲ میلیون'];

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
  if (!values.name.trim()) errors.name = 'لطفاً نام خود را وارد کنید.';
  if (!values.email.trim()) errors.email = 'لطفاً آدرس ایمیل خود را وارد کنید.';
  else if (!EMAIL.test(values.email.trim())) errors.email = 'لطفاً یک آدرس ایمیل معتبر وارد کنید.';
  if (!values.message.trim()) errors.message = 'لطفاً درباره پروژه خود توضیح دهید.';
  else if (values.message.trim().length < 10) {
    errors.message = 'لطفاً پروژه خود را کمی подробی‌تر توضیح دهید.';
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
          <span className="eyebrow">استعلام</span>
          <h2 className="h2" id="contact-title">
            بیایید چیزی استثنایی خلق کنیم.
          </h2>
          <p className="lede">
            پروژه‌ای در ذهن دارید؟ بیایید درباره چشم‌اندازتان گفت‌وگو کنیم و آن را به فضایی
            فوق‌العاده تبدیل کنیم.
          </p>

          <ul className="contact__list">
            <li className="contact__item">
              <span className="contact__label">ایمیل</span>
              <a className="contact__value" href="mailto:studio@agenvo.com">
                studio@agenvo.com
              </a>
            </li>
            <li className="contact__item">
              <span className="contact__label">تلفن</span>
              <a className="contact__value" href="tel:+41442087310">
                +41 44 208 73 10
              </a>
            </li>
            <li className="contact__item">
              <span className="contact__label">استودیو</span>
              <span className="contact__value">Seefeldstrasse 24, 8008 Zürich</span>
            </li>
            <li className="contact__item">
              <span className="contact__label">ساعات کاری</span>
              <span className="contact__value">دوشنبه تا جمعه، ۰۹:۰۰ تا ۱۸:۰۰</span>
            </li>
          </ul>
        </Reveal>

        <Reveal className="contact__form-wrap" delay={120}>
          <form className="form" ref={formRef} onSubmit={onSubmit} noValidate>
            <div className="form__row">
              <div className={`field${errors.name ? ' has-error' : ''}`}>
                <label htmlFor="name">نام و نام خانوادگی</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={update('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={describedBy('name')}
                  placeholder="نام شما"
                />
                {fieldError('name')}
              </div>

              <div className={`field${errors.email ? ' has-error' : ''}`}>
                <label htmlFor="email">آدرس ایمیل</label>
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
                <label htmlFor="phone">شماره تلفن</label>
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
                <label htmlFor="projectType">نوع پروژه</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={values.projectType}
                  onChange={update('projectType')}
                >
                  <option value="">انتخاب کنید</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="budget">بودجه تخمینی</label>
              <select id="budget" name="budget" value={values.budget} onChange={update('budget')}>
                <option value="">انتخاب بازه</option>
                {BUDGETS.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div className={`field${errors.message ? ' has-error' : ''}`}>
              <label htmlFor="message">توضیحات پروژه</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={values.message}
                onChange={update('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={describedBy('message')}
                placeholder="سایت، مقیاس، زمان‌بندی و جاه‌طلبی…"
              />
              {fieldError('message')}
            </div>

            <div className="form__foot">
              <button className="btn btn--gold" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'در حال ارسال…' : 'ارسال درخواست شما'}
                <IconArrow size={15} />
              </button>

              <p className="form__status" role="status" aria-live="polite">
                {status === 'sent' &&
                  'سپاسگزاریم — درخواست شما دریافت شد. استودیو ظرف دو روز کاری پاسخ خواهد داد.'}
                {status === 'error' &&
                  'ارسال درخواست شما ممکن نشد. لطفاً دوباره تلاش کنید یا به studio@agenvo.com ایمیل بزنید.'}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
