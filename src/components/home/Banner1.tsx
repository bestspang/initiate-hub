
import { FC } from "react";
import "./styles/Banner1.css";

const Banner1: FC = () => {
  return (
    <section className="banner-1">
      <div className="content">
        <p className="chang-dee">
          <span>"ช่างดี"</span>
          {`บริการครบ \n จบเรื่องบ้าน`}
        </p>
        <div className="presenter">
          <div className="content">
            <img src="/images/banner-1/presenter.svg" alt="presenter" />
          </div>
        </div>
        <div className="description">
          <p className="service">
            บริการ
            <span>ครอบคลุมทุกพื้น</span>
          </p>
          <hr />
          <p className="insurance">
            {`รับประกันภายใต้ \n แบรนด์ Global`}
            <span>180 วัน</span>
          </p>
        </div>
        <div className="powered-by">
          <span>Powered by</span>
          <img src="/global-house.svg" alt="global-house" />