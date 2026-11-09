import { MenuItem, ExtraOption } from '../types';

// Standard reusable extras
export const COMMON_EXTRAS: ExtraOption[] = [
  { id: 'extra_toum', name: 'علبة تومية سوري إضافية', price: 7 },
  { id: 'extra_spicy_toum', name: 'علبة تومية حارة إضافية', price: 8 },
  { id: 'extra_mozzarella', name: 'مكس جبن وموزاريلا زيادة', price: 18 },
  { id: 'extra_fries', name: 'باكت بطاطس مقلية متبلة', price: 15 },
  { id: 'extra_pickles', name: 'مخلل سوري مشكل مخصوص', price: 6 },
  { id: 'extra_sauce', name: 'صوص باربكيو / رانش', price: 7 }
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. الشاورما السوري
  {
    id: 'shw_arabi_chicken',
    name: 'شاورما عربي دجاج التاج',
    category: 'shawarma',
    description: 'رول شاورما دجاج ع الفحم بخبز الصاج السوري المقرمش، مقطع لقطع فاخرة، يقدم مع بطاطس مقلية، تومية سورية ومخلل مشكل.',
    price: 85,
    image: '/src/assets/images/hero_syrian_shawarma_1794225512101.jpg',
    isPopular: true,
    sizes: [
      { id: 'single', name: 'وجبة عادي (رول واحد)', price: 85 },
      { id: 'double', name: 'وجبة دبل (2 رول)', price: 140 },
      { id: 'super', name: 'وجبة سوبر كينج عائلي (3 رول)', price: 195 }
    ],
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'shw_sarookh_chicken',
    name: 'ساندوتش صاروخ شاورما دجاج',
    category: 'shawarma',
    description: 'ساندوتش جامبو بخبز الصاج السوري المحمص المحشو بقطع الشاورما الشهية، صوص التومية، ومخلل الخيار المقرمش.',
    price: 60,
    image: '/src/assets/images/hero_syrian_shawarma_1794225512101.jpg',
    isPopular: true,
    sizes: [
      { id: 'regular', name: 'صاروخ عادي', price: 60 },
      { id: 'jumbo', name: 'صاروخ سوبر زيادة لحم', price: 80 }
    ],
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'shw_fatteh_mix',
    name: 'فتة شاورما سوري مكس (فراخ ولحم)',
    category: 'shawarma',
    description: 'طبقات أرز بسمتي سوري مبهر، خبز صاج مقلي مقرمش، شرائح شاورما لحم ودجاج، مغطاة بصوص التومية ودبس الرمان واللوز المحمص.',
    price: 110,
    image: '/src/assets/images/hero_syrian_shawarma_1794225512101.jpg',
    isPopular: true,
    sizes: [
      { id: 'single', name: 'طبق فردي', price: 110 },
      { id: 'double', name: 'طبق كبير مشبع', price: 155 }
    ],
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'shw_box_family',
    name: 'بوكس لمة التاج العائلي',
    category: 'shawarma',
    description: 'بوكس يكفي 4 إلى 5 أفراد: 4 رولات شاورما مقطعة عربي، 2 باكت بطاطس جامبو، 4 علب تومية ومخلل، لتر كولا بارد.',
    price: 280,
    image: '/src/assets/images/hero_syrian_shawarma_1794225512101.jpg',
    isSpecialOffer: true,
    isPopular: true,
    availableExtras: COMMON_EXTRAS
  },

  // 2. الكريب السوري المميز
  {
    id: 'crepe_crunchy_zinger',
    name: 'كريب سوبر كرانشي وزنجر حار',
    category: 'crepe',
    description: 'كريب مقرمش ذهبي محشو بقطع صدور الدجاج الزنجر الحارة المقرمشة، مكس جبنة موزاريلا سايحة، فلفل ألوان، زيتون وصوص الجبنة.',
    price: 75,
    image: '/src/assets/images/syrian_stuffed_crepe_1794225513496.jpg',
    isPopular: true,
    isSpicy: true,
    sizes: [
      { id: 'regular', name: 'حجم عادي', price: 75 },
      { id: 'jumbo', name: 'حجم جامبو دبل جبنة', price: 95 }
    ],
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'crepe_shawarma_mix',
    name: 'كريب شاورما سوري مكس',
    category: 'crepe',
    description: 'كريب ساخن محشو بشاورما فراخ ولحم سوري، صوص ثومية مدخنة، شرائح مخلل وجبن موزاريلا غني.',
    price: 80,
    image: '/src/assets/images/syrian_stuffed_crepe_1794225513496.jpg',
    isPopular: true,
    sizes: [
      { id: 'regular', name: 'حجم عادي', price: 80 },
      { id: 'jumbo', name: 'حجم جامبو', price: 100 }
    ],
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'crepe_mix_cheese',
    name: 'كريب مشكل جبن التاج (أربع أجبان)',
    category: 'crepe',
    description: 'مزيج غني من جبنة شيدر، موزاريلا، رومي قديم، وجبن كيري كريمي مع رشة زعتر سوري وفلفل ألوان وزيتون.',
    price: 65,
    image: '/src/assets/images/syrian_stuffed_crepe_1794225513496.jpg',
    sizes: [
      { id: 'regular', name: 'حجم عادي', price: 65 },
      { id: 'jumbo', name: 'حجم جامبو', price: 85 }
    ],
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'crepe_nutella_banana',
    name: 'كريب نوتيلا بالموز والمكسرات',
    category: 'crepe',
    description: 'كريب حلو غارق بشوكولاتة نوتيلا أصلية مع شرائح موز طازجة ورشة مكسرات بندق وفول سوداني وصوص كراميل.',
    price: 55,
    image: '/src/assets/images/syrian_stuffed_crepe_1794225513496.jpg',
    isNew: true,
    availableExtras: [
      { id: 'extra_nutella', name: 'شوكولاتة نوتيلا زيادة', price: 15 },
      { id: 'extra_nuts', name: 'مكسرات مشكلة إضافية', price: 10 }
    ]
  },

  // 3. البيتزا الإيطالية والسورية
  {
    id: 'pizza_taj_royal',
    name: 'بيتزا التاج الملكية (شاورما ومكس لحوم)',
    category: 'pizza',
    description: 'عجينة بيتزا هشة مخبوزة بالفرن الحجري، صلصة طماطم إيطالية خاصة، شاورما دجاج، سجق سوري متبل، جبنة موزاريلا مطاطية وفلفل.',
    price: 115,
    image: '/src/assets/images/artisan_syrian_pizza_1794225514398.jpg',
    isPopular: true,
    sizes: [
      { id: 'medium', name: 'وسط (Medium)', price: 115 },
      { id: 'large', name: 'كبير (Large)', price: 155 },
      { id: 'family', name: 'عائلي (Party)', price: 195 }
    ],
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'pizza_chicken_ranch',
    name: 'بيتزا كرانشي تشيكن مع صوص الرانش',
    category: 'pizza',
    description: 'قطع كريسبي الدجاج المقرمش، صوص الرانش الغني، فطر طازج، موزاريلا إيطالية وأوراق ريحان.',
    price: 110,
    image: '/src/assets/images/artisan_syrian_pizza_1794225514398.jpg',
    sizes: [
      { id: 'medium', name: 'وسط (Medium)', price: 110 },
      { id: 'large', name: 'كبير (Large)', price: 150 },
      { id: 'family', name: 'عائلي (Party)', price: 185 }
    ],
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'pizza_margherita',
    name: 'بيتزا مارجريتا نابولي الأصلية',
    category: 'pizza',
    description: 'صلصة طماطم طازجة، جبنة موزاريلا فاخرة، زيت زيتون بكر وزعتر وريحان إيطالي.',
    price: 80,
    image: '/src/assets/images/artisan_syrian_pizza_1794225514398.jpg',
    sizes: [
      { id: 'medium', name: 'وسط (Medium)', price: 80 },
      { id: 'large', name: 'كبير (Large)', price: 110 },
      { id: 'family', name: 'عائلي (Party)', price: 140 }
    ],
    availableExtras: COMMON_EXTRAS
  },

  // 4. وجبات وساندوتشات سورية
  {
    id: 'meal_crispy_platter',
    name: 'وجبة كريسبي تشيكن التاج (4 قطع كبار)',
    category: 'meals',
    description: '4 قطع صدور دجاج كريسبي مقرمشة ذهبية مع أرز بسمتي فاخر، سلطة كول سلو، بطاطس مقلية، 2 عيش سوري وتومية.',
    price: 115,
    image: '/src/assets/images/syrian_mixed_grill_1794225513997.jpg',
    isPopular: true,
    sizes: [
      { id: 'normal', name: 'وجبة عادية (4 قطع)', price: 115 },
      { id: 'jumbo', name: 'وجبة سوبر كينج (6 قطع)', price: 155 }
    ],
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'meal_shish_tawook',
    name: 'وجبة شيش طاووق سوري ع الفحم',
    category: 'meals',
    description: 'أسياخ شيش طاووق دجاج متبلة بالبهارات الحلبية مشوية على الفحم، تقدم مع أرز بسمتي أصفر وبطاطس وتومية وخضار مشوي.',
    price: 125,
    image: '/src/assets/images/syrian_mixed_grill_1794225513997.jpg',
    sizes: [
      { id: 'regular', name: 'وجبة 3 أسياخ', price: 125 },
      { id: 'large', name: 'وجبة 5 أسياخ مشوية', price: 175 }
    ],
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'sand_cordon_bleu',
    name: 'ساندوتش كوردن بلو سوري عيش فرنسي',
    category: 'meals',
    description: 'رول دجاج محشو جبن شيدر وتركي مدخن مقلي مقرمش مع الخس والصوص السري في خبز فينو فرنسي طازج.',
    price: 65,
    image: '/src/assets/images/syrian_stuffed_crepe_1794225513496.jpg',
    availableExtras: COMMON_EXTRAS
  },

  // 5. المشويات ع الفحم والصواني
  {
    id: 'grill_saniyat_al_taj',
    name: 'صينية التاج السوري الملكية (عائلية)',
    category: 'grills',
    description: 'سيرفيس فخم يجمع: دجاجة مشوية كاملة ع الفحم + نصف كيلو كفتة كباب حلبي + كيلو أرز بسمتي بالمكسرات + 4 خبز صاج + سلطات وتومية ومخللات.',
    price: 360,
    image: '/src/assets/images/syrian_mixed_grill_1794225513997.jpg',
    isSpecialOffer: true,
    isPopular: true,
    availableExtras: COMMON_EXTRAS
  },
  {
    id: 'grill_kebab_kofta',
    name: 'وجبة مشويات مكس (كباب وكفتة)',
    category: 'grills',
    description: 'مكس كباب لحم بلدي وكفتة متبلة على الطريقة السورية ومشوية على الفحم الطبيعي مع الأرز البسمتي والسلطات.',
    price: 160,
    image: '/src/assets/images/syrian_mixed_grill_1794225513997.jpg',
    sizes: [
      { id: 'single', name: 'وجبة نصف رطل (ربع كيلو)', price: 160 },
      { id: 'half_kilo', name: 'وجبة نصف كيلو مشوي', price: 290 },
      { id: 'kilo', name: 'كيلو مشويات صافي مع ملحقاته', price: 540 }
    ],
    availableExtras: COMMON_EXTRAS
  },

  // 6. مقبلات وصوصات
  {
    id: 'app_toum_original',
    name: 'تومية سورية أصلية بالثوم والليمون (كبير)',
    category: 'appetizers',
    description: 'تومية شامية حريرية غنية محضرة يومياً بأيدي شيف سوري متخصص.',
    price: 18,
    image: '/src/assets/images/hero_syrian_shawarma_1794225512101.jpg'
  },
  {
    id: 'app_sambousek_cheese',
    name: 'طبق سمبوسك مكس (جبنة ولحم 6 قطع)',
    category: 'appetizers',
    description: 'عجينة سمبوسك مقرمشة محشوة باللحم المفروم المتبل ومكس الجبن الحلوم والموزاريلا.',
    price: 35,
    image: '/src/assets/images/hero_syrian_shawarma_1794225512101.jpg'
  },
  {
    id: 'app_french_fries_spiced',
    name: 'باكت بطاطس سوري مبهر مع التومية',
    category: 'appetizers',
    description: 'أصابع بطاطس مقرمشة ذهبية متبلة ببهار الشاورما السري مع علبة تومية.',
    price: 25,
    image: '/src/assets/images/hero_syrian_shawarma_1794225512101.jpg'
  },

  // 7. مشروبات وحلويات
  {
    id: 'drink_fresh_mango',
    name: 'عصير مانجو طبيعي مثلج فريش',
    category: 'drinks',
    description: 'عصير مانجو طبيعي كثيف وبارد منعش من الفاكهة الطازجة.',
    price: 30,
    image: '/src/assets/images/syrian_stuffed_crepe_1794225513496.jpg'
  },
  {
    id: 'drink_pepsi_can',
    name: 'كانز بيبسي مثلج 330 مل',
    category: 'drinks',
    description: 'مشروب غازي بارد ومنعش.',
    price: 15,
    image: '/src/assets/images/hero_syrian_shawarma_1794225512101.jpg'
  },
  {
    id: 'sweet_om_ali',
    name: 'طاجن أم علي بالمكسرات والقشطة البلدي',
    category: 'drinks',
    description: 'طاجن فخار ساخن مخبوز بالفرن مع الحليب الطازج والقشطة والمكسرات المحمصة والزبيب.',
    price: 45,
    image: '/src/assets/images/artisan_syrian_pizza_1794225514398.jpg',
    isNew: true
  }
];

export const CATEGORIES: { id: MenuItem['category'] | 'all'; name: string; count: number }[] = [
  { id: 'all', name: 'الكل', count: MENU_ITEMS.length },
  { id: 'shawarma', name: 'شاورما سوري', count: MENU_ITEMS.filter(i => i.category === 'shawarma').length },
  { id: 'crepe', name: 'كريب سوري ومصري', count: MENU_ITEMS.filter(i => i.category === 'crepe').length },
  { id: 'pizza', name: 'بيتزا التاج', count: MENU_ITEMS.filter(i => i.category === 'pizza').length },
  { id: 'meals', name: 'وجبات وساندوتشات', count: MENU_ITEMS.filter(i => i.category === 'meals').length },
  { id: 'grills', name: 'مشويات وصواني', count: MENU_ITEMS.filter(i => i.category === 'grills').length },
  { id: 'appetizers', name: 'مقبلات وصوصات', count: MENU_ITEMS.filter(i => i.category === 'appetizers').length },
  { id: 'drinks', name: 'عصائر وحلويات', count: MENU_ITEMS.filter(i => i.category === 'drinks').length }
];
