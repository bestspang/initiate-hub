import { Marquee } from "@devnomic/marquee";

const ServicesSection = () => {
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
        <Marquee
          fade={true}
          pauseOnHover
        >
          <div className="item">
            <div className="image">
              <img
                src="/images/services/1.svg"
                alt="service"
              />
            </div>
            <p className="label">ล้างแอร์</p>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/services/2.svg"
                alt="service"
              />
            </div>
            <p className="label">ติดตั้งเครื่องทำน้ำอุ่น</p>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/services/3.svg"
                alt="service"
              />
            </div>
            <p className="label">ติดตั้งปั๊มน้ำ</p>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/services/4.svg"
                alt="service"
              />
            </div>
            <p className="label">ทาสี</p>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/services/5.svg"
                alt="service"
              />
            </div>
            <p className="label">ติดตั้งเครื่องปรับอากาศ</p>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/services/6.svg"
                alt="service"
              />
            </div>
            <p className="label">กำจัดปลวก</p>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/services/7.svg"
                alt="service"
              />
            </div>
            <p className="label">ติดตั้งสุขภัณฑ์</p>
          </div>
          <div className="item">
            <div className="image">
              <img
                src="/images/services/8.svg"
                alt="service"
              />
            </div>
            <p className="label">ติดตั้งผ้าม่าน</p>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ServicesSection;
