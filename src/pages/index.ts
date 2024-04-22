import Routing from "./index.vue";

export const routes = [
  { path: "/catalog", component: () => import("./CatalogPage"), name: "catalog" },
  { path: "/favorites", component: () => import("./CatalogPage"), name: "favorites" },
  { path: "/product/:id", component: () => import("./ProductPage"), name: "product" },
  { path: "/about", component: () => import("./AboutPage"), name: "about" },
];

export { Routing };
