export const getFooterMenuQuery = `
query {
    footer_menu {
        pages(sort: ["sort", "sort"]) {
            title
            path
        }
    }
}
`;
