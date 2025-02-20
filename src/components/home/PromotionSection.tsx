
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import LabelHouse from "../LabelHouse";

const PromotionSection: FC = () => {
  return (
    <>
      <section className="banner-promotion">
        <Swiper spaceBetween={16} pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <img src="/images/banner-promotion.svg" alt="banner-promotion" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/banner-promotion.svg" alt="banner-promotion" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/banner-promotion.svg" alt="banner-promotion" />
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
            <a href="#" className="view-more">
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
    </>
  );
};

export default PromotionSection;
