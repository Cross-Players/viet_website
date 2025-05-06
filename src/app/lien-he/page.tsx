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
    <main className="py-8">
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
        <h1 className="text-3xl font-bold mb-8">LIÊN HỆ</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">SUMITECH INDUSTRY COMPANY</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">HEAD OFFICE:</h3>
                  <p>66 De To Hoang Str, Cau Den Ward, Hai Ba Trung Dist, Ha Noi City</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">LIÊN HỆ</h3>
                  <p>Địa chỉ: Phòng 1702 Tòa N01A, Chung Cư K35, Đường Tân Mai, Quận Hoàng Mai, Hà Nội</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email:</h3>
                  <p>info.sumitechvn@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone:</h3>
                  <p>0989.060.987</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Fax:</h3>
                  <p>024.62761185</p>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors"
                >
                  GỬI LIÊN HỆ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 