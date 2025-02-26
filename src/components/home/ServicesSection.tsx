
import { FC } from "react";

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
        <div className="group flex gap-[1rem] overflow-hidden flex-row" 
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, transparent 100%)"
          }}>
          <div className="flex justify-around gap-[1rem] [--gap:1rem] shrink-0 animate-marquee-left flex-row group-hover:[animation-play-state:paused]">
            {[...Array(14)].map((_, index) => (
              <div key={`service-${index + 1}`} className="service-item">
                <img
                  src={`/images/chang-d-services/${index + 1}.svg`}
                  alt={`services-${index + 1}`}
                />
                <span>บริการ</span>
                <p>ติดตั้งกลอนดิจิทัล</p>
              </div>
            ))}
          </div>
          <div className="flex justify-around gap-[1rem] [--gap:1rem] shrink-0 animate-marquee-left flex-row group-hover:[animation-play-state:paused]">
            {[...Array(14)].map((_, index) => (
              <div key={`service-${index + 1}-duplicate`} className="service-item">
                <img
                  src={`/images/chang-d-services/${index + 1}.svg`}
                  alt={`services-${index + 1}`}
                />
                <span>บริการ</span>
                <p>ติดตั้งกลอนดิจิทัล</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
