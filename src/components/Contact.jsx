import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
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
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-500/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Prêt à transformer votre idée en réalité ?
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          Voici ce qui se passe ensuite :
        </p>

        <div className={`${darkMode ? 'bg-blue-500/10 border-blue-500/30' : 'bg-blue-50 border-blue-200'} border-l-4 p-6 mb-12 space-y-2`}>
          <p className="flex items-start gap-2">
            <span className="font-bold text-blue-400">1️⃣</span>
            <span>Vous remplissez le formulaire ci-dessous (30 secondes)</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-bold text-blue-400">2️⃣</span>
            <span>Je vous réponds sous 24h (souvent plus rapide)</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-bold text-blue-400">3️⃣</span>
            <span>On fixe un appel découverte de 15-30min (gratuit, sans engagement)</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-bold text-blue-400">4️⃣</span>
            <span>Si ça match, je vous envoie un devis clair sous 24h</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-bold text-blue-400">5️⃣</span>
            <span>Vous décidez. Zéro pression.</span>
          </p>
        </div>

        <div className={`${darkMode ? 'bg-gray-900/70 border-gray-800' : 'bg-white border-gray-200'} p-8 md:p-12 rounded-2xl border backdrop-blur-sm shadow-2xl`}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-lg">Votre prénom *</label>
              <input
                type="text"
                name="user_name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-4 py-4 rounded-lg text-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} border-2 focus:outline-none focus:border-blue-500 transition-colors`}
                placeholder="Mokhmad"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-lg">Votre email *</label>
              <input
                type="email"
                name="user_email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-4 rounded-lg text-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} border-2 focus:outline-none focus:border-blue-500 transition-colors`}
                placeholder="Mokhmad@email.com"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-lg">Votre projet en 2-3 lignes *</label>
              <textarea
                name="message"
                required
                value={formData.project}
                onChange={(e) => setFormData({...formData, project: e.target.value})}
                rows={4}
                className={`w-full px-4 py-4 rounded-lg text-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} border-2 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                placeholder="Ex: J'ai besoin d'un site vitrine pour mon activité de coach. Mon site actuel est obsolète et ne génère aucun contact..."
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-lg">Budget estimé (optionnel)</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className={`w-full px-4 py-4 rounded-lg text-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} border-2 focus:outline-none focus:border-blue-500 transition-colors`}
              >
                <option value="">Sélectionnez une fourchette</option>
                <option value="< 2000€">Moins de 2 000€</option>
                <option value="2000-5000€">2 000 - 5 000€</option>
                <option value="5000-10000€">5 000 - 10 000€</option>
                <option value="> 10000€">Plus de 10 000€</option>
                <option value="Je ne sais pas">Je ne sais pas encore</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-lg">Comment m'avez-vous trouvé ? (optionnel)</label>
              <input
                type="text"
                name="source"
                value={formData.source}
                onChange={(e) => setFormData({...formData, source: e.target.value})}
                className={`w-full px-4 py-4 rounded-lg text-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} border-2 focus:outline-none focus:border-blue-500 transition-colors`}
                placeholder="LinkedIn, Google, Bouche-à-oreille..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className={`w-full px-8 py-5 rounded-lg font-bold text-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                formStatus === 'sending'
                  ? 'bg-gray-500 cursor-wait'
                  : formStatus === 'sent'
                    ? 'bg-green-500'
                    : formStatus === 'error'
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105'
              }`}
            >
              {formStatus === 'sending' && 'Envoi en cours...'}
              {formStatus === 'sent' && <><CheckCircle size={24} /> Message envoyé ! Je vous réponds sous 24h.</>}
              {formStatus === 'error' && 'Erreur. Réessayez ou contactez-moi par email.'}
              {formStatus === 'idle' && <>Démarrer mon projet <ArrowRight size={24} /></>}
            </button>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Réponse sous 24h garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Appel découverte 100% gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={18} />
                <span>Aucune obligation</span>
              </div>
            </div>
          </form>

          <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <p className="text-center text-gray-400 mb-6">Ou contactez-moi directement :</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/NMokhmad"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg transition-colors hover:scale-110 transform duration-200 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg transition-colors hover:scale-110 transform duration-200 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:n.mokhmad@gmail.com"
                className={`p-4 rounded-lg transition-colors hover:scale-110 transform duration-200 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-yellow-500/10 border-yellow-500/30' : 'bg-yellow-50 border-yellow-200'} border-l-4 p-6 mt-8 text-center`}>
          <p className="text-lg">
            <strong>P.S. :</strong> Mon agenda se remplit vite. Si vous reportez à "plus tard",
            je risque de ne plus avoir de créneaux ce mois-ci. <strong>Réservez votre appel maintenant.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
