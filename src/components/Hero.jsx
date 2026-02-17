import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = ({ darkMode, scrollToContact, scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <img
              src="/pp.webp"
              alt="Mokhmad — Développeur Web Fullstack"
              className="relative w-40 h-40 rounded-full object-cover border-4 border-black"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Votre site web vous fait <span className="text-red-500">perdre des clients</span> ?
        </h1>
        <p className="text-2xl md:text-3xl mb-4 font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Je transforme les visiteurs en clients payants.
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
          Développeur web spécialisé en solutions qui génèrent des <strong>résultats business</strong>.<br/>
          Pas de jargon. Pas de retards. Juste des sites qui travaillent pour vous 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="px-8 py-5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Discuter de votre projet <ArrowRight />
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`px-8 py-5 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700' : 'bg-white hover:bg-gray-100 border-gray-300'} border-2 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-300`}
          >
            Voir mes réalisations
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span>Livraison en 2-4 semaines</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span>Support inclus 30 jours</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span>Garantie satisfait ou remboursé</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
