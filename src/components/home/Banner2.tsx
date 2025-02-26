
import { FC } from "react";
import { cn } from "../../utils";

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
          <div className="chang-dee-application">
            <img src="/icon-app.svg" alt="icon-app" />
            CHANG D Application
          </div>
          <div className="slide">
            <div
              className={cn("service-change-dee", activeIndex === 0 && "active")}
              onMouseEnter={() => {
                setIsPaused(true);
                setActiveIndex(0);
              }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <h1>บริการช่างดี</h1>
              <p>ศูนย์รวมบริการ งานช่าง งานติดตั้งมีให้เลือกใช้บริการ ได้ง่ายและครบครัน</p>
            </div>
            <div
              className={cn("product", activeIndex === 1 && "active")}
              onMouseEnter={() => {
                setIsPaused(true);
                setActiveIndex(1);
              }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <h1>สินค้าโปรดี</h1>
              <p>สินค้าจัดโปรโมชั่น ราคาพิเศษ ซึ่งเป็นสินที่คัดสรรมา มากกว่า 100 รายการ </p>
            </div>
            <div
              className={cn("market", activeIndex === 2 && "active")}
              onMouseEnter={() => {
                setIsPaused(true);
                setActiveIndex(2);
              }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <h1>ตลาดนัดช่าง</h1>
              <p>แหล่งรวมช่างทุกประเภท ที่พร้อมให้บริการทั่วประเทศ หาช่างง่าย สะดวกครบทุกเรื่องช่าง</p>
            </div>
          </div>
          <div className="download-now">
            <h6>ดาวน์โหลดเลย</h6>
            <div className="btn-group">
              <a href="https://ecomm.globalhouse.co.th/DirectlinkChd" target="_blank" rel="noopener noreferrer">
                <img src="/images/app-store.svg" alt="app-store" />
              </a>
              <a href="https://apps.apple.com/us/app/ช-างด-บร-การงานช-างครบท-เด-ยว/id1668758616" target="_blank" rel="noopener noreferrer">
                <img src="/images/google-play.svg" alt="google-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
