import { Fragment, useEffect, useState } from "react";
import { Marquee } from "@devnomic/marquee";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import LabelHouse from "../components/LabelHouse";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { cn } from "../utils";

const HomePage = () => {
  const [tabWhyUs, setTabWhyUs] = useState("tab1");
  const onChangeTabWhyUs = (tabActive) => {
    setTabWhyUs(tabActive);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Fragment>
      <Navbar />
      <div className="container-home">
        <section className="banner-1">
          <div className="content">
            <p className="chang-dee">
              <span>“ช่างดี”</span>
              {`บริการครบ \n จบเรื่องบ้าน`}
            </p>
            <div className="presenter">
              <div className="content">
                <img
                  src="/images/banner-1/presenter.svg"
                  alt="presenter"
                />
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
              <img
                src="/global-house.svg"
                alt="global-house"
              />
            </div>
          </div>
        </section>
        <section className="banner-2">
          <div className="content-left">
            <img
              src="/images/application-mockup.svg"
              alt="application-mockup"
            />
          </div>
          <div className="content-right">
            <div className="content">
              <div className="chang-dee-application">
                <img
                  src="/icon-app.svg"
                  alt="icon-app"
                />
                CHANG D Application
              </div>
              <div className="slide">
                <div
                  className={cn("service-change-dee", activeIndex === 0 && "active")}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setActiveIndex(0);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <h1>บริการช่างดี</h1>
                  <p>ศูนย์รวมบริการ งานช่าง งานติดตั้งมีให้เลือกใช้บริการ ได้ง่ายและครบครัน</p>
                </div>
                <div
                  className={cn("product", activeIndex === 1 && "active")}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setActiveIndex(1);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <h1>สินค้าโปรดี</h1>
                  <p>สินค้าจัดโปรโมชั่น ราคาพิเศษ ซึ่งเป็นสินที่คัดสรรมา มากกว่า 100 รายการ </p>
                </div>
                <div
                  className={cn("market", activeIndex === 2 && "active")}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setActiveIndex(2);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <h1>ตลาดนัดช่าง</h1>
                  <p>แหล่งรวมช่างทุกประเภท ที่พร้อมให้บริการทั่วประเทศ หาช่างง่าย สะดวกครบทุกเรื่องช่าง</p>
                </div>
              </div>
              <div className="download-now">
                <h6>ดาวน์โหลดเลย</h6>
                <div className="btn-group">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/app-store.svg"
                      alt="app-store"
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/google-play.svg"
                      alt="google-play"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="chang-d-services">
          <div className="header">
            <h1 className="title">ช่างดีบริการครบ</h1>
            <h6 className="sub-title">จบเรื่องบ้าน</h6>
            <p className="description">
              “ศูนย์รวมงานช่าง คัดสรรทุกบริการเรื่องบ้าน ติดตั้ง รื้อถอน ล้างทำความสะอาด และกำจัดปลวก
              บริการโดยทีมช่างมืออาชีพ รับประกันมาตรฐานบริการ&quot;
            </p>
          </div>
          <div className="service-lists">
            <Marquee
              fade={true}
              pauseOnHover
            >
              <div className="service-item">
                <img
                  src="/images/chang-d-services/1.svg"
                  alt="services-1"
                />
                <span>บริการ</span>
                <p>ติดตั้งกลอนดิจิทัล</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/2.svg"
                  alt="services-2"
                />
                <span>บริการ</span>
                <p>สำรวจหน้างาน</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/3.svg"
                  alt="services-3"
                />
                <span>บริการ</span>
                <p>ปั๊มน้ำ-ถังน้ำ</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/4.svg"
                  alt="services-4"
                />
                <span>บริการ</span>
                <p>เครื่องปรับอากาศ</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/5.svg"
                  alt="services-5"
                />
                <span>บริการ</span>
                <p>รางน้ำฝน</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/6.svg"
                  alt="services-6"
                />
                <span>บริการ</span>
                <p>เครื่องกรองน้ำ</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/7.svg"
                  alt="services-7"
                />
                <span>บริการ</span>
                <p>พวงหรีด</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/8.svg"
                  alt="services-8"
                />
                <span>บริการ</span>
                <p>เครื่องน้ำอุ่น-น้ำร้อน</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/9.svg"
                  alt="services-9"
                />
                <span>บริการ</span>
                <p>สุขภัณฑ์</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/10.svg"
                  alt="services-10"
                />
                <span>บริการ</span>
                <p>เครื่องใช้ในครัว</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/11.svg"
                  alt="services-11"
                />
                <span>บริการ</span>
                <p>กำจัดปลวก</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/12.svg"
                  alt="services-12"
                />
                <span>บริการ</span>
                <p>ทำความสะอาด</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/13.svg"
                  alt="services-13"
                />
                <span>บริการ</span>
                <p>เครื่องซักผ้า</p>
              </div>
              <div className="service-item">
                <img
                  src="/images/chang-d-services/14.svg"
                  alt="services-14"
                />
                <span>บริการ</span>
                <p>อื่นๆ</p>
              </div>
            </Marquee>
          </div>
        </section>
        <section className="banner-promotion">
          <Swiper
            spaceBetween={16}
            pagination={true}
            modules={[Pagination]}
          >
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
        <section className="why-us">
          <div className="header">
            <LabelHouse label="ทำไมต้องช่างดี" />
            <h1 className="title">
              <span>&quot;เปลี่ยน</span>ทุกปัญหา<span>ในบ้าน</span>
            </h1>
            <h1 className="sub-title">ให้เป็นเรื่องง่ายกับช่างดี&quot;</h1>
          </div>
          <div className="tabs">
            <button
              className={cn("d-btn", { "active": tabWhyUs === "tab1" })}
              onClick={() => onChangeTabWhyUs("tab1")}
            >
              <img
                src="/images/icon/users.svg"
                alt="users"
              />
              Customer
            </button>
            <button
              className={cn("d-btn", { "active": tabWhyUs === "tab2" })}
              onClick={() => onChangeTabWhyUs("tab2")}
            >
              <img
                src="/images/icon/handyman.svg"
                alt="handyman"
              />
              Handyman
            </button>
          </div>
          <div className="content-1">
            {tabWhyUs === "tab1" && (
              <Fragment>
                <div className="item">
                  <img
                    src="/images/icon/helmet.svg"
                    alt="helmet"
                  />
                  <h5>หาช่างได้ง่ายและสะดวก</h5>
                  <p>คัดสรรทีมช่างมืออาชีพ ครบทุกงานบริการติดตั้ง ล้าง รื้อถอน และครอบคลุมพื้นที่ทั่วประเทศ</p>
                </div>
                <div className="item">
                  <img
                    src="/images/icon/good-two.svg"
                    alt="good-two"
                  />
                  <h5>การันตีคุณภาพการบริการ</h5>
                  <p>รับประกันมาตรฐานบริการ ชดเชยหากมีการผิดนัด</p>
                </div>
                <div className="item">
                  <img
                    src="/images/icon/bell.svg"
                    alt="bell"
                  />
                  <h5>ติดตามบริการได้ Real-Time</h5>
                  <p>ตรวจสอบสถานะงานช่างได้แบบเรียลไทม์ และระบบแจ้งเตือนบริการผ่าน SMS</p>
                </div>
                <div className="item">
                  <img
                    src="/images/icon/monitor-mobile.svg"
                    alt="monitor-mobile"
                  />
                  <h5>เข้าถึงบริการง่าย</h5>
                  <p>จองบริการได้ทุกที่ทุกเวลาผ่านแอปพลิเคชั่นช่างดี หรือเว็บไซต์ โกลบอล เฮ้าส์</p>
                </div>
              </Fragment>
            )}
            {tabWhyUs === "tab2" && (
              <Fragment>
                <div className="item">
                  <img
                    src="/images/icon/phone-coin.svg"
                    alt="phone-coin"
                  />
                  <h5>แพลตฟอร์มหารายได้</h5>
                  <p>แพลตฟอร์มหารายได้ ขยายฐานลูกค้าเพิ่มขึ้น</p>
                </div>
                <div className="item">
                  <img
                    src="/images/icon/good-two.svg"
                    alt="good-two"
                  />
                  <h5>มีโปรไฟล์ และความน่าเชื่อถือ</h5>
                  <p>รับประกันมาตรฐานบริการ ชดเชยหากมีการผิดนัด</p>
                </div>
                <div className="item">
                  <img
                    src="/images/icon/ad.svg"
                    alt="ad"
                  />
                  <h5>ไม่ต้องสร้างแบรนด์ ทำการตลาด</h5>
                  <p>ไม่ต้องสร้างแบรนด์ ทำการตลาด</p>
                </div>
                <div className="item">
                  <img
                    src="/images/icon/medal-star.svg"
                    alt="medal-star"
                  />
                  <h5>ความก้าวหน้าในอาชีพ</h5>
                  <p>โอกาสการพัฒนาความก้าวหน้าในอาชีพ</p>
                </div>
              </Fragment>
            )}
          </div>
        </section>
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
        <section className="partner">
          <LabelHouse label="พันธมิตร ทางธุรกิจของเรา" />
          <div className="partner-lists">
            <Marquee
              fade={true}
              pauseOnHover
            >
              <div className="partner-item">
                <img
                  src="/images/partner/samsung.svg"
                  alt="samsung"
                />
              </div>
              <div className="partner-item">
                <img
                  src="/images/partner/verno.svg"
                  alt="verno"
                />
              </div>
              <div className="partner-item">
                <img
                  src="/images/partner/duraone.svg"
                  alt="duraone"
                />
              </div>
              <div className="partner-item">
                <img
                  src="/images/partner/servishero.svg"
                  alt="servishero"
                />
              </div>

              <div className="partner-item">
                <img
                  src="/images/partner/q-chang.svg"
                  alt="q-chang"
                />
              </div>
              <div className="partner-item">
                <img
                  src="/images/partner/windsor.svg"
                  alt="windsor"
                />
              </div>
              <div className="partner-item">
                <img
                  src="/images/partner/scg.svg"
                  alt="scg"
                />
              </div>
              <div className="partner-item">
                <img
                  src="/images/partner/ok.svg"
                  alt="ok"
                />
              </div>
            </Marquee>
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
