import Banner from "../../components/Home/Banner";
import Category from "../../components/Home/Category";
import LightSoundDecosSection from "../../components/Home/Feature";
import Hero from "../../components/Home/Hero";
import Offers from "../../components/Home/Offers";
import Promo from "../../components/Home/Promo";
import Cases from "../../components/Home/Cases";

const Home = () => {
  return (
    <div className="bg-[#fefbf9] relative">
      <Hero />
      <Category />
      <Offers />
      <Promo />
      <Banner />
      <Cases />
      <LightSoundDecosSection />
    </div>
  );
};

export default Home;
