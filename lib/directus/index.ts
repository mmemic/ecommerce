import { createDirectus, graphql } from '@directus/sdk';
import { ensureStartsWith } from 'lib/utils';
import { HeaderMenu } from './interfaces';
import { getHeaderMenuQuery } from './queries/header-menu';
import { Menu } from './types';

const domain = process.env.DIRECTUS_STORE_DOMAIN
  ? ensureStartsWith(process.env.DIRECTUS_STORE_DOMAIN, 'https://')
  : '';
const client = createDirectus(domain).with(graphql());

export async function getHeaderMenu(): Promise<Menu[]> {
  const data = await client.query<HeaderMenu>(getHeaderMenuQuery);
  return data.header_menu;
}
