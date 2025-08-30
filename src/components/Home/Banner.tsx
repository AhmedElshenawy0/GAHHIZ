const Banner = () => {
  return (
    <div className="relative h-screen bg-[var(--main-bg)] font-arabic">
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

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-16 text-center text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-snug">
          استكشف غرف النوم الفاخرة
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-8">
          تشكيلات أنيقة وجودة عالية بأسعار مميزة
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="bg-[var(--btn-bg)] text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-md hover:opacity-90 transition"
        >
          اكتشف الآن
        </a>
      </div>
    </div>
  );
};

export default Banner;
