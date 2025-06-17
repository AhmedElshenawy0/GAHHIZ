import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const promoImages = [
  {
    label: "Luxurious",
    image: "/bedroom1.webp",
    heightClass: "h-[100%]",
  },
  {
    label: "Designed",
    image: "/bedroom2.webp",
    heightClass: "h-[80%]",
  },
  {
    label: "Styling",
    image: "/bedroom3.webp",
    heightClass: "h-[60%]",
  },
  {
    label: "Comfortable",
    image: "/bedroom4.webp",
    heightClass: "h-[40%]",
  },
];

export default function Promo() {
  return (
    <section className="w-full bg-[#f3f4f6] py-20" dir="rtl">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16 font-arabic text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14"
        >
          استمتع بخصم 40٪
        </motion.h2>

        {/* Promo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-6 h-[600px]">
          {promoImages.map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.1}
              scale={1.03}
              transitionSpeed={400}
              className={`w-full ${item.heightClass}`}
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative w-full h-full rounded-xl overflow-hidden shadow-md group"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />

                {/* Label */}
                <span className="absolute bottom-4 right-4 text-white text-lg md:text-xl font-bold z-10">
                  {item.label}
                </span>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
