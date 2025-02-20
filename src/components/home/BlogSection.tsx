import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import LabelHouse from "../LabelHouse";

const BlogSection: FC = () => {
  return (
    <section className="blog">
      <div className="header">
        <LabelHouse className="sub-title" label="บทความช่างดี" />
        <div className="title">
          <div />
          <h1>
            <span>Home</span> Idea
          </h1>
          <a href="#" className="view-more">
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
  );
};

export default BlogSection;
