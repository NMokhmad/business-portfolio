import { ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-500/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Projets qui ont généré des résultats concrets
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          Pas de bla-bla. Juste des chiffres.
        </p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-900/70 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl overflow-hidden border backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300`}
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-64 md:h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-red-400 font-semibold">→ Problème : </span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{project.problem}</span>
                    </div>
                    <div>
                      <span className="text-yellow-400 font-semibold">→ Solution : </span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{project.solution}</span>
                    </div>
                    <div>
                      <span className="text-green-400 font-semibold">→ Résultat : </span>
                      <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.result}</span>
                    </div>
                  </div>

                  <div className={`${darkMode ? 'bg-blue-500/10 border-blue-500/30' : 'bg-blue-50 border-blue-200'} border-l-4 p-4 mb-6 italic`}>
                    <p className="mb-2">"{project.testimonial}"</p>
                    <p className="text-sm text-gray-400">— {project.author}</p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Voir le site
                    </a>
                    <span
                      title="Bientôt disponible"
                      className={`px-6 py-3 ${darkMode ? 'bg-gray-800/50 text-gray-500' : 'bg-gray-200/50 text-gray-400'} rounded-lg font-semibold inline-flex items-center gap-2 cursor-not-allowed`}
                    >
                      <Code size={18} />
                      Étude de cas (bientôt)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
