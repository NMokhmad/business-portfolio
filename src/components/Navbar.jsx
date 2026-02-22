import { Moon, Sun, Menu, X, Github } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen, scrollToSection, scrollToContact }) => {
  return (
    <nav className="navbar-bg" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>

          {/* Logo */}
          <div
            className="font-display"
            style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.02em', cursor: 'default' }}
          >
            Mokhmad
          </div>

          {/* Desktop nav */}
          <div style={{ display: 'none' }} className="md-nav-links">
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
              <button onClick={() => scrollToSection('differentiators')} className="nav-link">Atouts</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link">Projets</button>
              <button onClick={() => scrollToSection('process')} className="nav-link">Méthode</button>
              <button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button>

              <a
                href="https://github.com/NMokhmad"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
                aria-label="GitHub"
              >
                <Github size={15} /> GitHub
              </a>

              <button onClick={scrollToContact} className="btn-gold" style={{ padding: '0.6rem 1.4rem' }}>
                Me contacter
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                style={{
                  padding: '0.5rem',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                aria-label="Changer le thème"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="mobile-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: '0.45rem',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Changer le thème"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.25rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {[
              { label: 'Atouts', id: 'differentiators' },
              { label: 'Projets', id: 'projects' },
              { label: 'Méthode', id: 'process' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem 0',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={scrollToContact}
              className="btn-gold"
              style={{ marginTop: '1rem', justifyContent: 'center' }}
            >
              Me contacter
            </button>
          </div>
        </div>
      )}

      {/* Responsive desktop nav shown via inline style */}
      <style>{`
        @media (min-width: 900px) {
          .md-nav-links { display: block !important; }
          .mobile-controls { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
