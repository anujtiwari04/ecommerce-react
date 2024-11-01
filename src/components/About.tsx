export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-[65%_35%] gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#6c5ce7] to-[#a363d9] bg-clip-text text-transparent">
            About ShopHub
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At ShopHub, we believe in delivering exceptional quality and value to our customers. 
            Our carefully curated collection features the latest trends and timeless classics, 
            ensuring you'll find exactly what you're looking for.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 transition-transform">
            <h3 className="text-xl font-semibold mb-4 text-[#2d3436]">
              Why Choose Us?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#0984e3] rounded-full" />
                Premium Quality Products
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#0984e3] rounded-full" />
                Fast & Secure Shipping
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#0984e3] rounded-full" />
                24/7 Customer Support
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#0984e3] rounded-full" />
                Easy Returns & Exchanges
              </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="About ShopHub"
            className="rounded-lg shadow-xl transform perspective-1000 hover:rotate-2 transition-transform"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 transform rotate-3">
            <p className="text-sm font-semibold text-[#2d3436]">
              Trusted by 1M+ Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}