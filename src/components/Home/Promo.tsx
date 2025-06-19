import { motion } from "framer-motion";

const features = [
  "إضاءة LED متعددة الألوان قابلة للتعديل",
  "مكبر صوت مدمج بتقنية البلوتوث",
  "تصميم مدمج يناسب جميع المساحات",
  "مصنوع من خامات عالية الجودة",
];

export default function LightSoundDecosSection() {
  return (
    <section
      dir="rtl"
      className="bg-[#f3f4f6] py-20 px-4 sm:px-8 md:px-16 lg:px-24 font-arabic"
    >
      <div className="max-w-7xl mx-auto">
        {/* Variant C: Split Background */}
        <div className="hidden lg:flex mt-20 rounded-xl overflow-hidden shadow-2xl">
          <div className="w-1/2 bg-[#1e1e1e] flex items-center justify-center p-10 relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src="/bedroom2.webp"
              alt="LightSound DECOS"
              className="w-[300px] h-[300px] object-contain"
            />
          </div>
          <div className="w-1/2 bg-white p-10 text-right relative">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold text-[#4e342e] mb-4"
            >
              LightSound DECOS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 leading-relaxed text-base mb-6"
            >
              منتج يجمع بين التكنولوجيا والتصميم الراقي ليناسب أي مكان في منزلك،
              مع تجربة صوتية وضوئية مذهلة.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="list-disc list-inside text-gray-600 space-y-2 text-sm"
            >
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
