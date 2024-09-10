import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import img1 from "../assets/bg1.jpg";
import img2 from "../assets/bg2.jpg";
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={true} 
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="carousel__image" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="carousel__image" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="carousel__image" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="carousel__image" src={img2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
