
import { FC, Fragment } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner1 from "../components/sections/Banner1";
import Banner2 from "../components/sections/Banner2";
import ServicesSection from "../components/sections/ServicesSection";
import WhyUs from "../components/sections/WhyUs";
import PromotionBanner from "../components/sections/PromotionBanner";
import Promotion from "../components/sections/Promotion";
import Workings from "../components/sections/Workings";
import ServiceStep from "../components/sections/ServiceStep";
import ChangDeeB2B from "../components/sections/ChangDeeB2B";
import ChatNow from "../components/sections/ChatNow";
import Blog from "../components/sections/Blog";

const HomePage: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-home">
        <Banner1 />
        <Banner2 />
        <ServicesSection />
        <PromotionBanner />
        <Promotion />
        <Workings />
        <WhyUs />
        <ServiceStep />
        <ChangDeeB2B />
        <ChatNow />
        <Blog />
        <Footer />
      </div>
    </Fragment>
  );
};

export default HomePage;
