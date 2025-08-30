import { motion } from "framer-motion";

const features = [
  "تصميم مريح وعصري يناسب جميع المساحات",
  "مفروش بأقمشة فاخرة مقاومة للبقع",
  "هيكل داخلي متين من الخشب الطبيعي",
  "ألوان متعددة تناسب مختلف الديكورات",
];

export default function Promo() {
  return (
    <section
      dir="rtl"
      className="bg-[var(--main-bg)] py-20 px-4 sm:px-8 md:px-16 lg:px-24 font-arabic"
    >
      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:flex mt-20 rounded-xl overflow-hidden shadow-2xl">
          {/* Image Section */}
          <div className="w-1/2 bg-[#3A5A40] flex items-center justify-center p-10 relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src="/bedroom4.webp"
              alt="أريكة مودرن"
              className="w-[320px] h-[320px] object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="w-1/2 bg-white p-10 text-right relative">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold text-[var(--btn-bg)] mb-4"
            >
              أريكة مودرن أنيقة
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 leading-relaxed text-base mb-6"
            >
              اكتشف الأريكة التي تجمع بين الفخامة والراحة، مصممة لتضفي لمسة
              جمالية على غرفة المعيشة مع دعم مثالي لكل لحظة استرخاء.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="list-disc list-inside text-gray-600 space-y-2 text-sm mb-6"
            >
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[var(--btn-bg)] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              اكتشف المجموعة
            </motion.a>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-center text-gray-700 text-sm">
          <div className="bg-white shadow rounded-lg py-4">
            <p className="text-2xl font-bold text-[var(--btn-bg)]">+10,000</p>
            <p>عميل سعيد</p>
          </div>
          <div className="bg-white shadow rounded-lg py-4">
            <p className="text-2xl font-bold text-[var(--btn-bg)]">4.8★</p>
            <p>متوسط التقييم</p>
          </div>
          <div className="bg-white shadow rounded-lg py-4">
            <p className="text-2xl font-bold text-[var(--btn-bg)]">+1,200</p>
            <p>منتج متاح</p>
          </div>
          <div className="bg-white shadow rounded-lg py-4">
            <p className="text-2xl font-bold text-[var(--btn-bg)]">24/7</p>
            <p>دعم العملاء</p>
          </div>
        </div>
      </div>
    </section>
  );
}
