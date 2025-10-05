export default function Loading() {
  return (<div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* لودر بسيط */}
      <div className="w-10 h-10 border-4 border-amber-900 border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-gray-700">جارٍ تحميل المتجر...</p>
    </div>)
}
