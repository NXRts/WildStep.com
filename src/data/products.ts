export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
  // TENTS
  {
    id: '1',
    name: 'Summit Pro Tent 2P',
    description: 'Ultra-lightweight 2-person tent for alpine expeditions. Ripstop nylon with silicone coating. 1.2kg total weight.',
    price: 3200000,
    category: 'Tents',
    image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
  {
    id: '7',
    name: 'Basecamp Dome 4P',
    description: 'Spacious 4-person family tent with standing height and large vestibule. Perfect for extended camping trips.',
    price: 4500000,
    category: 'Tents',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
  },

  // BACKPACKS
  {
    id: '2',
    name: 'Terra Trekker 65L',
    description: 'Expedition grade backpack with customizable suspension. Waterproof zippers and hydration bladder compatible.',
    price: 2100000,
    category: 'Backpacks',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
  },
  {
    id: '8',
    name: 'Urban Commuter 25L',
    description: 'Sleek daypack for trail to office transition. Laptop compartment and hidden pockets.',
    price: 850000,
    category: 'Backpacks',
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
  },
  {
    id: '9',
    name: 'Alpine Ascent 40L',
    description: 'Technical climbing pack with ice axe loops and rope holder. Minimalist geometric design.',
    price: 1500000,
    category: 'Backpacks',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
  },

  // SHOES
  {
    id: '3',
    name: 'Apex GTX Boots',
    description: 'Gore-Tex mountaineering boots. Crampon compatible with Vibram Arctic grip soles.',
    price: 2800000,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
  {
    id: '10',
    name: 'Trail Runner Swift',
    description: 'Ultra-responsive trail running shoes with carbon plate technology and breathable mesh.',
    price: 1650000,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
  },

  // APPAREL (New Category)
  {
    id: '11',
    name: 'Storm Shell Jacket',
    description: '3-layer waterproof hard shell jacket. Breathable yet completely impervious to heavy rain.',
    price: 1950000,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1548624143-7f6d3a6c117e?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
  },
  {
    id: '12',
    name: 'Merino Base Layer Top',
    description: '100% Merino wool base layer. Odor-resistant and temperature regulating.',
    price: 650000,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1578681994506-b8f4634502fe?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
  {
    id: '13',
    name: 'Down Puffer Vest',
    description: '800-fill goose down vest. Packable and incredibly warm for its weight.',
    price: 1200000,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
  },

  // TECH & GADGETS (New Category)
  {
    id: '5',
    name: 'Lumen Pro 1000',
    description: '1000 lumen tactical flashlight with strobe mode and solar recharge capability.',
    price: 550000,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1563810118832-1533bb9b6da8?auto=format&fit=crop&q=80&w=800',
    rating: 4.3,
  },
  {
    id: '14',
    name: 'SatNav Explorer GPS',
    description: 'Rugged handheld GPS with topographic maps and satellite communication.',
    price: 3500000,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1519575706483-f223524b3cd4?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
  },
  {
    id: '15',
    name: 'SolarPower Bank 20k',
    description: '20,000mAh power bank with integrated solar panels. Keep your devices charged off-grid.',
    price: 750000,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=800',
    rating: 4.4,
  },

  // SLEEPING GEAR
  {
    id: '4',
    name: 'Arctic Down Bag -20C',
    description: 'Professional expedition sleeping bag for extreme cold. 900-fill down insulation.',
    price: 4200000,
    category: 'Sleeping Bags',
    image: 'https://images.unsplash.com/photo-1517176118179-652467d43d1f?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
  },

  // COOKWARE
  {
    id: '6',
    name: 'Titanium Cookset',
    description: 'Ultralight titanium pot and pan set. Nesting design for minimal pack space.',
    price: 650000,
    category: 'Gear',
    image: 'https://images.unsplash.com/photo-1520038827476-886ecfdcb86d?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
  },
  {
    id: '16',
    name: 'Aeropress Go',
    description: 'Portable coffee press for the best brew on the mountain. Includes mug and lid.',
    price: 450000,
    category: 'Gear',
    image: 'https://images.unsplash.com/photo-1544439121-50e561a069ca?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
];

export const categories = [
  'All',
  'Tents',
  'Backpacks',
  'Shoes',
  'Apparel',
  'Tech',
  'Sleeping Bags',
  'Gear'
];
