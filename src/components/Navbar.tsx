import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu as MenuIcon, X, Crown, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalCount, setIsCartOpen, activeOrder, setIsOrderTrackerOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur-md border-b border-stone-800 transition-colors">
      {/* Top 24/7 Service & Hotline Ribbon */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 text-xs font-semibold py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center sm:gap-8">
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5" />
            خدمة التوصيل والصالة متاحة على مدار 24 ساعة يومياً
          </span>
          <span className="hidden sm:inline-block">·</span>
          <a
            href="tel:01008355380"
            className="flex items-center gap-1.5 hover:underline font-bold whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            الخط الساخن: 01008355380
          </a>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 text-stone-100 whitespace-nowrap shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Crown className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-white block">
              التاج السوري
            </span>
            <span className="text-[11px] text-amber-400 font-medium tracking-wide block">
              حوش عيسى · البحيرة
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Single-Line, 4-5 items) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-300">
          <a href="#hero" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            الرئيسية
          </a>
          <a href="#menu" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            قائمة الطعام
          </a>
          <a href="#offers" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            العروض الخاصة
          </a>
          <a href="#delivery" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            مناطق التوصيل
          </a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            تقييمات الزبائن
          </a>
        </nav>

        {/* Zone 3: Primary Action & Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {activeOrder && (
            <button
              onClick={() => setIsOrderTrackerOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 rounded-xl hover:bg-amber-900/60 transition-colors whitespace-nowrap shrink-0"
              title="تتبع طلبك النشط"
            >
              <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" />
              تتبع الطلب #{activeOrder.orderId}
            </button>
          )}

          <a
            href="tel:01008355380"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-bold text-stone-300 bg-stone-900 border border-stone-800 rounded-xl hover:border-amber-500/40 hover:text-white transition-all whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            01008355380
          </a>

          {/* Cart Primary CTA */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2.5 px-4 py-2.5 text-xs md:text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/15 transition-all whitespace-nowrap shrink-0 active:scale-95"
            aria-label="افتح سلة الطلبات"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
            <span>السلة والطلب</span>
            {totalCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-stone-950 text-amber-400 text-xs font-mono font-bold flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="فتح القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-5 space-y-2">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-stone-200 hover:bg-stone-800 rounded-lg"
          >
            الرئيسية
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-stone-200 hover:bg-stone-800 rounded-lg"
          >
            قائمة الطعام
          </a>
          <a
            href="#offers"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-stone-200 hover:bg-stone-800 rounded-lg"
          >
            العروض الخاصة
          </a>
          <a
            href="#delivery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-stone-200 hover:bg-stone-800 rounded-lg"
          >
            مناطق التوصيل (حوش عيسى)
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-stone-200 hover:bg-stone-800 rounded-lg"
          >
            آراء العملاء
          </a>
          {activeOrder && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsOrderTrackerOpen(true);
              }}
              className="w-full text-right px-3 py-2 text-sm font-bold text-amber-400 bg-amber-950/40 rounded-lg flex items-center justify-between"
            >
              <span>تتبع طلبك النشط (#{activeOrder.orderId})</span>
              <Clock className="w-4 h-4" />
            </button>
          )}
          <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
            <a
              href="tel:01008355380"
              className="flex items-center gap-2 text-amber-400 font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              اتصل بنا: 01008355380
            </a>
            <span className="text-xs text-stone-400">مفتوح 24 ساعة</span>
          </div>
        </div>
      )}
    </header>
  );
};
