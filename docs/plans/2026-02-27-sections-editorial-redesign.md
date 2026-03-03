# Sections Editorial Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refonte éditoriale complète de 6 sections — supprimer le pattern header identique répété, donner à chaque section un traitement visuel unique cohérent avec le Hero redesigné.

**Architecture:** Modifications de composants uniquement dans `src/components/`. Aucun changement dans `src/data/`, `index.css`, `Navbar.jsx`, `Footer.jsx`, `Contact.jsx`. Design system conservé (tokens CSS, `btn-gold`, `btn-outline`, `animate-fade-up`).

**Tech Stack:** React 19, Lucide React, CSS-in-JS (inline styles + `<style>` tags), Cormorant Garamond + Outfit (déjà chargés)

---

## Règle transversale (appliquée dans chaque tâche)

Supprimer `<span className="section-label">` centré.
Remplacer par :
```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
  <div style={{ width: 36, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
  <span style={{
    fontFamily: "'Outfit', sans-serif",
    fontSize: '0.65rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
  }}>
    LABEL ICI
  </span>
</div>
```
H2 toujours left-aligned (pas de `textAlign: 'center'`).

---

### Task 1 : Differentiators — liste manifeste

**Files:**
- Modify: `src/components/Differentiators.jsx`

**Step 1 : Vérifier le serveur de dev**

Run: `ss -tlnp | grep -E ':5173|:5174'`
Expected: une ligne avec le port actif (5173 ou 5174)
Si rien : `npm run dev -- --port 5173 &` puis attendre 3s.

**Step 2 : Remplacer entièrement `src/components/Differentiators.jsx`**

```jsx
import { ArrowRight } from 'lucide-react';
import { differentiators } from '../data/differentiators';

const Differentiators = ({ scrollToSection }) => {
  return (
    <section id="differentiators" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header — left-aligned */}
        <div className="animate-fade-up d1" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ width: 36, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              Pourquoi moi
            </span>
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, maxWidth: '600px' }}
          >
            Ce qui me différencie
          </h2>
        </div>

        {/* Manifesto list */}
        <div>
          {differentiators.map((diff, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '2.5rem',
                padding: '2.25rem 0',
                borderTop: '1px solid var(--border)',
                cursor: 'default',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = 'var(--gold)';
                e.currentTarget.querySelector('.diff-index').style.color = 'var(--gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = 'var(--border)';
                e.currentTarget.querySelector('.diff-index').style.color = 'var(--text-dim)';
              }}
            >
              <span
                className="diff-index font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: 'var(--text-dim)',
                  flexShrink: 0,
                  width: 'clamp(3rem, 5.5vw, 4.5rem)',
                  transition: 'color 0.25s',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div style={{ flex: 1, paddingTop: '0.35rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.4, color: 'var(--text)' }}>
                  {diff.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '640px' }}>
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        {/* CTA */}
        <div style={{ marginTop: '3rem' }}>
          <button
            onClick={() => scrollToSection('problems')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--gold)',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0',
              borderBottom: '1px solid var(--border-hover)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            Ces promesses vous parlent ? Voyons comment je peux vous aider
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
```

**Step 3 : Vérifier visuellement**

Ouvrir http://localhost:5173 (ou 5174) → section "Pourquoi moi"
Expected :
- Header left-aligned, ligne dorée + eyebrow + H2 grand
- 4 lignes avec grand index Cormorant light à gauche, titre + description à droite
- Séparateurs horizontaux fins entre chaque item
- Au hover : numéro passe en or, ligne du dessus devient dorée
- Plus de cards, plus d'icônes, plus de grid SaaS

**Step 4 : Commit**

```bash
git add src/components/Differentiators.jsx
git commit -m "feat: redesign differentiators as editorial manifesto list"
```

---

### Task 2 : Problems — tension dramatique (2 colonnes)

**Files:**
- Modify: `src/components/Problems.jsx`

**Step 1 : Remplacer entièrement `src/components/Problems.jsx`**

