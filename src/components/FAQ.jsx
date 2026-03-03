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
