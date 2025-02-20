import { FC } from "react";
import { Marquee } from "@devnomic/marquee";

const ServicesSection: FC = () => {
  return (
    <section className="chang-d-services">
      <div className="header">
        <h1 className="title">ช่างดีบริการครบ</h1>
        <h6 className="sub-title">จบเรื่องบ้าน</h6>
        <p className="description">
          "ศูนย์รวมงานช่าง คัดสรรทุกบริการเรื่องบ้าน ติดตั้ง รื้อถอน ล้างทำความสะอาด และกำจัดปลวก
          บริการโดยทีมช่างมืออาชีพ รับประกันมาตรฐานบริการ&quot;
        </p>
      </div>
      <div className="service-lists">
        <Marquee fade={true} pauseOnHover>
          <div className="service-item">
            <img
              src="/images/chang-d-services/1.svg"
              alt="services-1"
            />
            <span>บริการ</span>
            <p>ติดตั้งกลอนดิจิทัล</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/2.svg"
              alt="services-2"
            />
            <span>บริการ</span>
            <p>สำรวจหน้างาน</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/3.svg"
              alt="services-3"
            />
            <span>บริการ</span>
            <p>ปั๊มน้ำ-ถังน้ำ</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/4.svg"
              alt="services-4"
            />
            <span>บริการ</span>
            <p>เครื่องปรับอากาศ</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/5.svg"
              alt="services-5"
            />
            <span>บริการ</span>
            <p>รางน้ำฝน</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/6.svg"
              alt="services-6"
            />
            <span>บริการ</span>
            <p>เครื่องกรองน้ำ</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/7.svg"
              alt="services-7"
            />
            <span>บริการ</span>
            <p>พวงหรีด</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/8.svg"
              alt="services-8"
            />
            <span>บริการ</span>
            <p>เครื่องน้ำอุ่น-น้ำร้อน</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/9.svg"
              alt="services-9"
            />
            <span>บริการ</span>
            <p>สุขภัณฑ์</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/10.svg"
              alt="services-10"
            />
            <span>บริการ</span>
            <p>เครื่องใช้ในครัว</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/11.svg"
              alt="services-11"
            />
            <span>บริการ</span>
            <p>กำจัดปลวก</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/12.svg"
              alt="services-12"
            />
            <span>บริการ</span>
            <p>ทำความสะอาด</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/13.svg"
              alt="services-13"
            />
            <span>บริการ</span>
            <p>เครื่องซักผ้า</p>
          </div>
          <div className="service-item">
            <img
              src="/images/chang-d-services/14.svg"
              alt="services-14"
            />
            <span>บริการ</span>
            <p>อื่นๆ</p>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ServicesSection;
