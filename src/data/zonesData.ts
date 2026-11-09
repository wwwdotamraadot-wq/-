import { DeliveryZone } from '../types';

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    id: 'downtown',
    name: 'وسط مدينة حوش عيسى (شارع الجمهورية والميدان)',
    fee: 15,
    estimatedTime: '20 - 30 دقيقة',
    description: 'قلب المدينة والشارع التجاري وميدان حوش عيسى'
  },
  {
    id: 'station',
    name: 'منطقة مجمع المواقف ومحطة القطار القديمة',
    fee: 15,
    estimatedTime: '25 - 30 دقيقة',
    description: 'محيط الموقف العمومي ومجمع المواقف'
  },
  {
    id: 'schools',
    name: 'منطقة المعهد الديني والمدارس الثانوية',
    fee: 15,
    estimatedTime: '25 - 35 دقيقة',
    description: 'شارع المدارس والمعهد الأزهري'
  },
  {
    id: 'kom_akhdar',
    name: 'طريق الكوم الأخضر وحي الزهور والمنشية',
    fee: 20,
    estimatedTime: '30 - 40 دقيقة',
    description: 'أطراف المدينة والامتداد العمراني الجديد'
  },
  {
    id: 'hospital',
    name: 'محيط المستشفى العام وطريق دمنهور',
    fee: 20,
    estimatedTime: '25 - 35 دقيقة',
    description: 'مستشفى حوش عيسى المركزي ومداخله'
  },
  {
    id: 'outer_villages',
    name: 'قرى وتوابع مركز حوش عيسى (القرى القريبة)',
    fee: 30,
    estimatedTime: '40 - 55 دقيقة',
    description: 'نجوع وقرى مركز حوش عيسى المجاورة'
  }
];
