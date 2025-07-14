import { motion } from 'framer-motion';

const Header = ({ loaded }) => {
  return (
    <div className="space-y-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
      >
        Harshvardhan Uttam Tharkar
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-2xl font-medium text-gray-700 dark:text-gray-300 tracking-tight"
      >
        Software Developer
      </motion.h2>
    </div>
  );
};

export default Header;
