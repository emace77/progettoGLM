/* eslint-disable */
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
        autore: "Franco Forte",
        image: "/images/karolus.jpg",
        text: "Che cosa si agitava nel cuore di Karolus, il grande condottiero, quando si preparava a diventare reggente unico del Sacro Romano Impero? Quali sogni – e quali incubi – ne popolavano l'animo?",
      },
      {
        id: 2,
        title: "Il prigioniero dell’interno 7",
        autore: "Marco Presta",
        image: "https://picsum.photos/200/100?random=14",
        text: "Neanche rimanendo asserragliato nel suo appartamento, dietro una cortina di articoli satirici e di vita sbirciata dalla finestra, Vittorio riesce a ottenere l'unica cosa che gli sta davvero a cuore: non essere coinvolto da niente, mai, per nessun motivo. Anzi, nei giorni lenti del lockdown diventa suo malgrado il punto di riferimento di una comunità casuale e sgangherata: quella dei vicini di casa. Lui non lo sa ancora, ma è proprio mentre fuori infuria la tempesta che finalmente potrà imparare qualcosa del mondo e di se stesso.",
      },
      {
        id: 3,
        title: "Avere tutto",
        autore: " Marco Missiroli",
        image: "https://picsum.photos/200/100?random=7",
        text: "Libro vincitore del Premio Bagutta 2023 e finalista del Premio Lattes Grinzane 2023. Dove vorresti essere con un milione di euro in più e parecchi anni in meno? Un figlio, il ritorno a casa, la partita finale con la sua famiglia. E quell’ossessione che lo muove da sempre: la vita non è avere di più, è rischiare per avere tutto.",
      },
      {
        id: 4,
        title: "Vicolo Sant’Andrea 9",
        autore: "Manuela Faccon",
        image: "https://picsum.photos/200/100?random=3",
        text: "Un romanzo intimo e intenso sulla dignità al femminile, su cosa può aver significato negli anni ‘40-’50 essere una donna non sposata e senza figli, e sui sacrifici che comporta l’emancipazione",
      },
      {
        id: 5,
        title: "Julie",
        autore: "Ida Amlesu",
        image: "https://picsum.photos/200/100?random=22",
        text: "Una vita che è un inno all’anticonformismo, al coraggio di trovare la propria voce e di vivere senza compromessi, anche fra i dogmi e l’ipocrisia di una società di soli uomini.",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
