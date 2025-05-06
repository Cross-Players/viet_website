import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const navItems = [
  { label: 'GIỚI THIỆU', href: '/gioi-thieu' },
  { label: 'SẢN PHẨM', href: '/san-pham' },
  { label: 'XÂY DỰNG', href: '/xay-dung' },
  { label: 'GIA CÔNG', href: '/gia-cong' },
  { label: 'GIẢI PHÁP', href: '/giai-phap' },
  { label: 'TIN TỨC', href: '/tin-tuc' },
  { label: 'DỰ ÁN', href: '/du-an' },
  { label: 'LIÊN HỆ', href: '/lien-he' },
];

export default function MainNav() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Sumitech" className="h-12" />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <button
              className="text-gray-700 hover:text-green-700"
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 