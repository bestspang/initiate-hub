
import { FC } from "react";

const BusinessService: FC = () => {
  return (
    <section className="b2b">
      <div className="content">
        <div className="content-left">
          <div className="content">
            <h1>บริการภาคธุรกิจ</h1>
            <p>
              บริการงานช่างสำหรับองค์กร โรงแรม คอนโด อพาร์ทเม้นท์
              และสถานประกอบการอื่นๆ ที่ต้องการ Outsource
              งานซ่อมบำรุงให้กับผู้เชี่ยวชาญ
            </p>
            <div className="btn-group">
              <div className="see-detail">
                <a href="#">
                  ดูรายละเอียด
                  <img src="/icon.svg" alt="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content-right">
          <img
            src="/images/application-b2b-mockup.svg"
            alt="application-b2b-mockup"
            className="mockup"
          />
          <img
            src="/images/application-b2b-mockup-mobile.svg"
            alt="application-b2b-mockup-mobile"
            className="mockup-mobile"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessService;
