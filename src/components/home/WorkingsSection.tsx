import { FC } from "react";
import { Marquee } from "@devnomic/marquee";

const WorkingsSection: FC = () => {
  return (
    <section className="workings">
      <div className="container">
        <div className="content-left">
          <div className="content">
            <p className="text-house">ผลงานที่ผ่านมาของช่างดี</p>
            <div className="header">
              <h1 className="title">
                ทีมช่าง<span>มืออาชีพ</span>
              </h1>
              <h6 className="sub-title">คุณภาพที่มั่นใจได้</h6>
            </div>
            <a href="#" className="view-more">
              ดูทั้งหมด
            </a>
          </div>
          <img src="/images/workings/technician.svg" alt="technician" />
        </div>
        <div className="content-right">
          <Marquee
            fade={true}
            direction="up"
            pauseOnHover
            className="marquee h-[900px] [--duration:15s]"
          >
            <div className="workings-item">
              <img
                src="/images/workings/1.svg"
                alt="workings-1"
              />
              <div className="description">
                <p>บริการทำความสะอาด</p>
                <h6>บ้านคุณบัณทัต</h6>
                <a href="#"></a>
              </div>
              <div className="view-detail-backdrop" />
            </div>
            <div className="workings-item">
              <img
                src="/images/workings/2.svg"
                alt="workings-2"
              />
              <div className="description">
                <p>บริการทำความสะอาด</p>
                <h6>บ้านคุณบัณทัต</h6>
                <a href="#"></a>
              </div>
              <div className="view-detail-backdrop" />
            </div>
            <div className="workings-item">
              <img
                src="/images/workings/3.svg"
                alt="workings-3"
              />
              <div className="description">
                <p>บริการกำจัดปลวก</p>
                <h6>บ้านคุณบัณทัต</h6>
                <a href="#"></a>
              </div>
              <div className="view-detail-backdrop" />
            </div>
          </Marquee>
          <Marquee
            fade={true}
            direction="up"
            reverse
            pauseOnHover
            className="marquee h-[900px] [--duration:15s]"
          >
            <div className="workings-item">
              <img
                src="/images/workings/4.svg"
                alt="workings-4"
              />
              <div className="description">
                <p>บริการทำความสะอาด</p>
                <h6>บ้านคุณบัณทัต</h6>
                <a href="#"></a>
              </div>
              <div className="view-detail-backdrop" />
            </div>
            <div className="workings-item">
              <img
                src="/images/workings/5.svg"
                alt="workings-5"
              />
              <div className="description">
                <p>บริการติดตั้งเครื่องปรับอากาศ</p>
                <h6>บ้านคุณบัณทัต</h6>
                <a href="#"></a>
              </div>
              <div className="view-detail-backdrop" />
            </div>
            <div className="workings-item">
              <img
                src="/images/workings/6.svg"
                alt="workings-6"
              />
              <div className="description">
                <p>บริการทำความสะอาด</p>
                <h6>บ้านคุณบัณทัต</h6>
                <a href="#"></a>
              </div>
              <div className="view-detail-backdrop" />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default WorkingsSection;
