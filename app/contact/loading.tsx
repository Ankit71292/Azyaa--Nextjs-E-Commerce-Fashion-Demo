export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner Skeleton */}
      <div className="bg-amber-900 text-white text-sm py-2 px-4">
        <div className="animate-pulse flex justify-between items-center">
          <div className="h-4 bg-amber-800 rounded w-32"></div>
          <div className="h-4 bg-amber-800 rounded w-48"></div>
          <div className="h-4 bg-amber-800 rounded w-4"></div>
        </div>
      </div>

      {/* Header Skeleton */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="animate-pulse flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="h-6 bg-gray-300 rounded w-24"></div>
            </div>

            <div className="hidden md:flex space-x-8 animate-pulse">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-300 rounded w-16"></div>
              ))}
            </div>

            <div className="flex items-center space-x-4 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Skeleton */}
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-48 mb-6"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-6"></div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                    <div className="h-12 bg-gray-300 rounded"></div>
                  </div>
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                    <div className="h-12 bg-gray-300 rounded"></div>
                  </div>
                </div>

                <div>
                  <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                  <div className="h-12 bg-gray-300 rounded"></div>
                </div>

                <div>
                  <div className="h-4 bg-gray-300 rounded w-28 mb-2"></div>
                  <div className="h-32 bg-gray-300 rounded"></div>
                </div>

                <div className="h-12 bg-gray-300 rounded w-32"></div>
              </div>
            </div>

            {/* Contact Info Skeleton */}
            <div className="space-y-8 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="h-6 bg-gray-300 rounded w-24 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Skeleton */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-300 rounded-lg h-96 animate-pulse"></div>
        </div>
      </section>

      {/* Services Skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-5 bg-gray-300 rounded w-32"></div>
                  <div className="h-4 bg-gray-300 rounded w-48"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 bg-amber-800 rounded w-32"></div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 bg-amber-800 rounded w-24"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
