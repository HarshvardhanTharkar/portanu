import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs,
  SiJavascript, SiCplusplus
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaSalesforce } from "react-icons/fa";

function Skills({ loaded, iconSize = 32 }) {
  const skills = [
    { name: 'MongoDB', color: 'from-green-500 to-green-700', icon: <SiMongodb /> },
    { name: 'Express.js', color: 'from-zinc-400 to-zinc-600', icon: <SiExpress /> },
    { name: 'React', color: 'from-blue-400 to-blue-600', icon: <SiReact /> },
    { name: 'Node.js', color: 'from-green-400 to-green-600', icon: <SiNodedotjs /> },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: <SiJavascript /> },
    { name: 'Salesforce', color: 'from-blue-500 to-blue-700', icon: <FaSalesforce /> },
    { name: 'C++', color: 'from-sky-400 to-sky-600', icon: <SiCplusplus /> },
    { name: 'Java', color: 'from-red-400 to-orange-500', icon: <DiJava /> },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className={`transform transition-all duration-700 hover:scale-105 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: `${1000 + index * 100}ms` }}
        >
          <div className="group relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-md hover:shadow-indigo-500/20">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
            />
            <div className="text-center space-y-3 relative z-10">
              <div
                className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-gray-800 group-hover:scale-110 transition-transform duration-300"
                style={{ fontSize: iconSize }}
                title={skill.name}
              >
                {skill.icon}
              </div>
              <h4 className="text-white font-medium group-hover:text-indigo-400 transition-colors duration-300">
                {skill.name}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
