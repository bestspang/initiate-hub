import { FC, Fragment, useEffect, useState } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner1 from "../components/sections/Banner1";
import Banner2 from "../components/sections/Banner2";
import ServicesSection from "../components/sections/ServicesSection";
import WhyUs from "../components/sections/WhyUs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { cn } from "../utils";
import LabelHouse from "../components/LabelHouse";
import { Marquee } from "@devnomic/marquee";

const HomePage: FC = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-home">
        <Banner1 />
        <Banner2 />
        <ServicesSection />
        <section className="banner-promotion">
          <Swiper spaceBetween={16} pagination={true} modules={[Pagination]}>
            <SwiperSlide>
              <img
                src="/images/banner-promotion.svg"
                alt="banner-promotion"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/banner-promotion.svg"
                alt="banner-promotion"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/banner-promotion.svg"
                alt="banner-promotion"
              />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="promotion">
          <div className="header">
            <p className="text-house sub-title">โปรโมชั่น</p>
            <div className="title">
              <div />
              <h1>
                <span>ช่างดี</span>แนะนำสำหรับคุณ
              </h1>
              <a
                href="#"
                className="view-more"
              >
                ดูทั้งหมด
              </a>
            </div>
          </div>
          <div className="promotion-lists">
            <Swiper
              modules={[Pagination]}
              slidesPerView="auto"
              pagination={{ type: "progressbar" }}
              autoHeight={true}
              spaceBetween={16}
            >
              <SwiperSlide>
                <div className="promotion-item">
                  <img
                    src="/images/promotion/1.svg"
                    alt="promotion-1"
                  />
                  <div className="view-detail-backdrop">
                    <a
                      href="#"
                      className="view-more"
                    >
                      ดูรายละเอียด
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="promotion-item">
                  <img
                    src="/images/promotion/2.svg"
                    alt="promotion-2"
                  />
                  <div className="view-detail-backdrop">
                    <a
                      href="#"
                      className="view-more"
                    >
                      ดูรายละเอียด
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="promotion-item">
                  <img
                    src="/images/promotion/3.svg"
                    alt="promotion-3"
                  />
                  <div className="view-detail-backdrop">
                    <a
                      href="#"
                      className="view-more"
                    >
                      ดูรายละเอียด
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="promotion-item">
                  <img
                    src="/images/promotion/4.svg"
                    alt="promotion-4"
                  />
                  <div className="view-detail-backdrop">
                    <a
                      href="#"
                      className="view-more"
                    >
                      ดูรายละเอียด
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
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
                <a
                  href="#"
                  className="view-more"
                >
                  ดูทั้งหมด
                </a>
              </div>
              <img
                src="/images/workings/technician.svg"
                alt="technician"
              />
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
        <WhyUs />
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
              <img
                src="/images/step/1.svg"
                alt="step-1"
              />
            </div>
            <div className="step-item">
              <div className="info">
                <div className="number">2</div>
                <h1>จองคิวบริการ</h1>
                <p>{`เลือกวันที่และเวลา\nที่ต้องการรับบริการ`}</p>
              </div>
              <img
                src="/images/step/2.svg"
                alt="step-2"
              />
            </div>
            <div className="step-item">
              <div className="info">
                <div className="number">3</div>
                <h1>ชำระเงิน</h1>
                <p>{`เลือกช่องทางชำระเงิน\nได้หลากหลาย`}</p>
              </div>
              <img
                src="/images/step/3.svg"
                alt="step-3"
              />
            </div>
            <div className="step-item">
              <div className="info">
                <div className="number">4</div>
                <h1>ประเมินผลงาน</h1>
                <p>{`ติดตามสถานะงานบริการ\nและประเมินผลงานช่าง`}</p>
              </div>
              <img
                src="/images/step/4.svg"
                alt="step-4"
              />
            </div>
          </div>
        </section>
        <section className="chang-dee-b2b">
          <div className="header">
            <LabelHouse label="Chang D B2B" />
            <h1 className="title">
              <span>ทำไมต้องใช้</span> ช่างดี B2B
            </h1>
          </div>
          <div className="content">
            <div className="item">
              <img
                src="/images/icon/user-tick.svg"
                alt="user-tick"
              />
              <h5>หาช่างได้ง่ายและสะดวกเพิ่มประสิทธิภาพ</h5>
              <p>บริหารจัดการและติดตามงานได้อย่างมีระบบ</p>
            </div>
            <div className="item">
              <img
                src="/images/icon/analysis.svg"
                alt="analysis"
              />
              <h5>เรียลไทม์</h5>
              <p>วิเคราะห์ข้อมูลแบบเรียลไทม์ เพื่อช่วยให้การดำเนินการหรือตัดสินใจเป็นไปอย่างรวดเร็ว</p>
            </div>
            <div className="item">
              <img
                src="/images/icon/data-display.svg"
                alt="data-display"
              />
              <h5>เทคโนโลยีทันสมัย</h5>
              <p>
                Chang D
                ใช้เทคโนโลยีสมัยใหม่เพื่อประสบการณ์ที่ดีที่สุดสำหรับผู้ใช้งานและมาตรฐานการจัดเก็บข้อมูลบนระบบคลาวด์ที่มีความปลอดภัย
              </p>
            </div>
            <div className="item">
              <img
                src="/images/icon/monitor-mobile.svg"
                alt="monitor-mobile"
              />
              <h5>ใช้งานง่าย</h5>
              <p>
                ระบบออกแบบมาให้ใช้งานง่ายสะดวกและมีประสิทธิภาพ ใช้งานได้ทันทีบนโทรศัพท์มือถือ
                โดยไม่ต้องใช้กระดาษหรือคอมพิวเตอร์
              </p>
            </div>
          </div>
        </section>
        <section className="chat-now">
          <div className="content">
            <LabelHouse label="บริการภาพธุรกิจ" />
            <h1>ให้เราช่วยดูแล</h1>
            <h6>งานซ่อมในธุรกิจของคุณ</h6>
            <div className="chat-group">
              <a
                href="#"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <button className="d-btn btn-messenger">
                  <img
                    src="/images/social-media/messenger.svg"
                    alt="messenger"
                  />
                  แชทเลย
                </button>
              </a>
              <a
                href="#"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <button className="d-btn btn-line">
                  <img
                    src="/images/social-media/line.svg"
                    alt="line"
                  />
                  แชทกับช่างดี
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="header">
            <LabelHouse
              className="sub-title"
              label="บทความช่างดี"
            />
            <div className="title">
              <div />
              <h1>
                <span>Home</span> Idea
              </h1>
              <a
                href="#"
                className="view-more"
              >
                ดูทั้งหมด
              </a>
            </div>
          </div>
          <div className="blog-lists">
            <Swiper
              modules={[Pagination]}
              slidesPerView="auto"
              pagination={{ type: "progressbar" }}
              autoHeight={true}
              spaceBetween={16}
            >
              <SwiperSlide>
                <div className="blog-item">
                  <img
                    src="/images/blog/1.svg"
                    alt="blog-1"
                  />
                  <div className="detail">
                    <h6 className="title">วิธีกำจัดโคลนและทำความสะอาดหลังน้ำท่วม</h6>
                    <p className="description">
                      Chang D ใช้เทคโนโลยีสมัยใหม่เพื่อประสบการณ์ที่ดี ที่สุดสำหรับผู้ใช้งานและมาตรฐานการจัดเก็บข้อมูล
                      บนระบบคลาวด์ที่มีความปลอดภัย
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-item">
                  <img
                    src="/images/blog/2.svg"
                    alt="blog-2"
                  />
                  <div className="detail">
                    <h6 className="title">ข้อดีของการอาบน้ำอุ่น</h6>
                    <p className="description">
                      เมื่อฤดูหนาวมาถึง การตกแต่งบ้านด้วยโทนสีอบอุ่นช่วยให้บ้านมีความสบายและอบอุ่นมากขึ้น. การเลือกสีใน
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-item">
                  <img
                    src="/images/blog/3.svg"
                    alt="blog-3"
                  />
                  <div className="detail">
                    <h6 className="title">ไอเดียตกแต่งบ้านต้อนรับฤดูหนาว </h6>
                    <p className="description">
                      การอาบน้ำอุ่นช่วยให้ร่างกายและจิตใจผ่อนคลายมากขึ้น นอกจากนี้ยังทำให้ผิวพรรณดีขึ้น
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-item">
                  <img
                    src="/images/blog/4.svg"
                    alt="blog-4"
                  />
                  <div className="detail">
                    <h6 className="title">5 ไอเดีย</h6>
                    <p className="description">
                      เมื่อฤดูหนาวมาถึง การตกแต่งบ้านด้วยโทนสีอบอุ่นช่วยให้บ้านมีความสบายและอบอุ่นมากขึ้น. การเลือกสีใน
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default HomePage;
