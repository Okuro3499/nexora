import { useState } from 'react';
import { company, navLinks, industries, areas, values, steps } from './content.js';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';
const FORM_ENDPOINT = WEB3FORMS_KEY
  ? 'https://api.web3forms.com/submit'
  : import.meta.env.VITE_FORM_ENDPOINT || '';

function Icon({ d, size = 24, strokeWidth = 1.8, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const ARROW = 'M5 12h14M13 6l6 6-6 6';
const CHECK = 'M5 12l5 5L20 7';
const MAIL = 'M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM3 7l9 6 9-6';
const PHONE = 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2';
const PIN = 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';

const formatPhone = (p) => p.replace(/^\+254(\d{3})(\d{3})(\d{3})$/, '+254 $1 $2 $3');

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <a href="#top" className="header__logo" aria-label="Nexora Softworks home">
          <img src="/logo-fullcolour.svg" alt="Nexora Softworks LTD" />
        </a>
        <nav className="header__nav" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="header__actions">
          <a className="btn btn--primary header__cta" href="#contact">Book a demo</a>
          <button
            type="button"
            className="header__burger"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Icon d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} size={20} />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="header__mobile container" aria-label="Mobile">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a className="btn btn--primary btn--block" href="#contact" onClick={close}>Book a demo</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="pill">
            <span className="dot" aria-hidden="true" />
            Nexora Softworks LTD
          </span>
          <h1>
            Reliable software for the businesses that move the <span className="accent">World</span> forward.
          </h1>
          <p className="hero__lead">
            We design and build practical, mobile-first systems for schools, transport operators and retail
            businesses, so you can run your operations with confidence.
          </p>
          <div className="hero__buttons">
            <a className="btn btn--primary btn--lg" href="#contact">
              Book a free demo <Icon d={ARROW} size={18} strokeWidth={2} />
            </a>
            <a className="btn btn--ghost btn--lg" href="#expertise">Our expertise</a>
          </div>
          <ul className="hero__checks">
            {['Mobile-first', 'Local support', 'Built for Kenya'].map((t) => (
              <li key={t}>
                <Icon d={CHECK} size={20} strokeWidth={2.2} className="accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="phones">
            <span className="phones__circle phones__circle--teal" aria-hidden="true" />
            <span className="phones__circle phones__circle--navy" aria-hidden="true" />
            <img
              className="phones__img phones__img--pos"
              src="/pos-sales-analytics.png"
              alt="Nexora Mobile POS app showing weekly sales analytics with total sales, transactions and a daily sales chart"
              width="1219"
              height="2576"
            />
            <img
              className="phones__img phones__img--school"
              src="/school-transport-app.png"
              alt="Nexora School Transport app showing a school's wristbands, students and users by role"
              width="1238"
              height="2496"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="industries">
      <div className="container industries__inner">
        <p className="eyebrow eyebrow--muted">Industries we serve</p>
        <ul className="industries__list">
          {industries.map((i) => (
            <li key={i.name}>
              <span className="industries__icon"><Icon d={i.icon} size={22} /></span>
              {i.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="section container">
      <div className="section__head section__head--center">
        <p className="eyebrow">Areas of expertise</p>
        <h2>Solutions built around how your business really works</h2>
        <p className="section__lead">
          From the school gate to the shop counter, we bring the right tools together under one trusted partner.
        </p>
      </div>
      <div className="cards">
        {areas.map((a) => (
          <article key={a.name} className="card">
            <div className="card__icon"><Icon d={a.icon} size={28} /></div>
            <h3>{a.name}</h3>
            <p>{a.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="why">
      <div className="container why__inner">
        <div className="why__copy">
          <p className="eyebrow eyebrow--teal">Why Nexora</p>
          <h2>A technology partner that understands local business.</h2>
          <p className="why__lead">
            We connect the dots between your people, your vehicles and your customers — with software that is simple
            to use and built to grow with you.
          </p>
          <a className="btn btn--teal btn--lg" href="#contact">Talk to our team</a>
        </div>
        <div className="why__grid">
          {values.map((v) => (
            <div key={v.name} className="why__card">
              <span className="why__icon"><Icon d={v.icon} size={22} strokeWidth={2} /></span>
              <h3>{v.name}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section container">
      <div className="section__head section__head--center">
        <p className="eyebrow">How we work</p>
        <h2>From first conversation to everyday use</h2>
      </div>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.name} className="step">
            <div className="step__track" aria-hidden="true">
              <span className="step__num">{i + 1}</span>
              <span className="step__line" />
              <span className="step__dot" />
            </div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const PHONE_PATTERN = /^(\+254|0)(7|1)\d{8}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_PATTERN = /^[a-zA-ZÀ-ɏ][a-zA-ZÀ-ɏ'-]*(\s+[a-zA-ZÀ-ɏ][a-zA-ZÀ-ɏ'-]*)+$/;

// True for junk like "2222222222", "aaaaaaaaaa", or "asdasdasdasd" — one
// character (or a short repeating chunk) padded out to pass a length check.
function isLowEffortText(value) {
  const compact = value.replace(/\s+/g, '');
  if (!compact) return true;
  const uniqueRatio = new Set(compact.toLowerCase()).size / compact.length;
  if (uniqueRatio < 0.25) return true;
  if (/^(.{1,4})\1+$/.test(compact)) return true;
  return false;
}

function validateContactForm(data) {
  const errors = {};

  const fullname = (data.fullname || '').trim();
  if (!fullname) errors.fullname = 'Please enter your full name.';
  else if (!NAME_PATTERN.test(fullname)) errors.fullname = 'Please enter your first and last name.';

  const phone = (data.phone || '').trim().replace(/\s+/g, '');
  if (!phone) errors.phone = 'Please enter your phone number.';
  else if (!PHONE_PATTERN.test(phone)) {
    errors.phone = 'Enter a valid Kenyan number, e.g. +254 700 000 000.';
  }

  const email = (data.email || '').trim();
  if (email && !EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address.';

  const service = (data.service || '').trim();
  if (!service) errors.service = 'Please select a service.';

  const details = (data.details || '').trim();
  const detailsWordCount = details.split(/\s+/).filter(Boolean).length;
  if (!details) errors.details = 'Please share a few details about your project.';
  else if (details.length > 2000) errors.details = 'Please keep this under 2000 characters.';
  else if (detailsWordCount < 4 || !/[a-zA-Z]/.test(details) || isLowEffortText(details)) {
    errors.details = 'Please describe your project in a few real words, not just characters.';
  }

  return errors;
}

function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [firstName, setFirstName] = useState('');
  const [errors, setErrors] = useState({});

  function clearError(field) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.botcheck) {
      // Honeypot tripped: pretend to succeed without sending anything.
      setFirstName((data.fullname || '').trim().split(' ')[0] || 'there');
      setStatus('sent');
      form.reset();
      return;
    }

    const validationErrors = validateContactForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const name = (data.fullname || '').trim().split(' ')[0] || 'there';

    if (!FORM_ENDPOINT) {
      // No form service configured: open the visitor's email app with the brief filled in.
      const body = [
        `Name: ${data.fullname}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email || '-'}`,
        `Service: ${data.service || '-'}`,
        '',
        data.details || '',
      ].join('\n');
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
        `Project brief from ${data.fullname}`
      )}&body=${encodeURIComponent(body)}`;
      setFirstName(name);
      setStatus('sent');
      form.reset();
      return;
    }

    setStatus('sending');
    try {
      const payload = WEB3FORMS_KEY
        ? {
            access_key: WEB3FORMS_KEY,
            subject: `Project brief from ${data.fullname}`,
            from_name: data.fullname,
            ...data,
          }
        : data;
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setFirstName(name);
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-card" role="status">
        <div className="form-done">
          <span className="form-done__icon"><Icon d={CHECK} size={28} strokeWidth={2.4} /></span>
          <h3>Thank you, {firstName}.</h3>
          <p>Your project brief has been received. Our team will contact you shortly.</p>
          <button type="button" className="btn btn--outline-light" onClick={() => setStatus('idle')}>
            Send another brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__head">
          <h3>Start a project</h3>
          <p>Share a few details and our team will get back to you.</p>
        </div>
        <div className="form__row">
          <div className="form__field">
            <label htmlFor="fullname">Full name *</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={!!errors.fullname}
              onChange={() => clearError('fullname')}
            />
            {errors.fullname && (
              <p className="form__error form__error--field" role="alert">{errors.fullname}</p>
            )}
          </div>
          <div className="form__field">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+254 700 000 000"
              inputMode="tel"
              aria-invalid={!!errors.phone}
              onChange={(e) => {
                const cleaned = e.target.value.replace(/[^\d+\s]/g, '');
                if (cleaned !== e.target.value) e.target.value = cleaned;
                clearError('phone');
              }}
              onKeyDown={(e) => {
                if (e.key.length === 1 && !/[\d+\s]/.test(e.key) && !e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                }
              }}
            />
            {errors.phone && (
              <p className="form__error form__error--field" role="alert">{errors.phone}</p>
            )}
          </div>
        </div>
        <div className="form__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            onChange={() => clearError('email')}
          />
          {errors.email && (
            <p className="form__error form__error--field" role="alert">{errors.email}</p>
          )}
        </div>
        <div className="form__field">
          <label htmlFor="service">Service required *</label>
          <div className="form__select">
            <select
              id="service"
              name="service"
              defaultValue=""
              required
              aria-invalid={!!errors.service}
              onChange={() => clearError('service')}
            >
              <option value="">— Select a service —</option>
              {areas.map((a) => (
                <option key={a.name}>{a.name}</option>
              ))}
              <option>Something else</option>
            </select>
            <Icon d="M6 9l6 6 6-6" size={18} strokeWidth={2} className="form__chevron" />
          </div>
          {errors.service && (
            <p className="form__error form__error--field" role="alert">{errors.service}</p>
          )}
        </div>
        <div className="form__field">
          <label htmlFor="details">Project details *</label>
          <textarea
            id="details"
            name="details"
            rows={5}
            required
            maxLength={2000}
            placeholder="Tell us about your organisation, what you need and your timeline…"
            aria-invalid={!!errors.details}
            onChange={() => clearError('details')}
          />
          {errors.details && (
            <p className="form__error form__error--field" role="alert">{errors.details}</p>
          )}
        </div>
        <input
          type="text"
          name="botcheck"
          className="form__honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        {status === 'error' && (
          <p className="form__error" role="alert">
            Something went wrong. Please try again, or email us at {company.email}.
          </p>
        )}
        <button type="submit" className="btn btn--teal form__submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send project brief'} <Icon d={ARROW} size={18} strokeWidth={2.2} />
        </button>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__copy">
          <p className="eyebrow eyebrow--teal">Contact us</p>
          <h2>Ready to modernise your operations?</h2>
          <p className="contact__lead">
            Tell us about your school, fleet, property or shop. We'll walk you through a solution that fits.
          </p>
          <ul className="contact__list">
            <li>
              <span className="contact__icon"><Icon d={MAIL} size={20} /></span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <span className="contact__icon"><Icon d={PHONE} size={20} /></span>
              <span className="contact__phones">
                {company.phones.map((p, i) => (
                  <span key={p}>
                    <a href={`tel:${p}`}>{formatPhone(p)}</a>
                    {i < company.phones.length - 1 ? ' /' : ''}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <span className="contact__icon"><Icon d={PIN} size={20} /></span>
              {company.location}
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cols">
          <div className="footer__brand">
            <img src="/logo-reversed.svg" alt="Nexora Softworks LTD" />
            <p>Practical software for schools, transport operators and businesses — built in Kenya, for the world.</p>
          </div>
          <div className="footer__col">
            <p className="footer__title">Expertise</p>
            {areas.slice(0, 4).map((a) => (
              <a key={a.name} href="#expertise">{a.short}</a>
            ))}
          </div>
          <div className="footer__col">
            <p className="footer__title">Company</p>
            <a href="#why">Why Nexora</a>
            <a href="#process">How we work</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__col">
            <p className="footer__title">Get in touch</p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            {company.phones.map((p) => (
              <a key={p} href={`tel:${p}`}>{formatPhone(p)}</a>
            ))}
            <span>{company.location}</span>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>{company.website}</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <div id="top" />
        <Hero />
        <Industries />
        <Expertise />
        <Why />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
