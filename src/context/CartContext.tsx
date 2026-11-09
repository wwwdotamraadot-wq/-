import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem, SizeOption, ExtraOption, CustomerOrder, DeliveryZone, OrderType, PaymentMethod } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, size?: SizeOption, extras?: ExtraOption[], isSpicy?: boolean, notes?: string, quantity?: number) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  subtotal: number;
  totalCount: number;
  
  // Customization modal state
  customizingItem: MenuItem | null;
  openCustomizationModal: (item: MenuItem) => void;
  closeCustomizationModal: () => void;
  
  // Cart drawer state
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  
  // Active tracking order state
  activeOrder: CustomerOrder | null;
  setActiveOrder: (order: CustomerOrder | null) => void;
  isOrderTrackerOpen: boolean;
  setIsOrderTrackerOpen: (open: boolean) => void;
  
  // Checkout submission
  placeOrder: (params: {
    orderType: OrderType;
    deliveryZone?: DeliveryZone;
    customerName: string;
    customerPhone: string;
    deliveryAddress?: string;
    specialInstructions?: string;
    paymentMethod: PaymentMethod;
  }) => CustomerOrder;

  // WhatsApp order link generator
  createWhatsAppLink: (order: CustomerOrder) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const RESTAURANT_WHATSAPP_NUMBER = '201008355380'; // Egyptian country code + 01008355380

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('altaj_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState<CustomerOrder | null>(() => {
    try {
      const saved = localStorage.getItem('altaj_last_order');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('altaj_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      if (activeOrder) {
        localStorage.setItem('altaj_last_order', JSON.stringify(activeOrder));
      }
    } catch (e) {
      console.error(e);
    }
  }, [activeOrder]);

  const openCustomizationModal = (item: MenuItem) => {
    setCustomizingItem(item);
  };

  const closeCustomizationModal = () => {
    setCustomizingItem(null);
  };

  const addToCart = (
    item: MenuItem,
    size?: SizeOption,
    extras: ExtraOption[] = [],
    isSpicy = false,
    notes = '',
    quantity = 1
  ) => {
    const basePrice = size ? size.price : item.price;
    const extrasTotal = extras.reduce((sum, e) => sum + e.price, 0);
    const unitPrice = basePrice + extrasTotal;

    // Create unique ID for cart item
    const extrasKey = extras.map(e => e.id).sort().join('_');
    const sizeKey = size ? size.id : 'base';
    const cartItemId = `${item.id}-${sizeKey}-${extrasKey}-${isSpicy ? 'spicy' : 'mild'}-${notes.trim()}`;

    setCart(prev => {
      const existing = prev.find(ci => ci.cartItemId === cartItemId);
      if (existing) {
        return prev.map(ci =>
          ci.cartItemId === cartItemId
            ? { ...ci, quantity: ci.quantity + quantity, itemTotal: (ci.quantity + quantity) * unitPrice }
            : ci
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          item,
          selectedSize: size,
          selectedExtras: extras,
          isSpicy,
          notes,
          quantity,
          itemTotal: unitPrice * quantity
        }
      ];
    });

    closeCustomizationModal();
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(ci => {
        if (ci.cartItemId !== cartItemId) return ci;
        const basePrice = ci.selectedSize ? ci.selectedSize.price : ci.item.price;
        const extrasTotal = ci.selectedExtras.reduce((sum, e) => sum + e.price, 0);
        const unitPrice = basePrice + extrasTotal;
        return {
          ...ci,
          quantity: newQuantity,
          itemTotal: unitPrice * newQuantity
        };
      })
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(ci => ci.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce((sum, ci) => sum + ci.itemTotal, 0);
  const totalCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  const placeOrder = ({
    orderType,
    deliveryZone,
    customerName,
    customerPhone,
    deliveryAddress,
    specialInstructions,
    paymentMethod
  }: {
    orderType: OrderType;
    deliveryZone?: DeliveryZone;
    customerName: string;
    customerPhone: string;
    deliveryAddress?: string;
    specialInstructions?: string;
    paymentMethod: PaymentMethod;
  }): CustomerOrder => {
    const deliveryFee = orderType === 'delivery' && deliveryZone ? deliveryZone.fee : 0;
    const finalTotal = subtotal + deliveryFee;
    const orderNumber = Math.floor(1000 + Math.random() * 9000);
    const orderId = `TAG-${orderNumber}`;

    const newOrder: CustomerOrder = {
      orderId,
      createdAt: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
      items: [...cart],
      orderType,
      deliveryZone,
      customerName,
      customerPhone,
      deliveryAddress,
      specialInstructions,
      paymentMethod,
      subtotal,
      deliveryFee,
      total: finalTotal,
      status: 'received'
    };

    setActiveOrder(newOrder);
    clearCart();
    setIsCartOpen(false);
    setIsOrderTrackerOpen(true);

    return newOrder;
  };

  const createWhatsAppLink = (order: CustomerOrder): string => {
    const paymentLabel =
      order.paymentMethod === 'cash'
        ? 'نقداً عند الاستلام (كاش)'
        : order.paymentMethod === 'vodafone_cash'
        ? 'فودافون كاش (محفظة إلكترونية)'
        : 'إنستاباي (InstaPay)';

    const typeLabel = order.orderType === 'delivery' ? 'توصيل منازل (دليفري)' : 'استلام من المطعم (تيك أواي)';

    const itemsSummary = order.items
      .map(
        (ci, idx) =>
          `${idx + 1}. *${ci.item.name}*` +
          (ci.selectedSize ? ` (${ci.selectedSize.name})` : '') +
          `\n   الكمية: ${ci.quantity} × ${ci.itemTotal / ci.quantity} ج.م = ${ci.itemTotal} ج.م` +
          (ci.isSpicy ? `\n   🌶️ حار (سبايسي)` : '') +
          (ci.selectedExtras.length > 0
            ? `\n   إضافات: ${ci.selectedExtras.map(e => e.name).join('، ')}`
            : '') +
          (ci.notes ? `\n   ملاحظات خاصة: "${ci.notes}"` : '')
      )
      .join('\n\n');

    const addressSection =
      order.orderType === 'delivery'
        ? `📍 *منطقة التوصيل:* ${order.deliveryZone?.name || 'حوش عيسى'}\n🏠 *العنوان التفصيلي:* ${order.deliveryAddress || 'غير محدد'}\n🛵 *رسوم التوصيل:* ${order.deliveryFee} ج.م\n⏱️ *الوقت المتوقع:* ${order.deliveryZone?.estimatedTime || '30 دقيقة'}`
        : `🏪 *نوع الطلب:* استلام من المطعم (حوش عيسى)`;

    const rawMessage = `👑 *طلب جديد من موقع مطعم التاج السوري* 👑
--------------------------------
🔢 *رقم الطلب:* #${order.orderId}
👤 *اسم العميل:* ${order.customerName}
📞 *رقم الهاتف:* ${order.customerPhone}
🛵 *الخدمة:* ${typeLabel}
${addressSection}
💳 *طريقة الدفع:* ${paymentLabel}
--------------------------------
📋 *تفاصيل الوجبات المطلوبة:*
${itemsSummary}
--------------------------------
💵 *المجموع الفرعي:* ${order.subtotal} ج.م
🛵 *التوصيل:* ${order.deliveryFee} ج.م
💰 *الإجمالي النهائي المستحق:* ${order.total} ج.م
${order.specialInstructions ? `\n📝 *تعليمات إضافية:* ${order.specialInstructions}` : ''}
--------------------------------
✨ نرجو تأكيد استلام الطلب والبدء في تحضيره فوراً. شكراً لكم!`;

    const encoded = encodeURIComponent(rawMessage);
    return `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        subtotal,
        totalCount,
        customizingItem,
        openCustomizationModal,
        closeCustomizationModal,
        isCartOpen,
        setIsCartOpen,
        activeOrder,
        setActiveOrder,
        isOrderTrackerOpen,
        setIsOrderTrackerOpen,
        placeOrder,
        createWhatsAppLink
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
