'use client';

export default function HotlineButton() {
  return (
    <a
      href="tel:0989060987"
      className="fixed bottom-1/4 right-0 bg-green-700 text-white py-2 px-4 rounded-l-lg shadow-lg hover:bg-green-800 transition-colors z-50 flex items-center"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      HOTLINE: 0989.060.987
    </a>
  );
} 