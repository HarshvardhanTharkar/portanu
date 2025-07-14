import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from './components/Header';
import Bio from './components/Bio';
import Photo from './components/Photo';
import Skills from './components/Skills';

import Contact from './components/Contact';

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-400/20 animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="flex flex-col items-center space-y-2 text-gray-400">
        <span className="text-sm font-light">Scroll to explore</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </div>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white font-sans">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(120,200,255,0.1),transparent_50%)]" />
      </div>

      <FloatingParticles />

      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20 transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 relative">
          <div className="w-full md:w-1/2 space-y-10 text-center md:text-left">
            <Header loaded={loaded} />
            <Bio loaded={loaded} />
          </div>

          <div className="w-full md:w-[50%] flex justify-end">
            <div
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
              style={{
                transform: `translateY(${scrollY * 0.1}px) ${loaded ? 'scale(1)' : 'scale(0.95)'}`,
                filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))',
              }}
            >
              <Photo loaded={loaded} />
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h3 className="text-4xl font-bold text-center mb-12 tracking-wide">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h3>
          <Skills loaded={loaded} iconSize={28} />
        </div>

        <div className="mt-32">
          <Contact loaded={loaded} />
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
}

export default App;
