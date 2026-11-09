import React from 'react';
import { Crown, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-bold">
                <Crown className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-lg font-black tracking-tight">مطعم التاج السوري</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-400">
              أفضل مذاق شامي أصيل للشاورما والكريب والبيتزا والمشويات في مركز حوش عيسى، محافظة البحيرة. نسعد بخدمتكم وتوصيل طلباتكم ساخنة على مدار 24 ساعة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">روابط الموقع السريعة</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">قائمة الطعام الكاملة</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-amber-400 transition-colors">عروض التاج والبوكسات</a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-amber-400 transition-colors">مناطق وأسعار التوصيل</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">آراء وتقييمات العملاء</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">معلومات الاتصال المباشر</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:01008355380" className="hover:text-amber-400 font-mono font-bold">
                  01008355380
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/201008355380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-bold"
                >
                  واتساب: 01008355380
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>حوش عيسى - شارع الجمهورية - محافظة البحيرة</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>مفتوح 24 ساعة يومياً</span>
              </div>
            </div>
          </div>

          {/* Payment info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">طرق الدفع المدعومة</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              نوفر لعملائنا في حوش عيسى خيارات دفع سهلة ومريحة:
            </p>
            <ul className="text-xs space-y-1.5 text-stone-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>الدفع نقداً عند استلام الطلب (كاش)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span>فودافون كاش (محفظة على 01008355380)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>إنستاباي (InstaPay مباشر)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-stone-800 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 مطعم التاج السوري - حوش عيسى. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>شاورما · كريب · بيتزا · مشويات · مقبلات</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
