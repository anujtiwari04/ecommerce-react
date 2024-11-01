import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export function EmptyCart() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6 p-6 bg-gray-100 rounded-full inline-block">
          <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added anything to your cart yet
        </p>
        <Link
          to="/products"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#6c5ce7] to-[#a363d9] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
}