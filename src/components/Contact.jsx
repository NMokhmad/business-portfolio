import { useRef, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

/* ── Wooden sign header ─────────────────────────────────────────── */
function WoodenSign({ text }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: '48px' }}>
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

/* ── MC Input ─────────────────────────────────────────────────── */
function McField({ label, children }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label className="pixel-text" style={{ display: 'block', fontSize: '7px', color: 'var(--mc-text-gray)', marginBottom: '8px' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', project: '', budget: '', source: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (field) => (e) => setFormData((d) => ({ ...d, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('sent');
        setFormData({ name: '', email: '', project: '', budget: '', source: '' });
      })
      .catch(() => setStatus('error'));
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '12px',
    background: '#0A0A0A',
    color: 'white',
    fontFamily: "'Press Start 2P', monospace",
    fontSize: '8px',
    border: 'none',
    outline: 'none',
    boxShadow: 'inset -2px -2px 0 #1B1B1B, inset 2px 2px 0 #444',
    lineHeight: 1.8,
  };

  const SOCIAL_LINKS = [
    { href: 'https://github.com/NMokhmad',     icon: Github,   label: 'GitHub',    color: '#fff' },
    { href: 'https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/', icon: Linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { href: 'mailto:n.mokhmad@gmail.com',       icon: Mail,     label: 'Email',     color: 'var(--mc-emerald)' },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '80px 20px',
        background: `repeating-linear-gradient(
          0deg,
          rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px,
          transparent 2px, transparent 32px
        ), var(--mc-inventory-dark)`,
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
        <WoodenSign text="✉ ME CONTACTER" />

        {/* Book & quill frame */}
        <div
          className="pixel-border-inventory"
          style={{
            background: 'var(--mc-inventory)',
            padding: 'clamp(20px, 4vw, 40px)',
            textAlign: 'left',
          }}
        >
          {/* Steps strip */}
          <div
            className="pixel-border-slot"
            style={{ background: '#0D1A0D', padding: '14px', marginBottom: '28px' }}
          >
            <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-emerald)', marginBottom: '10px' }}>
              📋 COMMENT ÇA MARCHE :
            </p>
            {[
              '1. Remplissez le formulaire (30 secondes)',
              '2. Je vous réponds sous 24h',
              '3. Appel découverte 15-30 min gratuit',
              '4. Devis clair. Zéro pression.',
            ].map((step) => (
              <p key={step} className="pixel-text" style={{ fontSize: '6px', color: 'var(--mc-text-gray)', marginBottom: '6px', lineHeight: 2 }}>
                ▶ {step}
              </p>
            ))}
          </div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <McField label="Votre prénom *">
              <input
                type="text"
                name="user_name"
                required
                value={formData.name}
                onChange={update('name')}
                placeholder="Steve"
                className="mc-input"
                style={inputStyle}
              />
            </McField>

            <McField label="Votre email *">
              <input
                type="email"
                name="user_email"
                required
                value={formData.email}
                onChange={update('email')}
                placeholder="steve@minecraft.net"
                className="mc-input"
                style={inputStyle}
              />
            </McField>

            <McField label="Votre projet en 2-3 lignes *">
              <textarea
                name="message"
                required
                value={formData.project}
                onChange={update('project')}
                rows={5}
                placeholder="Ex : J'ai besoin d'un site vitrine pour mon activité..."
                className="mc-input"
                style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
              />
            </McField>

            <McField label="Budget estimé (optionnel)">
              <select
                name="budget"
                value={formData.budget}
                onChange={update('budget')}
                className="mc-input"
                style={inputStyle}
              >
                <option value="">Sélectionnez une fourchette</option>
                <option value="moins 2000€">Moins de 2 000€</option>
                <option value="2000-5000€">2 000 – 5 000€</option>
                <option value="5000-10000€">5 000 – 10 000€</option>
                <option value="plus 10000€">Plus de 10 000€</option>
                <option value="Je ne sais pas">Je ne sais pas encore</option>
              </select>
            </McField>

            <McField label="Comment m'avez-vous trouvé ? (optionnel)">
              <input
                type="text"
                name="source"
                value={formData.source}
                onChange={update('source')}
                placeholder="LinkedIn, Google, Bouche-à-oreille..."
                className="mc-input"
                style={inputStyle}
              />
            </McField>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="pixel-text pixel-border-btn"
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '10px',
                border: 'none',
                letterSpacing: '1px',
                background:
                  status === 'sent'    ? 'var(--mc-emerald-dark)' :
                  status === 'error'   ? 'var(--mc-redstone)' :
                  status === 'sending' ? 'var(--mc-stone-dark)' :
                                         'var(--mc-emerald)',
                color: 'white',
                marginBottom: '20px',
              }}
            >
              {status === 'idle'    && '✉ ENVOYER LE MESSAGE'}
              {status === 'sending' && '⏳ ENVOI EN COURS...'}
              {status === 'sent'    && '✅ MESSAGE ENVOYÉ !'}
              {status === 'error'   && '❌ ERREUR — RÉESSAYEZ'}
            </button>

            {status === 'error' && (
              <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-text-gray)', textAlign: 'center', marginBottom: '16px' }}>
                Ou contactez-moi directement : n.mokhmad@gmail.com
              </p>
            )}

            {status === 'sent' && (
              <div
                className="pixel-border-slot"
                style={{ background: '#0D1A0D', padding: '12px', marginBottom: '16px', textAlign: 'center' }}
              >
                <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-emerald)' }}>
                  Votre message a été envoyé ! Je vous répondrai sous 24h. ⛏
                </p>
              </div>
            )}
          </form>

          {/* Social links */}
          <div style={{ borderTop: '2px solid #333', paddingTop: '20px', marginTop: '8px' }}>
            <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-text-gray)', marginBottom: '16px', textAlign: 'center' }}>
              OU CONTACTEZ-MOI DIRECTEMENT :
            </p>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {SOCIAL_LINKS.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="pixel-border-slot"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 16px',
                    background: 'var(--mc-slot)',
                    textDecoration: 'none',
                    transition: 'box-shadow 0.1s',
                  }}
                >
                  <Icon size={22} color={color} />
                  <span className="pixel-text" style={{ fontSize: '6px', color: 'var(--mc-text-gray)' }}>
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Urgency note */}
        <div
          className="pixel-border-slot"
          style={{
            background: 'rgba(255, 215, 0, 0.05)',
            borderLeft: '4px solid var(--mc-gold)',
            padding: '14px 18px',
            marginTop: '20px',
            textAlign: 'left',
          }}
        >
          <p className="pixel-text" style={{ fontSize: '7px', color: 'var(--mc-gold)', lineHeight: 2 }}>
            ⚠ Mon agenda se remplit vite. Si vous reportez à "plus tard",
            je risque de ne plus avoir de créneaux ce mois-ci.{' '}
            <span style={{ color: 'white' }}>Réservez votre slot maintenant.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
