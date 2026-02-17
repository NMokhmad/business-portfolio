import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen, scrollToSection, scrollToContact }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-black/50 border-gray-800' : 'bg-white/50 border-gray-200'} border-b transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Mokhmad
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('differentiators')} className="hover:text-blue-400 transition-colors">Pourquoi moi</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Résultats</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-blue-400 transition-colors">Process</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-blue-400 transition-colors">FAQ</button>
            <button
              onClick={scrollToContact}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Discuter
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="px-4 py-3 space-y-3">
            <button onClick={() => scrollToSection('differentiators')} className="block w-full text-left py-2 hover:text-blue-400">Pourquoi moi</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-blue-400">Résultats</button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left py-2 hover:text-blue-400">Process</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 hover:text-blue-400">FAQ</button>
            <button onClick={scrollToContact} className="block w-full text-left py-2 text-blue-400 font-semibold">Discuter</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
