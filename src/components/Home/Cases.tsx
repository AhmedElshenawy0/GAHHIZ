import { motion } from "framer-motion";
import MainBtn from "../global/MainBtn";

export default function Cases() {
  const images = ["/bedroom1.webp", "/bedroom2.webp", "/bedroom3.webp"];

  return (
    <section
      dir="rtl"
      className="bg-[var(--main-bg)] py-24 px-4 sm:px-10 md:px-20 font-arabic text-right"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--subtitle-color)] mb-4">
            أحدث التصاميم لغرف المعيشة والديكور
          </h2>
          <p className="text-[var(--title-color)] text-lg max-w-3xl mx-auto">
            اكتشف تشكيلة رائعة من التصاميم الحديثة التي تضفي على منزلك لمسة من
            الأناقة والراحة.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img
                src={src}
                alt={`product-${i}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Text Content */}
        <div className="flex flex-col md:flex-row gap-12 items-stretch mb-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 bg-white rounded-xl p-6 shadow-md"
          >
            <h3 className="text-2xl font-bold text-[var(--title-color)] mb-4">
              الصالون
            </h3>
            <p className="text-gray-700 leading-relaxed">
              نقدم لك تصاميم أنيقة وعصرية تناسب كافة الأذواق. اختر الأريكة أو
              الركنة التي تكمل ديكور منزلك وتمنحك الراحة، مع تفاصيل تضفي لمسة
              فنية وجو من الدفء.
            </p>
          </motion.div>

          <div className="w-full md:w-px bg-[var(--secondary-color)]" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 bg-white rounded-xl p-6 shadow-md"
          >
            <h3 className="text-2xl font-bold text-[var(--title-color)] mb-4">
              الديكور
            </h3>
            <p className="text-gray-700 leading-relaxed">
              استعرض مجموعتنا من القطع الفنية والإكسسوارات المنزلية لإضفاء طابع
              فريد وجميل على كل غرفة في منزلك، بتفاصيل مستوحاة من أرقى أساليب
              التصميم.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <MainBtn text="إكتشف عالمنا" />
        </motion.div>
      </div>
    </section>
  );
}
