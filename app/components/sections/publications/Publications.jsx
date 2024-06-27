"use client"
import useFetch from '@/app/hooks/useFetch'
import React from 'react'
import PublicationCard from './PublicationCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const publications = () => {
    const { data  } = useFetch('/api/publications');
    const publicationsData = data.slice(8)
    return (
        <>
            <div className=" mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                    <Swiper
                        modules={[Navigation, EffectFade, Autoplay]}
                        effect="fade"
                        spaceBetween={5}
                        slidesPerView={4}
                        navigation
                        loop={true}
                        autoplay={{ delay: 4000 }}
                    >
                        {publicationsData?.map(publication => (
                              <SwiperSlide key={publication._id}>
                                  <PublicationCard publication={publication} />
                              </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default publications