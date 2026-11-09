import React from 'react';
import { Phone, MessageCircle, ArrowDown, Sparkles, ShieldCheck, Flame, Bike, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section id="hero" className="relative overflow-hidden bg-stone-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-800">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Quiet metadata kicker (No pill box) */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-amber-400">
              <span className="flex items-center gap-1.5 font-bold">
                <Flame className="w-4 h-4 text-amber-500" />
                المذاق الشامي الأصيل في قلب حوش عيسى
              </span>
              <span className="text-stone-600">·</span>
              <span className="text-stone-300">محافظة البحيرة</span>
              <span className="text-stone-600">·</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                خدمة 24 ساعة يومياً
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight text-balance">
              مطعم التاج السوري
              <span className="block text-transparent bg-clip-text bg-gradient-to-l from-amber-400 via-amber-300 to-amber-500 mt-2">
                ملوك الشاورما والكريب والبيتزا
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              استمتع بأشهى ساندوتشات الشاورما السوري المحمصة ع الفحم، كريب مقرمش غرقان جبن، بيتزا إيطالية بالفرن الحجري، ومشويات حلبية محضرة بأجود المكونات الطازجة. جاهزون لخدمتكم وتوصيل طلباتكم ساخنة حتى باب المنزل في حوش عيسى على مدار الساعة.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#menu"
                className="px-6 py-3.5 text-sm md:text-base font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 active:scale-95"
              >
                <span>تصفح المنيو واطلب الآن</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/201008355380"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm md:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-600 border border-emerald-600/50 rounded-xl transition-all flex items-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>محادثة واتساب فورية</span>
              </a>

              <a
                href="tel:01008355380"
                className="px-5 py-3.5 text-sm md:text-base font-bold text-stone-200 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded-xl transition-all flex items-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>اتصال: 01008355380</span>
              </a>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800/80">
              <div className="space-y-1">
                <span className="text-amber-400 text-lg sm:text-xl font-bold font-mono block">24 / 7</span>
                <span className="text-xs text-stone-400 font-medium block">توصيل مستمر ليل نهار</span>
              </div>
              <div className="space-y-1">
                <span className="text-amber-400 text-lg sm:text-xl font-bold font-mono block">100%</span>
                <span className="text-xs text-stone-400 font-medium block">تتبيلات سورية أصلية</span>
              </div>
              <div className="space-y-1">
                <span className="text-amber-400 text-lg sm:text-xl font-bold font-mono block">30 دقيقة</span>
                <span className="text-xs text-stone-400 font-medium block">متوسط سرعة التوصيل</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl shadow-stone-950/80 group">
              <img
                src="/src/assets/images/hero_syrian_shawarma_1794225512101.jpg"
                alt="شاورما سوري عربي وبطاطس وتومية من مطعم التاج السوري بحوش عيسى"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent pointer-events-none" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-right space-y-1.5">
                <div className="flex items-center justify-between text-xs text-stone-300">
                  <span className="text-amber-400 font-bold">وجبة التاج العربي الأكثر طلباً</span>
                  <span className="font-mono text-stone-400 tabular-nums">يبدأ من 85 ج.م</span>
                </div>
                <p className="text-xs text-stone-300 line-clamp-2">
                  شاورما دجاج مشوية ع الفحم مع خبز الصاج والتومية السورية ومخلل الخيار المقرمش.
                </p>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="w-full mt-2 py-2 px-3 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Bike className="w-3.5 h-3.5" />
                  اطلب الآن ديليفري لحوش عيسى
                </button>
              </div>
            </div>

            {/* Quick 24-hr badge floating at the side */}
            <div className="absolute -top-3 -right-3 bg-stone-900/90 backdrop-blur-md border border-amber-500/30 px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold text-stone-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>مفتوح الآن في حوش عيسى</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
