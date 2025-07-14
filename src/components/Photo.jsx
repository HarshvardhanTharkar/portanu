import harshImg from '../assets/harsh.jpg';

function Photo({ loaded }) {
  return (
    <div
      className={`w-full h-full transform transition-all duration-1000 delay-600 ${
        loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}
    >
      <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full animate-pulse"></div>

        <div className="w-4/5 h-4/5 bg-gray-800 rounded-full flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
          <img
            src={harshImg}
            alt="Harshvardhan"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
      </div>
    </div>
  );
}

export default Photo;
