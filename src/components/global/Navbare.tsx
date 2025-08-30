import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "غرف النوم", path: "/bedroom" },
    { name: "غرف المعيشة", path: "/living" },
    { name: "غرف السفرة", path: "/dining" },
    { name: "غرف الأطفال", path: "/kids" },
  ];

  return (
    <header
      dir="rtl"
      className="w-full font-arabic bg-[#FDFDFD] border-b border-gray-200 z-50"
    >
      {/* Promo Banner */}
      <div className="bg-[#F2F2F2] text-black text-sm text-center py-2 font-semibold">
        🎉 عروض خاصة لفترة محدودة – تسوق الآن!
      </div>

      {/* Navbar */}
      <nav className="relative px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Nav Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`transition-colors duration-200 ${
                pathname === path ? "text-black font-bold" : "hover:text-black"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-extrabold text-black tracking-widest">
          جهزلي
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5 text-gray-700">
          <button aria-label="بحث" className="hover:text-black">
            <Search size={20} />
          </button>
          <button aria-label="الحساب" className="hover:text-black">
            <User size={20} />
          </button>
          <button aria-label="السلة" className="hover:text-black">
            <ShoppingCart size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            aria-label="فتح القائمة"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 px-6 pt-20 pb-10 flex flex-col gap-6 shadow-lg"
          >
            {navItems.map(({ name, path }) => (
              <Link
                to={path}
                key={path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-semibold border-b pb-3 ${
                  pathname === path ? "text-black" : "text-gray-800"
                }`}
              >
                {name}
              </Link>
            ))}
            <div className="flex gap-6 mt-8 text-gray-700">
              <button aria-label="بحث" className="hover:text-black">
                <Search size={22} />
              </button>
              <button aria-label="الحساب" className="hover:text-black">
                <User size={22} />
              </button>
              <button aria-label="السلة" className="hover:text-black">
                <ShoppingCart size={22} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
