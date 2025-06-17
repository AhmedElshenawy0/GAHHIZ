import { motion } from "framer-motion";

const products = [
  {
    title: "سرير مودرن بتصميم فاخر",
    price: "LE 7,999.00",
    originalPrice: "LE 9,500.00",
    discount: "LE 1,501.00 وفّر ",
    image: "/bedroom1.webp",
  },
  {
    title: "دولاب 6 أبواب بمرآة",
    price: "LE 5,499.00",
    originalPrice: "LE 6,299.00",
    discount: "LE 800.00 وفّر ",
    image: "/bedroom2.webp",
  },
  {
    title: "تسريحة مع مرآة وإضاءة",
    price: "LE 3,250.00",
    originalPrice: "LE 4,000.00",
    discount: "LE 750.00 وفّر ",
    image: "/bedroom3.webp",
  },
  {
    title: "كومود غرفة نوم خشبي",
    price: "LE 1,299.00",
    originalPrice: "LE 1,799.00",
    discount: "LE 500.00 وفّر ",
    image: "/bedroom4.webp",
  },
  {
    title: "سرير أطفال مزود بدرج تخزين",
    price: "LE 4,100.00",
    originalPrice: "LE 4,950.00",
    discount: "LE 850.00 وفّر ",
    image: "/bedroom1.webp",
  },
  {
    title: "دولاب زاوية عملي",
    price: "LE 6,299.00",
    originalPrice: "LE 7,500.00",
    discount: "LE 1,201.00 وفّر ",
    image: "/bedroom3.webp",
  },
  {
    title: "تسريحة كلاسيك بكرسي",
    price: "LE 2,999.00",
    originalPrice: "LE 3,800.00",
    discount: "LE 801.00 وفّر ",
    image: "/bedroom1.webp",
  },
  {
    title: "طاولة جانبية خشبية",
    price: "LE 899.00",
    originalPrice: "LE 1,400.00",
    discount: "LE 501.00 وفّر ",
    image: "/bedroom2.webp",
  },
];

export default function BedroomOffer() {
  return (
    <section dir="rtl" className="w-full bg-[#f3f4f6] text-right px-0">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-16 py-12 font-arabic">
        {/* Title and link */}
        <div className="flex justify-between items-center mb-4 px-2 md:px-0">
          <h2 className="text-3xl font-extrabold text-gray-900">
            عرض غرف النوم
          </h2>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            عرض الكل
          </a>
        </div>

        {/* Subtitle */}
        <p className="text-gray-500 mb-8 px-2 md:px-0 text-base">
          استمتع بخصومات تصل إلى 50٪ مع توصيل فوري
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col w-full"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden shadow-md rounded-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Discount Badge */}
                <span
                  className="absolute top-3 right-3 bg-[#dfcfc2] text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  dir="ltr"
                >
                  {product.discount}
                </span>

                {/* Hover Button (slide from right) */}
                <button className="absolute bottom-4 right-4 bg-[#8D6E63] text-white text-sm px-4 py-2 rounded-full opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  أضف الآن
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-2 flex flex-col gap-1">
                <h3 className="text-sm font-semibold truncate">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-900">
                  <span dir="ltr">{product.price}</span>
                  <span className="line-through text-gray-400 mr-2" dir="ltr">
                    {product.originalPrice}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
