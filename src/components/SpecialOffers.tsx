import React from 'react';
import { Tag, Sparkles, Plus, Clock, Users, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';

export const SpecialOffers: React.FC = () => {
  const { openCustomizationModal, addToCart } = useCart();

  const specialItems = MENU_ITEMS.filter(item => item.isSpecialOffer || item.id === 'crepe_crunchy_zinger');

  return (
    <section id="offers" className="py-14 bg-stone-900/50 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 text-right">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>عروض التاج الأسبوعية والبوكسات العائلية</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              وفر أكثر مع عروض اللمة والبوكسات الملكية
            </h2>
          </div>
          <p className="text-sm text-stone-400 max-w-md">
            وجبات متكاملة مشبعة مصممة للجمعات العائلية ولمة الصحاب بأفضل سعر وجودة شواء لا تقاوم.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialItems.map(item => (
            <div
              key={item.id}
              className="group bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle Corner Badge */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md">
                    <Flame className="w-3.5 h-3.5" />
                    عرض خاص ومميز
                  </div>

                  <div className="absolute bottom-3 right-3 text-xs text-stone-300 font-medium flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>مناسب للعائلات والمجموعات</span>
                  </div>
                </div>

                <div className="p-5 space-y-2 text-right">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-stone-800/80 flex items-center justify-between gap-4 mt-3">
                <div>
                  <span className="text-[11px] text-stone-400 block">السعر شامل العرض</span>
                  <span className="text-xl font-black text-amber-400 font-mono tabular-nums">
                    {item.price} <span className="text-xs font-normal text-stone-300">ج.م</span>
                  </span>
                </div>

                <button
                  onClick={() => openCustomizationModal(item)}
                  className="px-4 py-2.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                  <span>اطلب العرض</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
