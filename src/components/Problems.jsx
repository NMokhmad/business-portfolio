import { ArrowRight } from 'lucide-react';
import { problems } from '../data/problems';

const Problems = ({ darkMode, scrollToContact }) => {
  return (
    <section id="problems" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Vous êtes peut-être dans l'une de ces situations :
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          Spoiler : je peux vous aider
        </p>

        <div className="space-y-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} p-6 md:p-8 rounded-2xl border backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <p className={`text-lg md:text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    "{item.problem}"
                  </p>
                  <p className="text-blue-400 flex items-start gap-2">
                    <ArrowRight className="flex-shrink-0 mt-1" size={20} />
                    <span>{item.solution}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Si vous vous reconnaissez dans l'un de ces scénarios,<br/>
            <strong>parlons-en 15 minutes. Sans engagement.</strong>
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2"
          >
            Réserver un appel découverte gratuit <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problems;
