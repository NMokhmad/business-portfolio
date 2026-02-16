import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Code, Menu, X, CheckCircle, ArrowRight, Clock, DollarSign, MessageSquare, TrendingUp, Star } from 'lucide-react';
import './App.css';

const PortfolioConversion = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    project: '',
    budget: '',
    source: ''
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Site vitrine pour coach business",
      problem: "Site WordPress obsolète, 0 demande de contact/mois",
      solution: "Refonte complète, SEO optimisé, formulaire intelligent",
      result: "+127% de trafic en 3 mois, 8-12 demandes qualifiées/mois",
      testimonial: "Mokhmad a doublé mes leads en moins de 2 mois. ROI immédiat.",
      author: "Sophie L., Coach business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      liveUrl: "#",
      caseStudyUrl: "#"
    },
    {
      title: "Application de gestion pour restaurant",
      problem: "Gestion manuelle des commandes, erreurs fréquentes",
      solution: "App web de prise de commande + tableau de bord temps réel",
      result: "-40% d'erreurs de commande, 2h/jour économisées",
      testimonial: "On a récupéré 10h par semaine. L'investissement rentabilisé en 2 mois.",
      author: "Marc D., Restaurateur",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      liveUrl: "#",
      caseStudyUrl: "#"
    },
    {
      title: "Plateforme e-learning",
      problem: "Vendre des formations en ligne sans expertise technique",
      solution: "Plateforme clé en main avec paiement, espace membre, vidéos",
      result: "47 000€ de CA en 6 mois, 230 utilisateurs actifs",
      testimonial: "J'ai lancé ma première formation en 3 semaines. Tout fonctionne parfaitement.",
      author: "Julie M., Formatrice",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      liveUrl: "#",
      caseStudyUrl: "#"
    }
  ];

  const differentiators = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Livraison rapide, sans compromis qualité",
      description: "Vos concurrents ne vous attendront pas. Je livre en 2-4 semaines, pas en 3 mois."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Transparent sur les prix, pas de devis fleuve",
      description: "Vous savez exactement ce que vous payez. Pas de frais cachés découverts à la fin."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Je parle \"business\", pas \"code\"",
      description: "Vous n'avez pas besoin de comprendre React. Vous avez besoin que ça marche et que ça vende."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Résultats mesurables",
      description: "Chaque projet inclut un suivi de performance : visiteurs, conversions, vitesse. Vous voyez l'impact."
    }
  ];

  const problems = [
    {
      emoji: "😤",
      problem: "Mon site actuel est lent, moche, et ne me ramène aucun client",
      solution: "Je refonds votre site pour qu'il charge en <2 secondes et convertisse les visiteurs."
    },
    {
      emoji: "😤",
      problem: "J'ai une super idée d'app, mais je ne sais pas par où commencer",
      solution: "Je transforme votre concept en MVP fonctionnel et testable auprès de vrais utilisateurs."
    },
    {
      emoji: "😤",
      problem: "Mon développeur précédent m'a lâché en plein projet",
      solution: "Je reprends le code existant, je le nettoie, et je termine le boulot. Rapidement."
    },
    {
      emoji: "😤",
      problem: "J'ai besoin d'automatiser mes processus métier pour gagner du temps",
      solution: "Je crée des outils sur-mesure qui éliminent vos tâches répétitives."
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Mokhmad a repris notre projet après qu'un autre dev nous ait plantés. Il a livré en 3 semaines ce que l'autre n'a pas fait en 4 mois. Réactif, clair, efficace. Je recommande les yeux fermés.",
      author: "Thomas B.",
      role: "Fondateur startup SaaS"
    },
    {
      rating: 5,
      text: "Je ne comprends rien à la technique, et c'est exactement ce qu'Mokhmad a compris. Il m'a expliqué en français, m'a montré l'avancement chaque semaine, et j'ai eu un site qui marche. Point. C'est tout ce que je voulais.",
      author: "Nathalie R.",
      role: "Entrepreneure (coaching)"
    },
    {
      rating: 5,
      text: "ROI immédiat. Mon nouveau site génère 3x plus de demandes de devis qu'avant. L'investissement s'est rentabilisé en 6 semaines. Meilleure décision business de l'année.",
      author: "David K.",
      role: "Artisan plombier"
    }
  ];

  const faqItems = [
    {
      question: "Combien ça coûte ?",
      answer: "Ça dépend de la complexité, mais pour vous donner une idée :\n• Site vitrine : 1 500 - 3 000€\n• Application web simple : 3 000 - 7 000€\n• Plateforme complexe : 7 000€+\nJe vous fais un devis précis après notre appel découverte (gratuit)."
    },
    {
      question: "Combien de temps ça prend ?",
      answer: "Site vitrine : 2-3 semaines\nApplication métier : 3-6 semaines\nGros projet : on découpe en phases de 4-6 semaines\nJe tiens mes délais. Si je prends du retard, je vous préviens immédiatement."
    },
    {
      question: "Je n'ai pas de budget énorme, vous travaillez quand même avec moi ?",
      answer: "Oui, si le projet a du sens. Je propose des solutions adaptées à votre budget. Parfois, un MVP à 2000€ vaut mieux qu'un truc à 10 000€ non utilisé."
    },
    {
      question: "Et si je ne suis pas satisfait ?",
      answer: "2 options :\n1. On ajuste jusqu'à ce que ça vous convienne (inclus dans le projet)\n2. Garantie satisfait ou remboursé sous 7 jours après livraison\nJe ne garde pas votre argent si vous n'êtes pas content."
    },
    {
      question: "Vous faites aussi la maintenance après ?",
      answer: "Oui. 30 jours inclus gratuit, puis forfait mensuel optionnel (150-300€/mois). Mais je vous forme aussi pour que vous soyez autonome si vous préférez."
    },
    {
      question: "Pourquoi pas une agence ou un dev à l'étranger moins cher ?",
      answer: "Agence = vous payez leur structure (bureaux, commerciaux, marges)\nDev offshore = barrière langue, décalage horaire, qualité variable\nMoi = contact direct, réactif, français, transparent, et je suis là après livraison."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci ! Je vous réponds sous 24h. Vérifiez vos emails (et spams).');
    setFormData({ name: '', email: '', project: '', budget: '', source: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection('contact');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gradient-to-br from-black via-gray-900 to-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-black/50 border-gray-800' : 'bg-white/50 border-gray-200'} border-b transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Mokhmad
            </div>
            
            {/* Desktop Menu */}
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

            {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Photo de profil */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img 
                src="/pp.png" 
                alt="Photo de profil - Remplacez par votre vraie photo"
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

          {/* Trust badges */}
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

      {/* Differentiators Section */}
      <section id="differentiators" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Ce qui me différencie des autres développeurs
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Vous n'avez pas besoin d'un CV. Vous avez besoin de résultats.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <div 
                key={index}
                className={`${darkMode ? 'bg-gray-900/70 border-gray-800 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-500'} p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-1`}
              >
                <div className="text-blue-400 mb-4">{diff.icon}</div>
                <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                <p className="text-gray-400 leading-relaxed">{diff.description}</p>
              </div>
            ))}
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

      {/* Problems/Solutions Section */}
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
                    <p className="text-lg md:text-xl font-semibold mb-3 text-gray-200">
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
            <p className="text-xl mb-6 text-gray-300">
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

      {/* Projects Section */}
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
                      className="w-full h-64 md:h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-red-400 font-semibold">→ Problème : </span>
                        <span className="text-gray-300">{project.problem}</span>
                      </div>
                      <div>
                        <span className="text-yellow-400 font-semibold">→ Solution : </span>
                        <span className="text-gray-300">{project.solution}</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-semibold">→ Résultat : </span>
                        <span className="text-white font-bold">{project.result}</span>
                      </div>
                    </div>

                    <div className={`${darkMode ? 'bg-blue-500/10 border-blue-500/30' : 'bg-blue-50 border-blue-200'} border-l-4 p-4 mb-6 italic`}>
                      <p className="mb-2">"{project.testimonial}"</p>
                      <p className="text-sm text-gray-400">— {project.author}</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={project.liveUrl}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Voir le site
                      </a>
                      <a 
                        href={project.caseStudyUrl}
                        className={`px-6 py-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg font-semibold transition-all inline-flex items-center gap-2`}
                      >
                        <Code size={18} />
                        Lire l'étude de cas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Comment on travaille ensemble
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            (Simple et efficace)
          </p>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Appel découverte (15-30min, gratuit)",
                details: [
                  "Vous m'expliquez votre besoin, je vous dis si je peux vous aider",
                  "Si ça match, je vous envoie un devis clair sous 24h"
                ]
              },
              {
                step: "2",
                title: "Validation et acompte (30%)",
                details: [
                  "Vous validez le devis, on fixe un planning réaliste",
                  "Je commence dès réception de l'acompte"
                ]
              },
              {
                step: "3",
                title: "Développement + Points hebdomadaires",
                details: [
                  "Vous suivez l'avancement chaque semaine (démo en live)",
                  "Vous pouvez ajuster en cours de route, sans frais cachés"
                ]
              },
              {
                step: "4",
                title: "Livraison et formation",
                details: [
                  "Je vous forme à l'utilisation (vidéos + session 1-to-1)",
                  "Le site/app est 100% à vous, aucune dépendance technique"
                ]
              },
              {
                step: "5",
                title: "Support 30 jours inclus",
                details: [
                  "Bugs, questions, ajustements : je suis là gratuitement",
                  "Puis option maintenance mensuelle si besoin"
                ]
              }
            ].map((item, index) => (
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
            <p className="text-xl mb-6 text-gray-300">
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

      {/* Testimonials Section */}
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
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://linkedin.com" 
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

      {/* FAQ Section */}
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
            <p className="text-xl mb-6 text-gray-300">
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

      {/* Contact Section */}
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold text-lg">Votre prénom *</label>
                <input
                  type="text"
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
                  value={formData.source}
                  onChange={(e) => setFormData({...formData, source: e.target.value})}
                  className={`w-full px-4 py-4 rounded-lg text-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} border-2 focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="LinkedIn, Google, Bouche-à-oreille..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Démarrer mon projet <ArrowRight size={24} />
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
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-center text-gray-400 mb-6">Ou contactez-moi directement :</p>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors hover:scale-110 transform duration-200"
                >
                  <Github size={28} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors hover:scale-110 transform duration-200"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="mailto:votre@email.com" 
                  className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors hover:scale-110 transform duration-200"
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

      {/* Footer */}
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
    </div>
  );
};

export default PortfolioConversion;
