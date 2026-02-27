import { ArrowRight } from 'lucide-react';
import { problems } from '../data/problems';

const Problems = ({ scrollToContact }) => {
  return (
    <section id="problems" style={{ padding: '6rem 2rem' }}>
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
              Vos situations
            </span>
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.05 }}
          >
            Vous vous reconnaissez&nbsp;?
          </h2>
        </div>

        {/* 2-column problem/solution rows */}
        <div>
          {problems.map((item, index) => (
            <div
              key={index}
              className="problem-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1px 1fr',
                borderTop: '1px solid var(--border)',
                background: index % 2 === 0 ? 'var(--surface)' : 'var(--surface-2)',
              }}
            >
              {/* Problem — italic serif */}
              <div style={{ padding: '1.75rem 2rem 1.75rem 0' }}>
                <p
                  className="font-display"
                  style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.65 }}
                >
                  &ldquo;{item.problem}&rdquo;
                </p>
              </div>

              {/* Vertical separator */}
              <div style={{ background: 'var(--border)', margin: '1.5rem 0' }} />

              {/* Solution */}
              <div style={{ padding: '1.75rem 0 1.75rem 2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ArrowRight size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
            Si vous vous reconnaissez dans l'un de ces scénarios,{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>parlons-en 15 minutes. Sans engagement.</strong>
          </p>
          <button onClick={scrollToContact} className="btn-gold">
            Réserver un appel découverte gratuit <ArrowRight size={16} />
          </button>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .problem-row {
              grid-template-columns: 1fr !important;
            }
            .problem-row > div:nth-child(2) {
              display: none;
            }
            .problem-row > div:last-child {
              padding: 0 0 1.5rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Problems;
