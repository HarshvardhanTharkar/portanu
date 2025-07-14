import harshImg from '../assets/harsh.jpg';


function Photo({ loaded }) {
  return (
    <div
      className={`w-full h-full transform transition-all duration-1000 delay-600 ${
        loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}
    >
      <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center relative overflow-hidden group shadow-xl shadow-purple-500/30">
        {/* Glowing animated ring */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 to-pink-400/30 rounded-full animate-pulse" />

        {/* Inner photo container */}
        <div className="w-4/5 h-4/5 bg-gray-900 rounded-full flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300 overflow-hidden shadow-md shadow-black/40">
          <img
            src={harshImg}
            alt="Harshvardhan"
            onError={(e) => {
              e.target.src = '/fallback.jpg'; // must exist in /public
              e.target.alt = 'Fallback Image';
            }}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Soft top fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full z-20" />
      </div>
    </div>
  );
}

export default Photo;
