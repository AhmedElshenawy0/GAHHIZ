import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { useGetAllProductsQuery } from "../store/api-calls/products-api-call";

export default function ProductListPage() {
  const [maxPrice, setMaxPrice] = useState(40000);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { data, isLoading, error } = useGetAllProductsQuery(undefined);
  const products = data?.data || [];

  // استخراج أسماء الفئات
  const categories = [
    ...new Set(
      products
        .flatMap((p) => p.categories?.map((cat) => cat.name))
        .filter(Boolean)
    ),
  ];

  // تصفية المنتجات حسب السعر والفئة
  const filteredProducts = products.filter((p) => {
    const priceMatch = p.price <= maxPrice;
    const categoryMatch =
      !selectedCategory ||
      p.categories?.some((cat) => cat.name === selectedCategory);
    return priceMatch && categoryMatch;
  });

  const resetFilters = () => {
    setMaxPrice(40000);
    setSelectedCategory("");
  };

  // مكون الفلاتر الجانبي
  const FilterContent = (
    <div className="space-y-6">
      {/* فلتر الفئة */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">الفئة</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat ? "" : cat)
              }
              className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* فلتر السعر */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">السعر حتى</label>
        <input
          type="range"
          min="0"
          max="40000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-black"
        />
        <p className="text-xs text-center text-black font-semibold">
          {maxPrice.toLocaleString()} ج.م
        </p>
      </div>

      {/* زر إعادة الضبط */}
      <button
        onClick={resetFilters}
        className="text-sm text-gray-400 hover:underline"
      >
        إعادة ضبط الفلاتر
      </button>
    </div>
  );

  return (
    <section dir="rtl" className="bg-[#FAFAFA] py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* زر الفلاتر للجوال */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">منتجاتنا</h2>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="text-sm bg-black text-white px-4 py-2 rounded-full"
          >
            فلترة
          </button>
        </div>

        <Dialog open={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
          <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center p-4">
            <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-md relative">
              <button
                className="absolute left-4 top-4 text-gray-500 hover:text-gray-700"
                onClick={() => setIsFilterOpen(false)}
              >
                <X size={20} />
              </button>
              <Dialog.Title className="text-lg font-semibold mb-4 text-right">
                الفلاتر
              </Dialog.Title>
              {FilterContent}
            </Dialog.Panel>
          </div>
        </Dialog>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* الفلاتر الثابتة لسطح المكتب */}
          <aside className="hidden md:flex flex-col p-6 bg-white rounded-lg border border-gray-200 space-y-6 sticky top-6 h-fit">
            <h4 className="text-lg font-semibold text-gray-800">
              فلترة المنتجات
            </h4>
            {FilterContent}
          </aside>

          {/* عرض المنتجات */}
          <main className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <p className="text-center text-gray-500">
                  جاري تحميل المنتجات...
                </p>
              ) : error ? (
                <p className="text-center text-red-500">
                  حدث خطأ أثناء تحميل البيانات.
                </p>
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((prod, idx) => (
                  <motion.div
                    key={prod.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all text-center"
                  >
                    <img
                      src={`http://localhost:1337${prod.image?.url}`}
                      alt={prod.title}
                      className="w-full aspect-square object-cover mb-4 rounded-lg"
                    />
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {prod.title}
                    </h4>
                    <p className="text-base font-bold text-black mb-3">
                      {prod.price.toLocaleString()} ج.م
                    </p>
                    <button className="w-full bg-black text-white text-sm font-medium py-2 rounded-full">
                      أضف إلى السلة
                    </button>
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-500 mt-10">
                  لا توجد منتجات تطابق الفلاتر المختارة.
                </p>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
