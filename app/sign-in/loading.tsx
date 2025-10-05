export default function SignInLoading() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form Skeleton */}
      <div className="flex-1 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo Skeleton */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Form Content Skeleton */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-72 h-5 bg-gray-200 rounded animate-pulse"></div>
            </div>

            <div className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Buttons */}
              <div className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-32 h-5 bg-gray-200 rounded animate-pulse mx-auto"></div>
              <div className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>

            <div className="w-48 h-5 bg-gray-200 rounded animate-pulse mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Right Side - Image Skeleton */}
      <div className="flex-1 relative bg-gray-200 animate-pulse">
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-400 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
              <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
            </div>
            <div className="space-y-1">
              <div className="w-32 h-5 bg-gray-400 rounded"></div>
              <div className="w-24 h-4 bg-gray-400 rounded"></div>
            </div>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-1 bg-gray-400 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
