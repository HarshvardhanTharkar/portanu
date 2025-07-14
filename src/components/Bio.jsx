import { motion } from 'framer-motion';

const Bio = ({ loaded }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={loaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-gray-300 leading-relaxed text-base md:text-lg space-y-4"
    >
      <h3 className="text-xl font-semibold text-white">About</h3>
      <p>
        I'm Harshvardhan Tharkar — someone who's deeply passionate about technology, creativity, and meaningful impact.
        I find joy in building things, solving real-world problems, and constantly exploring new ideas. Whether it's
        through projects, collaborations, or community work, I strive to grow, learn, and make a difference. Curiosity
        drives me, and I'm always excited about what’s next.
      </p>
    </motion.div>
  );
};

export default Bio;
