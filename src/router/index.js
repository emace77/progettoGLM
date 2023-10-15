/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import ProdottiView from "../views/ProdottiView.vue";
import DettaglioView from "../views/DettaglioView.vue";
import CardsView from "../views/CardsView.vue";
import CardDetailView from "../views/CardDetailView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import CartPage from "../views/CartPage.vue";
import AboutView from "../views/AboutView.vue";
import SearchView from "../views/SearchView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/prodotti",
    name: "prodotti",
    component: ProdottiView,
  },
  {
    path: "/prodotti/:productId",
    name: "dettaglio",
    component: DettaglioView,
  },
  {
    path: "/cards", 
    name: "cards",
    component: CardsView,
    props: true,
  },
  {
    path: "/card/:cardId", 
    name: "card",
    component: CardDetailView,
    props: true,
  },
  {
    path: "/carrello",
    name: "carrello",
    component: CartPage,
  },
  {
    path: "/about", 
    name: "about",
    component: AboutView,
  },
  {
    path: "/search", 
    name: "search",
    component: SearchView,
  },
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
