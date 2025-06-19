const Banner = () => {
  return (
    <div className="relative h-screen bg-[#f3f4f6]">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/5089243-uhd_4096_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered text */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-16 text-center">
        <div className="text-white font-arabic">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            استكشف غرف النوم الفاخرة
          </h1>
          <p className="text-lg md:text-2xl">
            تشكيلات أنيقة وجودة عالية بأسعار مميزة
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