```jsx
import { ArrowRight } from 'lucide-react';
import { problems } from '../data/problems';

const Problems = ({ scrollToContact }) => {
  return (
    <section id="problems" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="animate-fade-up d1" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ width: 36, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              Vos situations
            </span>
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.05 }}
          >
            Vous vous reconnaissez&nbsp;?
          </h2>
        </div>

        {/* 2-column problem/solution rows */}
        <div>
          {problems.map((item, index) => (
            <div
              key={index}
              className="problem-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1px 1fr',
                borderTop: '1px solid var(--border)',
                background: index % 2 === 0 ? 'var(--surface)' : 'var(--surface-2)',
              }}
            >
              {/* Problem — italic serif */}
              <div style={{ padding: '1.75rem 2rem 1.75rem 0' }}>
                <p
                  className="font-display"
                  style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.65 }}
                >
                  &ldquo;{item.problem}&rdquo;
                </p>
              </div>

              {/* Vertical separator */}
              <div style={{ background: 'var(--border)', margin: '1.5rem 0' }} />

              {/* Solution */}
              <div style={{ padding: '1.75rem 0 1.75rem 2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ArrowRight size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
            Si vous vous reconnaissez dans l'un de ces scénarios,{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>parlons-en 15 minutes. Sans engagement.</strong>
          </p>
          <button onClick={scrollToContact} className="btn-gold">
            Réserver un appel découverte gratuit <ArrowRight size={16} />
          </button>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .problem-row {
              grid-template-columns: 1fr !important;
            }
            .problem-row > div:nth-child(2) {
              display: none;
            }
            .problem-row > div:last-child {
              padding: 0 0 1.5rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Problems;
```

**Step 2 : Vérifier visuellement**

Expected :
- Header left-aligned avec H2 en italic Cormorant (sans fontWeight 700)
- Chaque ligne = 2 colonnes : problème en italic à gauche / solution avec flèche dorée à droite
- Fine ligne verticale entre les deux colonnes
- Fond alterné surface/surface-2 par ligne
- Mobile (< 640px) : layout en colonne, séparateur vertical masqué

**Step 3 : Commit**

```bash
git add src/components/Problems.jsx
git commit -m "feat: redesign problems as dramatic 2-column split"
```

---

### Task 3 : Process — étapes horizontales

**Files:**
- Modify: `src/components/Process.jsx`

**Step 1 : Vérifier la structure des données**

Run: `cat src/data/process.js`
Expected: tableau `processSteps` avec champs `step` (number/string), `title` (string), `details` (string[])

**Step 2 : Remplacer entièrement `src/components/Process.jsx`**

