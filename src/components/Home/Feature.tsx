import { motion } from "framer-motion";

export default function LightSoundDecosSection() {
  return (
    <section
      dir="rtl"
      className="bg-[#f3f4f6] py-20 px-4 sm:px-10 md:px-20 font-arabic"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-right"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4e342e] mb-4">
            LightSound DECOS
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            استمتع بتجربة ضوئية وصوتية مميزة مع منتج LightSound DECOS الذي يجمع
            بين التصميم العصري والتكنولوجيا الذكية. مثالي لغرف النوم أو غرف
            المعيشة حيث يضيف لمسة أنيقة وأجواء مريحة من الإضاءة والموسيقى.
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-2">
            <li>إضاءة LED متعددة الألوان قابلة للتعديل</li>
            <li>مكبر صوت مدمج بتقنية البلوتوث</li>
            <li>تصميم مدمج يناسب جميع المساحات</li>
            <li>مصنوع من خامات عالية الجودة</li>
          </ul>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 overflow-hidden"
        >
          <img
            src="/—Pngtree—chair_5642351.png"
            alt="LightSound DECOS"
            className="w-full h-auto object-contain relative"
          />
        </motion.div>
      </div>
    </section>
  );
}
