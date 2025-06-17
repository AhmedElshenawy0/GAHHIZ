import { motion } from "framer-motion";

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
      className="py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-[#fff9f6] to-[#f5f5f5] text-right font-arabic"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#8D6E63] mb-4 tracking-tight"
        >
          اختر الفئة المناسبة لمنزلك
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 mb-10 max-w-xl leading-relaxed"
        >
          استكشف تشكيلتنا المتنوعة من الغرف والتصاميم الراقية التي تناسب جميع
          الأذواق.
        </motion.p>

        {/* Mobile: Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto md:hidden no-scrollbar scroll-smooth pb-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-[80%] max-w-[340px] h-52 rounded-xl overflow-hidden relative flex-shrink-0 group shadow-lg bg-white cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold text-center px-2 drop-shadow-md">
                {cat.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-xl group cursor-pointer border border-[#e0d4c7] hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-500" />
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-extrabold text-center px-2 drop-shadow-lg">
                {cat.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
