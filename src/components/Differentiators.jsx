import { ArrowRight, Clock, DollarSign, MessageSquare, TrendingUp } from 'lucide-react';
import { differentiators } from '../data/differentiators';

const iconMap = { Clock, DollarSign, MessageSquare, TrendingUp };

const Differentiators = ({ darkMode, scrollToSection }) => {
  return (
    <section id="differentiators" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-500/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Ce qui me différencie des autres développeurs
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Vous n'avez pas besoin d'un CV. Vous avez besoin de résultats.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => {
            const Icon = iconMap[diff.iconName];
            return (
              <div
                key={index}
                className={`${darkMode ? 'bg-gray-900/70 border-gray-800 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-500'} p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-1`}
              >
                <div className="text-blue-400 mb-4"><Icon className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                <p className="text-gray-400 leading-relaxed">{diff.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => scrollToSection('problems')}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors"
          >
            Ces promesses vous parlent ? Voyons comment je peux vous aider <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
