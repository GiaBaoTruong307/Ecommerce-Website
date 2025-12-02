import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 via-white to-orange-50 px-4">
      <div className="w-full max-w-lg text-center">
        {/* 404 nổi bật */}
        <div className="mb-8 overflow-hidden">
          <h1 className="relative inline-block text-9xl font-black text-gray-200">
            404
            <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-orange-500">
              404
            </span>
          </h1>
        </div>

        {/* Tiêu đề */}
        <h2 className="mb-3 text-3xl font-bold text-gray-800 md:text-4xl">
          Ối! Trang không tìm thấy
        </h2>

        {/* Mô tả vui vẻ */}
        <p className="mb-10 text-lg text-gray-600">
          Có vẻ link bị lỗi hoặc sản phẩm đã "bay màu" khỏi hệ thống rồi
        </p>

        {/* Nút hành động – đẹp lung linh */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {/* Nút chính */}
          <Link
            to="/"
            className="group flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
          >
            <svg
              className="size-5 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Về trang chủ
          </Link>

          {/* Nút phụ */}
          <Link
            to="/collection"
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 font-medium text-gray-700 transition-all duration-300 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
          >
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Xem sản phẩm
          </Link>
        </div>

        {/* Dòng nhỏ dưới cùng */}
        <p className="mt-12 text-sm text-gray-500">
          Nếu bạn nghĩ đây là lỗi, hãy liên hệ thống, liên hệ{' '}
          <span className="text-orange-500">support@shop.vn</span>
        </p>
      </div>

      {/* Hiệu ứng bong bóng nền (siêu nhẹ, không cần JS) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-10 top-20 size-80 animate-pulse rounded-full bg-orange-200 opacity-30 blur-3xl"></div>
        <div className="absolute -right-20 bottom-10 size-96 animate-pulse rounded-full bg-pink-200 opacity-30 blur-3xl delay-1000"></div>
        <div className="absolute left-1/2 top-1/3 size-64 animate-pulse rounded-full bg-yellow-200 opacity-30 blur-3xl delay-500"></div>
      </div>
    </div>
  )
}
