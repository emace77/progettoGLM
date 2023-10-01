import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [
      {
        id: 1,
        title: "Titolo#1",
        image: "https://picsum.photos/200/100?random=3",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
      {
        id: 2,
        title: "Titolo#2",
        image: "https://picsum.photos/200/100?random=12",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
      {
        id: 3,
        title: "Titolo#3",
        image: "https://picsum.photos/200/100?random=4",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
    ],
    products: [
      {
        id: 1,
        title: "Libro#1",
        image: "https://picsum.photos/200/100?random=11",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
      {
        id: 2,
        title: "Prodotto#2",
        image: "https://picsum.photos/200/100?random=14",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
      {
        id: 3,
        title: "Prodotto#3",
        image: "https://picsum.photos/200/100?random=7",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
      {
        id: 4,
        title: "Prodotto#4",
        image: "https://picsum.photos/200/100?random=3",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
      {
        id: 5,
        title: "Prodotto#5",
        image: "https://picsum.photos/200/100?random=22",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
