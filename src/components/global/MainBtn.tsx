import { motion } from "framer-motion";
const MainBtn = ({ text }: { text: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 text-white font-bold px-10 py-3 rounded-full shadow-lg"
    >
      {text}
    </motion.button>
  );
};

export default MainBtn;
