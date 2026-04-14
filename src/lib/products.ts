export interface Product {
  id: string;
  slug: string;
  slugEn: string;
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
    slugEn: 'nano-ceramic-tinting-autofilm',
    nameEs: 'Polarizados Nanocerámicos Auto Film',
    nameEn: 'Nano Ceramic Window Tinting Auto Film',
    taglineEs: 'Protección, privacidad y tecnología nanocerámica para tu vehículo o edificio',
    taglineEn: 'Protection, privacy and nano ceramic technology for your vehicle or building',
    category: 'autofilm',
    coverImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    available: true,
  },
  {
    id: 'arboles-natan',
    slug: 'arboles-natan',
    slugEn: 'arboles-natan',
    nameEs: 'Árboles Natan — Servicios Navidad',
    nameEn: 'Árboles Natan — Christmas Services',
    taglineEs: 'Soluciones de iluminación navideña de alto impacto para espacios públicos y privados',
    taglineEn: 'High-impact Christmas lighting solutions for public and private spaces',
    category: 'navidad',
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    available: true,
  },
];
