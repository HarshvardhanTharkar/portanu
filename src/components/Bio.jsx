import { motion } from 'framer-motion';

function Bio({ loaded }) {
  return (
    <div
      className={`transform transition-all duration-1000 delay-800 ${
        loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
        I'm Harshvardhan Tharkar — someone who's deeply passionate about technology, creativity, and meaningful impact. I find joy in building things, solving real-world problems, and constantly exploring new ideas. Whether it's through projects, collaborations, or community work, I strive to grow, learn, and make a difference. Curiosity drives me, and I'm always excited about what’s next.
      </p>
    </div>
  );
}

export default Bio;
