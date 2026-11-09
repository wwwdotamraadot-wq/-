import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'م. أحمد عبد الرحمن',
      location: 'شارع الجمهورية - حوش عيسى',
      date: 'منذ يومين',
      rating: 5,
      review: 'أفضل شاورما عربي وتومية في حوش عيسى بلا منازع! الخبز الصاج مقرمش ومحمص ع الفحم، وكمية الفراخ والتتبيلة ممتازة جداً. التوصيل كان في 20 دقيقة بالظبط والأكل واصل نار.'
    },
    {
      name: 'د. محمود الشرقاوي',
      location: 'بجوار مجمع المدارس - حوش عيسى',
      date: 'منذ 5 أيام',
      rating: 5,
      review: 'طلبت بوكس اللمة العائلي مع كريب الزنجر والكولا، الوجبة كفت 5 أفراد وكانت مشبعة جداً. تجربة الطلب بالواتساب سهلة وسريعة وخدمة العملاء محترمة جداً.'
    },
    {
      name: 'أ/ سامح قاسم',
      location: 'منطقة الموقف العمومي - حوش عيسى',
      date: 'منذ أسبوع',
      rating: 5,
      review: 'ميزة الـ 24 ساعة دي أنقذتني كتير بعد نص الليل وأيام الشغل المتأخر. البيتزا السوبر كرانشي روعة والجبنة الموزاريلا بتمط وطعمها أصلي مش مغشوش.'
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-stone-950 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-400">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>تقييمات زبائننا الكرام في حوش عيسى</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            ثقة أهالي حوش عيسى وسام فخر على صدورنا
          </h2>
          <p className="text-sm text-stone-400">
            نفخر بتقديم أفضل تجربة طعام شرقي وشامي لأهلنا في محافظة البحيرة بشهادة عملائنا الدائمين.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 bg-stone-900 border border-stone-800 rounded-2xl flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-all"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">{rev.name}</span>
                  <span className="text-[11px] text-stone-400">{rev.location}</span>
                </div>
                <span className="text-[11px] text-stone-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
