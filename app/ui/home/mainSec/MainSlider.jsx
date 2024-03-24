"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slides from "./Slides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"
import SlidesSeclton from "./SlidesSeclton"

const MainSlider = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Tickets`);
        setData(response.data.tickets);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (!data) {
    return <SlidesSeclton />;
  }
  const filteredData = data.filter((item) => item.category === "main slider");

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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        >
          {filteredData.map((filteredData, _index) => (
              <SwiperSlide key={_index}>
                <Slides id={_index}  ticket={filteredData} />
              </SwiperSlide>
            ))}
        </Swiper>
   
    </div>
  );
};

export default MainSlider;
