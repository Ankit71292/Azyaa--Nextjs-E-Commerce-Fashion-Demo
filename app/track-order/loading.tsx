import { Skeleton } from "@/components/ui/skeleton"

export default function TrackOrderLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-32" />
            <div className="hidden md:flex items-center gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-16" />
              ))}
            </div>
            <div className="flex items-center gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-8 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>

        {/* Order Status Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="mb-8">
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-48" />
          </div>

          {/* Progress Tracker Skeleton */}
          <div className="flex items-center justify-between mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <Skeleton className="w-12 h-12 rounded-full mb-4" />
                <Skeleton className="h-4 w-20 mb-1" />
                <Skeleton className="h-3 w-16 mb-1" />
                <Skeleton className="h-3 w-14" />
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Skeleton className="h-6 w-24 mb-6" />
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                <Skeleton className="w-20 h-20 rounded-lg" />
                <div className="flex-1">
                  <Skeleton className="h-5 w-48 mb-2" />
                  <Skeleton className="h-4 w-64" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
              <Skeleton className="w-12 h-12 rounded-lg" />
              <div className="flex-1">
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Skeleton */}
      <div className="bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="h-6 w-32 mb-4 bg-amber-800" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <Skeleton key={j} className="h-4 w-24 bg-amber-800" />
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
