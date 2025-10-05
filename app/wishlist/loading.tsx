import { Skeleton } from "@/components/ui/skeleton"

export default function WishlistLoading() {
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
          <Skeleton className="h-8 w-32 mx-auto mb-4" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>

        {/* Wishlist Table Skeleton */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          {/* Table Header */}
          <div className="bg-yellow-400 px-6 py-4">
            <div className="grid grid-cols-12 gap-4">
              <Skeleton className="col-span-5 h-5 bg-yellow-500" />
              <Skeleton className="col-span-2 h-5 bg-yellow-500" />
              <Skeleton className="col-span-2 h-5 bg-yellow-500" />
              <Skeleton className="col-span-2 h-5 bg-yellow-500" />
              <Skeleton className="col-span-1 h-5 bg-yellow-500" />
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="px-6 py-6">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 flex items-center gap-4">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="w-16 h-16 rounded-lg" />
                    <div>
                      <Skeleton className="h-5 w-40 mb-2" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                  <Skeleton className="col-span-2 h-5 w-16" />
                  <Skeleton className="col-span-2 h-4 w-24" />
                  <Skeleton className="col-span-2 h-4 w-16" />
                  <Skeleton className="col-span-1 h-10 w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wishlist Actions Skeleton */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-10 w-64" />
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
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
