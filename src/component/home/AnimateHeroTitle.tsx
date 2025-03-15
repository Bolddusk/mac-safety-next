import AnimateTitle from "./AnimateTitle";

const AnimateHeroTitle = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-4 md:p-6 text-4xl sm:text-5xl md:text-6xl font-bold">
        <h1 className="text-white pb-4">Intelligence at Every Level</h1>
        <AnimateTitle />
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white/90 mt-4">
          Working as One
        </h1>
      </div>
    </div>
  );
};

export default AnimateHeroTitle;
