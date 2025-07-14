import { motion } from 'framer-motion';

const Photo = ({ loaded }) => {
  return (
  <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={loaded ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative"
>
<div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">

    <img
      src="src/assets/harsh.jpg"
      alt="Harshvardhan Tharkar"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>

  );
};

export default Photo;