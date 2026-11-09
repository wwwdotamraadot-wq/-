import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Flame, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SizeOption, ExtraOption } from '../types';

export const CustomizationModal: React.FC = () => {
  const { customizingItem, closeCustomizationModal, addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<SizeOption | undefined>(undefined);
  const [selectedExtras, setSelectedExtras] = useState<ExtraOption[]>([]);
  const [isSpicy, setIsSpicy] = useState(false);
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (customizingItem) {
      if (customizingItem.sizes && customizingItem.sizes.length > 0) {
        setSelectedSize(customizingItem.sizes[0]);
      } else {
        setSelectedSize(undefined);
      }
      setSelectedExtras([]);
      setIsSpicy(customizingItem.isSpicy || false);
      setNotes('');
      setQuantity(1);
    }
  }, [customizingItem]);

  if (!customizingItem) return null;

  const toggleExtra = (extra: ExtraOption) => {
    setSelectedExtras(prev => {
      const exists = prev.some(e => e.id === extra.id);
      if (exists) {
        return prev.filter(e => e.id !== extra.id);
      } else {
        return [...prev, extra];
      }
    });
  };

  const basePrice = selectedSize ? selectedSize.price : customizingItem.price;
  const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
  const unitPrice = basePrice + extrasTotal;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    addToCart(customizingItem, selectedSize, selectedExtras, isSpicy, notes, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl text-stone-100 text-right flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative aspect-[16/9] w-full bg-stone-950">
          <img
            src={customizingItem.image}
            alt={customizingItem.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
          
          <button
            onClick={closeCustomizationModal}
            className="absolute top-3 left-3 p-2 bg-stone-950/70 hover:bg-stone-950 text-stone-300 hover:text-white rounded-full transition-colors"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 right-4 left-4">
            <h3 className="text-xl font-black text-white">{customizingItem.name}</h3>
            <p className="text-xs text-stone-300 mt-1 line-clamp-2">{customizingItem.description}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 flex-1">
          
          {/* Sizes Selection */}
          {customizingItem.sizes && customizingItem.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-400 block">
                اختر الحجم أو الوجبة:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {customizingItem.sizes.map(size => {
                  const isSelected = selectedSize?.id === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 rounded-xl border text-right flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-500 text-white shadow-sm'
                          : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-amber-400 bg-amber-400 text-stone-950' : 'border-stone-600'}`}>
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-semibold">{size.name}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                        {size.price} ج.م
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Spicy Option */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-amber-400 block">
              درجة الشطة والبهار:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setIsSpicy(false)}
                className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                  !isSpicy
                    ? 'bg-amber-400/15 border-amber-500 text-white'
                    : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700'
                }`}
              >
                عادي (بدون شطة حارة)
              </button>
              <button
                type="button"
                onClick={() => setIsSpicy(true)}
                className={`p-3 rounded-xl border text-center text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  isSpicy
                    ? 'bg-red-600/20 border-red-500 text-red-300'
                    : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-red-500" />
                سبايسي حار 🔥
              </button>
            </div>
          </div>

          {/* Extras Selection */}
          {customizingItem.availableExtras && customizingItem.availableExtras.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-400 block">
                إضافات وصوصات مفضلة (اختياري):
              </label>
              <div className="space-y-1.5">
                {customizingItem.availableExtras.map(extra => {
                  const isChecked = selectedExtras.some(e => e.id === extra.id);
                  return (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => toggleExtra(extra)}
                      className={`w-full p-2.5 rounded-xl border text-right flex items-center justify-between text-xs transition-all ${
                        isChecked
                          ? 'bg-amber-400/10 border-amber-500 text-white'
                          : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? 'bg-amber-400 border-amber-400 text-stone-950' : 'border-stone-600'}`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{extra.name}</span>
                      </div>
                      <span className="font-mono text-amber-400 tabular-nums font-semibold">
                        +{extra.price} ج.م
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Notes for Chef */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-amber-400 block">
              ملاحظاتك للشيف (بدون مخلل، عيش صاج محمص، إلخ):
            </label>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="اكتب أي رغبة خاصة بتحضير وجبتك..."
              rows={2}
              className="w-full p-3 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Quantity Stepper */}
          <div className="flex items-center justify-between p-3 bg-stone-950 border border-stone-800 rounded-xl">
            <span className="text-xs font-bold text-stone-200">الكمية المطلوبة:</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center"
                aria-label="تقليل الكمية"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-mono font-bold text-sm w-6 text-center tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-white flex items-center justify-center"
                aria-label="زيادة الكمية"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer / Add Button */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between gap-4">
          <div className="text-right">
            <span className="text-[10px] text-stone-400 block">الإجمالي</span>
            <span className="text-xl font-black text-amber-400 font-mono tabular-nums">
              {totalPrice} <span className="text-xs font-normal text-stone-300">ج.م</span>
            </span>
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 py-3 px-5 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shadow-amber-500/20 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>أضف إلى السلة</span>
          </button>
        </div>

      </div>
    </div>
  );
};
