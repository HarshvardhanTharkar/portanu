import { useState, useEffect } from 'react';
import Header from './components/Header';
import Photo from './components/Photo';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] bg-[length:400%_400%] opacity-80" />

      {/* Content */}
      <div
        className={`container mx-auto px-6 py-16 md:py-24 transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
          <div className="w-full md:w-1/2 space-y-8">
            <Header loaded={loaded} />
            <Bio loaded={loaded} />
          </div>
          <div className="w-full md:w-[45%] flex justify-center">
            <Photo loaded={loaded} />
          </div>
        </div>

        <div className="mt-24">
          <Skills loaded={loaded} iconSize={20} />
        </div>

        <div className="mt-24">
          <Contact loaded={loaded} />
        </div>
      </div>

      {/* Keyframes for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 10s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
