import { useCart } from 'react-use-cart';
import { Minus, Plus, Trash2 } from 'lucide-react';
import type { Product } from '../../types/product';

interface CartItemProps {
  item: Product & { quantity: number };
}

export function CartItem({ item }: CartItemProps) {
  const { updateItemQuantity, removeItem } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 animate-slideIn">
      <div className="flex gap-6">
        <div className="w-[30%]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[200px] object-contain"
          />
        </div>
        
        <div className="w-[40%] flex flex-col">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{item.category}</p>
          <p className="text-xl font-bold text-[#2d3436]">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <div className="w-[30%] flex flex-col items-end justify-between">
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-600 p-2 hover:animate-shake"
          >
            <Trash2 className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 rounded-full border-2 border-[#0984e3] text-[#0984e3] flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50"
              disabled={item.quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            
            <span className="w-8 text-center font-medium">
              {item.quantity}
            </span>
            
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 rounded-full bg-[#0984e3] text-white flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}