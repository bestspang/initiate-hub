
import { FC, Fragment } from "react";
import { cn } from "@/utils";
import LabelHouse from "../LabelHouse";

type TabWhyUs = "tab1" | "tab2";

interface WhyUsSectionProps {
  tabWhyUs: TabWhyUs;
  onChangeTabWhyUs: (tab: TabWhyUs) => void;
}

const WhyUsSection: FC<WhyUsSectionProps> = ({ tabWhyUs, onChangeTabWhyUs }) => {
  return (
    <section className="why-us">
      <div className="header">
        <LabelHouse label="ทำไมต้องช่างดี" />
        <h1 className="title">
          <span>&quot;เปลี่ยน</span>ทุกปัญหา<span>ในบ้าน</span>
        </h1>
        <h1 className="sub-title">ให้เป็นเรื่องง่ายกับช่างดี&quot;</h1>
      </div>
      <div className="tabs">
        <button
          className={cn("d-btn", { "active": tabWhyUs === "tab1" })}
          onClick={() => onChangeTabWhyUs("tab1")}
        >
          <img src="/images/icon/users.svg" alt="users" />
          Customer
        </button>
        <button
          className={cn("d-btn", { "active": tabWhyUs === "tab2" })}
          onClick={() => onChangeTabWhyUs("tab2")}
        >
          <img src="/images/icon/handyman.svg" alt="handyman" />
          Handyman
        </button>
      </div>
      <div className="content-1">
        {tabWhyUs === "tab1" && (
          <Fragment>
            <div className="item">
              <img
                src="/images/icon/helmet.svg"
                alt="helmet"
              />
              <h5>หาช่างได้ง่ายและสะดวก</h5>
              <p>คัดสรรทีมช่างมืออาชีพ ครบทุกงานบริการติดตั้ง ล้าง รื้อถอน และครอบคลุมพื้นที่ทั่วประเทศ</p>
            </div>
            <div className="item">
              <img
                src="/images/icon/good-two.svg"
                alt="good-two"
              />
              <h5>การันตีคุณภาพการบริการ</h5>
              <p>รับประกันมาตรฐานบริการ ชดเชยหากมีการผิดนัด</p>
            </div>
            <div className="item">
              <img
                src="/images/icon/bell.svg"
                alt="bell"
              />
              <h5>ติดตามบริการได้ Real-Time</h5>
              <p>ตรวจสอบสถานะงานช่างได้แบบเรียลไทม์ และระบบแจ้งเตือนบริการผ่าน SMS</p>
            </div>
            <div className="item">
              <img
                src="/images/icon/monitor-mobile.svg"
                alt="monitor-mobile"
              />
              <h5>เข้าถึงบริการง่าย</h5>
              <p>จองบริการได้ทุกที่ทุกเวลาผ่านแอปพลิเคชั่นช่างดี หรือเว็บไซต์ โกลบอล เฮ้าส์</p>
            </div>
          </Fragment>
        )}
        {tabWhyUs === "tab2" && (
          <Fragment>
            <div className="item">
              <img
                src="/images/icon/phone-coin.svg"
                alt="phone-coin"
              />
              <h5>แพลตฟอร์มหารายได้</h5>
              <p>แพลตฟอร์มหารายได้ ขยายฐานลูกค้าเพิ่มขึ้น</p>
            </div>
            <div className="item">
              <img
                src="/images/icon/good-two.svg"
                alt="good-two"
              />
              <h5>มีโปรไฟล์ และความน่าเชื่อถือ</h5>
              <p>รับประกันมาตรฐานบริการ ชดเชยหากมีการผิดนัด</p>
            </div>
            <div className="item">
              <img
                src="/images/icon/ad.svg"
                alt="ad"
              />
              <h5>ไม่ต้องสร้างแบรนด์ ทำการตลาด</h5>
              <p>ไม่ต้องสร้างแบรนด์ ทำการตลาด</p>
            </div>
            <div className="item">
              <img
                src="/images/icon/medal-star.svg"
                alt="medal-star"
              />
              <h5>ความก้าวหน้าในอาชีพ</h5>
              <p>โอกาสการพัฒนาความก้าวหน้าในอาชีพ</p>
            </div>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default WhyUsSection;
