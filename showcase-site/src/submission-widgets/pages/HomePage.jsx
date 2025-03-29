import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import FoodListSwiper from "./FoodListSwiper";
import "./HomePage.css";

const modules = ["emergency", "attention", "safe"];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    rubberband: false, // 不要滑太遠彈回
    dragSpeed: 1.2,    // 稍微增快拖動速度
    defaultAnimation: {
      duration: 500,   // 動畫時間
      easing: (t) => t * (2 - t), // ease-out
    },
    threshold: 15,     // 靈敏度（越低越容易切頁）
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  return (
    <div className="homepage-container">
      <img src="/title.png" alt="BestBefore" className="homepage-title-image" />
      <div ref={sliderRef} className="keen-slider module-swiper">
        {modules.map((mod, i) => (
          <div key={i} className="keen-slider__slide module-slide">
            <FoodListSwiper category={mod} />
          </div>
        ))}
      </div>
    </div>
  );
}
