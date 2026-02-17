const Footer = ({ darkMode, scrollToSection, scrollToContact }) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t py-12`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            Mokhmad
          </div>
          <p className="text-gray-400">
            Développeur web fullstack | Je transforme vos idées en solutions qui génèrent des résultats
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <button onClick={() => scrollToSection('differentiators')} className="hover:text-blue-400 transition-colors">Pourquoi moi</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Résultats</button>
          <button onClick={() => scrollToSection('process')} className="hover:text-blue-400 transition-colors">Process</button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-blue-400 transition-colors">FAQ</button>
          <button onClick={scrollToContact} className="hover:text-blue-400 transition-colors">Contact</button>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© 2026 Mokhmad. Tous droits réservés.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a>
            {" · "}
            <a href="#" className="hover:text-blue-400 transition-colors">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
