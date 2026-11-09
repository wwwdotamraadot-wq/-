export type CategoryId = 
  | 'all'
  | 'shawarma'
  | 'crepe'
  | 'pizza'
  | 'meals'
  | 'grills'
  | 'appetizers'
  | 'drinks';

export interface ExtraOption {
  id: string;
  name: string;
  price: number;
}

export interface SizeOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  price: number; // Base price in EGP
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  isSpicy?: boolean;
  isSpecialOffer?: boolean;
  sizes?: SizeOption[];
  availableExtras?: ExtraOption[];
}

export interface CartItem {
  cartItemId: string; // unique key combining item id, size and selected extras
  item: MenuItem;
  selectedSize?: SizeOption;
  selectedExtras: ExtraOption[];
  isSpicy: boolean;
  notes?: string;
  quantity: number;
  itemTotal: number;
}

export interface DeliveryZone {
  id: string;
  name: string;
  fee: number;
  estimatedTime: string;
  description: string;
}

export type OrderType = 'delivery' | 'takeaway';
export type PaymentMethod = 'cash' | 'vodafone_cash' | 'instapay';

export interface CustomerOrder {
  orderId: string;
  createdAt: string;
  items: CartItem[];
  orderType: OrderType;
  deliveryZone?: DeliveryZone;
  customerName: string;
  customerPhone: string;
  deliveryAddress?: string;
  specialInstructions?: string;
  paymentMethod: PaymentMethod;
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: 'received' | 'preparing' | 'on_the_way' | 'delivered';
}
