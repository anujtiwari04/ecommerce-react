import { useCart } from 'react-use-cart';

export function CartSummary() {
  const { cartTotal } = useCart();
  const shipping = cartTotal > 100 ? 0 : 10;
  const tax = cartTotal * 0.1;
  const total = cartTotal + shipping + tax;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-32">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <SummaryRow label="Subtotal" value={cartTotal} />
        <SummaryRow 
          label="Shipping" 
          value={shipping}
          note={shipping === 0 ? "(Free shipping on orders over $100)" : ""}
        />
        <SummaryRow label="Tax (10%)" value={tax} />
        
        <div className="border-t pt-4">
          <SummaryRow label="Total" value={total} isTotal />
        </div>
      </div>

      <button className="w-full py-3 px-6 bg-gradient-to-r from-[#6c5ce7] to-[#a363d9] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
        Proceed to Checkout
      </button>
    </div>
  );
}

function SummaryRow({ 
  label, 
  value, 
  note, 
  isTotal 
}: { 
  label: string; 
  value: number; 
  note?: string;
  isTotal?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <span className={isTotal ? "text-lg font-bold" : "text-gray-600"}>
          {label}
        </span>
        {note && (
          <p className="text-sm text-gray-400">{note}</p>
        )}
      </div>
      <span className={isTotal ? "text-xl font-bold" : "font-medium"}>
        ${value.toFixed(2)}
      </span>
    </div>
  );
}