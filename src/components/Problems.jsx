import { ArrowRight } from 'lucide-react';
import { problems } from '../data/problems';

const Problems = ({ scrollToContact }) => {
  return (
    <section id="problems" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" style={{ marginBottom: '6rem' }} />

      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Vos situations</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, marginBottom: '1rem' }}
          >
            Vous vous reconnaissez ?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            Spoiler : je peux vous aider.
          </p>
        </div>

        {/* Problems list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
          {problems.map((item, index) => (
            <div
              key={index}
              style={{
                background: 'var(--surface)',
                padding: '1.75rem 2rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                transition: 'background 0.25s',
                borderLeft: '3px solid transparent',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = 'var(--gold)';
                e.currentTarget.style.background = 'var(--surface-2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.background = 'var(--surface)';
              }}
            >
              <span style={{ fontSize: '1.75rem', lineHeight: 1, flexShrink: 0 }}>{item.emoji}</span>
              <div>
                <p style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text)', lineHeight: 1.5 }}>
                  "{item.problem}"
                </p>
                <p style={{ fontSize: '0.88rem', color: 'var(--gold)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem', lineHeight: 1.6 }}>
                  <ArrowRight size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
            Si vous vous reconnaissez dans l'un de ces scénarios,{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>
              parlons-en 15 minutes. Sans engagement.
            </strong>
          </p>
          <button onClick={scrollToContact} className="btn-gold">
            Réserver un appel découverte gratuit <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problems;
