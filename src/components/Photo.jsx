import { motion } from 'framer-motion';
import harshImg from '../assets/harsh.jpg'; // correct import path

const Photo = ({ loaded }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={loaded ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
        <img
          src={harshImg}
          alt="Harshvardhan Tharkar"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default Photo;
