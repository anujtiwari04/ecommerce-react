import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { EmptyCart } from './EmptyCart';

export function CartPage() {
  const { isEmpty, items } = useCart();

  if (isEmpty) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm py-4 mb-8 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Shopping Cart ({items.length})</h1>
          </div>
          <Link
            to="/products"
            className="flex items-center gap-2 text-[#0984e3] hover:text-[#0984e3]/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-8">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CartSummary />
      </div>
    </div>
  );
}