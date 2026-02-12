const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f5da] flex items-center justify-center">
      <div className="text-center">

        {/* Flower Icon */}
        <img
          src="/Home.png"
          alt="Flower"
          className="w-32 mx-auto mb-4"
        />

        {/* Logo */}
        <h1 className="font-Custom-Text text-[90px] leading-none text-black mb-4">
          Build Me A Bouquet
        </h1>

        {/* Subtitle */}
        <p className="uppercase tracking-[0.2em] text-sm mb-8">
          Beautiful Flowers <br />
          Made Your Way
        </p>

        {/* Primary Button */}
        <button className="bg-black text-white px-10 py-3 text-sm tracking-[0.2em] mb-5 hover:opacity-80 transition">
          BUILD A BOUQUET
        </button>

        <br />

        {/* Footer */}
        <p className="mt-12 text-xs tracking-widest">
          MADE JUST FOR <span className="underline cursor-pointer">You</span>
        </p>

      </div>
    </div>
  );
};

export default Home;
