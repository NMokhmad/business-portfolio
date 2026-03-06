import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const steps = [
  'Vous remplissez le formulaire (30 secondes)',
  'Je vous réponds sous 24h',
  'Appel découverte gratuit 15–30 min',
  'Devis clair sous 24h si ça matche',
  'Vous décidez. Zéro pression.',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', project: '', budget: '', source: ''
  });
  const [formStatus, setFormStatus] = useState('idle');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setFormStatus('sent');
        setFormData({ name: '', email: '', project: '', budget: '', source: '' });
      })
      .catch(() => {
        setFormStatus('error');
      });
  };

  return (
    <section id="contact" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" style={{ marginBottom: '6rem' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Contact</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '1rem' }}
          >
            Prêt à transformer votre idée ?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            Voici ce qui se passe ensuite :
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* Left: steps + trust + social */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{
                      width: '32px', height: '32px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid var(--border-hover)',
                      background: 'var(--gold-glow)',
                      color: 'var(--gold)',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1rem', fontWeight: 600, flexShrink: 0,
                    }}>
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ width: '1px', height: '36px', background: 'var(--border)', marginTop: '2px', marginBottom: '2px' }} />
                    )}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, paddingTop: '0.35rem' }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Réponse sous 24h garantie', 'Appel découverte 100% gratuit', 'Aucune obligation'].map((badge) => (
                <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <CheckCircle size={14} style={{ color: 'var(--green)', flexShrink: 0 }} />
                  {badge}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: "'Outfit', sans-serif" }}>
                Ou contactez-moi directement
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { href: 'https://github.com/NMokhmad', icon: <Github size={17} />, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/', icon: <Linkedin size={17} />, label: 'LinkedIn' },
                  { href: 'mailto:n.mokhmad@gmail.com', icon: <Mail size={17} />, label: 'Email' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '40px', height: '40px',
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
          </div>

          {/* Right: Form */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '2.5rem' }}>
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: "'Outfit', sans-serif" }}>
                  Votre prénom *
                </label>
                <input
                  type="text" name="user_name" required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input" placeholder="Mokhmad"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: "'Outfit', sans-serif" }}>
                  Votre email *
                </label>
                <input
                  type="email" name="user_email" required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input" placeholder="vous@email.com"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: "'Outfit', sans-serif" }}>
                  Votre projet *
                </label>
                <textarea
                  name="message" required
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  rows={4} className="form-input" style={{ resize: 'none' }}
                  placeholder="Décrivez votre projet en 2–3 lignes…"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: "'Outfit', sans-serif" }}>
                  Budget estimé
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="form-input" style={{ cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none' }}
                >
                  <option value="">Sélectionnez une fourchette</option>
                  <option value="< 2000€">Moins de 2 000€</option>
                  <option value="2000-5000€">2 000 – 5 000€</option>
                  <option value="5000-10000€">5 000 – 10 000€</option>
                  <option value="> 10000€">Plus de 10 000€</option>
                  <option value="Je ne sais pas">Je ne sais pas encore</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: "'Outfit', sans-serif" }}>
                  Comment m'avez-vous trouvé ?
                </label>
                <input
                  type="text" name="source"
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="form-input" placeholder="LinkedIn, Google, Bouche-à-oreille…"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="btn-gold"
                style={{
                  width: '100%', justifyContent: 'center', marginTop: '0.5rem',
                  background: formStatus === 'sent' ? '#3a8a58' : formStatus === 'error' ? '#c04040' : undefined,
                }}
              >
                {formStatus === 'idle' && (<>Démarrer mon projet <ArrowRight size={16} /></>)}
                {formStatus === 'sending' && 'Envoi en cours…'}
                {formStatus === 'sent' && (<><CheckCircle size={16} /> Message envoyé ! Je réponds sous 24h.</>)}
                {formStatus === 'error' && 'Erreur — réessayez ou contactez-moi par email.'}
              </button>
            </form>
          </div>
        </div>

        {/* Urgency */}
        <div style={{
          marginTop: '3rem', padding: '1.25rem 2rem',
          border: '1px solid var(--border-hover)',
          background: 'var(--gold-glow)',
          textAlign: 'center',
          fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7,
        }}>
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>P.S. :</strong>{' '}
          Mon agenda se remplit vite. Si vous reportez à "plus tard", je risque de ne plus avoir de créneaux ce mois-ci.{' '}
          <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>Réservez votre appel maintenant.</strong>
        </div>
      </div>
    </section>
  );
};

export default Contact;
