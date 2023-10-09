/* eslint-disable */
import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [
      {
        id: 1,
        title: "Tutti a scuola!",
        image: "/images/scuola.png",
        alt: "Immagine di Freepik",
        text: "A tutti gli studenti delle scuole superiori, un coupon di benvenuto di 20 euro",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim lorem. Proin id erat neque. Mauris sodales, eros ut consequat viverra, velit nulla lobortis diam, in vestibulum dui massa semper risus. Morbi tempus et ex at rutrum. Nulla magna massa, pharetra ac diam non, rutrum laoreet ex. Morbi lobortis ligula ac porttitor vehicula. Suspendisse vehicula odio et est semper, ut pulvinar orci malesuada. Morbi ac dictum risus. Quisque id elementum sem. Aliquam nisi tellus, fermentum id nunc et, laoreet aliquam ex. Aenean nec nunc sed nulla ultricies finibus ut vitae leo. Phasellus nibh justo, luctus venenatis blandit pulvinar, sodales eu massa. Phasellus rutrum faucibus elit. Vestibulum venenatis egestas faucibus. Fusce mi ipsum, interdum id lorem at, efficitur imperdiet eros. Curabitur a molestie risus."
      },
      {
        id: 2,
        title: "Book Quiz",
        image: "/images/concorso.png",
        alt: "Immagine di Freepik",
        text: "Rispondi a 10 domande e vinci il tuo libro preferito",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim lorem. Proin id erat neque. Mauris sodales, eros ut consequat viverra, velit nulla lobortis diam, in vestibulum dui massa semper risus. Morbi tempus et ex at rutrum. Nulla magna massa, pharetra ac diam non, rutrum laoreet ex. Morbi lobortis ligula ac porttitor vehicula. Suspendisse vehicula odio et est semper, ut pulvinar orci malesuada. Morbi ac dictum risus. Quisque id elementum sem. Aliquam nisi tellus, fermentum id nunc et, laoreet aliquam ex. Aenean nec nunc sed nulla ultricies finibus ut vitae leo. Phasellus nibh justo, luctus venenatis blandit pulvinar, sodales eu massa. Phasellus rutrum faucibus elit. Vestibulum venenatis egestas faucibus. Fusce mi ipsum, interdum id lorem at, efficitur imperdiet eros. Curabitur a molestie risus."
      },
      {
        id: 3,
        title: "Libri usati",
        image: "/images/usato.png",
        alt: "Immagine di Freepik",
        text: "Pagine che hanno ancora tanto da dire. Dai una nuova vita a un libro usato e risparmia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim lorem. Proin id erat neque. Mauris sodales, eros ut consequat viverra, velit nulla lobortis diam, in vestibulum dui massa semper risus. Morbi tempus et ex at rutrum. Nulla magna massa, pharetra ac diam non, rutrum laoreet ex. Morbi lobortis ligula ac porttitor vehicula. Suspendisse vehicula odio et est semper, ut pulvinar orci malesuada. Morbi ac dictum risus. Quisque id elementum sem. Aliquam nisi tellus, fermentum id nunc et, laoreet aliquam ex. Aenean nec nunc sed nulla ultricies finibus ut vitae leo. Phasellus nibh justo, luctus venenatis blandit pulvinar, sodales eu massa. Phasellus rutrum faucibus elit. Vestibulum venenatis egestas faucibus. Fusce mi ipsum, interdum id lorem at, efficitur imperdiet eros. Curabitur a molestie risus."
      },
    ],
    cardSelected: null, // inizializzo a null cardSelected
    products: [
      {
        id: 1,
        title: "Il prigioniero dell’interno 7",
        author: "Marco Presta",
        publisher: "Einaudi",
        genre: "letteratura italiana",
        language: "italiano",
        date: "25/01/2022",
        pages: "184",
        price: "15,20",
        image: "/images/prigioniero.jpg",
        text: "Neanche rimanendo asserragliato nel suo appartamento, dietro una cortina di articoli satirici e di vita sbirciata dalla finestra, Vittorio riesce a ottenere l'unica cosa che gli sta davvero a cuore: non essere coinvolto da niente, mai, per nessun motivo.",
        plot: "Vittorio ha poco piú di quarant'anni e per lavoro commenta notizie curiose su un quotidiano nazionale: un giorno scrive di granchi che scappano dai loro acquari, un altro di ricerche secondo cui l'universo odora di pancetta abbrustolita, o di piedi, o di lampone. Quando arriva, la pandemia lo prende in contropiede e in un attimo accartoccia la sua vita, proprio come succede a milioni di persone intorno a lui. Da un giorno all'altro Vittorio si ritrova a fare i conti con una realtà inaudita e il suo universo finisce per coincidere a poco a poco con i confini del condominio. Nessuno lo lascia in pace: la sua impegnativa quasi-fidanzata che gli si presenta sul pianerottolo con le valigie in mano, la vicina di casa filantropa che lo coinvolge nei suoi tentativi di aiutare il prossimo, l'anziano dirimpettaio che perde colpi, per non parlare degli agguati telefonici della madre che cerca di farlo sentire in colpa nei modi piú fantasiosi. Forse è un uomo buono a sua insaputa, Vittorio, di certo preferisce nascondersi dietro all'umorismo e alle battute feroci. Ma mentre una dopo l'altra cadono le certezze di sempre, lui ne ricava di nuove: che durante una pandemia i cani si possono noleggiare, che Andy Warhol può colonizzare la mente di un architetto svampito e che pure una signora anziana può innamorarsi. E, forse, che può provare a essere felice persino lui. Neanche rimanendo asserragliato nel suo appartamento, dietro una cortina di articoli satirici e di vita sbirciata dalla finestra, Vittorio riesce a ottenere l'unica cosa che gli sta davvero a cuore: non essere coinvolto da niente, mai, per nessun motivo. Anzi, nei giorni lenti del lockdown diventa suo malgrado il punto di riferimento di una comunità casuale e sgangherata: quella dei vicini di casa. Lui non lo sa ancora, ma è proprio mentre fuori infuria la tempesta che finalmente potrà imparare qualcosa del mondo e di se stesso.",
        isbn: 9788175257665,
        inventory: 3,
        cart:0,
        highlight: true,
        reviews: [], 
      },
      {
        id: 2,
        title: "Karolus. Il romanzo di Carlo Magno",
        author: "Franco Forte",
        publisher: "Mondadori",
        genre: "romanzo storico",
        language: "italiano",
        date: "17/01/2023",
        pages: "732",
        price: "23,75",
        image: "/images/karolus.jpg",
        text: "Che cosa si agitava nel cuore di Karolus, il grande condottiero, quando si preparava a diventare reggente unico del Sacro Romano Impero? Quali sogni – e quali incubi – ne popolavano l'animo?",
        plot: "25 dicembre 800. Sono passati tre secoli da quando Roma ha cessato di esistere: nella pur turbolenta storia della Città Eterna, nessuno ormai immaginava che ci potesse essere un altro imperatore. E invece, nel giorno di Natale di un secolo appena nato, il Papa sta per proclamare un nuovo sovrano. Un nuovo Cesare. A ricevere la corona è Karolus Magnus, Carlo Magno, primogenito della stirpe dei Carolingi. Come è arrivato Carlo su quel trono? Per qualcuno che si è meritato, ancora in vita, l'appellativo di Magno la risposta dovrebbe essere scontata. E se invece la strada che porta a quella notte di Natale fosse lastricata non solo di coraggio, battaglie e trionfi, ma anche di complotti, intrighi e sangue? Se tra i fasti delle vittorie si nascondessero troppi segreti? Attingendo a una sterminata storiografia, Franco Forte ricostruisce in forma di romanzo le gesta del celebre sovrano, dalla primissima infanzia agli ultimi, intensi istanti di vita, immergendoci nel racconto di un'avventura irripetibile, segnata da sfide, successi e amori, ma anche da dubbi, rimpianti, dolorosissime perdite e ancor più struggenti addii. Che cosa si agitava nel cuore di Karolus, il grande condottiero, quando si preparava a diventare reggente unico del Sacro Romano Impero? Quali sogni e quali incubi ne popolavano l'animo?",
        isbn: 9788175257661,
        inventory: 0,
        cart:0,
        highlight: false,
        reviews: [], 
      },
      {
        id: 3,
        title: "Avere tutto",
        author: " Marco Missiroli",
        publisher: "Einaudi",
        genre: "narrativa italiana",
        language: "italiano",
        date: "27/09/2022",
        pages: "168",
        price: "17,10",
        image: "/images/avere tutto.jpg",
        text: "Libro vincitore del Premio Bagutta 2023. Dove vorresti essere con un milione di euro in più e parecchi anni in meno? Un figlio, il ritorno a casa, la partita finale con la sua famiglia. E quell’ossessione che lo muove da sempre: la vita non è avere di più, è rischiare per avere tutto.",
        plot: "I gabbiani a Rimini non urlano mai. In nessuna stagione dell’anno, neanche quando Sandro torna a casa dopo aver vissuto a Milano, e trova suo padre con la testa sempre più dura. Neanche quando passano i mesi e si accorge di essere rimasto lì con lui per affrontare la loro partita più grande, facendo un vecchio gioco: dove vorresti essere con un milione di euro in più e parecchi anni in meno? Da giovane Nando Pagliarani aveva il torace da nuotatore e un destino interrotto. Ha lavorato sui bus turistici, fatto il ferroviere, posseduto il bar America, ma l’unica voce che dovrebbe esserci sul suo documento d’identità è: ballerino. Perché lui e sua moglie hanno ballato come diavoli, in tutte le competizioni della riviera romagnola. Ballavano per vincere. Anche a Sandro piace vincere, è una malattia di famiglia. Ma la sua danza è pericolosa. Le prime volte al tavolo da gioco era lui il tizio da spennare, poi è diventato lo sbarbato da tenere d’occhio. Quel che è certo è che prima aveva un lavoro stabile e programmava con Giulia un futuro. E adesso? Cos’è rimasto a Sandro, che voleva avere tutto? Cosa rimane a ciascuno di noi, ogni volta che sfidiamo la fortuna? Marco Missiroli firma il suo romanzo più potente e maturo, raccontando la febbre di un giovane uomo pieno di slanci e difetti, di una città di provincia che vive alla grande solo una stagione all’anno, di una famiglia arsa dall’amore e dalla smania.",
        isbn: 9788175257667,
        inventory: 15,
        cart:0,
        highlight: true,
        reviews: [], 
      },
      {
        id: 4,
        title: "Vicolo Sant’Andrea 9",
        author: "Manuela Faccon",
        publisher: "Feltrinelli",
        genre: "narrativa italiana",
        language: "italiano",
        date: "17/01/2023",
        pages: "288",
        price: "17,10",
        image: "/images/vicolo.jpg",
        text: "Un romanzo intimo e intenso sulla dignità al femminile, su cosa può aver significato negli anni ‘40-’50 essere una donna non sposata e senza figli, e sui sacrifici che comporta l’emancipazione",
        plot: "Padova, anni cinquanta. Teresa lavora come portinaia in un palazzo del centro. Dietro un aspetto dimesso e in apparenza insignificante, nasconde un bruciante segreto. Nel dicembre del 1943, quando aveva sedici anni, di ritorno da un incontro sotto i portici di piazza delle Erbe con il garzone di cui è innamorata, assiste all’arresto della famiglia ebrea per cui lavora e da cui è stata istruita e educata alla lettura. Un attimo prima di essere portata via dai soldati, la padrona le affida il suo ultimo nato: Amos, due enormi occhi scuri e una voglia di fragola sulla nuca. Qualcuno però fa la spia, Teresa viene separata a forza dal bambino e per punizione rinchiusa in manicomio. Anni dopo, continua a pensare a quel bambino. Sarà ancora vivo? Che tipo di persona sarà diventato? E fino a che punto dovrà arrivare, lei, per tener fede alla parola data? Presta servizio in casa delle ricche signorine Pozzo, così diverse dall’amorevole signora Levi o dalla famiglia numerosa in cui è cresciuta in campagna, e intanto cerca Amos. Finché un nuovo colpo del destino le offre l’occasione tanto attesa: c’è un impegno da onorare, una verità da consegnare prima che il portoncino di vicolo Sant’Andrea 9 si spalanchi per l’ultima volta e lei sia finalmente libera di ricominciare. Prendendo spunto da vicende storiche e da ricordi d’infanzia, Manuela Faccon costruisce il ritratto di una donna unica e, al tempo stesso, come tante, fragile dentro, ma forte fuori, per gli altri. Un romanzo intimo e intenso sulla dignità al femminile, sui sacrifici che comporta la lealtà, verso il prossimo e verso se stessi. Una voce potente, nuova, ma con una musicalità antica. Anni cinquanta. La portinaia di vicolo Sant’Andrea 9 nasconde un segreto. Ora, finalmente, è arrivato il momento di parlare.",
        isbn: 9788175257669,
        inventory: 11,
        cart:0,
        highlight: true,
        reviews: [], 
      },
      {
        id: 5,
        title: "Julie",
        author: "Ida Amlesu",
        publisher: "Sonzogno",
        genre: "narrativa italiana-romanzo",
        language: "italiano",
        date: "08/11/2022",
        pages: "328",
        price: "18,90",
        image: "/images/julie.jpg",
        text: "Una vita che è un inno all’anticonformismo, al coraggio di trovare la propria voce e di vivere senza compromessi, anche fra i dogmi e l’ipocrisia di una società di soli uomini.",
        plot: "Francia, 1686. Sulla scalinata di rue de la Grosse-Margot, nei quartieri popolari di Parigi, vengono rinvenuti i cadaveri di due guardie del Re. Il luogotenente La Reynie non ha dubbi su chi sia il colpevole: la sedicenne Julie d'Aubigny. Spadaccina infallibile e orecchio assoluto, viene educata come un ragazzo dal padre e come una ragazza dal potente Conte d'Armagnac, che ne fa prima il suo giullare e poi la sua amante. Ma Julie non è creatura da farsi mettere in gabbia, e si ribella agli obblighi di un matrimonio di convenienza fuggendo nella notte, per vivere alla giornata con il complice Séranne, ex maestro d'armi e noto libertino. Braccata da La Reynie, perseguitata dal Conte e respinta dall'alta società - a cui pure appartiene per nascita -, Julie intraprende un tortuoso viaggio verso la libertà, durante il quale vestirà i panni del cavaliere e quelli della dama, conoscendo le imprevedibili sfumature dell'amore e la sua grande vocazione: la musica lirica. Prendendo spunto dalla figura realmente esistita di Julie d'Aubigny, virtuosa della spada e prima diva dell'opera francese, Ida Amlesù mette in scena un personaggio travolgente, spregiudicato e al tempo stesso fragile. Tra le pagine di questo magnetico romanzo, racconta una vita che è un inno all'anticonformismo, al coraggio di trovare la propria voce e di vivere senza compromessi, anche fra i dogmi e l'ipocrisia di una società di soli uomini.",
        isbn: 9788175257668,
        inventory: 4,
        cart:0,
        highlight: false,
        reviews: [], 
      },
    ],
    productSelected: null, 
    // per contenere gli articoli che verranno aggiunti:
    cart:[],
    cartGlobal: 0,
  },
  //serve per ottenere gli articoli che sono stati aggiunti al carrello
  getters: {
    cartItems: state => state.cart
  },
  mutations: {
    // il valore di cardSelected è uguale al valore di card
    selectCard(state, card) {
      state.cardSelected = card;
    },
    selectProduct(state, product) {
      state.productSelected = product;
    },
    //mutations per aggiungere prodotto al carrello
    addToCart(state, product) {
      let found = state.cart.find(item => item.id === product.id);
      if (found) {
        found.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    //mutation per azzerare il carrello
    AZZERA_CARRELLO(state) {
      state.products.forEach(product => {
        product.cart = 0;
      });
    },
  },
  actions: {},
  modules: {},
});
