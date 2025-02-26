
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const PromotionSection: FC = () => {
  return (
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
  );
};

export default PromotionSection;
