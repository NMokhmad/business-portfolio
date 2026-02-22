import { skillGroups } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" style={{ marginBottom: '6rem' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Compétences</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem' }}
          >
            Stack & outils
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Les technologies que j'utilise au quotidien, du prototypage à la mise en production.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '1.75rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: '1.25rem',
                }}
              >
                {group.category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.35rem 0.75rem',
                      border: '1px solid var(--border)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      background: 'var(--surface-2)',
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
