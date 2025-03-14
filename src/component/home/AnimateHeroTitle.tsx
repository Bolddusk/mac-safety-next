import AnimateTitle from "./AnimateTitle";

const AnimateHeroTitle = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold space-y-8 md:space-y-12">
        <span className="text-white">Intelligence at Every Level</span>
        <div className="h-32 flex items-center justify-start overflow-hidden py-4">
          <AnimateTitle />
        </div>
        <span className="text-2xl sm:text-3xl md:text-4xl text-white/90 mt-4">
          Working as One
        </span>
      </h1>
    </div>
  );
};

export default AnimateHeroTitle;
