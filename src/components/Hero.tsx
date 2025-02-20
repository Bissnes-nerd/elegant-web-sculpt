
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm uppercase tracking-widest animate-fade-in">Welcome to the future</span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight animate-fade-up">
            We Create Digital
            <span className="block mt-2">Experiences</span>
          </h1>
          <p className="mt-8 text-lg text-gray-600 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Transform your brand with cutting-edge design and development solutions that captivate your audience and drive results.
          </p>
          <button className="mt-12 px-8 py-4 bg-black text-white rounded-full flex items-center gap-2 mx-auto hover:gap-4 transition-all">
            View Our Work
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
