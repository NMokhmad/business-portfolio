import { Github, Linkedin } from 'lucide-react';

const Footer = ({ scrollToSection, scrollToContact }) => {
  const navItems = [
    { label: 'Pourquoi moi', id: 'differentiators' },
    { label: 'Résultats', id: 'projects' },
    { label: 'Process', id: 'process' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '3.5rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <div
              className="font-display"
              style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.5rem' }}
            >
              Mokhmad
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '280px', lineHeight: 1.65 }}>
              Développeur Fullstack — React · Node.js · PostgreSQL · Disponible pour un CDI.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              {[
                { href: 'https://github.com/NMokhmad', icon: <Github size={16} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/', icon: <Linkedin size={16} />, label: 'LinkedIn' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '36px', height: '36px',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav>
            <p style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: "'Outfit', sans-serif" }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="nav-link">
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={scrollToContact} className="nav-link" style={{ color: 'var(--gold)' }}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '0.75rem', alignItems: 'center',
        }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: "'Outfit', sans-serif" }}>
            © 2026 Mokhmad. Tous droits réservés.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Mentions légales', 'Politique de confidentialité'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-dim)',
                  textDecoration: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
