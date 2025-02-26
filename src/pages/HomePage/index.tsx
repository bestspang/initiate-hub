
import { FC, Fragment } from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesSection from "./components/ServicesSection";
import PromotionSection from "./components/PromotionSection";
import MainBanner from "./components/MainBanner";
import AppBanner from "./components/AppBanner";
import WorkingSteps from "./components/WorkingSteps";
import WhyChooseUs from "./components/WhyChooseUs";
import BusinessService from "./components/BusinessService";
import Partners from "./components/Partners";
import Blog from "./components/Blog";

const HomePage: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="container-home">
        <MainBanner />
        <AppBanner />
        <ServicesSection />
        <PromotionSection />
        <WorkingSteps />
        <WhyChooseUs />
        <BusinessService />
        <Partners />
        <Blog />
      </main>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
