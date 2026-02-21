import { useState } from 'react';

const NAV_ITEMS = [
  { id: 'hero',     label: '🏠 Accueil' },
  { id: 'about',    label: '📖 À Propos' },
  { id: 'projects', label: '📦 Projets' },
  { id: 'skills',   label: '✨ Skills' },
  { id: 'contact',  label: '✉ Contact' },
];

export default function Navbar({ activeSection, scrollToSection }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: 'var(--mc-inventory)',
        borderBottom: '3px solid #000',
        boxShadow: '0 3px 0 var(--mc-stone-dark)',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        height: '58px',
        gap: '6px',
      }}>
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'none',
            border: 'none',
            marginRight: 'auto',
            padding: '4px 8px',
          }}
        >
          <span style={{ fontSize: '18px', color: 'var(--mc-diamond)' }}>⬡</span>
          <span
            className="pixel-text pixel-shadow-diamond"
            style={{ fontSize: '9px', color: 'var(--mc-diamond)', letterSpacing: '1px' }}
          >
            MOKHMAD.DEV
          </span>
        </button>

        {/* Desktop nav slots */}
        <div style={{ display: 'flex', gap: '4px' }} className="hidden md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`pixel-text ${isActive ? 'nav-slot-active' : ''}`}
                style={{
                  padding: '8px 14px',
                  background: isActive ? 'var(--mc-inventory-light)' : 'var(--mc-slot)',
                  color: isActive ? 'var(--mc-gold)' : 'var(--mc-text-gray)',
                  fontSize: '8px',
                  border: 'none',
                  letterSpacing: '0.5px',
                  boxShadow: isActive
                    ? 'inset -2px -2px 0 #1B1B1B, inset 2px 2px 0 var(--mc-gold)'
                    : 'inset -2px -2px 0 #1B1B1B, inset 2px 2px 0 #6B6B6B',
                  transition: 'background 0.1s, color 0.1s',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="pixel-text md:hidden"
          style={{
            background: 'var(--mc-slot)',
            border: 'none',
            color: 'white',
            padding: '8px 12px',
            fontSize: '14px',
            boxShadow: 'inset -2px -2px 0 #1B1B1B, inset 2px 2px 0 #6B6B6B',
          }}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          background: 'var(--mc-inventory)',
          padding: '8px',
          borderTop: '2px solid #000',
        }}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { scrollToSection(item.id); setOpen(false); }}
                className="pixel-text"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px',
                  marginBottom: '4px',
                  background: isActive ? 'var(--mc-inventory-light)' : 'var(--mc-slot)',
                  color: isActive ? 'var(--mc-gold)' : 'white',
                  fontSize: '9px',
                  border: 'none',
                  textAlign: 'left',
                  boxShadow: 'inset -2px -2px 0 #1B1B1B, inset 2px 2px 0 #6B6B6B',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
