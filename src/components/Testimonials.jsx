import { Star, Linkedin } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = ({ darkMode }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-500/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Ce que mes clients disent (vraiment)
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          Pas de faux témoignages. De vraies personnes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-900/70 border-gray-800' : 'bg-white border-gray-200'} p-8 rounded-2xl border backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                ))}
              </div>
              <p className={`mb-6 leading-relaxed italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.text}"
              </p>
              <div className={`border-t pt-4 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors"
          >
            <Linkedin size={24} />
            Voir tous les témoignages sur LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
