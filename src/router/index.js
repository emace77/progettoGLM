/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import ProdottiView from "../views/ProdottiView.vue";
import DettaglioView from "../views/DettaglioView.vue";
import CardView from "../views/CardView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import CartPage from "../views/CartPage.vue";
import LogPage from "../views/LogPage.vue";


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
    path: "/card/:cardId", // dettaglio era card
    name: "card",
    component: CardView,
    props: true,
  },
  {
    path: "/carrello", // <-- Aggiungi questa rotta
    name: "carrello",
    component: CartPage
  },
  {
    path: "/login", 
    name: "login",
    component: LogPage
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
