import { createDirectus, graphql } from '@directus/sdk';
import { ensureStartsWith } from 'lib/utils';
import {
  FooterMenu,
  HomepageFeaturedProducts,
  HomepageRelatedProducts,
  NavbarMenu
} from './interfaces';
import { getFooterMenuQuery } from './queries/footer-menu';
import { getHomepageFeaturedProductsQuery } from './queries/homepage-featured-products';
import { getHomepageRelatedProductsQuery } from './queries/homepage-related-products';
import { getNavbarMenuQuery } from './queries/navbar-menu';
import { Menu, Product } from './types';

const domain = process.env.DIRECTUS_STORE_DOMAIN
  ? ensureStartsWith(process.env.DIRECTUS_STORE_DOMAIN, 'https://')
  : '';
const client = createDirectus(domain).with(graphql());

export async function getNavbarMenu(): Promise<Menu[]> {
  const data = await client.query<NavbarMenu>(getNavbarMenuQuery);
  return data.navbar_menu.collections;
}

export async function getFooterMenu(): Promise<Menu[]> {
  const data = await client.query<FooterMenu>(getFooterMenuQuery);
  return data.footer_menu.pages;
}

export async function getHomepageFeaturedProducts(): Promise<Product[]> {
  const data = await client.query<HomepageFeaturedProducts>(getHomepageFeaturedProductsQuery);
  const products = data.homepage_products.featured_products;
  const imageBaseUrl = `${domain}/assets`;
  const mappedProducts = products.map((item): Product => {
    return {
      ...item,
      featuredImage: `${imageBaseUrl}/${item.featured_image.id}`,
      price: { amount: '123', currencyCode: 'BAM' }
    };
  });

  return mappedProducts;
}

export async function getHomepageRelatedProducts(): Promise<Product[]> {
  const data = await client.query<HomepageRelatedProducts>(getHomepageRelatedProductsQuery);
  const products = data.homepage_products.related_products;
  const imageBaseUrl = `${domain}/assets`;
  const mappedProducts = products.map((item): Product => {
    return {
      ...item,
      featuredImage: `${imageBaseUrl}/${item.featured_image.id}`,
      price: { amount: '123', currencyCode: 'BAM' }
    };
  });

  return mappedProducts;
}
