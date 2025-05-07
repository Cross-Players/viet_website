'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="py-8 bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-green-700">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span>Liên hệ</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Company Information */}
          <div>
            <h1 className="text-3xl font-bold mb-2 text-black">LIÊN HỆ</h1>
            <div className="border-b border-black mb-8"></div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-black">SUMITECH INDUSTRY COMPANY</h2>
              <div className="space-y-4 text-black">
                <div>
                  <span className="font-bold">HEAD OFFICE:</span> <span>66 De To Hoang Str, Cau Den Ward, Hai Ba Trung Dist, Ha Noi City</span>
                </div>
                <div className="font-bold">LIÊN HỆ</div>
                <div>
                  <span className="font-bold">Địa chỉ:</span> Phòng 1702 Tòa N01A, Chung Cư K35, Đường Tân Mai, Quận Hoàng Mai, Hà Nội
                </div>
                <div>
                  <span className="font-bold">Email:</span> info.sumitechvn@gmail.com
                </div>
                <div>
                  <span className="font-bold">Phone:</span> <span className="text-red-600">0989.060.987</span>
                </div>
                <div>
                  <span className="font-bold">Fax:</span> <span className="underline text-blue-700">024.62761185</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Họ & Tên"
                  className="w-full px-4 py-3 border border-[#b8862b] rounded-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Điện thoại"
                  className="w-full px-4 py-3 border border-[#b8862b] rounded-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-[#b8862b] rounded-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nội dung liên hệ"
                  rows={6}
                  className="w-full px-4 py-3 border border-[#b8862b] rounded-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none placeholder-gray-400"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-green-700 text-white px-8 py-3 rounded-none hover:bg-green-800 transition-colors font-semibold text-lg"
                >
                  GỬI LIÊN HỆ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.829130826099!2d105.80479707531345!3d21.07948568058252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe65144a209%3A0xaf7eeca92c256d9e!2sCross%20Technology%20%26%20Education!5e0!3m2!1sen!2s!4v1746603247820!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
} 