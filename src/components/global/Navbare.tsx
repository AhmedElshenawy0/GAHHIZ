import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  Search,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mega Offers Banner */}
      <div
        className="w-full bg-white text-black text-sm py-2 text-center font-semibold tracking-wide shadow-sm z-50"
        dir="rtl"
      >
        <a href="#" className="hover:underline">
          🎉 عروض ضخمة لفترة محدودة – تسوق الآن!
        </a>
      </div>

      {/* Navbar */}
      <nav
        className="absolute top-8 right-0 w-full z-40 px-6 md:px-16 py-4 text-white"
        dir="rtl"
      >
        <div className="flex justify-between items-center">

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 font-medium text-base">
            <div className="relative group cursor-pointer">
              <span>الغرف</span>
              <div className="absolute hidden group-hover:block top-full right-0 bg-white text-black shadow-md mt-2 rounded-md py-2 px-4">
                <p className="hover:text-gray-600">غرفة المعيشة</p>
                <p className="hover:text-gray-600">غرفة النوم</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <span>الأثاث</span>
              <div className="absolute hidden group-hover:block top-full right-0 bg-white text-black shadow-md mt-2 rounded-md py-2 px-4">
                <p className="hover:text-gray-600">كنب</p>
                <p className="hover:text-gray-600">طاولات</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <span>الخدمات</span>
              <div className="absolute hidden group-hover:block top-full right-0 bg-white text-black shadow-md mt-2 rounded-md py-2 px-4">
                <p className="hover:text-gray-600">تصميم داخلي</p>
                <p className="hover:text-gray-600">توصيل</p>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wider">
            جهزلي للأثاث
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5 text-lg">
            <div className="relative group cursor-pointer text-sm">
              <span>العربية ▾</span>
              <div className="absolute hidden group-hover:block bg-white text-black mt-2 left-0 shadow-md rounded-md py-2 px-4">
                <p className="hover:text-gray-600">English</p>
                <p className="hover:text-gray-600">French</p>
              </div>
            </div>
            <Search className="cursor-pointer" size={22} />
            <User className="cursor-pointer" size={22} />
            <ShoppingCart className="cursor-pointer" size={22} />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center justify-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-[80%] bg-black/90 z-50 p-6 text-white flex flex-col gap-6 font-semibold text-lg"
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <button onClick={() => setMenuOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4">
                <span className="cursor-pointer">الغرف</span>
                <span className="cursor-pointer">الأثاث</span>
                <span className="cursor-pointer">الخدمات</span>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4 mt-6">
                <span className="cursor-pointer">🔍 البحث</span>
                <span className="cursor-pointer">👤 الحساب</span>
                <span className="cursor-pointer">🛒 السلة</span>
              </div>

              {/* Language */}
              <div className="mt-auto">
                <span>اللغة: العربية</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
