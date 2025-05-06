'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = [
  {
    id: 1,
    name: 'ABB',
    logo: '/images/partners/abb.png'
  },
  {
    id: 2,
    name: 'GOSHI',
    logo: '/images/partners/goshi.png'
  },
  {
    id: 3,
    name: 'Hanwha',
    logo: '/images/partners/hanwha.png'
  },
  {
    id: 4,
    name: 'Nidec',
    logo: '/images/partners/nidec.png'
  },
  {
    id: 5,
    name: 'Nippon Paint',
    logo: '/images/partners/nippon.png'
  },
  {
    id: 6,
    name: 'Shiri Etsu',
    logo: '/images/partners/shiri-etsu.png'
  }
];

export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">
            ĐỐI TÁC - KHÁCH HÀNG
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="!py-8"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-32">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
} 