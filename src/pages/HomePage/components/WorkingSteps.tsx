
const WorkingSteps = () => {
  return (
    <section className="step">
      <div className="content">
        <div className="header">
          <h1 className="title">ทำงานง่ายๆ แค่ 4 ขั้นตอน</h1>
          <p className="description">ไม่ยุ่งยาก ไม่ซับซ้อน ทำตามขั้นตอน</p>
        </div>
        <div className="contents">
          <div className="step-1">
            <img src="/images/step/1.svg" alt="step-1" />
            <h6>เลือกบริการ</h6>
            <p>เลือกบริการที่ต้องการจากแอพพลิเคชั่น</p>
          </div>
          <div className="step-2">
            <img src="/images/step/2.svg" alt="step-2" />
            <h6>นัดหมาย</h6>
            <p>เลือกวันและเวลาที่สะดวก</p>
          </div>
          <div className="step-3">
            <img src="/images/step/3.svg" alt="step-3" />
            <h6>ให้บริการ</h6>
            <p>ทีมช่างให้บริการตามที่นัดหมาย</p>
          </div>
          <div className="step-4">
            <img src="/images/step/4.svg" alt="step-4" />
            <h6>ชำระเงิน</h6>
            <p>ชำระค่าบริการหลังงานเสร็จ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingSteps;
