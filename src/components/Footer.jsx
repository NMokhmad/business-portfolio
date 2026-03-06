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
              Développeur web fullstack — Je transforme vos idées en solutions qui génèrent des résultats.
            </p>
          </div>

          {/* Nav */}
          <nav>
            <p style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: "'Outfit', sans-serif" }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    className="nav-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToContact(); }}
                  className="nav-link"
                  style={{ color: 'var(--gold)' }}
                >
                  Contact
                </a>
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', justifyContent: 'flex-end' }}>
            {[
              { label: 'Mentions légales', href: '/mentions-legales/' },
              { label: 'Politique de confidentialité', href: '/politique-de-confidentialite/' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
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
