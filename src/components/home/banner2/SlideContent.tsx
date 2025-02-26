
import { FC } from "react";
import { cn } from "../../../utils";

interface SlideContentProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  setIsPaused: (isPaused: boolean) => void;
}

const SlideContent: FC<SlideContentProps> = ({ activeIndex, setActiveIndex, setIsPaused }) => {
  return (
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
  );
};

export default SlideContent;
