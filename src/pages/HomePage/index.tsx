
import { Fragment } from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner1 from "./components/Banner1";
import Banner2 from "./components/Banner2";
import ServicesSection from "./components/ServicesSection";
import PromotionBanner from "./components/PromotionBanner";
import WorkingSteps from "./components/WorkingSteps";
import WhyChooseUs from "./components/WhyChooseUs";
import B2BService from "./components/B2BService";
import PartnerSection from "./components/PartnerSection";
import BlogSection from "./components/BlogSection";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="container-home">
        <Banner1 />
        <Banner2 />
        <ServicesSection />
        <PromotionBanner />
        <WorkingSteps />
        <WhyChooseUs />
        <B2BService />
        <PartnerSection />
        <BlogSection />
      </main>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
