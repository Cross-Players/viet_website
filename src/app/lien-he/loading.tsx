export default function ContactLoading() {
  return (
    <div className="py-8">
      <div className="bg-gray-100 py-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Information Skeleton */}
          <div>
            <div className="space-y-4">
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Skeleton */}
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded animate-pulse"></div>
            ))}
            <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 