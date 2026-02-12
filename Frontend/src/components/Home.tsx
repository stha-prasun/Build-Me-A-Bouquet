import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f5da] flex items-center justify-center">
      <div className="text-center">
        {/* Flower Icon */}
        <img src="/Home.png" alt="Flower" className="w-32 mx-auto mb-4" />

        {/* Logo */}
        <h1 className="font-Custom-Text text-[90px] leading-none text-black mb-4 hover:cursor-default">
          Build Me A Bouquet
        </h1>

        {/* Subtitle */}
        <p className="uppercase tracking-[0.2em] text-sm mb-8 hover:cursor-default">
          Beautiful Flowers <br />
          Made Your Way
        </p>

        {/* Primary Button */}
        <Link
          to="/create"
          className="bg-black text-white px-10 py-3 text-sm tracking-[0.2em] mb-5 hover:opacity-80 transition"
        >
          BUILD A BOUQUET
        </Link>

        <br />

        {/* Footer */}
        <p className="mt-12 text-xs tracking-widest hover:cursor-default">
          MADE JUST FOR <span className="underline">You</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
