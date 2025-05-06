'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    image: '/images/projects/project1.jpg',
    title: 'Nhà xưởng công nghiệp',
  },
  {
    id: 2,
    image: '/images/projects/project2.jpg',
    title: 'Khu phức hợp văn phòng',
  },
  {
    id: 3,
    image: '/images/projects/project3.jpg',
    title: 'Trung tâm logistics',
  },
  {
    id: 4,
    image: '/images/projects/project4.jpg',
    title: 'Nhà máy sản xuất',
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">
            CÔNG TRÌNH - DỰ ÁN
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 italic">
            (Tôn trọng điều khoản bảo mật, Sumitech không công khai tên chủ đầu tư các dự án)
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
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
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-72">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
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