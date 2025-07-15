function Header({ loaded }) {
  return (
    <div className="space-y-6">
      <div
        className={`transform transition-all duration-1000 delay-200 ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight tracking-tight">
      Anushka Anand Asode

        </h1>
      </div>

      <div
        className={`transform transition-all duration-1000 delay-400 ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
       Software Development Engineer
        </h2>
      </div>
    </div>
  );
}

export default Header;
