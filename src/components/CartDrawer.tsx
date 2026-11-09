import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Bike, Store, CreditCard, MessageCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { DELIVERY_ZONES } from '../data/zonesData';
import { OrderType, PaymentMethod, DeliveryZone } from '../types';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    placeOrder,
    createWhatsAppLink
  } = useCart();

  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [selectedZone, setSelectedZone] = useState<DeliveryZone>(DELIVERY_ZONES[0]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');
  const [formError, setFormError] = useState('');

  if (!isCartOpen) return null;

  const deliveryFee = orderType === 'delivery' ? selectedZone.fee : 0;
  const grandTotal = subtotal + deliveryFee;

  const validateAndSubmit = (viaWhatsApp = false) => {
    if (cart.length === 0) {
      setFormError('السلة فارغة، يرجى إضافة وجبات أولاً.');
      return;
    }
    if (!customerName.trim()) {
      setFormError('يرجى كتابة اسم العميل الكريم.');
      return;
    }
    if (!customerPhone.trim() || customerPhone.trim().length < 10) {
      setFormError('يرجى كتابة رقم هاتف صحيح للتواصل والتأكيد.');
      return;
    }
    if (orderType === 'delivery' && !deliveryAddress.trim()) {
      setFormError('يرجى كتابة العنوان بالتفصيل وأقرب علامة مميزة في حوش عيسى.');
      return;
    }

    setFormError('');

    const newOrder = placeOrder({
      orderType,
      deliveryZone: orderType === 'delivery' ? selectedZone : undefined,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      deliveryAddress: orderType === 'delivery' ? deliveryAddress.trim() : undefined,
      specialInstructions: specialInstructions.trim(),
      paymentMethod
    });

    if (viaWhatsApp) {
      const waLink = createWhatsAppLink(newOrder);
      window.open(waLink, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/80 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-stone-900 border-r border-stone-800 text-stone-100 flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950 text-right">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-bold text-white">سلة الطلبات</h2>
              <span className="text-xs text-stone-400 font-mono">({cart.length} أصناف)</span>
            </div>
            
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              aria-label="إغلاق السلة"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6 text-right">
            
            {/* Empty state */}
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-stone-800 flex items-center justify-center text-stone-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-stone-300">سلتك فارغة حالياً</p>
                  <p className="text-xs text-stone-500">
                    استكشف وجبات الشاورما والكريب والمشويات الشهية وأضف ما تشتهي!
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl"
                >
                  تصفح قائمة الطعام
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-400 pb-1 border-b border-stone-800">
                    <span>الوجبات المضافة</span>
                    <button
                      onClick={clearCart}
                      className="text-stone-500 hover:text-red-400 text-[11px] flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>إفراغ السلة</span>
                    </button>
                  </div>

                  {cart.map(item => (
                    <div
                      key={item.cartItemId}
                      className="p-3 bg-stone-950 border border-stone-800 rounded-xl space-y-2 text-right"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-white">{item.item.name}</h4>
                          {item.selectedSize && (
                            <span className="text-xs text-amber-400 font-medium block">
                              الحجم: {item.selectedSize.name}
                            </span>
                          )}
                          {item.isSpicy && (
                            <span className="text-[11px] text-red-400 block">🌶️ حار (سبايسي)</span>
                          )}
                          {item.selectedExtras.length > 0 && (
                            <div className="text-[11px] text-stone-400 mt-0.5">
                              إضافات: {item.selectedExtras.map(e => e.name).join('، ')}
                            </div>
                          )}
                          {item.notes && (
                            <div className="text-[11px] text-amber-300/80 italic mt-0.5">
                              ملاحظة: "{item.notes}"
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-stone-500 hover:text-red-400 p-1"
                          title="حذف هذا الصنف"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-stone-800/60">
                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2 bg-stone-900 border border-stone-800 rounded-lg p-0.5">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="w-6 h-6 rounded text-stone-300 hover:text-white hover:bg-stone-800 flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs font-bold px-1 tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="w-6 h-6 rounded text-stone-300 hover:text-white hover:bg-stone-800 flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-mono font-bold text-sm text-amber-400 tabular-nums">
                          {item.itemTotal} ج.م
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Option Toggle */}
                <div className="space-y-2 pt-2 border-t border-stone-800">
                  <label className="text-xs font-bold text-amber-400 block">
                    طريقة استلام الطلب:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        orderType === 'delivery'
                          ? 'bg-amber-400 text-stone-950 border-amber-400'
                          : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <Bike className="w-4 h-4" />
                      <span>توصيل منازل (دليفري)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        orderType === 'takeaway'
                          ? 'bg-amber-400 text-stone-950 border-amber-400'
                          : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>استلام من المطعم</span>
                    </button>
                  </div>
                </div>

                {/* Delivery Zone Selector (if delivery) */}
                {orderType === 'delivery' && (
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-amber-400 block">
                      منطقة التوصيل في حوش عيسى:
                    </label>
                    <select
                      value={selectedZone.id}
                      onChange={e => {
                        const found = DELIVERY_ZONES.find(z => z.id === e.target.value);
                        if (found) setSelectedZone(found);
                      }}
                      className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    >
                      {DELIVERY_ZONES.map(zone => (
                        <option key={zone.id} value={zone.id}>
                          {zone.name} (+{zone.fee} ج.م - {zone.estimatedTime})
                        </option>
                      ))}
                    </select>
                    <p className="text-[11px] text-stone-500">
                      وقت التوصيل التقديري: {selectedZone.estimatedTime}
                    </p>
                  </div>
                )}

                {/* Customer Information Form */}
                <div className="space-y-3 pt-2 border-t border-stone-800">
                  <label className="text-xs font-bold text-amber-400 block">
                    بيانات العميل للتواصل:
                  </label>

                  <div>
                    <input
                      type="text"
                      placeholder="الاسم بالكامل *"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="رقم الهاتف (موبايل / واتساب) *"
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <textarea
                        rows={2}
                        placeholder="العنوان بالتفصيل، الشارع، رقم العمارة، وأقرب علامة مميزة *"
                        value={deliveryAddress}
                        onChange={e => setDeliveryAddress(e.target.value)}
                        className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  )}

                  <div>
                    <input
                      type="text"
                      placeholder="تعليمات إضافية للدليفري أو الشيف (اختياري)"
                      value={specialInstructions}
                      onChange={e => setSpecialInstructions(e.target.value)}
                      className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded-xl text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-2 pt-2 border-t border-stone-800">
                  <label className="text-xs font-bold text-amber-400 block">
                    طريقة الدفع:
                  </label>
                  <div className="space-y-1.5">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cash')}
                      className={`w-full p-2.5 rounded-xl border text-right text-xs font-medium flex items-center justify-between transition-all ${
                        paymentMethod === 'cash'
                          ? 'bg-amber-400/10 border-amber-500 text-white'
                          : 'bg-stone-950 border-stone-800 text-stone-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-3.5 h-3.5 text-amber-400" />
                        <span>الدفع نقداً عند الاستلام (كاش)</span>
                      </div>
                      {paymentMethod === 'cash' && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('vodafone_cash')}
                      className={`w-full p-2.5 rounded-xl border text-right text-xs font-medium flex items-center justify-between transition-all ${
                        paymentMethod === 'vodafone_cash'
                          ? 'bg-red-950/40 border-red-500 text-white'
                          : 'bg-stone-950 border-stone-800 text-stone-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-3.5 h-3.5 text-red-500" />
                        <span>فودافون كاش (تحويل على 01008355380)</span>
                      </div>
                      {paymentMethod === 'vodafone_cash' && <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('instapay')}
                      className={`w-full p-2.5 rounded-xl border text-right text-xs font-medium flex items-center justify-between transition-all ${
                        paymentMethod === 'instapay'
                          ? 'bg-purple-950/40 border-purple-500 text-white'
                          : 'bg-stone-950 border-stone-800 text-stone-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-3.5 h-3.5 text-purple-400" />
                        <span>إنستاباي (InstaPay عبر الرقم 01008355380)</span>
                      </div>
                      {paymentMethod === 'instapay' && <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />}
                    </button>
                  </div>
                </div>

                {/* Form Error Banner */}
                {formError && (
                  <div className="p-3 bg-red-950/80 border border-red-500 text-red-200 text-xs rounded-xl">
                    {formError}
                  </div>
                )}
              </>
            )}

          </div>

          {/* Drawer Footer & Checkout Buttons */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-stone-950 border-t border-stone-800 space-y-3 text-right">
              
              {/* Cost Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-stone-400">
                  <span>المجموع الفرعي:</span>
                  <span className="font-mono tabular-nums">{subtotal} ج.م</span>
                </div>
                <div className="flex items-center justify-between text-stone-400">
                  <span>خدمة التوصيل:</span>
                  <span className="font-mono tabular-nums">
                    {orderType === 'delivery' ? `${deliveryFee} ج.م` : 'مجاناً (استلام من المطعم)'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold text-white pt-1.5 border-t border-stone-800">
                  <span>المبلغ الإجمالي المستحق:</span>
                  <span className="text-amber-400 font-mono text-base tabular-nums">
                    {grandTotal} ج.م
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                {/* 1. Send via WhatsApp (Primary Recommendation) */}
                <button
                  type="button"
                  onClick={() => validateAndSubmit(true)}
                  className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                  <span>تأكيد وإرسال الطلب عبر WhatsApp فوراً</span>
                </button>

                {/* 2. In-app confirmation */}
                <button
                  type="button"
                  onClick={() => validateAndSubmit(false)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>تأكيد الطلب بالموقع ومتابعة التحضير</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
