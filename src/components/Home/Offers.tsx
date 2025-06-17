import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const products = [
  {
    title: "طاولة وسط CT-0039",
    price: "LE 1,999.00",
    originalPrice: "LE 2,600.00",
    discount: "LE 600.00 وفّر ",
    image: "/bedroom1.webp",
  },
  {
    title: "طاولة وسط CT-0046",
    price: "LE 1,799.00",
    originalPrice: "LE 2,499.00",
    discount: "LE 700.00 وفّر ",
    image: "/bedroom2.webp",
  },
  {
    title: "طاولة وسط CT-0044",
    price: "LE 1,450.00",
    originalPrice: "LE 2,250.00",
    discount: "LE 800.00 وفّر ",
    image: "/bedroom3.webp",
  },
  {
    title: "كونسول CON-113",
    price: "LE 2,199.00",
    originalPrice: "LE 2,799.00",
    discount: "LE 600.00 وفّر ",
    image: "/bedroom4.webp",
  },
  {
    title: "طاولة جانبية ST-0080",
    price: "LE 1,199.00",
    originalPrice: "LE 1,899.00",
    discount: "LE 700.00 وفّر ",
    image: "/bedroom1.webp",
  },
  {
    title: "طاولة وسط CT-0038",
    price: "LE 1,997.00",
    originalPrice: "LE 3,997.00",
    discount: "LE 2,000.00 وفّر ",
    image: "/bedroom3.webp",
  },
  {
    title: "كرسي بار C104",
    price: "LE 1,300.00",
    originalPrice: "LE 1,900.00",
    discount: "LE 600.00 وفّر ",
    image: "/bedroom1.webp",
  },
  {
    title: "طاولة وسط CT-0041",
    price: "LE 1,999.00",
    originalPrice: "LE 3,799.00",
    discount: "LE 1,800.00 وفّر ",
    image: "/bedroom2.webp",
  },
];

export default function Offers() {
  return (
    <section dir="rtl" className="w-full bg-[#f3f4f6] text-right font-arabic">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-16 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            عرض الكبير!
          </h2>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            عرض الكل
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-500 mb-10 max-w-xl"
        >
          استمتع بخصومات تصل إلى 50٪ مع توصيل فوري
        </motion.p>

        {/* Grid of products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {products.map((product, index) => (
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.12}
              scale={1.03}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
            >
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Image + CTA */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Discount Badge */}
                  <span
                    className="absolute top-3 right-3 bg-[#dfcfc2] text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                    dir="ltr"
                  >
                    {product.discount}
                  </span>

                  {/* CTA Button */}
                  <button className="absolute bottom-4 right-4 bg-[#8D6E63] text-white text-sm font-semibold px-4 py-2 rounded-full opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-md">
                    أضف الآن
                  </button>
                </div>

                {/* Info */}
                <div className="p-3 flex flex-col gap-1">
                  <h3 className="text-sm font-semibold truncate">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-900" dir="ltr">
                    {product.price}
                    <span className="line-through text-gray-400 text-xs mr-2">
                      {product.originalPrice}
                    </span>
                  </p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
