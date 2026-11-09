import React, { useState, useMemo } from 'react';
import { Search, Flame, Plus, Sparkles, Filter, X } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../data/menuData';
import { MenuItem, CategoryId } from '../types';
import { useCart } from '../context/CartContext';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySpicy, setOnlySpicy] = useState(false);
  const [onlyPopular, setOnlyPopular] = useState(false);

  const { openCustomizationModal } = useCart();

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Spicy filter
      if (onlySpicy && !item.isSpicy) {
        return false;
      }

      // Popular filter
      if (onlyPopular && !item.isPopular) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        return matchesName || matchesDesc;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, onlySpicy, onlyPopular]);

  return (
    <section id="menu" className="py-16 bg-stone-950 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-400">
            <span>قائمة طعام التاج السوري الأصلية</span>
            <span className="text-stone-600">·</span>
            <span>طازج يومياً 100%</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            اختر وجبتك المفضلة واستمتع بالطعم الحقيقي
          </h2>
          <p className="text-sm text-stone-400">
            تصفح جميع أصناف الشاورما، الكريب، البيتزا، الوجبات، والمشويات. يمكنك تخصيص الحجم والإضافات والصوصات كما تحب!
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-4 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ابحث عن صنف، شاورما، كريب، بيتزا..."
                className="w-full pr-10 pl-9 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
                  title="مسح البحث"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Filters Toggles */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <button
                onClick={() => setOnlyPopular(!onlyPopular)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl border transition-all flex items-center gap-1.5 ${
                  onlyPopular
                    ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-sm'
                    : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>الأكثر طلباً</span>
              </button>

              <button
                onClick={() => setOnlySpicy(!onlySpicy)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl border transition-all flex items-center gap-1.5 ${
                  onlySpicy
                    ? 'bg-red-600 text-white border-red-600 shadow-sm'
                    : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>سبايسي حار</span>
              </button>
            </div>

          </div>

          {/* Category Tabs (Segmented controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-right">
            {CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'bg-amber-400 text-stone-950 shadow-md shadow-amber-500/20'
                      : 'bg-stone-950 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800/80'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`mr-1.5 font-mono text-[11px] ${isActive ? 'text-stone-900 font-extrabold' : 'text-stone-500'}`}>
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter / Info */}
        <div className="flex items-center justify-between text-xs text-stone-400 mb-6 px-1">
          <span>يتم عرض {filteredItems.length} وجبة وصنف متوفر</span>
          {(searchQuery || onlySpicy || onlyPopular || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setOnlySpicy(false);
                setOnlyPopular(false);
                setSelectedCategory('all');
              }}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>إعادة ضبط الفلاتر</span>
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-stone-900/40 rounded-2xl border border-dashed border-stone-800 space-y-3">
            <p className="text-base text-stone-300 font-semibold">لم نجد وجبات مطابقة لبحثك</p>
            <p className="text-xs text-stone-500">جرب البحث بكلمة أخرى أو اختر قسماً آخر من القائمة أعلاه</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setOnlySpicy(false);
                setOnlyPopular(false);
                setSelectedCategory('all');
              }}
              className="mt-2 px-4 py-2 text-xs font-bold text-stone-950 bg-amber-400 rounded-lg hover:bg-amber-300"
            >
              عرض كافة الأصناف
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="group bg-stone-900 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Item Image with Fallback and Badges */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Subtle badges */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      {item.isPopular && (
                        <span className="text-[10px] font-bold text-stone-950 bg-amber-400 px-2 py-0.5 rounded shadow">
                          الأكثر طلباً
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="text-[10px] font-bold text-white bg-red-600 px-2 py-0.5 rounded shadow flex items-center gap-0.5">
                          <Flame className="w-2.5 h-2.5" />
                          حار
                        </span>
                      )}
                    </div>

                    {/* Category Label at bottom */}
                    <div className="absolute bottom-2.5 right-3 text-[11px] text-stone-300 font-medium">
                      {item.sizes && item.sizes.length > 0 ? 'خيارات أحجام متعددة' : 'وجبة قياسية'}
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="p-5 space-y-2 text-right">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer / Action */}
                <div className="p-5 pt-0 border-t border-stone-800/80 flex items-center justify-between gap-3 mt-2">
                  <div className="text-right">
                    <span className="text-[10px] text-stone-400 block">
                      {item.sizes && item.sizes.length > 1 ? 'السعر يبدأ من' : 'السعر'}
                    </span>
                    <span className="text-lg font-black text-amber-400 font-mono tabular-nums">
                      {item.price} <span className="text-xs font-normal text-stone-300">ج.م</span>
                    </span>
                  </div>

                  <button
                    onClick={() => openCustomizationModal(item)}
                    className="px-3.5 py-2 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center gap-1.5 active:scale-95"
                    aria-label={`تخصيص وإضافة ${item.name} إلى السلة`}
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>تخصيص وإضافة</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