```jsx
import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/process';

const Process = ({ scrollToContact }) => {
  return (
    <section id="process" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="animate-fade-up d1" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ width: 36, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              Comment ça marche
            </span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.05 }}>
            Comment on travaille{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>ensemble</span>
          </h2>
        </div>

        {/* Horizontal steps — desktop / vertical — mobile */}
        <div className="process-grid">
          {processSteps.map((item, index) => (
            <div key={index} className="process-step">
              <div
                className="process-number font-display"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: 'var(--gold)',
                  marginBottom: '1.25rem',
                }}
              >
                {String(item.step).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.7rem', lineHeight: 1.4, color: 'var(--text)' }}>
                {item.title}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {item.details.map((detail, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: 'var(--gold)', flexShrink: 0 }}>—</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Pas de mauvaise surprise. Pas de jargon.</strong>{' '}
            Juste un projet qui avance, visiblement.
          </p>
          <button onClick={scrollToContact} className="btn-gold">
            Ce process vous convient ? Démarrons votre projet <ArrowRight size={16} />
          </button>
        </div>

        <style>{`
          .process-grid {
            display: grid;
            grid-template-columns: repeat(${processSteps.length}, 1fr);
            position: relative;
            gap: 0;
          }
          .process-grid::before {
            content: '';
            position: absolute;
            top: 1.4rem;
            left: 0;
            right: 0;
            height: 1px;
            background: var(--border);
            z-index: 0;
          }
          .process-step {
            padding: 0 1.5rem 0 0;
            position: relative;
            z-index: 1;
          }
          .process-step:last-child { padding-right: 0; }
          .process-number {
            position: relative;
          }
          .process-number::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 8px;
            background: var(--bg);
            border: 1px solid var(--gold);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            display: none;
          }
          @media (max-width: 768px) {
            .process-grid {
              grid-template-columns: 1fr;
            }
            .process-grid::before { display: none; }
            .process-step {
              display: grid;
              grid-template-columns: 3rem 1fr;
              grid-template-rows: auto auto;
              gap: 0 1.25rem;
              padding: 0 0 2.5rem;
              border-left: 1px solid var(--border);
              margin-left: 1.5rem;
              padding-left: 1.5rem;
            }
            .process-step:last-child {
              border-left-color: transparent;
              padding-bottom: 0;
            }
            .process-number {
              grid-column: 1;
              grid-row: 1 / 3;
              font-size: 1.5rem !important;
              margin-bottom: 0 !important;
              position: absolute;
              left: -1.85rem;
              top: -0.15rem;
            }
            .process-step h3 {
              grid-column: 2;
              grid-row: 1;
            }
            .process-step ul {
              grid-column: 2;
              grid-row: 2;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Process;
```

**Step 3 : Vérifier visuellement (desktop)**

Expected :
- Header left-aligned, H2 avec "ensemble" en italic light
- 5 colonnes côte à côte, numéros en or en haut de chaque colonne
- Fine ligne horizontale reliant les numéros
- Titre + détails (avec tiret doré) sous chaque numéro
- Plus aucune timeline verticale avec badges

**Step 4 : Vérifier visuellement (mobile — réduire la fenêtre à 400px)**

Expected : stack vertical, numéros Cormorant à gauche, ligne verticale fine reliant les étapes

**Step 5 : Commit**

```bash
git add src/components/Process.jsx
git commit -m "feat: redesign process as horizontal editorial steps"
```

---

### Task 4 : Testimonials — grand format magazine

**Files:**
- Modify: `src/components/Testimonials.jsx`

**Step 1 : Vérifier la structure des données**

Run: `cat src/data/testimonials.js`
Expected: tableau `testimonials` avec `text`, `author`, `role`, `rating` — au moins 3 items

**Step 2 : Remplacer entièrement `src/components/Testimonials.jsx`**

```jsx
import { Linkedin } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [first, ...rest] = testimonials;

  return (
    <section style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="animate-fade-up d1" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ width: 36, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              Témoignages
            </span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.05 }}>
            Ce que mes clients disent
          </h2>
        </div>

        {/* First testimonial — large format */}
        <div style={{ paddingBottom: '3rem', marginBottom: '3rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative large quote mark */}
          <span
            aria-hidden="true"
            className="font-display"
            style={{
              position: 'absolute',
              top: '-1rem',
              left: '-0.5rem',
              fontSize: 'clamp(8rem, 15vw, 14rem)',
              fontWeight: 700,
              lineHeight: 1,
              color: 'var(--gold)',
              opacity: 0.06,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            &ldquo;
          </span>

          <blockquote style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.55,
                marginBottom: '1.75rem',
              }}
            >
              {first.text}
            </p>
            <cite style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontStyle: 'normal' }}>
              <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text)' }}>{first.author}</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--gold)', letterSpacing: '0.05em' }}>{first.role}</span>
            </cite>
          </blockquote>
        </div>

        {/* Remaining testimonials — compact side by side */}
        {rest.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '2px',
            background: 'var(--border)',
          }}>
            {rest.map((t, index) => (
              <div key={index} style={{ background: 'var(--surface)', padding: '2rem 2.5rem' }}>
                <blockquote>
                  <span
                    aria-hidden="true"
                    className="font-display"
                    style={{ fontSize: '3rem', color: 'var(--gold)', opacity: 0.18, lineHeight: 0.8, display: 'block', marginBottom: '1rem' }}
                  >
                    &ldquo;
                  </span>
                  <p style={{
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.75,
                    marginBottom: '1.5rem',
                  }}>
                    {t.text}
                  </p>
                  <cite style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.15rem',
                    fontStyle: 'normal',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)',
                  }}>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text)' }}>{t.author}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>{t.role}</span>
                  </cite>
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* LinkedIn */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              padding: '0.5rem 0',
              borderBottom: '1px solid var(--border)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--gold)';
              e.currentTarget.style.borderBottomColor = 'var(--border-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderBottomColor = 'var(--border)';
            }}
          >
            <Linkedin size={15} />
            Voir tous les témoignages sur LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
```

**Step 3 : Vérifier visuellement**

Expected :
- Premier témoignage en pleine largeur, Cormorant italic grand format, grand guillemet fantôme en arrière-plan
- 2 témoignages suivants côte à côte, plus compacts, guillemet décoratif petit
- Plus d'étoiles
- Lien LinkedIn conservé

**Step 4 : Commit**

```bash
git add src/components/Testimonials.jsx
git commit -m "feat: redesign testimonials as magazine large-format layout"
```

---

### Task 5 : Projects — ajustement header

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1 : Localiser le bloc header dans Projects.jsx**

Le bloc à remplacer (lignes ~180–191) :
```jsx
<div style={{ textAlign: 'center', marginBottom: '4rem' }}>
  <span className="section-label">Réalisations</span>
  <h2
    className="font-display"
    style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '1rem' }}
  >
    Projets &amp; résultats concrets
  </h2>
  <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
    Pas de bla-bla. Juste des chiffres.
  </p>
