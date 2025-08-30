import { motion } from "framer-motion";
import MainBtn from "../global/MainBtn";

export default function BedroomSection() {
  return (
    <section
      dir="rtl"
      className="bg-[var(--main-bg)] py-20 px-4 sm:px-10 md:px-20 font-arabic"
    >
      {/* Section Heading */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-[var(--title-color)] mb-4 leading-tight"
        >
          مجموعة غرف النوم الجديدة
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          نقدم لك تشكيلة متكاملة من غرف النوم الحديثة التي توفر أقصى درجات
          الراحة، مصممة بذوق رفيع لتناسب مختلف المساحات والأنماط. مصممة بذوق
          رفيع لتناسب مختلف المساحات والأنماط.
        </motion.p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-right"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--subtitle-color)] mb-4">
            غرفة نوم بتصميم عصري
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            استمتع بالراحة والفخامة مع غرفة النوم الحديثة التي تجمع بين الأناقة
            والعملية. صممت لتوفر لك تجربة نوم مريحة وبيئة مثالية للاسترخاء بعد
            يوم طويل.
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-2">
            <li>سرير مزدوج بإطار خشبي فاخر</li>
            <li>خزانة ملابس واسعة ذات أبواب انزلاقية</li>
            <li>إضاءة ليلية مدمجة لراحة إضافية</li>
            <li>مرايا أنيقة وطاولة زينة بتصميم متناغم</li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 overflow-hidden"
        >
          <img
            src="/—Pngtree—chair_5642351.png"
            alt="غرفة نوم عصرية"
            className="w-full h-auto object-contain relative"
          />
        </motion.div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12 relative">
        <MainBtn text="إستعرض المجموعة" />
      </div>
    </section>
  );
}
