export default function FAQsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner Skeleton */}
      <div className="bg-amber-900 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="h-4 bg-amber-800 rounded w-40 animate-pulse"></div>
          <div className="flex items-center gap-4">
            <div className="h-4 bg-amber-800 rounded w-60 animate-pulse"></div>
            <div className="h-4 bg-amber-800 rounded w-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Header Skeleton */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="h-12 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-32 mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="px-6 py-4 border-b border-gray-200">
                    <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Content Skeleton */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-32 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
