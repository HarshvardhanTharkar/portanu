import { motion } from 'framer-motion';

function Bio({ loaded }) {
  return (
    <div
      className={`transform transition-all duration-1000 delay-800 ${
        loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
        Hi, I'm Anushka Asode , a Software Development Engineer with a passion for solving real-world problems through code.
I specialize in building scalable web applications, optimizing performance, and writing clean, maintainable code. I believe in breaking barriers — both in tech and in life — and love collaborating to bring meaningful ideas to life.
      </p>
    </div>
  );
}

export default Bio;
