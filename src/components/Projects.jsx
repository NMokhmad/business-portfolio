import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const tagStyle = (color) => ({
  display: 'inline-block',
  padding: '0.2rem 0.6rem',
  fontSize: '0.62rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  fontFamily: "'Outfit', sans-serif",
  color,
  border: `1px solid ${color}44`,
  background: `${color}14`,
  borderRadius: '2px',
});

const ProjectCard = ({ project, index }) => (
    <div className={`card pc-inner ${index % 2 === 0 ? 'pc-inner-even' : 'pc-inner-odd'}`} style={{ background: 'var(--surface)' }}>
      {/* Image panel */}
      <div style={{
        flex: '0 0 42%',
        overflow: 'hidden',
        background: 'var(--surface-2)',
        position: 'relative',
        minHeight: '220px',
      }}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width="800"
          height="500"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            transition: 'transform 0.6s ease',
            display: 'block',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <span
          className="font-display"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1.25rem',
            fontSize: '4.5rem',
            fontWeight: 300,
            color: 'var(--gold)',
            opacity: 0.12,
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Content panel */}
      <div style={{ flex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.75rem', lineHeight: 1.35 }}>
          {project.title}
        </h3>

        {/* PSR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', flex: 1 }}>
          {[
            { label: 'Problème', color: 'var(--red)', text: project.problem, bold: false },
            { label: 'Solution', color: 'var(--gold)', text: project.solution, bold: false },
            { label: 'Résultat', color: 'var(--green)', text: project.result, bold: true },
          ].map(({ label, color, text, bold }) => (
            <div key={label} style={{ paddingLeft: '0.9rem', borderLeft: `2px solid ${color}` }}>
              <span style={tagStyle(color)}>{label}</span>
              <p style={{
                fontSize: '0.87rem',
                color: bold ? 'var(--text)' : 'var(--text-muted)',
                fontWeight: bold ? 600 : 400,
                lineHeight: 1.65,
                marginTop: '0.3rem',
              }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Tech decisions */}
        {project.techDecisions && project.techDecisions.length > 0 && (
          <div style={{
            marginBottom: '1.75rem',
            padding: '1rem 1.25rem',
            background: 'var(--surface-2)',
            borderLeft: '2px solid var(--border-hover)',
          }}>
            <p style={{
              fontSize: '0.68rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              marginBottom: '0.6rem',
            }}>
              Décisions techniques
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {project.techDecisions.map(({ label, reason }) => (
                <div key={label} style={{ fontSize: '0.82rem', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{label}</strong>
                  <span style={{ color: 'var(--text-muted)' }}> — {reason}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial */}
        <blockquote style={{
          background: 'var(--surface-2)',
          borderLeft: '2px solid var(--border-hover)',
          padding: '1rem 1.25rem',
          marginBottom: '1.75rem',
        }}>
          <p style={{ fontStyle: 'italic', fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '0.4rem' }}>
            "{project.testimonial}"
          </p>
          <cite style={{ fontSize: '0.75rem', color: 'var(--gold)', fontStyle: 'normal', fontWeight: 600 }}>
            — {project.author}
          </cite>
        </blockquote>

        {/* Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ textDecoration: 'none', fontSize: '0.75rem' }}
          >
            <ExternalLink size={14} />
            Voir le site
          </a>
        </div>
      </div>
    </div>
);

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ width: 36, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              Réalisations
            </span>
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.05 }}
          >
            Projets &amp; résultats concrets
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
            Pas de bla-bla. Juste des chiffres.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--border)' }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