</div>
```

**Step 2 : Remplacer par le header left-aligned**

```jsx
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
```

**Step 3 : Vérifier**

Expected : header left-aligned, plus de pill centrée. Le reste de la section (cards alternées, PSR, tech decisions) inchangé.

**Step 4 : Commit**

```bash
git add src/components/Projects.jsx
git commit -m "feat: align projects section header left, remove centered pill"
```

---

### Task 6 : FAQ — épuration avec index

**Files:**
- Modify: `src/components/FAQ.jsx`

**Step 1 : Remplacer entièrement `src/components/FAQ.jsx`**

```jsx
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { faqItems } from '../data/faq';

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid var(--border)',
        borderLeft: `2px solid ${open ? 'var(--gold)' : 'transparent'}`,
        transition: 'border-left-color 0.3s ease',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '1.5rem 1.5rem 1.5rem 0',
          background: 'none',
          border: 'none',
          color: 'var(--text)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          fontFamily: "'Outfit', sans-serif",
        }}
        aria-expanded={open}
      >
        {/* Index number */}
        <span
          className="font-display"
          style={{
            fontSize: '1.4rem',
            fontWeight: 300,
            lineHeight: 1,
            color: open ? 'var(--gold)' : 'var(--text-dim)',
            flexShrink: 0,
            width: '2.5rem',
            transition: 'color 0.25s',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <span style={{ fontWeight: 600, fontSize: '1rem', lineHeight: 1.4, flex: 1 }}>
          {item.question}
        </span>

        <div
          style={{
            flexShrink: 0,
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border)',
            background: open ? 'var(--gold-glow)' : 'transparent',
            color: open ? 'var(--gold)' : 'var(--text-muted)',
            transition: 'all 0.25s ease',
          }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '800px' : '0',
          transition: 'max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div
          style={{
            padding: '0 1.5rem 1.5rem calc(2.5rem + 1.25rem)',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            whiteSpace: 'pre-line',
          }}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ scrollToContact }) => {
  return (
    <section id="faq" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" />

      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Header */}
        <div className="animate-fade-up d1" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ width: 36, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              FAQ
            </span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.05 }}>
            Questions fréquentes
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
            Et réponses honnêtes.
          </p>
        </div>

        {/* Accordion — no outer border */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
            Une autre question ?
          </p>
          <button onClick={scrollToContact} className="btn-gold">
            Posez-la moi directement <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
```

**Step 2 : Vérifier**

Expected :
- Header left-aligned, plus de pill centrée
- Chaque question précédée d'un index Cormorant light (01, 02…) qui passe en or à l'ouverture
- Plus de border box globale autour de l'accordion
- La réponse est indentée pour s'aligner avec le texte de la question (après le numéro)

**Step 3 : Commit**

```bash
git add src/components/FAQ.jsx
git commit -m "feat: refine FAQ with index numbers, remove outer border"
```

---

### Task 7 : Vérification finale

**Step 1 : Build de production**

Run: `npm run build`
Expected: `✓ built in X.XXs` sans erreur ni warning bloquant

**Step 2 : Preview**

Run: `npm run preview -- --port 4173 &`
Ouvrir http://localhost:4173
Vérifier chaque section dans l'ordre :
- [ ] Hero : inchangé
- [ ] Differentiators : liste manifeste, pas de cards
- [ ] Problems : 2 colonnes, séparateur vertical
- [ ] Projects : header left-aligned, layout conservé
- [ ] Process : 5 colonnes horizontales sur desktop
- [ ] Testimonials : 1er témoignage grand format, 2 suivants compacts
- [ ] FAQ : index numériques, pas de border box
- [ ] Contact : inchangé

**Step 3 : Vérifier le mode clair (light mode)**

Cliquer sur le bouton de thème dans la navbar.
Expected : tous les ajustements lisibles en thème clair (les `var(--border)`, `var(--gold)`, `var(--text-muted)` s'adaptent automatiquement)

**Step 4 : Vérifier le responsive (mobile 375px)**

Dans les DevTools, passer en 375px de large.
Expected :
- Problems : 1 colonne (séparateur masqué)
- Process : stack vertical avec numéros à gauche
- Testimonials : les 2 petits témoignages stackés

**Step 5 : Commit final**

```bash
git add -A
git commit -m "feat: complete editorial redesign of all portfolio sections"
```
