"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"
import Link from "next/link";

const PostsSlider = () => {
    const { data, loading } = useDataFetching("/api/Posts", -5, 6);

    if (loading) {
        return <SpecialCardsSkeleton />
    }
    return (
        <div>
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
                    {data?.map((item) => (
                        <SwiperSlide key={item._id}>
                            <Link href={`/Posts/${post._id}`} className="w-full h-full flex justify-center items-center">
                                {item.title}
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default PostsSlider