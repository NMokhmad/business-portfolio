import { Linkedin } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [first, ...rest] = testimonials;

  return (
    <section style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="animate-fade-up d1" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ width: 36, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              Témoignages
            </span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.05 }}>
            Ce que mes clients disent
          </h2>
        </div>

        {/* First testimonial — large format */}
        <div style={{ paddingBottom: '3rem', marginBottom: '3rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative large quote mark */}
          <span
            aria-hidden="true"
            className="font-display"
            style={{
              position: 'absolute',
              top: '-1rem',
              left: '-0.5rem',
              fontSize: 'clamp(8rem, 15vw, 14rem)',
              fontWeight: 700,
              lineHeight: 1,
              color: 'var(--gold)',
              opacity: 0.06,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            &ldquo;
          </span>

          <blockquote style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.55,
                marginBottom: '1.75rem',
              }}
            >
              {first.text}
            </p>
            <cite style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontStyle: 'normal' }}>
              <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text)' }}>{first.author}</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--gold)', letterSpacing: '0.05em' }}>{first.role}</span>
            </cite>
          </blockquote>
        </div>

        {/* Remaining testimonials — compact side by side */}
        {rest.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '2px',
            background: 'var(--border)',
          }}>
            {rest.map((t, index) => (
              <div key={index} style={{ background: 'var(--surface)', padding: '2rem 2.5rem' }}>
                <blockquote>
                  <span
                    aria-hidden="true"
                    className="font-display"
                    style={{ fontSize: '3rem', color: 'var(--gold)', opacity: 0.18, lineHeight: 0.8, display: 'block', marginBottom: '1rem' }}
                  >
                    &ldquo;
                  </span>
                  <p style={{
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.75,
                    marginBottom: '1.5rem',
                  }}>
                    {t.text}
                  </p>
                  <cite style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.15rem',
                    fontStyle: 'normal',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)',
                  }}>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text)' }}>{t.author}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>{t.role}</span>
                  </cite>
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* LinkedIn */}
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
