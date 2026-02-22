import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/process';

const Process = ({ scrollToContact }) => {
  return (
    <section id="process" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" style={{ marginBottom: '6rem' }} />

      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Ma méthode</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, marginBottom: '1rem' }}
          >
            Ma façon de travailler
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            Du ticket à la mise en production.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {processSteps.map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              {/* Connector column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div className="step-badge">
                  {item.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-line" style={{ marginTop: '2px', marginBottom: '2px' }} />
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  paddingBottom: index < processSteps.length - 1 ? '2.5rem' : 0,
                  flex: 1,
                  paddingTop: '0.5rem',
                }}
              >
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {item.details.map((detail, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                      }}
                    >
                      <ArrowRight
                        size={14}
                        style={{ flexShrink: 0, marginTop: '3px', color: 'var(--gold)' }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Rigueur, transparence, amélioration continue.</strong>{' '}
            Un process que j'applique sur chaque feature, dans chaque équipe.
          </p>
          <button onClick={scrollToContact} className="btn-gold">
            Discuter de mon profil <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
