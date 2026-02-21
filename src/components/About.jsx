import { useRef, useState, useEffect } from 'react';

const XP_ITEMS = [
  { label: 'React & Frontend', xp: 90, color: 'var(--mc-diamond)' },
  { label: 'Node.js & Backend', xp: 80, color: 'var(--mc-emerald)' },
  { label: 'PostgreSQL & BDD', xp: 75, color: 'var(--mc-gold)' },
  { label: 'Performance Web', xp: 85, color: 'var(--mc-redstone)' },
];

/* ── Wooden sign header ─────────────────────────────────────────── */
function WoodenSign({ text }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: '48px' }}>
      {/* Sign board */}
      <div
        style={{
          background: 'var(--mc-wood)',
          padding: '12px 28px',
          boxShadow:
            'inset -3px -4px 0 rgba(0,0,0,0.5), inset 3px 3px 0 rgba(255,255,255,0.2), 0 4px 0 rgba(0,0,0,0.5)',
          position: 'relative',
        }}
      >
        {/* Wood grain lines */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.15 }}>
          {[8, 20, 32, 44].map((y) => (
            <div
              key={y}
              style={{
                position: 'absolute',
                top: y,
                left: 0,
                right: 0,
                height: '2px',
                background: 'rgba(0,0,0,0.6)',
              }}
            />
          ))}
        </div>
        <span
          className="pixel-text pixel-shadow-gold"
          style={{ fontSize: 'clamp(10px, 2vw, 16px)', color: 'var(--mc-text-yellow)', letterSpacing: '2px', position: 'relative', zIndex: 1 }}
        >
          {text}
        </span>
      </div>
      {/* Post */}
      <div style={{ width: '12px', height: '24px', background: 'var(--mc-wood)', boxShadow: 'inset -2px 0 0 rgba(0,0,0,0.3)' }} />
    </div>
  );
}

/* ── XP Bar ─────────────────────────────────────────────────────── */
function XpBar({ label, xp, color, visible }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <span className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-text-gray)' }}>
          {label}
        </span>
        <span className="pixel-text" style={{ fontSize: '7px', color }}>
          {xp} / 100 XP
        </span>
      </div>
      {/* Track */}
      <div
        style={{
          height: '10px',
          background: '#111',
          boxShadow: 'inset -1px -1px 0 #333, inset 1px 1px 0 #000',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Fill */}
        <div
          className="xp-bar-fill xp-glow"
          style={{
            height: '100%',
            background: color,
            '--xp-target': `${xp}%`,
            '--xp-play': visible ? 'running' : 'paused',
            boxShadow: `0 0 8px ${color}`,
          }}
        />
        {/* Tick marks */}
        {[25, 50, 75].map((tick) => (
          <div
            key={tick}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${tick}%`,
              width: '1px',
              background: 'rgba(0,0,0,0.4)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '80px 20px',
        background: `repeating-linear-gradient(
          0deg,
          rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 2px,
          transparent 2px, transparent 32px
        ), var(--mc-inventory-dark)`,
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <WoodenSign text="À PROPOS" />

        {/* Book frame */}
        <div
          className="pixel-border-inventory"
          style={{
            background: 'var(--mc-inventory)',
            padding: 'clamp(20px, 4vw, 48px)',
            textAlign: 'left',
          }}
        >
          {/* Inner content: two columns on md+ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '40px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left: photo */}
            <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              {/* Pixelated frame */}
              <div
                style={{
                  padding: '6px',
                  background: 'var(--mc-stone)',
                  boxShadow:
                    'inset -3px -3px 0 var(--mc-stone-dark), inset 3px 3px 0 var(--mc-stone-light), 0 0 0 3px #000',
                }}
              >
                <div
                  style={{
                    padding: '4px',
                    background: 'var(--mc-stone-dark)',
                  }}
                >
                  <img
                    src="/pp.png"
                    alt="Mokhmad — Développeur Web Fullstack"
                    style={{
                      width: '148px',
                      height: '148px',
                      objectFit: 'cover',
                      display: 'block',
                      imageRendering: 'pixelated',
                    }}
                  />
                </div>
              </div>

              {/* Level badge */}
              <div
                className="pixel-border-slot"
                style={{
                  background: '#111',
                  padding: '8px 12px',
                  textAlign: 'center',
                }}
              >
                <span className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-gold)' }}>
                  LVL 5 DEV
                </span>
              </div>
            </div>

            {/* Right: text + XP bars */}
            <div style={{ flex: 1, minWidth: '240px' }}>
              {/* Parchment text block */}
              <div
                style={{
                  background: 'rgba(212, 184, 150, 0.08)',
                  border: '2px solid rgba(212, 184, 150, 0.15)',
                  padding: '20px',
                  marginBottom: '28px',
                }}
              >
                <p
                  className="pixel-text"
                  style={{ fontSize: '8px', color: 'var(--mc-parchment)', lineHeight: 2.2, marginBottom: '12px' }}
                >
                  Salut, je suis <span style={{ color: 'var(--mc-gold)' }}>Mokhmad</span> — développeur
                  web fullstack basé en France.
                </p>
                <p
                  className="pixel-text"
                  style={{ fontSize: '8px', color: 'var(--mc-parchment)', lineHeight: 2.2, marginBottom: '12px' }}
                >
                  Je construis des sites qui{' '}
                  <span style={{ color: 'var(--mc-emerald)' }}>convertissent</span>, pas juste qui
                  impressionnent. Spécialisé{' '}
                  <span style={{ color: 'var(--mc-diamond)' }}>React</span>,{' '}
                  <span style={{ color: 'var(--mc-emerald)' }}>Node.js</span> et{' '}
                  <span style={{ color: 'var(--mc-gold)' }}>PostgreSQL</span>.
                </p>
                <p
                  className="pixel-text"
                  style={{ fontSize: '8px', color: 'var(--mc-text-gray)', lineHeight: 2.2 }}
                >
                  Quand je ne code pas, je joue à{' '}
                  <span style={{ color: 'var(--mc-grass)' }}>Minecraft</span> (évidemment). ⛏
                </p>
              </div>

              {/* XP Bars */}
              <div
                className="pixel-border-slot"
                style={{ background: '#111', padding: '16px' }}
              >
                <p
                  className="pixel-text"
                  style={{ fontSize: '7px', color: 'var(--mc-text-gray)', marginBottom: '16px' }}
                >
                  ⚡ STATISTIQUES DE COMPÉTENCES
                </p>
                {XP_ITEMS.map((item) => (
                  <XpBar key={item.label} {...item} visible={visible} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
