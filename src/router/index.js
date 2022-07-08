import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import ProdottiView from "../views/ProdottiView.vue";
import DettaglioView from "../views/DettaglioView.vue";
import NotFoundView from "../views/NotFoundView.vue";

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
