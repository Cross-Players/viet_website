'use client';

import { useState } from 'react';
import Link from 'next/link';

const sidebarItems = [
  { id: 'gioi-thieu', label: 'Giới thiệu chung', href: '#gioi-thieu' },
  { id: 'thu-ngo', label: 'Thư ngỏ', href: '#thu-ngo' },
  { id: 'lich-su', label: 'Lịch sử phát triển', href: '#lich-su' },
  { id: 'tam-nhin', label: 'Tầm nhìn - Sứ mệnh', href: '#tam-nhin' },
  { id: 'so-do', label: 'Sơ đồ tổ chức', href: '#so-do' },
  { id: 'chung-chi', label: 'Chứng chỉ - Giải thưởng', href: '#chung-chi' },
];

export default function IntroductionPage() {
  const [activeSection, setActiveSection] = useState('gioi-thieu');

  return (
    <main className="py-8 bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-green-700">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span>Giới Thiệu</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4">
            <div className="sticky top-24">
              <div className="bg-green-700 text-white p-4">
                <h2 className="text-xl font-bold">GIỚI THIỆU</h2>
              </div>
              <nav className="bg-white border border-gray-200">
                {sidebarItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`block px-4 py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 ${
                      activeSection === item.id ? 'text-green-700 font-semibold' : 'text-gray-700'
                    }`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <section id="gioi-thieu" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">GIỚI THIỆU</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Công ty Cổ phần Công nghiệp SUMITECH (viết tắt là SMI) được thành lập và chính thức đi vào hoạt động từ tháng 12 năm 2008. Trải qua hơn 10 năm xây dựng và phát triển, công ty đã tạo được nhiều uy tín trên thị trường.
                </p>
              </div>
            </section>

            <section id="linh-vuc" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Lĩnh vực hoạt động</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Chúng tôi tự hào là nhà phân phối độc quyền và đại diện bán hàng của nhiều hãng sản xuất hàng đầu thế giới. Đặc biệt là về các thiết bị khí nén, thiết bị phòng sạch, thiết bị điện cho ngành công nghiệp,... Bên cạnh đó chúng tôi còn phát triển mảng xây dựng lắp đặt và gia công cơ khí. SMI đã đạt được nhiều thành tựu nhất định với các dịch vụ đã đang đáp ứng mọi nhu cầu của khách hàng.
                </p>
              </div>
            </section>

            <section id="huong-di" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Hướng đi của Sumitech</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Khách hàng là giá trị cơ bản mà bất kì doanh nghiệp, công ty nào cũng hướng tới. Là kim chỉ nam cho mọi hoạt động của công ty. Với phương châm lấy khách hàng làm trọng tâm, chúng tôi luôn mang tới những giá trị tốt đẹp nhất. Sẽ dành cho quý khách hàng sự hài lòng không chỉ về chất lượng sản phẩm mà còn về thái độ làm việc chuyên nghiệp của chúng tôi.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Được sự tin yêu của quý khách hàng, chúng tôi đã xây dựng được thương hiệu SMI ngày càng lớn mạnh, có chỗ đứng trên thị trường, trở thành nhà cung cấp hàng đầu cho các công ty, các doanh nghiệp trong lĩnh vực công nghiệp ở Việt Nam. Và cung cấp các dịch vụ tốt nhất cho khách hàng.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 