import { useState, useCallback } from 'react';

/* ── Data ─────────────────────────────────────────────────────── */
const INVENTORY_PROJECTS = [
  {
    id: 0,
    slot: 0,
    icon: '🔗',
    iconBg: '#0D3B5C',
    shortName: 'SkillSwap',
    rarity: 'Rare',
    rarityColor: '#4FC3F7',
    title: 'SkillSwap',
    subtitle: "Plateforme d'échange de compétences",
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    enchantments: [
      { label: 'Node.js', level: 'V' },
      { label: 'Express', level: 'IV' },
      { label: 'PostgreSQL', level: 'IV' },
      { label: 'Temps réel', level: 'III' },
    ],
    problem:
      "Les développeurs galèrent à trouver des partenaires complémentaires sans passer par des plateformes freelance coûteuses.",
    solution:
      'Full-stack communautaire : profils détaillés, notation 5 étoiles, messagerie temps réel, recherche par compétences.',
    result: 'Chargement < 1 seconde · Aucun décalage visuel · Navigation zéro blocage',
    liveUrl: 'https://clownfish-app-hy864.ondigitalocean.app/',
    durability: 85,
    stackCount: 1,
  },
  {
    id: 1,
    slot: 1,
    icon: '🚗',
    iconBg: '#3D2800',
    shortName: 'IBA Perf.',
    rarity: 'Épique',
    rarityColor: '#FFD700',
    title: 'IBA Performance',
    subtitle: 'Site vitrine automobile',
    tech: ['React', 'Sanity CMS', 'Vercel', 'Analytics'],
    enchantments: [
      { label: 'React', level: 'V' },
      { label: 'Sanity CMS', level: 'III' },
      { label: 'SEO', level: 'IV' },
      { label: 'Performance', level: 'V' },
    ],
    problem:
      "Spécialiste reprogrammation moteur, 15 ans d'expérience, 500+ véhicules, mais zéro présence en ligne pour les leads.",
    solution:
      'Site React + Sanity CMS headless, portfolio filtrable (11 catégories), blog SEO, analytics Vercel.',
    result: 'Chargement 1s · Top Google · Client 100% autonome sur son contenu',
    liveUrl: 'https://www.ibaperformance.com',
    durability: 92,
    stackCount: 1,
  },
];

const TOTAL_SLOTS = 9;

/* ── Tooltip ─────────────────────────────────────────────────── */
function InventoryTooltip({ project, anchorRect }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const posStyle = isMobile
    ? {
        position: 'fixed',
        top: '72px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90vw',
        maxWidth: '300px',
        zIndex: 2000,
      }
    : {
        position: 'fixed',
        left: Math.min(anchorRect.right + 14, window.innerWidth - 260),
        top: Math.max(4, Math.min(anchorRect.top, window.innerHeight - 300)),
        width: '240px',
        zIndex: 2000,
      };

  return (
    <div
      className="mc-tooltip"
      style={{
        ...posStyle,
        background: '#100010',
        border: '2px solid #3A006A',
        padding: '14px 14px 14px 18px',
        pointerEvents: 'none',
        boxShadow: '0 0 0 1px #000, 4px 4px 0 rgba(0,0,0,0.8)',
      }}
    >
      {/* Left gradient border */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
        background: 'linear-gradient(to bottom, var(--mc-enchant-light), var(--mc-diamond))',
      }} />

      <p className="pixel-text" style={{ fontSize: '9px', color: project.rarityColor, marginBottom: '4px' }}>
        {project.title}
      </p>
      <p className="pixel-text" style={{ fontSize: '7px', color: project.rarityColor, opacity: 0.7, marginBottom: '12px' }}>
        ✦ {project.rarity}
      </p>

      <div style={{ marginBottom: '12px' }}>
        {project.enchantments.map((e) => (
          <p key={e.label} className="pixel-text" style={{ fontSize: '7px', color: '#8080FF', marginBottom: '4px' }}>
            ✦ {e.label} {e.level}
          </p>
        ))}
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '10px' }} />

      <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-emerald)', lineHeight: 1.8 }}>
        ✅ {project.result}
      </p>
      <p className="pixel-text" style={{ fontSize: '6px', color: '#555', marginTop: '10px' }}>
        [ Clic pour ouvrir le coffre ]
      </p>
    </div>
  );
}

