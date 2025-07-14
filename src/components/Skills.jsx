import { motion } from 'framer-motion';
import { 
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; 

const skills = [
  { name: 'C++', icon: <SiCplusplus size={24} /> },
  { name: 'Java', icon: <FaJava size={24} /> }, 
  { name: 'JavaScript', icon: <SiJavascript size={24} /> },
  { name: 'React', icon: <SiReact size={24} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={24} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={24} /> },
  { name: 'Express.js', icon: <SiExpress size={24} /> }
];
const Skills = ({ loaded }) => {
  return (
  <motion.div
  initial={{ opacity: 0 }}
  animate={loaded ? { opacity: 1 } : {}}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-20"
>
  <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
    Skills
  </h2>
  <div className="flex flex-wrap justify-center gap-6">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-24"
      >
        <div className="text-2xl mb-2 text-indigo-600 dark:text-indigo-400">
          {skill.icon}
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
          {skill.name}
        </span>
      </motion.div>
    ))}
  </div>
</motion.div>

  );
};

export default Skills;