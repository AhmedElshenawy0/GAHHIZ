import Banner from "../../components/Home/Banner";
import Category from "../../components/Home/Category";
import Hero from "../../components/Home/Hero";
import Offers from "../../components/Home/Offers";
import Promo from "../../components/Home/Promo";
import BedroomOffer from "../../components/Home/Sofa";

const Home = () => {
  return (
    <div className="bg-[#f3f4f6]">
      <Hero />
      <Category />
      <Offers />
      <BedroomOffer />
      <Promo />
      <Banner />
    </div>
  );
};

export default Home;
