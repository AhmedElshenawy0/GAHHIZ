import { useEffect, useState, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  const images = useMemo(
    () => [
      "/bedroom1.webp",
      "/bedroom2.webp",
      "/bedroom3.webp",
      "/bedroom4.webp",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const toLoad = [images[index], images[(index + 1) % images.length]];
    toLoad.forEach((src) => {
      if (!loadedImages.has(src)) {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoadedImages((prev) => new Set(prev).add(src));
      }
    });
  }, [index, images, loadedImages]);

  return (
    <div
      dir="rtl"
      className="relative min-h-100vh overflow-hidden text-white font-arabic"
    >
      {/*Background slider images*/}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: loadedImages.has(img) ? `url(${img})` : "none",
              backgroundColor: "#1a1a1a",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-20" />
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute right-4 top-1/2 z-30 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
      >
        <FaChevronRight />
      </button>
      <button
        onClick={next}
        className="absolute left-4 top-1/2 z-30 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 right-0 left-0 flex justify-center gap-2 z-30">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === i ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Content*/}
      <section className="relative z-30 min-h-[85vh] py-10 flex flex-col justify-center items-start pr-6 md:pr-16 text-right">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          جهّز بيتك بالكامل <br className="hidden md:block" /> من دمياط
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row gap-4 text-sm md:text-base"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md transition"
          >
            جهّز بيتك بالكامل
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md transition"
          >
            جهّز غرفة السفرة
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md transition"
          >
            جهّز غرفة النوم
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
