import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = ({ scrollToContact, scrollToSection }) => {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem 4rem',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>

        {/* Section label */}
        <div className="animate-fade-up d1" style={{ marginBottom: '2.5rem' }}>
          <span className="section-label">Développeur Web Fullstack</span>
        </div>

        {/* Photo */}
        <div className="animate-fade-up d2" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Gold ring */}
            <div
              style={{
                position: 'absolute',
                inset: '-3px',
                borderRadius: '50%',
                background: `conic-gradient(var(--gold) 0deg, var(--gold-glow) 90deg, var(--gold) 180deg, var(--gold-glow) 270deg, var(--gold) 360deg)`,
                animation: 'spin 8s linear infinite',
              }}
              aria-hidden="true"
            />
            <div
              style={{
                position: 'absolute',
                inset: '0px',
                borderRadius: '50%',
                background: 'var(--bg)',
              }}
              aria-hidden="true"
            />
            <img
              src="/pp.webp"
              alt="Mokhmad — Développeur Web Fullstack"
              style={{
                position: 'relative',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid var(--bg)',
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up d3 font-display"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700,
            marginBottom: '1.25rem',
            lineHeight: 1.05,
          }}
        >
          Vous avez une idée.{' '}
          <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Je la transforme en produit.</span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up d4 font-display"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--gold)',
            marginBottom: '1.25rem',
            lineHeight: 1.2,
          }}
        >
          Sites vitrines, applications, MVP — de la première ligne de code à la mise en ligne.
        </p>

        {/* Description */}
        <p
          className="animate-fade-up d5"
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            maxWidth: '640px',
            margin: '0 auto 3rem',
            lineHeight: 1.7,
          }}
        >
          Développeur fullstack spécialisé en solutions qui génèrent des{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>résultats business</strong>.{' '}
          Pas de retards. Un interlocuteur unique, de l'idée à la mise en ligne.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up d6"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3.5rem' }}
        >
          <button onClick={scrollToContact} className="btn-gold" style={{ fontSize: '0.82rem' }}>
            Discuter de votre projet <ArrowRight size={16} />
          </button>
          <button onClick={() => scrollToSection('projects')} className="btn-outline" style={{ fontSize: '0.82rem' }}>
            Voir mes réalisations
          </button>
        </div>

        {/* Trust badges */}
        <div
          className="animate-fade-up d7"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          {[
            'Livraison en 2–4 semaines',
            'Support inclus 30 jours',
            'Devis sous 24h',
          ].map((badge) => (
            <div
              key={badge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
              }}
            >
              <CheckCircle size={15} style={{ color: 'var(--green)', flexShrink: 0 }} />
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Spinning ring animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
