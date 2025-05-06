'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    id: 1,
    title: 'CUNG CẤP THIẾT BỊ & VẬT TƯ',
    image: '/images/products/equipment.jpg',
    items: ['Dụng cụ cầm tay Tolsen', 'Tủ dụng cụ CSPS', 'Thiết bị công nghiệp']
  },
  {
    id: 2,
    title: 'XÂY DỰNG - LẮP ĐẶT',
    image: '/images/products/construction.jpg',
    items: ['Nhà xưởng', 'Hệ thống điện', 'Hệ thống PCCC']
  },
  {
    id: 3,
    title: 'TƯ VẤN THIẾT KẾ',
    image: '/images/products/design.jpg',
    items: ['Thiết kế 2D, 3D', 'Tư vấn giải pháp', 'Tối ưu chi phí']
  }
];

export default function ProductService() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">
            SẢN PHẨM - DỊCH VỤ
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-12"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold text-center px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {service.items.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-green-700 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
} 