import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageCircle, Bike, CheckCircle2 } from 'lucide-react';
import { DELIVERY_ZONES } from '../data/zonesData';

export const LocationSection: React.FC = () => {
  return (
    <section id="delivery" className="py-16 bg-stone-950 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-400">
            <MapPin className="w-4 h-4" />
            <span>نطاق الخدمة وموقع المطعم</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            موقعنا في حوش عيسى ومناطق التوصيل السريع
          </h2>
          <p className="text-sm text-stone-400">
            يسعدنا استقبالكم في صالة المطعم وتلبية كافة طلبات التوصيل المنزلي لجميع أحياء وقرى مركز حوش عيسى على مدار 24 ساعة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Restaurant Location & Hours Card (5 cols) */}
          <div className="lg:col-span-5 bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-6 text-right">
            
            {/* Title & Badge */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">مطعم التاج السوري</h3>
                <span className="text-xs text-amber-400 font-medium">فرع حوش عيسى الرئيسي</span>
              </div>
              <div className="bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>مفتوح 24 ساعة</span>
              </div>
            </div>

            {/* Address Info */}
            <div className="space-y-3 text-xs text-stone-300 pt-2 border-t border-stone-800">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">العنوان:</span>
                  <span>حوش عيسى - شارع الجمهورية / بالقرب من الميدان الرئيسي - مركز حوش عيسى - محافظة البحيرة.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">مواعيد العمل:</span>
                  <span>شغالين 24 ساعة يومياً (7 أيام في الأسبوع بدون توقف) صالة وتوصيل دليفري.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">رقم الدليفري والحجوزات:</span>
                  <a href="tel:01008355380" className="text-amber-400 font-bold hover:underline font-mono text-sm">
                    01008355380
                  </a>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2 border-t border-stone-800">
              <a
                href="https://www.google.com/maps/search/?api=1&query=حوش+عيسى+البحيرة"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>فتح الموقع على خرائط Google Maps</span>
              </a>

              <a
                href="https://wa.me/201008355380"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>طلب سريع عبر واتساب الدليفري</span>
              </a>
            </div>

          </div>

          {/* Delivery Zones Breakdown (7 cols) */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-2xl p-6 text-right space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Bike className="w-5 h-5 text-amber-400" />
                <span>جدول مناطق التوصيل والأسعار في حوش عيسى</span>
              </h3>
              <span className="text-xs text-stone-400">توصيل ساخن وبأسرع وقت</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {DELIVERY_ZONES.map(zone => (
                <div
                  key={zone.id}
                  className="p-3.5 bg-stone-950 border border-stone-800 rounded-xl space-y-1 hover:border-amber-500/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{zone.name}</span>
                    <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                      {zone.fee} ج.م
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400">{zone.description}</p>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 pt-1">
                    <Clock className="w-3 h-3" />
                    <span>وقت الوصول: {zone.estimatedTime}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-stone-950/70 border border-stone-800 rounded-xl text-xs text-stone-300 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                هل منطقتك غير مدرجة بالقائمة؟ اتصل بنا مباشرة على <a href="tel:01008355380" className="text-amber-400 font-bold underline font-mono">01008355380</a> وسنقوم بتوصيل طلبك لأي مكان في حوش عيسى وضواحيها.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
