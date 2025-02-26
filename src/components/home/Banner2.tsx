
import { FC } from "react";
import ApplicationInfo from "./banner2/ApplicationInfo";
import SlideContent from "./banner2/SlideContent";
import DownloadSection from "./banner2/DownloadSection";
import "./styles/Banner2.css";

interface Banner2Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setIsPaused: (isPaused: boolean) => void;
}

const Banner2: FC<Banner2Props> = ({ activeIndex, setActiveIndex, setIsPaused }) => {
  return (
    <section className="banner-2">
      <div className="content-left">
        <img src="/images/application-mockup.svg" alt="application-mockup" />
      </div>
      <div className="content-right">
        <div className="content">
          <ApplicationInfo />
          <SlideContent 
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setIsPaused={setIsPaused}
          />
          <DownloadSection />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
