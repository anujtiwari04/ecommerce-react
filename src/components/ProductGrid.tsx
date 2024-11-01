import { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import { Star, ShoppingCart, Loader } from 'lucide-react';
import type { Product } from '../types/product';

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
        
        // Extract unique categories
        const uniqueCategories = ['all', ...new Set(data.map((p: Product) => p.category))];
        setCategories(uniqueCategories);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader className="w-8 h-8 animate-spin text-[#0984e3]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        <p>Error: {error}</p>
      </div>
    );
  }

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-wrap gap-6 mb-8 text-center justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-lg font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-[#0984e3] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col"
          >
            <div className="relative pt-[100%] mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 line-clamp-2 dark:text-white">{product.title}</h3>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(product.rating.rate)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({product.rating.count})
              </span>
            </div>
            <p className="text-xl font-bold text-[#2d3436] dark:text-white mb-4">${product.price}</p>
            <button
              onClick={() => addItem(product)}
              className="mt-auto flex items-center justify-center gap-2 bg-[#0984e3] text-white px-4 py-2 rounded-lg hover:bg-[#0984e3]/90 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}