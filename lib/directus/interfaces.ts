import { Menu } from './types';

export interface NavbarMenu {
  navbar_menu: { collections: Menu[] };
}

export interface FooterMenu {
  footer_menu: { pages: Menu[] };
}

interface DirectusImage {
  id: string;
}

interface DirectusProduct {
  id: string;
  slug: string;
  featured_image: DirectusImage;
  title: string;
}

export interface HomepageFeaturedProducts {
  homepage_products: { featured_products: DirectusProduct[] };
}

export interface HomepageRelatedProducts {
  homepage_products: { related_products: DirectusProduct[] };
}