/* ── Single inventory slot ────────────────────────────────────── */
function InventorySlot({ project, isExpanded, isHovered, onMouseEnter, onMouseLeave, onClick }) {
  const boxShadow = isExpanded
    ? 'inset -2px -2px 0 #1B1B1B, inset 2px 2px 0 var(--mc-gold), 0 0 16px rgba(255,215,0,0.6)'
    : isHovered
    ? 'inset -2px -2px 0 #3A3A3A, inset 2px 2px 0 #AAAAAA, 0 0 10px rgba(79,195,247,0.4)'
    : 'inset -2px -2px 0 #1B1B1B, inset 2px 2px 0 #6B6B6B';

  return (
    <div
      onMouseEnter={project ? onMouseEnter : undefined}
      onMouseLeave={project ? onMouseLeave : undefined}
      onClick={project ? onClick : undefined}
      style={{
        width: '64px', height: '64px',
        background: project ? 'var(--mc-slot)' : 'var(--mc-slot-empty)',
        position: 'relative',
        boxShadow,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        transition: 'box-shadow 0.1s',
        flexShrink: 0,
      }}
    >
      {project ? (
        <>
          {/* Icon */}
          <div style={{
            width: '40px', height: '40px', background: project.iconBg,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px',
          }}>
            {project.icon}
          </div>

          {/* Durability bar */}
          <div style={{ position: 'absolute', bottom: '4px', left: '4px', right: '4px', height: '2px', background: '#222' }}>
            <div style={{
              width: `${project.durability}%`, height: '100%',
              background: project.durability > 70 ? 'var(--mc-emerald)' : project.durability > 30 ? 'var(--mc-gold)' : 'var(--mc-redstone)',
            }} />
          </div>

          {/* Stack count */}
          <span className="pixel-text" style={{
            position: 'absolute', bottom: '7px', right: '3px',
            fontSize: '7px', color: 'white', textShadow: '1px 1px 0 #000',
          }}>
            {project.stackCount}
          </span>

          {isHovered && !isExpanded && (
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
          )}
          {isExpanded && (
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,215,0,0.12)', pointerEvents: 'none' }} />
          )}
        </>
      ) : (
        <div style={{
          width: '48px', height: '48px',
          background: `repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 4px, transparent 4px, transparent 8px)`,
        }} />
      )}
    </div>
  );
}

