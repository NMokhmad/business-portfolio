import { Layers, DollarSign, Code2, AlertCircle, ArrowRight } from 'lucide-react';
import { differentiators } from '../data/differentiators';

const iconMap = { Layers, DollarSign, Code2, AlertCircle };

const Differentiators = ({ scrollToSection }) => {
  return (
    <section id="differentiators" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" style={{ marginBottom: '6rem' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Pourquoi moi</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '1rem' }}
          >
            Ce qui me différencie
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto' }}>
            Vous n'avez pas besoin d'un CV. Vous avez besoin de résultats.
          </p>
        </div>

        {/* Cards grid */}
        <div className="diff-grid" style={{ gap: '1.5px', background: 'var(--border)' }}>
          {differentiators.map((diff, index) => {
            const Icon = iconMap[diff.iconName];
            return (
              <div
                key={index}
                className="card"
                style={{ padding: '2.5rem', background: 'var(--surface)' }}
              >
                {/* Number + Icon */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span
                    className="font-display"
                    style={{
                      fontSize: '3.5rem',
                      fontWeight: 300,
                      color: 'var(--text-dim)',
                      lineHeight: 1,
                      opacity: 0.5,
                    }}
                  >
                    0{index + 1}
                  </span>
                  <div style={{
                    padding: '0.6rem',
                    background: 'var(--gold-glow)',
                    border: '1px solid var(--border-hover)',
                    color: 'var(--gold)',
                  }}>
                    <Icon size={20} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {diff.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
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
