import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/process';

const Process = ({ scrollToContact }) => {
  return (
    <section id="process" style={{ padding: '6rem 2rem' }}>
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
              Comment ça marche
            </span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.05 }}>
            Comment on travaille{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>ensemble</span>
          </h2>
        </div>

        {/* Horizontal steps — desktop / vertical — mobile */}
        <div className="process-grid">
          {processSteps.map((item, index) => (
            <div key={index} className="process-step">
              <div
                className="process-number font-display"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: 'var(--gold)',
                  marginBottom: '1.25rem',
                }}
              >
                {String(item.step).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.7rem', lineHeight: 1.4, color: 'var(--text)' }}>
                {item.title}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {item.details.map((detail, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: 'var(--gold)', flexShrink: 0 }}>—</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Pas de mauvaise surprise. Pas de jargon.</strong>{' '}
            Juste un projet qui avance, visiblement.
          </p>
          <button onClick={scrollToContact} className="btn-gold">
            Ce process vous convient ? Démarrons votre projet <ArrowRight size={16} />
          </button>
        </div>

        <style>{`
          .process-grid {
            display: grid;
            grid-template-columns: repeat(${processSteps.length}, 1fr);
            position: relative;
            gap: 0;
          }
          .process-grid::before {
            content: '';
            position: absolute;
            top: 1.4rem;
            left: 0;
            right: 0;
            height: 1px;
            background: var(--border);
            z-index: 0;
          }
          .process-step {
            padding: 0 1.5rem 0 0;
            position: relative;
            z-index: 1;
          }
          .process-step:last-child { padding-right: 0; }
          .process-number {
            position: relative;
          }
          .process-number::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 8px;
            background: var(--bg);
            border: 1px solid var(--gold);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            display: none;
          }
          @media (max-width: 768px) {
            .process-grid {
              grid-template-columns: 1fr;
            }
            .process-grid::before { display: none; }
            .process-step {
              display: grid;
              grid-template-columns: 3rem 1fr;
              grid-template-rows: auto auto;
              gap: 0 1.25rem;
              padding: 0 0 2.5rem;
              border-left: 1px solid var(--border);
              margin-left: 2rem;
              padding-left: 1.5rem;
            }
            .process-step:last-child {
              border-left-color: transparent;
              padding-bottom: 0;
            }
            .process-number {
              grid-column: 1;
              grid-row: 1 / 3;
              font-size: 1.5rem !important;
              margin-bottom: 0 !important;
              position: absolute;
              left: -2.1rem;
              top: -0.15rem;
            }
            .process-step h3 {
              grid-column: 2;
              grid-row: 1;
            }
            .process-step ul {
              grid-column: 2;
              grid-row: 2;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Process;
