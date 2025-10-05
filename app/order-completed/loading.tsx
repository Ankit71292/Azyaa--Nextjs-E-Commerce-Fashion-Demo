export default function OrderCompletedLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-1 h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="w-64 h-10 bg-gray-200 rounded animate-pulse mx-auto mb-8"></div>
          <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse mx-auto mb-6"></div>
          <div className="w-48 h-6 bg-gray-200 rounded animate-pulse mx-auto mb-2"></div>
          <div className="w-56 h-4 bg-gray-200 rounded animate-pulse mx-auto"></div>
        </div>

        {/* Order Summary Card */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="w-20 h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="w-32 h-6 bg-gray-200 rounded animate-pulse mb-6"></div>

          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="space-y-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-24 h-3 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>

          <div className="border-t pt-6 space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-40 h-3 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Skeleton */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="w-24 h-5 bg-gray-600 rounded animate-pulse"></div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="w-32 h-3 bg-gray-600 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
