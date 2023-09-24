export const getHomepageRelatedProductsQuery = `
query {
    homepage_products {
        related_products {
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
