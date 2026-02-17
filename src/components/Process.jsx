import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/process';

const Process = ({ darkMode, scrollToContact }) => {
  return (
    <section id="process" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Comment on travaille ensemble
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          (Simple et efficace)
        </p>

        <div className="space-y-8">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} p-6 md:p-8 rounded-2xl border backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <ArrowRight className="flex-shrink-0 mt-1 text-blue-400" size={18} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <strong>Pas de mauvaise surprise. Pas de jargon.</strong><br/>
            Juste un projet qui avance, visiblement.
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2"
          >
            Ce process vous convient ? Démarrons votre projet <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
