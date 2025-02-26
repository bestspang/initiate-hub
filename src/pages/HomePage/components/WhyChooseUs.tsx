
import { FC } from "react";

const WhyChooseUs: FC = () => {
  return (
    <section className="why-us">
      <div className="content">
        <div className="header">
          <h1 className="title">ทำไมต้องเลือกใช้บริการกับช่างดี</h1>
          <p className="description">เหตุผลที่คุณควรเลือกใช้บริการกับช่างดี</p>
        </div>
        <div className="contents">
          <div className="content-1">
            <img src="/images/icon/analysis.svg" alt="analysis" />
            <h6>ราคามาตรฐาน</h6>
            <p>ค่าบริการชัดเจน โปร่งใส ไม่มีบวกเพิ่ม</p>
          </div>
          <div className="content-2">
            <img src="/images/icon/helmet.svg" alt="helmet" />
            <h6>ช่างมืออาชีพ</h6>
            <p>ผ่านการคัดกรอง และมีประสบการณ์</p>
          </div>
          <div className="content-3">
            <img src="/images/icon/medal-star.svg" alt="medal-star" />
            <h6>รับประกันงาน</h6>
            <p>รับประกันคุณภาพงาน นาน 180 วัน</p>
          </div>
          <div className="content-4">
            <img src="/images/icon/phone-coin.svg" alt="phone-coin" />
            <h6>ชำระสะดวก</h6>
            <p>รองรับการชำระเงินหลากหลายช่องทาง</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
