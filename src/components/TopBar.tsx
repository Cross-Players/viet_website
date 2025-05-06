import Image from 'next/image';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-[#f5f5f5] text-sm py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-8">
          <div className="flex items-center">
            <span className="text-green-700">TƯ VẤN PCCC MIỄN PHÍ:</span>
            <Link href="tel:0989060987" className="ml-2 hover:text-green-700">0989.060.987</Link>
          </div>
          <div className="flex items-center">
            <span className="text-green-700">XÂY DỰNG VÀ M&E:</span>
            <Link href="tel:0945200793" className="ml-2 hover:text-green-700">0945.200.793</Link>
          </div>
          <div className="flex items-center">
            <span className="text-green-700">YÊU CẦU GIA CÔNG CƠ KHÍ:</span>
            <Link href="tel:0976618983" className="ml-2 hover:text-green-700">0976.618.983</Link>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/vi" className="hover:opacity-80">
            <Image src="/images/icons/vietnam-flag.png" alt="Vietnamese" width={24} height={16} className="rounded-sm" />
          </Link>
          <Link href="/en" className="hover:opacity-80">
            <Image src="/images/icons/england-flag.png" alt="English" width={24} height={16} className="rounded-sm" />
          </Link>
          <Link href="/jp" className="hover:opacity-80">
            <Image src="/images/icons/japan-flag.png" alt="Japanese" width={24} height={16} className="rounded-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
} 