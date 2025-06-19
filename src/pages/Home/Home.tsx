import Banner from "../../components/Home/Banner";
import Category from "../../components/Home/Category";
import LightSoundDecosSection from "../../components/Home/Feature";
import Hero from "../../components/Home/Hero";
import Offers from "../../components/Home/Offers";
import Promo from "../../components/Home/Promo";
import ShowCase from "../../components/Home/ShowCase";

const Home = () => {
  return (
    <div className="bg-[#fefbf9] relative">
      <div className="absolute inset-0 bg-[url('/wood-pattern.png')] bg-repeat opacity-80 pointer-events-none z-0" />

      <Hero />
      <Category />
      <Offers />
      <Promo />
      <Banner />
      <ShowCase />
      <LightSoundDecosSection />
    </div>
  );
};

export default Home;
