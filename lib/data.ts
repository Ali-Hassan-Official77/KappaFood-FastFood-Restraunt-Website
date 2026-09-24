export type Category = {
  id: string;
  name: string;
  icon: string;
  accent: string;
  note: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  ingredients: string[];
  image: string;
  badge?: string;
  calories: number;
  spicy?: boolean;
  popular?: boolean;
  accent?: string;
};

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=88`;

export const categories: Category[] = [
  { id: 'buckets', name: 'Buckets', icon: '🍗', accent: '#df251f', note: 'Crispy & juicy' },
  { id: 'burgers', name: 'Burgers', icon: '🍔', accent: '#f3a51b', note: 'Loaded & grilled' },
  { id: 'snacks', name: 'Snacks', icon: '🍟', accent: '#f2c94c', note: 'Small but mighty' },
  { id: 'sides', name: 'Sides', icon: '🥔', accent: '#e8a13c', note: 'Perfect pairings' },
  { id: 'drinks', name: 'Drinks', icon: '🥤', accent: '#d93b2b', note: 'Cold & refreshing' },
  { id: 'desserts', name: 'Desserts', icon: '🍨', accent: '#c68b6e', note: 'Sweet finish' },
];

export const products: Product[] = [
  {
    id: 'crunch-bucket', slug: 'signature-crunch-bucket', name: 'Signature Crunch Bucket', category: 'buckets',
    price: 2299, oldPrice: 2699, rating: 4.9, reviews: 324,
    description: '8 pieces of golden crispy chicken with two large fries, two dips and two chilled drinks.',
    ingredients: ['Crispy chicken', 'Seasoned fries', 'Signature dip', 'Soft drink'],
    image: img('photo-1513639776629-7b61b0ac49cb'), badge: 'BESTSELLER', calories: 1680, popular: true, accent: '#df251f',
  },
  {
    id: 'zinger-combo', slug: 'classic-zinger-combo', name: 'Classic Zinger Combo', category: 'burgers',
    price: 1099, oldPrice: 1199, rating: 4.8, reviews: 287,
    description: 'Crispy chicken burger layered with lettuce, cheese and creamy signature sauce, served with fries and a drink.',
    ingredients: ['Crispy chicken', 'Lettuce', 'Cheese', 'Signature sauce'],
    image: img('photo-1568901346375-23c9450c58cd'), badge: 'POPULAR', calories: 1040, popular: true, accent: '#f3a51b',
  },
  {
    id: 'hot-crispy', slug: 'hot-crispy-feast', name: 'Hot & Crispy Feast', category: 'buckets',
    price: 1599, oldPrice: 1899, rating: 4.7, reviews: 194,
    description: '5 pieces of spicy crispy chicken with fries, a dip and a chilled drink.',
    ingredients: ['Spicy chicken', 'Fries', 'Chilli dip', 'Soft drink'],
    image: img('photo-1626082927389-6cd097cdc6ec'), badge: 'SAVE 15%', calories: 1260, spicy: true, popular: true, accent: '#e53a2e',
  },
  {
    id: 'double-stack', slug: 'kappa-double-stack', name: 'Kappa Double Stack', category: 'burgers',
    price: 1399, rating: 4.8, reviews: 166,
    description: 'Two crunchy chicken fillets, melted cheese, pickles and smoky sauce in a toasted brioche bun.',
    ingredients: ['Chicken fillets', 'Cheese', 'Pickles', 'Smoky sauce'],
    image: img('photo-1550547660-d9450f859349'), badge: 'KAPPA PICK', calories: 1190, popular: true, accent: '#df251f',
  },
  {
    id: 'loaded-fries', slug: 'loaded-fire-fries', name: 'Loaded Fire Fries', category: 'snacks',
    price: 499, rating: 4.7, reviews: 221,
    description: 'Crispy fries topped with spicy chicken bites, cheese sauce and a smoky chilli drizzle.',
    ingredients: ['Crispy fries', 'Chicken bites', 'Cheese sauce', 'Chilli drizzle'],
    image: img('photo-1573080496219-bb080dd4f877'), badge: 'FAN FAVOURITE', calories: 690, popular: true, accent: '#f2c94c',
  },
  {
    id: 'crispy-strips', slug: 'crispy-chicken-strips', name: 'Crispy Chicken Strips', category: 'snacks',
    price: 699, rating: 4.6, reviews: 137,
    description: 'Tender chicken strips with a crunchy coating and your choice of creamy signature dip.',
    ingredients: ['Chicken strips', 'Crispy coating', 'Signature dip'],
    image: img('photo-1606728035253-49e8a2318dde'), calories: 620, accent: '#e39a35',
  },
  {
    id: 'golden-fries', slug: 'golden-seasoned-fries', name: 'Golden Seasoned Fries', category: 'sides',
    price: 349, rating: 4.7, reviews: 308,
    description: 'Fresh-cut golden fries finished with Kappa seasoning and served hot.',
    ingredients: ['Potatoes', 'Kappa seasoning', 'Salt'],
    image: img('photo-1573080496219-bb080dd4f877'), calories: 390, popular: true, accent: '#e8a13c',
  },
  {
    id: 'cola', slug: 'kappa-cola', name: 'Kappa Cola', category: 'drinks',
    price: 249, rating: 4.6, reviews: 112,
    description: 'Ice-cold fizzy cola, perfectly paired with any Kappa meal.',
    ingredients: ['Cola', 'Ice'],
    image: img('photo-1544145945-f90425340c7e'), calories: 160, accent: '#d93b2b',
  },
  {
    id: 'mango-shake', slug: 'mango-cream-shake', name: 'Mango Cream Shake', category: 'drinks',
    price: 549, rating: 4.9, reviews: 154,
    description: 'Rich mango shake finished with a silky cream layer and a little sweetness.',
    ingredients: ['Mango', 'Milk', 'Cream', 'Vanilla'],
    image: img('photo-1579954115545-a95591f28bfc'), badge: 'NEW', calories: 510, popular: true, accent: '#f3a51b',
  },
  {
    id: 'choco-cup', slug: 'chocolate-lava-cup', name: 'Chocolate Lava Cup', category: 'desserts',
    price: 449, rating: 4.9, reviews: 182,
    description: 'Warm chocolate cake with a molten centre and a cool vanilla cream topping.',
    ingredients: ['Chocolate', 'Cocoa', 'Vanilla cream'],
    image: img('photo-1606313564200-e75d5e30476c'), badge: 'SWEET PICK', calories: 440, popular: true, accent: '#9d5d51',
  },
];

export const offers = [
  { code: 'KAPPA300', title: 'Rs. 300 OFF', sub: 'On your first order above Rs. 1,800', label: 'WELCOME OFFER' },
  { code: 'MEALDEAL', title: '15% OFF', sub: 'On selected Kappa combos this week', label: 'COMBO DROP' },
  { code: 'FREESHIP', title: 'FREE DELIVERY', sub: 'On orders above Rs. 1,500', label: 'DELIVERY PERK' },
];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
