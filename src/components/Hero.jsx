import { useState, useEffect, useMemo } from 'react';

const TYPEWRITER_TEXTS = [
  'Développeur Fullstack',
  'Crafteur de Web Apps',
  'Builder de Pixels',
  'Node.js & React Dev',
];

function useTypewriter(texts, typingSpeed = 85, deletingSpeed = 45, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const text = texts[textIdx];
    let timer;

    if (!deleting) {
      if (charIdx < text.length) {
        timer = setTimeout(() => {
          setDisplay(text.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setDisplay(text.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, deletingSpeed);
      } else {
        setDeleting(false);
        setTextIdx((i) => (i + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIdx, deleting, textIdx, texts, typingSpeed, deletingSpeed, pause]);

  return display;
}

/* ── Pixel cloud shape ─────────────────────────────────────────── */
function PixelCloud({ className, style }) {
  const W = 'rgba(255,255,255,0.92)';
  const blocks = [
    { x: 0,  y: 24, w: 48, h: 16 },
    { x: 32, y: 24, w: 64, h: 16 },
    { x: 80, y: 24, w: 48, h: 16 },
    { x: 16, y: 8,  w: 32, h: 16 },
    { x: 48, y: 8,  w: 48, h: 16 },
    { x: 80, y: 8,  w: 32, h: 16 },
    { x: 32, y: 0,  w: 64, h: 8  },
  ];
  return (
    <div className={`pixel-cloud ${className}`} style={{ position: 'absolute', ...style }}>
      <div style={{ position: 'relative', width: 144, height: 48 }}>
        {blocks.map((b, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: b.x, top: b.y, width: b.w, height: b.h,
              background: W,
              imageRendering: 'pixelated',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero({ scrollToSection }) {
  const typed = useTypewriter(TYPEWRITER_TEXTS);

  const stars = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 68,
        dur: (1.5 + Math.random() * 2.5).toFixed(2),
        del: (Math.random() * 4).toFixed(2),
      })),
    []
  );

  return (
    <section
      id="hero"
      className="hero-sky"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '58px',
      }}
    >
      {/* Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="pixel-star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            '--star-dur': `${s.dur}s`,
            '--star-del': `${s.del}s`,
          }}
        />
      ))}

      {/* Clouds */}
      <PixelCloud className="pixel-cloud-1" style={{ top: '14%', left: 0 }} />
      <PixelCloud className="pixel-cloud-2" style={{ top: '30%', left: 0, transform: 'scale(0.75)' }} />
      <PixelCloud className="pixel-cloud-3" style={{ top: '8%',  left: 0, transform: 'scale(1.25)' }} />

      {/* ── Content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        {/* Kicker */}
        <p
          className="pixel-text pixel-shadow"
          style={{
            fontSize: '9px',
            color: 'var(--mc-gold)',
            letterSpacing: '3px',
            marginBottom: '20px',
          }}
        >
          ⛏ &nbsp;PORTFOLIO LOADED &nbsp;⛏
        </p>

        {/* Name */}
        <h1
          className="pixel-text pixel-shadow"
          style={{
            fontSize: 'clamp(28px, 6vw, 64px)',
            color: 'white',
            marginBottom: '12px',
            letterSpacing: '4px',
            lineHeight: 1.3,
          }}
        >
          MOKHMAD
        </h1>

        {/* Subtitle / typewriter */}
        <div
          style={{
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          <span
            className="pixel-text"
            style={{
              fontSize: 'clamp(8px, 1.8vw, 14px)',
              color: 'var(--mc-diamond)',
              letterSpacing: '1px',
            }}
          >
            {typed}
            <span
              style={{
                animation: 'pixel-blink 0.75s step-end infinite',
                color: 'var(--mc-gold)',
                marginLeft: '2px',
              }}
            >
              _
            </span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="pixel-text pixel-border-btn"
            style={{
              padding: '14px 22px',
              background: 'var(--mc-emerald)',
              color: 'white',
              fontSize: 'clamp(7px, 1.2vw, 10px)',
              border: 'none',
              letterSpacing: '1px',
              minWidth: '180px',
            }}
          >
            ✉&nbsp;&nbsp;ME CONTACTER
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="pixel-text pixel-border-btn"
            style={{
              padding: '14px 22px',
              background: 'var(--mc-stone)',
              color: 'white',
              fontSize: 'clamp(7px, 1.2vw, 10px)',
              border: 'none',
              letterSpacing: '1px',
              minWidth: '180px',
            }}
          >
            📦&nbsp;&nbsp;MES PROJETS
          </button>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginTop: '48px',
          }}
        >
          {[
            { icon: '⚡', label: 'Chargement < 1s' },
            { icon: '📦', label: '2 projets livrés' },
            { icon: '🎯', label: 'Full-stack React + Node' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="pixel-text pixel-border-slot"
              style={{
                padding: '8px 12px',
                background: 'rgba(0,0,0,0.4)',
                fontSize: '7px',
                color: 'var(--mc-text-gray)',
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
              }}
            >
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Pixel grass ground ── */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '72px' }}>
        {/* Grass top layer */}
        <div style={{
          height: '24px',
          background: `repeating-linear-gradient(
            90deg,
            var(--mc-grass) 0px, var(--mc-grass) 16px,
            var(--mc-grass-light) 16px, var(--mc-grass-light) 32px
          )`,
          borderTop: '3px solid rgba(0,0,0,0.35)',
        }} />
        {/* Dirt layer */}
        <div style={{
          height: '48px',
          background: `repeating-linear-gradient(
            90deg,
            var(--mc-dirt) 0px, var(--mc-dirt) 16px,
            var(--mc-dirt-dark) 16px, var(--mc-dirt-dark) 32px
          )`,
        }} />
      </div>
    </section>
  );
}
