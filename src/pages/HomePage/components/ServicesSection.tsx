
import { FC } from "react";

const ServicesSection: FC = () => {
  return (
    <section className="chang-d-services">
      <div className="header">
        <h1 className="title">ช่างดีบริการครบ</h1>
        <h6 className="sub-title">จบเรื่องบ้าน</h6>
        <p className="description">
          "ศูนย์รวมงานช่าง คัดสรรทุกบริการเรื่องบ้าน ติดตั้ง รื้อถอน ล้างทำความสะอาด และกำจัดปลวก
          บริการโดยทีมช่างมืออาชีพ รับประกันมาตรฐานบริการ"
        </p>
      </div>
      <div className="service-lists">
        <div className="flex justify-around gap-[1rem] [--gap:1rem] animate-marquee">
          {[...Array(14)].map((_, index) => (
            <div className="service-item" key={index + 1}>
              <img
                src={`/images/chang-d-services/${index + 1}.svg`}
                alt={`service-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
