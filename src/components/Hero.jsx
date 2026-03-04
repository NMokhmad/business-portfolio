import { ArrowRight } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost background number */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-0.04em',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(180px, 28vw, 420px)',
          fontWeight: 700,
          color: 'transparent',
          WebkitTextStroke: '1px var(--border)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.02em',
          zIndex: 0,
        }}
      >
        01
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="hero-inner">

          {/* ── Left: Content ─────────────────────────────── */}
          <div className="hero-content">

            {/* Eyebrow */}
            <div
              className="animate-fade-up d1"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}
            >
              <div style={{ width: 36, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>
                Développeur Fullstack JS · Certifié DWWM · Disponible en CDI
              </span>
            </div>

            {/* H1 — mixed weight editorial */}
            <h1
              className="animate-fade-up d2 font-display"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
                lineHeight: 0.93,
                marginBottom: '2.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ display: 'block', fontWeight: 300 }}>Développeur</span>
              <span style={{ display: 'block', fontWeight: 700, fontStyle: 'italic', color: 'var(--gold)' }}>
                Fullstack JS.
              </span>
              <span style={{ display: 'block', fontWeight: 300 }}>React + Node.js,</span>
              <span style={{ display: 'block', fontWeight: 400, fontStyle: 'italic' }}>disponible en CDI.</span>
            </h1>

            {/* Services descriptor */}
            <p
              className="animate-fade-up d3"
              style={{
                fontSize: '0.75rem',
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginBottom: '1.25rem',
              }}
            >
              Sites vitrines · Applications · MVP
            </p>

            {/* Description */}
            <p
              className="animate-fade-up d4"
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                maxWidth: '480px',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
              }}
            >
              Certifié DWWM, développeur{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>fullstack de bout en bout</strong>.{' '}
              Je cherche une équipe où mes compétences React / Node.js / PostgreSQL ajoutent de la valeur dès le premier sprint.
            </p>

            {/* Editorial stats */}
            <div
              className="animate-fade-up d5"
              style={{
                display: 'flex',
                gap: '2.5rem',
                flexWrap: 'wrap',
                paddingTop: '1.75rem',
                paddingBottom: '1.75rem',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                marginBottom: '2.5rem',
              }}
            >
              {[
                { value: '2', unit: '', label: 'Projets fullstack' },
                { value: 'DWWM', unit: '', label: 'Certifié' },
                { value: 'Immédiat', unit: '', label: 'Disponibilité' },
              ].map(({ value, unit, label }) => (
                <div key={label}>
                  <div
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 700,
                      lineHeight: 1,
                      color: 'var(--text)',
                    }}
                  >
                    {value}
                    {unit && (
                      <span style={{
                        fontSize: '0.55em',
                        fontWeight: 400,
                        color: 'var(--gold)',
                        marginLeft: '0.1em',
                      }}>
                        {unit}
                      </span>
                    )}
                  </div>
                  <div style={{
                    fontSize: '0.62rem',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily: "'Outfit', sans-serif",
                    marginTop: '0.35rem',
                  }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="animate-fade-up d6"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
            >
              <a
                href="/cv.pdf"
                download
                className="btn-gold"
                style={{ fontSize: '0.82rem', textDecoration: 'none' }}
              >
                Télécharger mon CV <ArrowRight size={16} />
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-outline"
                style={{ fontSize: '0.82rem' }}
              >
                Voir mes réalisations
              </button>
            </div>
          </div>

          {/* ── Right: Portrait ───────────────────────────── */}
          <div className="animate-fade-up d3 hero-portrait-wrap">

            {/* Corner bracket accents */}
            <div aria-hidden="true" style={{ position: 'absolute', top: -10, left: -10, width: 22, height: 22, borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' }} />
            <div aria-hidden="true" style={{ position: 'absolute', top: -10, right: -10, width: 22, height: 22, borderTop: '2px solid var(--border)', borderRight: '2px solid var(--border)' }} />
            <div aria-hidden="true" style={{ position: 'absolute', bottom: -10, left: -10, width: 22, height: 22, borderBottom: '2px solid var(--border)', borderLeft: '2px solid var(--border)' }} />
            <div aria-hidden="true" style={{ position: 'absolute', bottom: -10, right: -10, width: 22, height: 22, borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' }} />

            <img
              src="/pp.webp"
              alt="Mokhmad — Développeur Web Fullstack"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Availability badge */}
            <div style={{
              position: 'absolute',
              bottom: -1,
              left: '50%',
              transform: 'translateX(-50%) translateY(50%)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '0.4rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              whiteSpace: 'nowrap',
            }}>
              <div className="hero-availability-dot" />
              <span style={{
                fontSize: '0.62rem',
                fontFamily: "'Outfit', sans-serif",
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
                Disponible en CDI
              </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr clamp(200px, 26vw, 360px);
          gap: clamp(2rem, 6vw, 5rem);
          align-items: center;
        }

        .hero-portrait-wrap {
          position: relative;
          width: clamp(200px, 26vw, 360px);
          height: clamp(260px, 34vw, 460px);
          flex-shrink: 0;
        }

        .hero-availability-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
          flex-shrink: 0;
          animation: hero-dot-pulse 2.4s ease-in-out infinite;
        }

        @keyframes hero-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        @media (max-width: 720px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .hero-portrait-wrap {
            width: clamp(160px, 55vw, 260px);
            height: clamp(200px, 70vw, 320px);
            margin: 0 auto;
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
