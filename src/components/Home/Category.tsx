import { motion } from "framer-motion";
import MainBtn from "../global/MainBtn";

const categories = [
  { title: "غرفة المعيشة", image: "/bedroom1.webp" },
  { title: "الطاولات", image: "/bedroom1.webp" },
  { title: "غرفة النوم", image: "/bedroom2.webp" },
  { title: "غرفة الطعام", image: "/bedroom3.webp" },
];

export default function Category() {
  return (
    <section
      dir="rtl"
      className="relative py-20 text-center px-4 sm:px-8 md:px-16 bg-gradient-to-b from-[#fffbf6] to-[#f5f5f5] font-arabic"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-repeat opacity-80 pointer-events-none z-0" />
      <div className=" relative z-10 max-w-screen-2xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#8D6E63] mb-4 tracking-tight"
        >
          اختر الفئة المناسبة لمنزلك
        </motion.h2>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 mb-10 leading-relaxed text-center "
        >
          استكشف تشكيلتنا المتنوعة من الغرف والتصاميم الراقية التي تناسب جميع
          الأذواق.
        </motion.p>
        <MainBtn text="إكتشف عالمنا" />

        {/* Desktop Grid */}
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 grid">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="aspect-[1/1.1] sm:aspect-[1/1.6] rounded-xl overflow-hidden backdrop-blur-md bg-white/30 border border-white/20 shadow-xl transition-transform hover:scale-[1.02]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-[80%] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
