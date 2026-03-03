import { ArrowRight } from 'lucide-react';
import { differentiators } from '../data/differentiators';

const Differentiators = ({ scrollToSection }) => {
  return (
    <section id="differentiators" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header — left-aligned */}
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
              Pourquoi moi
            </span>
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, maxWidth: '600px' }}
          >
            Ce qui me différencie
          </h2>
        </div>

        {/* Manifesto list */}
        <div>
          {differentiators.map((diff, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '2.5rem',
                padding: '2.25rem 0',
                borderTop: '1px solid var(--border)',
                cursor: 'default',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = 'var(--gold)';
                e.currentTarget.querySelector('.diff-index').style.color = 'var(--gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = 'var(--border)';
                e.currentTarget.querySelector('.diff-index').style.color = 'var(--text-dim)';
              }}
            >
              <span
                className="diff-index font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: 'var(--text-dim)',
                  flexShrink: 0,
                  width: 'clamp(3rem, 5.5vw, 4.5rem)',
                  transition: 'color 0.25s',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div style={{ flex: 1, paddingTop: '0.35rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.4, color: 'var(--text)' }}>
                  {diff.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '640px' }}>
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        {/* CTA */}
        <div style={{ marginTop: '3rem' }}>
          <button
            onClick={() => scrollToSection('problems')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--gold)',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0',
              borderBottom: '1px solid var(--border-hover)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            Ces promesses vous parlent ? Voyons comment je peux vous aider
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
