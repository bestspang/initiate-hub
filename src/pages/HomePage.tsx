
import { FC, Fragment, useEffect, useState } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner1 from "../components/home/Banner1";
import Banner2 from "../components/home/Banner2";
import ServicesSection from "../components/home/ServicesSection";
import PromotionSection from "../components/home/PromotionSection";
import WorkingsSection from "../components/home/WorkingsSection";
import WhyUsSection from "../components/home/WhyUsSection";
import ServiceStepSection from "../components/home/ServiceStepSection";
import BlogSection from "../components/home/BlogSection";

type TabWhyUs = "tab1" | "tab2";

const HomePage: FC = () => {
  const [tabWhyUs, setTabWhyUs] = useState<TabWhyUs>("tab1");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const onChangeTabWhyUs = (tabActive: TabWhyUs): void => {
    setTabWhyUs(tabActive);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Fragment>
      <Navbar />
      <div className="container-home">
        <Banner1 />
        <Banner2
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setIsPaused={setIsPaused}
        />
        <ServicesSection />
        <PromotionSection />
        <WorkingsSection />
        <WhyUsSection tabWhyUs={tabWhyUs} onChangeTabWhyUs={onChangeTabWhyUs} />
        <ServiceStepSection />
        <BlogSection />
      </div>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
