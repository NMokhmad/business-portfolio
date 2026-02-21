export default function Footer({ scrollToSection }) {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--mc-bedrock)',
        borderTop: '4px solid #000',
        boxShadow: 'inset 0 4px 0 rgba(255,255,255,0.03)',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      {/* Bedrock texture strip */}
      <div style={{
        width: '100%',
        height: '4px',
        marginBottom: '32px',
        background: `repeating-linear-gradient(
          90deg,
          #222 0px, #222 8px,
          #1A1A1A 8px, #1A1A1A 16px
        )`,
      }} />

      {/* Nav links */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center',
        marginBottom: '32px',
      }}>
        {['hero', 'about', 'projects', 'skills', 'contact'].map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="pixel-text pixel-border-slot"
            style={{
              padding: '8px 12px',
              background: 'var(--mc-slot)',
              color: 'var(--mc-text-gray)',
              fontSize: '7px',
              border: 'none',
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div style={{
        width: '80px',
        height: '2px',
        background: 'var(--mc-stone-dark)',
        margin: '0 auto 24px',
      }} />

      <p
        className="pixel-text pixel-shadow"
        style={{ fontSize: '9px', color: 'var(--mc-text-gray)', marginBottom: '16px' }}
      >
        Construit bloc par bloc avec{' '}
        <span style={{ color: 'var(--mc-redstone)' }}>❤</span>{' '}
        par Mokhmad
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '8px' }}>
        <span className="pixel-text" style={{ fontSize: '7px', color: '#555' }}>
          v1.0.0 — Build {year}
        </span>
        <span className="pixel-text" style={{ fontSize: '7px', color: '#444' }}>
          World Seed: 0xDEADBEEF
        </span>
      </div>

      <p className="pixel-text" style={{ fontSize: '6px', color: '#333', marginTop: '8px' }}>
        React + TailwindCSS • Aucun Creeper n'a été blessé lors de la création de ce portfolio
      </p>
    </footer>
  );
}
