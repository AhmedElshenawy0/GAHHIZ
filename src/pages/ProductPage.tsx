import { useParams } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// --- Type Definitions ---
// Define the structure for a single review
type Review = {
  name: string;
  date: string;
  rating: number;
  comment: string;
};

// Define the structure for a product
type Product = {
  id: string;
  title: string;
  desc: string;
  basePrice: number;
  image: string;
  images?: string[]; // Optional: Not all products have this
  reviews?: Review[]; // Optional: Not all products have this
};

// --- Data ---
const products: Product[] = [
  {
    id: "1",
    title: "سرير مزدوج فاخر",
    desc: "استمتع بنوم هادئ ومريح مع هذا السرير المزدوج الفاخر المصنوع من أجود أنواع الخشب والمفروش بأقمشة عالية الجودة. تصميمه العصري يضفي لمسة من الأناقة على غرفة نومك.",
    basePrice: 24600,
    image: "/bedroom1.webp",
    images: ["/bedroom1.webp", "/bedroom2.webp", "/bedroom3.webp"],
    reviews: [
      {
        name: "أحمد حسن",
        date: "2024-05-12",
        rating: 4.9,
        comment:
          "السرير رائع من حيث الجودة والتصميم. أنصح بشرائه خصوصاً لمن يهتم بالراحة والأناقة.",
      },
      {
        name: "سارة محمود",
        date: "2024-05-10",
        rating: 4.7,
        comment: "مريح جداً وخامة ممتازة. تجربة ممتازة من البداية للنهاية.",
      },
    ],
  },
  {
    id: "2",
    title: "سرير أطفال عصري",
    desc: "سرير مخصص للأطفال بتصميم آمن وعصري، مثالي لغرفة نوم الأطفال.",
    basePrice: 15800,
    image: "/bedroom2.webp",
  },
  {
    id: "3",
    title: "كنبة استرخاء جلدية",
    desc: "كنبة جلدية فاخرة توفر أقصى درجات الراحة بتصميم مميز.",
    basePrice: 9800,
    image: "/bedroom3.webp",
  },
];

const colors = ["بيج", "رمادي", "كحلي", "أبيض"];
const materials = ["خشب طبيعي", "قماش", "معدن"];
const styles = ["كلاسيكي", "مودرن", "سكندينافي"];
const sizes = ["مفرد", "مزدوج", "كينج", "كوين"];

export default function ProductPage() {
  const { id } = useParams<{ id: string }>(); // Specify type for id
  const product = products.find((p) => p.id === id);

  // State initializations
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState("details");
  const [mainImage, setMainImage] = useState(product?.image || "");

  // Early return if product is not found
  if (!product) {
    return <div className="p-6 text-center text-red-500">المنتج غير موجود</div>;
  }

  const totalPrice = product.basePrice * quantity;
  const relatedProducts = products.filter((p) => p.id !== id);

  return (
    <section
      dir="rtl"
      className="bg-[var(--main-bg)] py-14 px-4 md:px-10 font-arabic mt-[64px]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="flex flex-col gap-6 items-center">
          <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Thumbnail Images - Safely render only if images exist */}
          {product.images && (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-center w-full">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                    mainImage === img
                      ? "border-[#3A5A40] scale-105 shadow-md"
                      : "border-transparent hover:shadow-sm hover:opacity-90"
                  }`}
                >
                  <img
                    src={img}
                    alt={`image ${i + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6 text-right">
          <span className="text-xs bg-[#3A5A40] text-white px-3 py-1 rounded-full">
            سرير
          </span>
          <h1 className="text-3xl font-extrabold text-[#2C2C2C]">
            {product.title}
          </h1>

          {/* Reviews - Safely render only if reviews exist */}
          {product.reviews && product.reviews.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-yellow-600">
              ⭐ {product.reviews[0].rating}
              <span className="text-gray-500">
                ({product.reviews.length} تقييمات)
              </span>
            </div>
          )}

          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold text-[#2C2C2C]">
              {Math.round(totalPrice)} ج.م
            </p>
            <span className="text-sm text-red-500 line-through">
              {Math.round(product.basePrice * 1.1)} ج.م
            </span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
              خصم 10%
            </span>
          </div>

          {/* Product Options */}
          <div className="space-y-3">
            {["اللون", "الخامة", "النمط", "المقاس"].map((label, index) => {
              const optionMap = [colors, materials, styles, sizes];
              const valueMap = [
                selectedColor,
                selectedMaterial,
                selectedStyle,
                selectedSize,
              ];
              const setterMap = [
                setSelectedColor,
                setSelectedMaterial,
                setSelectedStyle,
                setSelectedSize,
              ];

              return (
                <div key={label}>
                  <label className="block text-sm text-gray-700 mb-1">
                    {label}:
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {optionMap[index].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setterMap[index](opt as any)} // Use 'as any' for simplicity with mixed setters
                        className={`px-4 py-1.5 border rounded-full text-sm transition font-semibold ${
                          valueMap[index] === opt
                            ? "bg-[#DAD7CD] text-black border-none"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700">الكمية:</span>
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 bg-gray-200 rounded-full"
            >
              -
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 bg-gray-200 rounded-full"
            >
              +
            </button>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-[#3A5A40] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90">
              أضف إلى السلة
            </button>
          </div>

          {/* Info Tabs */}
          <div className="mt-10">
            <div className="flex gap-4 border-b text-sm">
              {(["تفاصيل المنتج", "التغليف", "الشحن", "العناية"] as const).map(
                (label) => {
                  const tabKeys = {
                    "تفاصيل المنتج": "details",
                    التغليف: "packaging",
                    الشحن: "shipping",
                    العناية: "care",
                  } as const;
                  const key = tabKeys[label];
                  return (
                    <button
                      key={key}
                      onClick={() => setTab(key)}
                      className={`pb-2 ${
                        tab === key
                          ? "border-b-2 border-[#3A5A40] font-bold"
                          : "text-gray-500"
                      }`}
                    >
                      {label}
                    </button>
                  );
                }
              )}
            </div>
            <div className="mt-4 text-sm text-gray-700 leading-relaxed">
              {
                {
                  details: product.desc,
                  packaging:
                    "يتم تغليف المنتج بعناية باستخدام مواد حماية عالية الجودة لضمان وصوله بأمان.",
                  shipping:
                    "مدة التوصيل من 3 إلى 7 أيام داخل مصر. تشمل الخدمة التركيب في حال تطلب المنتج ذلك.",
                  care: "يفضل تنظيف السطح بقماشة ناعمة مبللة وتجنب استخدام مواد كيميائية قوية.",
                }[tab]
              }
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-bold">الارتفاع</p>
              <p>120 سم</p>
            </div>
            <div>
              <p className="font-bold">العرض</p>
              <p>160 سم</p>
            </div>
            <div>
              <p className="font-bold">الخامة</p>
              <p>{selectedMaterial}</p>
            </div>
            <div>
              <p className="font-bold">النمط</p>
              <p>{selectedStyle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Slider */}
      <div className="max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-6 text-right">منتجات مشابهة</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
        >
          {relatedProducts.map((prod) => (
            <SwiperSlide key={prod.id}>
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="h-40 w-full object-cover rounded-lg mb-3"
                />
                <h4 className="font-bold text-right text-sm mb-1">
                  {prod.title}
                </h4>
                <p className="text-right text-[#3A5A40] text-sm">
                  {prod.basePrice.toLocaleString("ar-EG")} ج.م
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
