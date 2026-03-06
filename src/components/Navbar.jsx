import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = ({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen, scrollToSection, scrollToContact }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = ['differentiators', 'projects', 'process', 'faq'];
    const handleScroll = () => {
      const navHeight = 80;
      const scrollY = window.scrollY;
      let current = '';
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - navHeight - 60) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              {[
                { label: 'Pourquoi moi', id: 'differentiators' },
                { label: 'Résultats', id: 'projects' },
                { label: 'Process', id: 'process' },
                { label: 'FAQ', id: 'faq' },
              ].map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                  className={`nav-link${activeSection === id ? ' nav-link-active' : ''}`}
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToContact(); }}
                className="btn-gold"
                style={{ padding: '0.6rem 1.4rem', textDecoration: 'none' }}
              >
                Démarrer un projet
              </a>

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
          <div className="mobile-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                minWidth: '44px',
                minHeight: '44px',
                padding: '0.6rem',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Changer le thème"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                minWidth: '44px',
                minHeight: '44px',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
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
              { label: 'Pourquoi moi', id: 'differentiators' },
              { label: 'Résultats', id: 'projects' },
              { label: 'Process', id: 'process' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border)',
                  color: activeSection === item.id ? 'var(--gold)' : 'var(--text-muted)',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToContact(); }}
              className="btn-gold"
              style={{ marginTop: '1rem', justifyContent: 'center', textDecoration: 'none' }}
            >
              Démarrer un projet
            </a>
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
