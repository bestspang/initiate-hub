
import { FC } from "react";
import LabelHouse from "../LabelHouse";

const ServiceStep: FC = () => {
  return (
    <section className="service-step">
      <div className="header">
        <LabelHouse label="ขั้นตอนการใช้บริการ" />
        <h1>ขั้นตอนง่ายๆ</h1>
        <h6>งานซ่อมในธุรกิจของคุณ</h6>
      </div>
      <div className="content">
        <div className="step-item">
          <div className="info">
            <div className="number">1</div>
            <h1>เลือกหรือค้นหาบริการ</h1>
            <p>{`เลือกบริการที่คุณ\nต้องการใช้บริการ`}</p>
          </div>
          <img src="/images/step/1.svg" alt="step-1" />
        </div>
        <div className="step-item">
          <div className="info">
            <div className="number">2</div>
            <h1>จองคิวบริการ</h1>
            <p>{`เลือกวันที่และเวลา\nที่ต้องการรับบริการ`}</p>
          </div>
          <img src="/images/step/2.svg" alt="step-2" />
        </div>
        <div className="step-item">
          <div className="info">
            <div className="number">3</div>
            <h1>ชำระเงิน</h1>
            <p>{`เลือกช่องทางชำระเงิน\nได้หลากหลาย`}</p>
          </div>
          <img src="/images/step/3.svg" alt="step-3" />
        </div>
        <div className="step-item">
          <div className="info">
            <div className="number">4</div>
            <h1>ประเมินผลงาน</h1>
            <p>{`ติดตามสถานะงานบริการ\nและประเมินผลงานช่าง`}</p>
          </div>
          <img src="/images/step/4.svg" alt="step-4" />
        </div>
      </div>
    </section>
  );
};

export default ServiceStep;
