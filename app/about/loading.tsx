export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="bg-gray-100 h-16 animate-pulse"></div>

      {/* Hero Section Skeleton */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-12 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-48 mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mx-auto"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Images Skeleton */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-44 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-44 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-44 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-44 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="h-10 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-16 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Skeleton */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="h-80 bg-gray-200 rounded-lg mb-6"></div>
                <div className="h-6 bg-gray-200 rounded w-32 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-24 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="h-6 bg-gray-600 rounded mb-4 w-32"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-600 rounded w-full"></div>
                  <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
