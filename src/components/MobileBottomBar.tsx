import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const MobileBottomBar: React.FC = () => {
  const { totalCount, setIsCartOpen, isCartOpen } = useCart();

  if (isCartOpen) return null;

  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-30">
      <div className="bg-stone-900/95 backdrop-blur-md border border-stone-800 rounded-2xl p-2 shadow-2xl flex items-center justify-between gap-2">
        {/* Call button */}
        <a
          href="tel:01008355380"
          className="flex-1 py-2.5 px-3 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>اتصال</span>
        </a>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/201008355380"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
          <span>واتساب</span>
        </a>

        {/* Cart CTA */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-md"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>السلة</span>
          {totalCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-stone-950 text-amber-400 text-[10px] font-mono font-bold flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
