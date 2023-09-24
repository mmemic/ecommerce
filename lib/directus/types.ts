export type Menu = {
  title: string;
  path: string;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type SEO = {
  title: string;
  description: string;
};

export type Product = {
  id: string;
  slug: string;
  // availableForSale: boolean;
  title: string;
  // description: string;
  // options: ProductOption[];
  price: Money;
  // variants: ProductVariant[];
  featuredImage: string;
  // images: Image[];
  // seo: SEO;
  // tags: string[];
  // updatedAt: string;
};
