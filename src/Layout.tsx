import { Outlet } from "react-router-dom";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbare";
// import Navbar from "./components/global/Navbar";

const Layout = () => {



  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
