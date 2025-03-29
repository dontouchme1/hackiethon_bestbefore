import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./HomePage.css";
import FoodListSwiper from "./FoodListSwiper";

const modules = ["emergency", "attention", "safe"];

export default function HomePage() {
  return (
    <div className="homepage-container">
      <img src="/title.png" alt="BestBefore" className="homepage-title-image" />

      <Swiper
        className="module-swiper"
        spaceBetween={10}
        slidesPerView={1}
        freeMode={true}
        freeModeSticky={true}
        mousewheel={{
          forceToAxis: true, 
        }}
        nested={true}
        modules={[FreeMode, Mousewheel]}
        freeModeMomentumRatio={0.5}
        resistanceRatio={0.6}
        longSwipesRatio={0.2}
        speed={400}
      >
        {modules.map((mod, index) => (
          <SwiperSlide key={index}>
            <div className="module-slide">
              <FoodListSwiper category={mod} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
