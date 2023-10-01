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
        title: "Karolus. Il romanzo di Carlo Magno",
        image: "https://picsum.photos/200/100?random=11",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
      {
        id: 2,
        title: "Il prigioniero dell’interno 7",
        image: "https://picsum.photos/200/100?random=14",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
      {
        id: 3,
        title: "Avere tutto",
        image: "https://picsum.photos/200/100?random=7",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
      {
        id: 4,
        title: "Vicolo Sant’Andrea 9",
        image: "https://picsum.photos/200/100?random=3",
        text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      },
      {
        id: 5,
        title: "Julie",
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
