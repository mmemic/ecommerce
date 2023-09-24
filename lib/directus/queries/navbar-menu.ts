export const getNavbarMenuQuery = `
query {
    navbar_menu {
        collections(sort: ["sort", "title"]) {
            title
            path
        }
    }
}
`;
