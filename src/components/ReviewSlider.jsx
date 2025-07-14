import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const reviewImages = [
  '/img/Reviews/Review.png',
  '/img/Reviews/Review2.png',
  '/img/Reviews/Review3.png',
  '/img/Reviews/Review4.png',
  '/img/Reviews/Review5.png',
];

export default function ReviewSlider() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="cursor-grab"
      >
        {reviewImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Review ${idx + 1}`}
              className="w-full max-h-[300px] object-contain rounded-xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
