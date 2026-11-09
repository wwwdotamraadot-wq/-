import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Clock, Bike, ChefHat, PackageCheck, Phone, MessageCircle, Copy, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const OrderTrackerModal: React.FC = () => {
  const { activeOrder, setActiveOrder, isOrderTrackerOpen, setIsOrderTrackerOpen, createWhatsAppLink } = useCart();
  const [copied, setCopied] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(1); // 0: received, 1: preparing, 2: on_the_way, 3: delivered

  useEffect(() => {
    if (!isOrderTrackerOpen || !activeOrder) return;
    
    // Auto simulate progression through states over realistic demo time
    const timer1 = setTimeout(() => setCurrentStepIndex(1), 1000);
    const timer2 = setTimeout(() => setCurrentStepIndex(2), 15000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isOrderTrackerOpen, activeOrder]);

  if (!isOrderTrackerOpen || !activeOrder) return null;

  const steps = [
    { title: 'تم استلام الطلب', subtitle: 'تم تسجيل طلبك في سيستم مطعم التاج', icon: PackageCheck },
    { title: 'جاري التحضير والشواء', subtitle: 'الشيف يجهز الشاورما والكريب طازج ع الفحم', icon: ChefHat },
    { title: 'في طريق التوصيل', subtitle: 'الكابتن استلم الطلب وهو في طريقه إليك', icon: Bike },
    { title: 'تم التسليم بالهناء والشفاء', subtitle: 'نتمنى لك وجبة شهية وممتعة', icon: CheckCircle }
  ];

  const handleCopyReceipt = () => {
    const text = `فاتورة مطعم التاج السوري - طلب #${activeOrder.orderId}
العميل: ${activeOrder.customerName}
الهاتف: ${activeOrder.customerPhone}
الإجمالي: ${activeOrder.total} ج.م
التاريخ: ${activeOrder.createdAt}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl text-stone-100 text-right flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <h3 className="text-base font-bold text-white">
                تتبع حالة الطلب <span className="font-mono text-amber-400">#{activeOrder.orderId}</span>
              </h3>
              <span className="text-[11px] text-stone-400">تم في {activeOrder.createdAt}</span>
            </div>
          </div>

          <button
            onClick={() => setIsOrderTrackerOpen(false)}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-6 flex-1">
          
          {/* Stepper Progress */}
          <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl space-y-4">
            <div className="flex items-center justify-between text-xs text-amber-400 font-bold">
              <span>المراحل المباشرة للطلب</span>
              <span>وقت الوصول التقديري: {activeOrder.deliveryZone?.estimatedTime || '25-35 دقيقة'}</span>
            </div>

            <div className="space-y-4">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                const isPassed = idx <= currentStepIndex;
                const isCurrent = idx === currentStepIndex;

                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isCurrent
                          ? 'bg-amber-400 text-stone-950 shadow-md shadow-amber-500/20 scale-105'
                          : isPassed
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-800 text-stone-500'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 stroke-[2.2]" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${isPassed ? 'text-white' : 'text-stone-500'}`}>
                          {step.title}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] text-amber-400 font-bold animate-pulse">
                            جاري الآن...
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-400 mt-0.5">{step.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Manual test advancement buttons */}
            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-500">
              <span>محاكاة خطوة التحضير:</span>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map(stepNum => (
                  <button
                    key={stepNum}
                    onClick={() => setCurrentStepIndex(stepNum)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      currentStepIndex === stepNum ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-800 text-stone-400'
                    }`}
                  >
                    مرحلة {stepNum + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Itemized Receipt Details */}
          <div className="p-4 bg-stone-950 border border-stone-800 rounded-xl space-y-3">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <span className="text-xs font-bold text-white">تفاصيل الفاتورة والوجبات</span>
              <button
                onClick={handleCopyReceipt}
                className="text-[11px] text-amber-400 hover:underline flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'تم النسخ!' : 'نسخ الفاتورة'}</span>
              </button>
            </div>

            <div className="space-y-2 text-xs divide-y divide-stone-800/60">
              {activeOrder.items.map((ci, i) => (
                <div key={i} className="pt-2 first:pt-0 flex items-start justify-between">
                  <div>
                    <span className="font-bold text-stone-200">
                      {ci.quantity} × {ci.item.name}
                    </span>
                    {ci.selectedSize && (
                      <span className="text-stone-400 block text-[11px]">
                        ({ci.selectedSize.name})
                      </span>
                    )}
                    {ci.isSpicy && <span className="text-red-400 block text-[10px]">سبايسي حار 🔥</span>}
                    {ci.selectedExtras.length > 0 && (
                      <span className="text-stone-400 block text-[10px]">
                        إضافات: {ci.selectedExtras.map(e => e.name).join('، ')}
                      </span>
                    )}
                  </div>
                  <span className="font-mono tabular-nums text-amber-400 font-bold">
                    {ci.itemTotal} ج.م
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="pt-3 border-t border-stone-800 space-y-1 text-xs">
              <div className="flex justify-between text-stone-400">
                <span>المجموع الفرعي:</span>
                <span className="font-mono tabular-nums">{activeOrder.subtotal} ج.م</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>التوصيل ({activeOrder.deliveryZone?.name || 'استلام مطعم'}):</span>
                <span className="font-mono tabular-nums">{activeOrder.deliveryFee} ج.م</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-stone-800">
                <span>الإجمالي الكلي:</span>
                <span className="text-amber-400 font-mono text-base tabular-nums">
                  {activeOrder.total} ج.م
                </span>
              </div>
            </div>

            {/* Delivery address info */}
            {activeOrder.orderType === 'delivery' && activeOrder.deliveryAddress && (
              <div className="pt-2 text-xs text-stone-400 border-t border-stone-800">
                <span className="text-stone-300 font-semibold block">العنوان المسجل:</span>
                <span>{activeOrder.deliveryAddress}</span>
              </div>
            )}
          </div>

          {/* Quick Support Actions */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={createWhatsAppLink(activeOrder)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-emerald-700 hover:bg-emerald-600 rounded-xl text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>متابعة عبر الواتساب</span>
            </a>

            <a
              href="tel:01008355380"
              className="p-3 bg-stone-800 hover:bg-stone-700 rounded-xl text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>اتصال بالمطعم 01008355380</span>
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 text-center">
          <button
            onClick={() => {
              setActiveOrder(null);
              setIsOrderTrackerOpen(false);
            }}
            className="text-xs text-stone-400 hover:text-white underline"
          >
            إنهاء وبدء طلب جديد
          </button>
        </div>

      </div>
    </div>
  );
};
