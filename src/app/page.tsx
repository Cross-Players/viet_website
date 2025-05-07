import Link from "next/link";
import dynamic from 'next/dynamic';

const ProductService = dynamic(() => import('@/components/ProductService'), {

});
const Projects = dynamic(() => import('@/components/Projects'), {

});
const Partners = dynamic(() => import('@/components/Partners'), {
});

export default function Home() {
  return (
    <main>
      {/* Hero Banner Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="/images/banner.jpg"
            alt="Industrial Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-white">SUMITECH</span>
              <br />
              INDUSTRY JOINT STOCK COMPANY
            </h1>
            <p className="text-2xl mb-8">
              Safety - Master - Innovation
            </p>
            <div className="flex space-x-4">
              <Link href="/contact" className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors">Contact Us</Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-700 transition-colors">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Giới thiệu</h2>
              <h3 className="text-4xl font-bold text-green-700 mb-6">VỀ CHÚNG TÔI</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sumitech luôn tâm niệm triết lý: lòng tin của khách hàng và tài sản vô giá, và chúng tôi nỗ lực từng giờ để theo đuổi triết lý đó. Sumitech đem đến giải pháp trọn gói về nhà xưởng cho khách hàng. Từ khâu tư vấn, thiết kế bản vẽ 2D, 3D, thi công, hoàn thiện; lắp đặt hệ thống điện, khí, nước, PCCC; bảo trì, tu sửa, cải tạo; cung cấp vật tư, thiết bị,... Chúng tôi cam kết cung cấp giải pháp & dịch vụ tối ưu cho nhà xưởng của quý khách.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
              >
                Xem thêm
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Right Column - YouTube Video */}
            <div className="md:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Công ty Cổ phần Công nghiệp Sumitech"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products and Services Section */}
      <ProductService />

      {/* Projects Section */}
      <Projects />

      {/* Partners Section */}
      <Partners />
    </main>
  );
}
