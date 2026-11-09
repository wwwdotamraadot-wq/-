import React from 'react';
import { ChefHat, Flame, Clock, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ChefHat,
      title: 'شيفات سوريون محترفون',
      description: 'نحضر خلطات وتتبيلات الشاورما والمشويات على أصول المطبخ الشامي الدمشقي والحلبي العريق.'
    },
    {
      icon: Clock,
      title: 'خدمة متواصلة 24 ساعة',
      description: 'مطعمنا مفتوح وجاهز لاستقبال طلباتكم في أي وقت ليل أو نهار، مع دليفري سريع لا ينقطع.'
    },
    {
      icon: ShieldCheck,
      title: 'لحوم ودواجن طازجة 100%',
      description: 'نلتزم بأعلى معايير الجودة والنظافة، ذبح حلال ومكونات طازجة يومياً دون أي مجمدات مجهولة.'
    },
    {
      icon: Flame,
      title: 'التومية السورية الشهيرة',
      description: 'تومية شامية حريرية محضرة بطريقتنا الخاصة بدون مايونيز تجاري، بنكهة ثوم وليمون متوازنة تذوب بالفم.'
    }
  ];

  return (
    <section className="py-14 bg-stone-900/30 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-stone-900 border border-stone-800 rounded-2xl space-y-3 hover:border-amber-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
