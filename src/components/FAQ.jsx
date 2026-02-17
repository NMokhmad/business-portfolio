import { ArrowRight } from 'lucide-react';
import { faqItems } from '../data/faq';

const FAQ = ({ darkMode, scrollToContact }) => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Questions fréquentes
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          (et réponses honnêtes)
        </p>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className={`${darkMode ? 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-500'} p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 group`}
            >
              <summary className="font-bold text-lg cursor-pointer flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <span className="text-blue-400">❓</span>
                  {item.question}
                </span>
                <ArrowRight className="transform group-open:rotate-90 transition-transform text-blue-400" />
              </summary>
              <div className="mt-4 pl-9 text-gray-400 leading-relaxed whitespace-pre-line">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Une autre question ?
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2"
          >
            Posez-la moi directement <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
