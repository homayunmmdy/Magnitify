"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"

const ads = [
    {
        id: 1,
        adsId: "pos-article-display-94697"
    },
    {
        id: 2,
        adsId: "pos-article-display-94697"
    },
    {
        id: 3,
        adsId: "pos-article-display-94697"
    },
]
const AdsSlider = () => {
    return (
        <div className="sm:p-3">
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                effect="fade"
                spaceBetween={5}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                {ads.map((adv) => (
                    <SwiperSlide key={adv.id}>
                        <div id={adv.adsId}>Test {adv.id}</div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default AdsSlider;