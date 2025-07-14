// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { MdEmail, MdPhone } from 'react-icons/md';

const Contact = ({ loaded }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={loaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-20 text-gray-300 text-center space-y-6"
    >
      <h3 className="text-3xl font-semibold text-white">Contact</h3>
      <div className="flex flex-col items-center space-y-4 text-lg md:text-xl font-medium">
        <div className="flex items-center gap-3">
          <MdEmail size={24} className="text-indigo-400" />
          <span>harshvardhantharkar576@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <MdPhone size={24} className="text-indigo-400" />
          <span>+91 7795286350</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
