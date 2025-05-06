import Image from 'next/image';

const partners = [
  { name: 'TOTO', logo: '/images/partners/toto.png' },
  { name: 'Nidec', logo: '/images/partners/nidec.png' },
  { name: 'Nippon Paint', logo: '/images/partners/nippon.png' },
  { name: 'ShinEtsu', logo: '/images/partners/shinetsu.png' },
  { name: 'Hanwha', logo: '/images/partners/hanwha.png' },
  { name: 'Honda', logo: '/images/partners/honda.png' },
  { name: 'Goshi', logo: '/images/partners/goshi.png' },
  { name: 'ABB', logo: '/images/partners/abb.png' },
];

const products = [
  { name: 'TỦ DỤNG CỤ CSPS', image: '/images/products/csps.jpg' },
  { name: 'DỤNG CỤ PHÒNG SẠCH', image: '/images/products/cleanroom.jpg' },
  { name: 'DỤNG CỤ TOLSEN', image: '/images/products/tolsen.jpg' },
  { name: 'BÁNH XE', image: '/images/products/caster.jpg' },
  { name: 'THIẾT BỊ NÂNG LỐP', image: '/images/products/lift.jpg' },
  { name: 'ỐNG GIÓ', image: '/images/products/duct.jpg' },
];

export default function ProductPage() {
  return (
    <main className="py-8 bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-green-700">Trang chủ</a>
            <span className="mx-2">/</span>
            <span className="font-semibold">Sản phẩm</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4 w-full">
          <div className="bg-green-700 text-white p-4 font-bold mb-2">ĐỐI TÁC & KHÁCH HÀNG</div>
          <div className="bg-white border border-gray-200 grid grid-cols-2 md:grid-cols-1 gap-4 p-4">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center h-12">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={40}
                  className="object-contain max-h-10"
                />
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Sản phẩm</h1>
          <p className="mb-8 text-gray-700">Chúng tôi cung cấp các dòng sản phẩm thương mại máy công nghiệp, phụ kiện máy công nghiệp chính. Các thiết bị khí nén, thiết bị phòng sạch, thiết bị điện, tủ dụng cụ cho các ngành công nghiệp.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="border rounded-lg overflow-hidden bg-white flex flex-col items-center p-4 shadow-sm">
                <div className="w-full h-48 flex items-center justify-center mb-4 bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={220}
                    height={180}
                    className="object-contain max-h-44"
                  />
                </div>
                <div className="text-center font-medium text-gray-900 uppercase tracking-wide text-sm">
                  {product.name}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 