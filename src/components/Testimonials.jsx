import { Star, Linkedin } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" style={{ marginBottom: '6rem' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Témoignages</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '1rem' }}
          >
            Ce que mes clients disent
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            Pas de faux témoignages. De vraies personnes.
          </p>
        </div>

        {/* Testimonial cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: '1.5px',
          background: 'var(--border)',
        }}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="card"
              style={{ padding: '2.5rem', background: 'var(--surface)', display: 'flex', flexDirection: 'column' }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} style={{ fill: 'var(--gold)', color: 'var(--gold)' }} />
                ))}
              </div>

              {/* Quote mark */}
              <span className="quote-mark" aria-hidden="true">"</span>

              {/* Quote text */}
              <p style={{
                fontStyle: 'italic',
                fontSize: '0.92rem',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                flex: 1,
                marginBottom: '1.75rem',
              }}>
                {t.text}
              </p>

              {/* Author */}
              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border)',
              }}>
                <p style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.2rem' }}>{t.author}</p>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold)' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn link */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              padding: '0.5rem 0',
              borderBottom: '1px solid var(--border)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--gold)';
              e.currentTarget.style.borderBottomColor = 'var(--border-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderBottomColor = 'var(--border)';
            }}
          >
            <Linkedin size={15} />
            Voir tous les témoignages sur LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
