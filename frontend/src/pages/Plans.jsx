export default function Plans() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-6">Our Subscription Plans</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-yellow-600 mb-2">Monthly Plan</h2>
          <p className="text-gray-600 mb-3">Perfect for regular customers who love variety.</p>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            Subscribe ₹999 / month
          </button>
        </div>
      </div>
    </div>
  );
}
