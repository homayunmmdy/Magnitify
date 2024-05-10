"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"


const AdsSlider = ({ ads }) => {
    return (
        <div className="sm:p-3">
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                effect="fade"
                spaceBetween={4}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                {ads?.map((adv) => (
                    <SwiperSlide key={adv.id}>
                        <div className="w-full h-full">
                            <div id={adv.adsId}></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AdsSlider;