import {
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="px-6 md:px-14 py-6 md:py-10 text-gray-800 flex flex-col justify-center text-center gap-4"
      style={{
        background: "linear-gradient(to right, #dfcfc2, #dfcfc2)",
        direction: "rtl",
      }}
    >
      <button className="flex justify-center border border-white rounded-full w-fit p-1 mx-auto">
        <FaInstagram color="white" />
      </button>

      <p>contact@furniture-website.eg</p>

      <p className="leading-relaxed">
        نحن نقدم خدماتنا بكل فخر لعملائنا في جميع أنحاء مصر — من القاهرة،
        الإسكندرية، الجيزة، والقاهرة الجديدة، إلى الساحل الشمالي، البحر الأحمر،
        وصعيد مصر. سواء كنت علامة تجارية محلية صاعدة أو شركة عالمية تتوسع في
        منطقة الشرق الأوسط وشمال أفريقيا، فإننا نوفر لك نهجًا مبتكرًا وفعالًا
        يلبي أهدافك وجمهورك المستهدف.
      </p>

      <div className="flex justify-center gap-4 mt-4">
        <FaCcVisa size={32} />
        <FaCcMastercard size={32} />
        <FaCcPaypal size={32} />
      </div>

      <p className="mt-8">
        شركة الأثاث الحديثة ش.ذ.م.م، مسجلة في مصر. السجل التجاري رقم 123456789 |{" "}
        <span className="underline cursor-pointer">سياسة الخصوصية</span>
      </p>

      <p className="text-sm text-center text-white">
        جميع الحقوق محفوظة © <span className="font-medium">الأثاث الحديث</span>{" "}
        2025 — برمجة وتصميم{" "}
        <span className="text-white hover:text-gray-200 transition font-bold">
          ريكاز
        </span>
      </p>
    </div>
  );
};

export default Footer;
