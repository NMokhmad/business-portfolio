import { useRef, useState, useEffect, useMemo } from 'react';

/* ── Data ─────────────────────────────────────────────────────── */
const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    icon: '⚔️',
    color: 'var(--mc-diamond)',
    skills: [
      { name: 'React',       level: 'V',  xp: 90 },
      { name: 'TailwindCSS', level: 'IV', xp: 85 },
      { name: 'TypeScript',  level: 'III',xp: 65 },
    ],
  },
  {
    category: 'Backend',
    icon: '🗡️',
    color: 'var(--mc-emerald)',
    skills: [
      { name: 'Node.js',    level: 'IV', xp: 80 },
      { name: 'Express',    level: 'III',xp: 72 },
      { name: 'PostgreSQL', level: 'III',xp: 68 },
    ],
  },
  {
    category: 'Outils',
    icon: '⛏️',
    color: 'var(--mc-gold)',
    skills: [
      { name: 'Git',        level: 'IV', xp: 85 },
      { name: 'Sanity CMS', level: 'II', xp: 55 },
      { name: 'Docker',     level: 'II', xp: 45 },
    ],
  },
];

const PARTICLE_CHARS = ['✦', '✧', '⬡', '◈', '✺', '❋', '✵', '⋆'];

/* ── Enchantment particle ──────────────────────────────────────── */
function Particle({ char, x, y, dur, del }) {
  return (
    <div
      className="enchant-particle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        '--ep-dur': `${dur}s`,
        '--ep-del': `${del}s`,
      }}
    >
      {char}
    </div>
  );
}

/* ── XP bar (animates on scroll) ────────────────────────────────── */
function SkillXpBar({ name, level, xp, color, visible }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <span className="pixel-text" style={{ fontSize: '7px', color: 'white' }}>
          {name}
        </span>
        <span className="pixel-text" style={{ fontSize: '7px', color }}>
          Niv. {level}
        </span>
      </div>

      {/* XP track */}
      <div style={{
        height: '10px',
        background: '#0A0A0A',
        boxShadow: 'inset -1px -1px 0 #333, inset 1px 1px 0 #000',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div
          className="xp-bar-fill"
          style={{
            height: '100%',
            background: color,
            '--xp-target': `${xp}%`,
            '--xp-play': visible ? 'running' : 'paused',
            boxShadow: `0 0 8px ${color}, 0 0 16px ${color}44`,
          }}
        />
        {/* Tick marks */}
        {[25, 50, 75].map((t) => (
          <div
            key={t}
            style={{
              position: 'absolute', top: 0, bottom: 0,
              left: `${t}%`, width: '1px',
              background: 'rgba(0,0,0,0.5)',
            }}
          />
        ))}
      </div>

      {/* XP value */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3px' }}>
        <span className="pixel-text" style={{ fontSize: '6px', color: '#555' }}>
          {xp} XP
        </span>
      </div>
    </div>
  );
}

/* ── Skill card (enchanted book) ────────────────────────────────── */
function SkillCard({ category, icon, color, skills, visible }) {
  return (
    <div
      className="pixel-border-enchant"
      style={{
        background: 'linear-gradient(135deg, #1A001A 0%, #120018 100%)',
        padding: '20px',
        flex: '1 1 240px',
        minWidth: '220px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Corner decoration */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '20px', height: '20px', background: color, opacity: 0.15 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '12px', height: '12px', background: color, opacity: 0.1 }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span style={{ fontSize: '22px' }}>{icon}</span>
        <div>
          <p className="pixel-text" style={{ fontSize: '9px', color, marginBottom: '2px' }}>
            {category}
          </p>
          <p className="pixel-text" style={{ fontSize: '6px', color: 'var(--mc-enchant-light)' }}>
            TABLE D'ENCHANTEMENT
          </p>
        </div>
      </div>

      {/* Skills */}
      {skills.map((s) => (
        <SkillXpBar key={s.name} {...s} color={color} visible={visible} />
      ))}
    </div>
  );
}

/* ── Wooden sign header ─────────────────────────────────────────── */
function WoodenSign({ text }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: '48px' }}>
      <div style={{
        background: 'var(--mc-wood)', padding: '12px 28px',
        boxShadow: 'inset -3px -4px 0 rgba(0,0,0,0.5), inset 3px 3px 0 rgba(255,255,255,0.2), 0 4px 0 rgba(0,0,0,0.5)',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.15 }}>
          {[8, 20, 32].map((y) => (
            <div key={y} style={{ position: 'absolute', top: y, left: 0, right: 0, height: '2px', background: 'rgba(0,0,0,0.6)' }} />
          ))}
        </div>
        <span className="pixel-text pixel-shadow-gold" style={{ fontSize: 'clamp(10px, 2vw, 16px)', color: 'var(--mc-text-yellow)', letterSpacing: '2px', position: 'relative', zIndex: 1 }}>
          {text}
        </span>
      </div>
      <div style={{ width: '12px', height: '24px', background: 'var(--mc-wood)', boxShadow: 'inset -2px 0 0 rgba(0,0,0,0.3)' }} />
    </div>
  );
}

/* ── Main ─────────────────────────────────────────────────────── */
export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        char: PARTICLE_CHARS[i % PARTICLE_CHARS.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        dur: (2 + Math.random() * 3.5).toFixed(2),
        del: (Math.random() * 5).toFixed(2),
      })),
    []
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: '80px 20px',
        background: 'linear-gradient(180deg, #1A1A1A 0%, #0D001A 50%, #1A1A1A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enchantment particles */}
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}

      {/* Purple ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(123,47,190,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <WoodenSign text="✨ TABLE D'ENCHANTEMENT" />

        {/* Subtitle */}
        <p
          className="pixel-text"
          style={{ fontSize: '8px', color: 'var(--mc-enchant-light)', marginBottom: '48px' }}
        >
          ✦ Enchantements disponibles pour votre projet ✦
        </p>

        {/* Cards grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
        }}>
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCard key={cat.category} {...cat} visible={visible} />
          ))}
        </div>

        {/* Lapis lazuli cost strip */}
        <div
          className="pixel-border-slot"
          style={{
            background: '#0A0020',
            padding: '16px 24px',
            marginTop: '32px',
            display: 'inline-flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span className="pixel-text" style={{ fontSize: '7px', color: '#6A9BD8' }}>
            💎 Coût en Lapis Lazuli :
          </span>
          {[
            { tech: 'React', cost: 'V' },
            { tech: 'Node.js', cost: 'IV' },
            { tech: 'PostgreSQL', cost: 'III' },
            { tech: 'Git', cost: 'IV' },
          ].map(({ tech, cost }) => (
            <span key={tech} className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-text-gray)' }}>
              {tech} <span style={{ color: '#6A9BD8' }}>{cost}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