/* ── Expanded project panel ────────────────────────────────────── */
function ProjectPanel({ project, onClose }) {
  return (
    <div
      className="chest-panel"
      style={{
        background: 'var(--mc-inventory)',
        boxShadow: 'inset -4px -4px 0 #1B1B1B, inset 4px 4px 0 #6B6B6B, 0 0 0 3px #000',
        padding: '24px',
        position: 'relative',
        marginTop: '4px',
        textAlign: 'left',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="pixel-text pixel-border-slot"
        style={{
          position: 'absolute', top: '12px', right: '12px',
          background: 'var(--mc-redstone)', color: 'white',
          fontSize: '7px', border: 'none', padding: '6px 10px',
        }}
      >
        ✕ FERMER
      </button>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{
          width: '48px', height: '48px', background: project.iconBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0,
        }}>
          {project.icon}
        </div>
        <div>
          <p className="pixel-text" style={{ fontSize: '10px', color: project.rarityColor, marginBottom: '4px' }}>
            {project.title}
          </p>
          <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-text-gray)' }}>
            {project.subtitle} · ✦ {project.rarity}
          </p>
        </div>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {project.tech.map((t) => (
          <span key={t} className="pixel-text pixel-border-slot" style={{ fontSize: '7px', padding: '4px 8px', background: '#111', color: 'var(--mc-diamond)' }}>
            {t}
          </span>
        ))}
      </div>

      {/* Problem / Solution / Result */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
        {[
          { label: '→ PROBLÈME', text: project.problem, color: 'var(--mc-redstone)' },
          { label: '→ SOLUTION', text: project.solution, color: 'var(--mc-gold)' },
          { label: '→ RÉSULTAT', text: project.result,  color: 'var(--mc-emerald)' },
        ].map(({ label, text, color }) => (
          <div key={label} style={{ borderLeft: `3px solid ${color}`, paddingLeft: '12px' }}>
            <p className="pixel-text" style={{ fontSize: '7px', color, marginBottom: '6px' }}>{label}</p>
            <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-text-gray)', lineHeight: 2 }}>{text}</p>
          </div>
        ))}
      </div>

      {/* Enchantments */}
      <div className="pixel-border-slot" style={{ background: '#0D0020', padding: '12px', marginBottom: '20px' }}>
        <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-enchant-light)', marginBottom: '8px' }}>
          ✦ ENCHANTEMENTS ACTIFS
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.enchantments.map((e) => (
            <span key={e.label} className="pixel-text" style={{ fontSize: '7px', color: '#9090FF' }}>
              {e.label} {e.level}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pixel-text pixel-border-btn"
        style={{
          display: 'inline-block', padding: '12px 20px',
          background: 'var(--mc-emerald)', color: 'white',
          fontSize: '9px', textDecoration: 'none', letterSpacing: '1px',
        }}
      >
        🌐 VOIR LE SITE EN LIGNE
      </a>
    </div>
  );
}

/* ── Hotbar slot ─────────────────────────────────────────────── */
function HotbarSlot({ project, selected }) {
  return (
    <div style={{
      width: '48px', height: '48px', flexShrink: 0,
      background: project ? 'var(--mc-slot)' : 'var(--mc-slot-empty)',
      boxShadow: selected
        ? 'inset -2px -2px 0 #1B1B1B, inset 2px 2px 0 var(--mc-gold), 0 0 8px rgba(255,215,0,0.4)'
        : 'inset -2px -2px 0 #1B1B1B, inset 2px 2px 0 #555',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      {project && (
        <>
          <div style={{
            width: '32px', height: '32px', background: project.iconBg,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
          }}>
            {project.icon}
          </div>
          <div style={{ position: 'absolute', bottom: '3px', left: '3px', right: '3px', height: '2px', background: '#222' }}>
            <div style={{ width: `${project.durability}%`, height: '100%', background: 'var(--mc-emerald)' }} />
          </div>
        </>
      )}
    </div>
  );
}

/* ── Wooden sign header ─────────────────────────────────────── */
function WoodenSign({ text }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
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
export default function Projects() {
  const [hovered,    setHovered]    = useState(null);
  const [expanded,   setExpanded]   = useState(null);
  const [anchorRect, setAnchorRect] = useState(null);

  const handleMouseEnter = useCallback((project, e) => {
    setHovered(project.id);
    setAnchorRect(e.currentTarget.getBoundingClientRect());
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(null);
    setAnchorRect(null);
  }, []);

  const handleClick = useCallback((project) => {
    setExpanded((prev) => (prev?.id === project.id ? null : project));
    setHovered(null);
    setAnchorRect(null);
  }, []);

  const hoveredProject = hovered !== null
    ? INVENTORY_PROJECTS.find((p) => p.id === hovered)
    : null;

  return (
    <section id="projects" style={{ padding: '80px 20px', background: '#1A1A1A' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <WoodenSign text="📦 INVENTAIRE" />

        {/* ── Inventory container ── */}
        <div
          className="pixel-border-inventory"
          style={{
            background: 'var(--mc-inventory)',
            padding: '20px',
            display: 'inline-block',
            width: '100%',
            maxWidth: '640px',
          }}
        >
          <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-text-gray)', marginBottom: '12px', textAlign: 'left' }}>
            ⚒ Équipement :
          </p>

          {/* 3×3 Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 64px)',
            gap: '4px',
            justifyContent: 'center',
            marginBottom: '4px',
          }}>
            {Array.from({ length: TOTAL_SLOTS }, (_, i) => {
              const project = INVENTORY_PROJECTS.find((p) => p.slot === i);
              return (
                <InventorySlot
                  key={i}
                  project={project}
                  isExpanded={expanded?.id === project?.id}
                  isHovered={hovered === project?.id}
                  onMouseEnter={project ? (e) => handleMouseEnter(project, e) : undefined}
                  onMouseLeave={project ? handleMouseLeave : undefined}
                  onClick={project ? () => handleClick(project) : undefined}
                />
              );
            })}
          </div>

          {/* Expanded panel */}
          {expanded && <ProjectPanel project={expanded} onClose={() => setExpanded(null)} />}

          {/* Separator */}
          <div style={{
            height: '4px', margin: '16px 0',
            background: 'var(--mc-inventory-dark)',
            boxShadow: 'inset 0 2px 0 #000, inset 0 -1px 0 #4A4A4A',
          }} />

          {/* ── Hotbar ── */}
          <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-text-gray)', marginBottom: '10px', textAlign: 'left' }}>
            ⬡ Sélection rapide :
          </p>
          <div className="hotbar-scroll" style={{ display: 'flex', gap: '4px', justifyContent: 'center', overflowX: 'auto' }}>
            {Array.from({ length: 9 }, (_, i) => {
              const project = INVENTORY_PROJECTS.find((p) => p.slot === i);
              return <HotbarSlot key={i} project={project} selected={project !== undefined} />;
            })}
          </div>
        </div>

        <p className="pixel-text" style={{ fontSize: '7px', color: '#444', marginTop: '16px' }}>
          Survole un item · Clique pour ouvrir le coffre
        </p>
      </div>

      {/* Tooltip portal */}
      {hoveredProject && anchorRect && (
        <InventoryTooltip project={hoveredProject} anchorRect={anchorRect} />
      )}
    </section>
  );
}
