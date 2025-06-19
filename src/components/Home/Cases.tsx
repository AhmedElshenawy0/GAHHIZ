import { motion } from "framer-motion";
import MainBtn from "../global/MainBtn";

export default function Cases() {
  const images = ["/bedroom1.webp", "/bedroom2.webp", "/bedroom3.webp"];

  return (
    <section
      dir="rtl"
      className=" bg-[#f3f4f6] py-20 px-4 sm:px-10 md:px-20 font-arabic text-right overflow-hidden"
    >
      {/* Optional Texture Overlay */}
      {/* <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-repeat opacity-50 pointer-events-none z-0" /> */}
      <div className="relative z-10">
        {/* Top Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`product-${i}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Text Blocks with Vertical Divider */}
        <div className="flex flex-col md:flex-row gap-12 justify-between items-stretch mb-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">الصالون</h3>
            <p className="text-gray-600 leading-relaxed">
              نقدم لك تصاميم أنيقة وعصرية تناسب كافة الأذواق. اختر الأريكة أو
              الركنة التي تكمل ديكور منزلك وتمنحك الراحة.
            </p>
          </motion.div>

          <div className="hidden md:block w-px bg-gray-300" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">الديكور</h3>
            <p className="text-gray-600 leading-relaxed">
              استعرض مجموعتنا من القطع الفنية والإكسسوارات المنزلية لإضفاء طابع
              فريد وجميل على كل غرفة في منزلك.
            </p>
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <MainBtn text="إكتشف عالمنا" />
        </div>
      </div>
    </section>
  );
}
