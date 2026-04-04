export interface Product {
  id: string;
  slug: string;
  nameEs: string;
  nameEn: string;
  taglineEs: string;
  taglineEn: string;
  category: string;
  coverImage: string;
  available: boolean;
}

export const products: Product[] = [
  {
    id: 'autofilm-polarizados',
    slug: 'polarizados-nanocermicos-autofilm',
    nameEs: 'Polarizados Nanocerámicos Auto Film',
    nameEn: 'Nano Ceramic Window Tinting Auto Film',
    taglineEs: 'Protección, privacidad y tecnología nanocerámica para tu vehículo o edificio',
    taglineEn: 'Protection, privacy and nano ceramic technology for your vehicle or building',
    category: 'autofilm',
    coverImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800',
    available: true,
  },
];
