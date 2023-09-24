export const getHomepageFeaturedProductsQuery = `
query {
    homepage_products {
        featured_products {
            id
            slug
            featured_image {
                id
            }
            title
        }
    }
}
`;
