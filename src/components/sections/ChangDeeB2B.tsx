
import { FC } from "react";
import LabelHouse from "../LabelHouse";

const ChangDeeB2B: FC = () => {
  return (
    <section className="chang-dee-b2b">
      <div className="header">
        <LabelHouse label="Chang D B2B" />
        <h1 className="title">
          <span>ทำไมต้องใช้</span> ช่างดี B2B
        </h1>
      </div>
      <div className="content">
        <div className="item">
          <img src="/images/icon/user-tick.svg" alt="user-tick" />
          <h5>หาช่างได้ง่ายและสะดวกเพิ่มประสิทธิภาพ</h5>
          <p>บริหารจัดการและติดตามงานได้อย่างมีระบบ</p>
        </div>
        <div className="item">
          <img src="/images/icon/analysis.svg" alt="analysis" />
          <h5>เรียลไทม์</h5>
          <p>วิเคราะห์ข้อมูลแบบเรียลไทม์ เพื่อช่วยให้การดำเนินการหรือตัดสินใจเป็นไปอย่างรวดเร็ว</p>
        </div>
        <div className="item">
          <img src="/images/icon/data-display.svg" alt="data-display" />
          <h5>เทคโนโลยีทันสมัย</h5>
          <p>Chang D ใช้เทคโนโลยีสมัยใหม่เพื่อประสบการณ์ที่ดีที่สุดสำหรับผู้ใช้งานและมาตรฐานการจัดเก็บข้อมูลบนระบบคลาวด์ที่มีความปลอดภัย</p>
        </div>
        <div className="item">
          <img src="/images/icon/monitor-mobile.svg" alt="monitor-mobile" />
          <h5>ใช้งานง่าย</h5>
          <p>ระบบออกแบบมาให้ใช้งานง่ายสะดวกและมีประสิทธิภาพ ใช้งานได้ทันทีบนโทรศัพท์มือถือ โดยไม่ต้องใช้กระดาษหรือคอมพิวเตอร์</p>
        </div>
      </div>
    </section>
  );
};

export default ChangDeeB2B;
