'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Name */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image src="/images/logo.png" alt="Sumitech" width={150} height={80} className="mr-3" />
            </Link>
            <h2 className="text-xl font-bold mb-4">
              CÔNG TY CỔ PHẦN CÔNG NGHIỆP SUMITECH
            </h2>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              TRỤ SỞ CHÍNH
            </h3>
            <p className="text-gray-300 mb-4">
              Tầng 4, Tòa nhà UDIC Riverside 1, số 122 phố Vĩnh Tuy, phường Vĩnh Tuy, quận Hai Bà Trưng, thành phố Hà Nội
            </p>

            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              VĂN PHÒNG GIAO DỊCH
            </h3>
            <p className="text-gray-300 mb-4">
              P1702, tòa N01A, K35 Tân Mai, Hoàng Mai, Hà Nội
            </p>
          </div>

          {/* Factory and Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m14-10v.01M17 21h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2" />
              </svg>
              FACTORY
            </h3>
            <p className="text-gray-300 mb-6">
              Phương Trạch, Xã Vĩnh Ngọc, huyện Đông Anh, Hà Nội
            </p>

            <h3 className="text-lg font-semibold mb-4">LIÊN HỆ</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info.sumitechvn@gmail.com</p>
              <p>Phone: 024 7108 8838 - 0989060987</p>
              <p>MST: 0103139638</p>
            </div>
          </div>

          {/* Sales Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CHÍNH SÁCH BÁN HÀNG</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/policy" className="text-blue-400 hover:text-blue-300">
                  Chính sách chung
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                  Chính sách bảo mật thông tin
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-blue-400 hover:text-blue-300">
                  Liên hệ góp ý với Sumitech
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-blue-400 hover:text-blue-300">
                  Sơ đồ trang web
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src="/images/dmca-badge.png"
                alt="DMCA Protected"
                width={100}
                height={30}
              />
              <Image
                src="/images/bo-cong-thuong.png"
                alt="Đã thông báo Bộ Công Thương"
                width={100}
                height={30}
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            Copyright 2025 © Sumitech
          </p>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Phone',
    href: 'tel:0989060987',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]; 