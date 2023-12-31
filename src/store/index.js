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
        description:"Bookvue offre un coupon di benvenuto del valore di 20 euro a tutti gli studenti delle scuole superiori per supportare il loro percorso educativo e stimolare la passione per la lettura. Il coupon dà l'opportunità di scoprire ed usufruire dell'ampia selezione di titoli presenti nella nostra libreria, dai classici della letteratura alle ultime novità."
      },
        {
        id: 2,
        title: "Book Quiz",
        image: "/images/concorso.png",
        alt: "Immagine di Freepik",
        text: "Rispondi a 10 domande e vinci il tuo libro preferito",
        description: "Questo è il luogo dove le tue risposte possono portarti verso il tuo libro preferito. Partecipare è semplice: rispondi a 10 domande e potresti essere il fortunato vincitore di un libro che hai sempre desiderato. Siamo curiosi di scoprire quanto conosci del mondo dei libri, e siamo pronti a premiare la tua passione per la lettura. "
      },
      {
        id: 3,
        title: "Libri usati",
        image: "/images/usato.png",
        alt: "Immagine di Freepik",
        text: "Pagine che hanno ancora tanto da dire. Dai una nuova vita a un libro usato e risparmia",
        description: "Ogni libro racconta una storia, e ogni pagina ha ancora tanto da dire. Ecco perché offriamo l'opportunità di dare nuova vita a libri usati, contribuendo al loro ciclo di storie e risparmiando allo stesso tempo. Inoltre, se porti un libro usato da vendere, hai diritto a un'ulteriore scontistica su uno dei nostri titoli."
      },
    ],
    cardSelected: null, // inizializzo a null cardSelected
    genres: [
      {
        id: 1,
        name: "narrativa italiana",
      },
      {
        id: 2,
        name: "romanzo",
      },
      {
        id: 3,
        name: "romanzo storico",
      },
      {
        id: 4,
        name: "saggio",
      },
        
    ],
    products: [
      {
        id: 1,
        title: "Il prigioniero dell'interno 7",
        author: "Marco Presta",
        publisher: "Einaudi",
        genre: "narrativa italiana",
        language: "italiano",
        date: "25/01/2022",
        pages: "184",
        price: "15.20",
        image: "/images/prigioniero.jpg",
        text: "Neanche rimanendo asserragliato nel suo appartamento, dietro una cortina di articoli satirici e di vita sbirciata dalla finestra, Vittorio riesce a ottenere l'unica cosa che gli sta davvero a cuore: non essere coinvolto da niente, mai, per nessun motivo.",
        plot: "Vittorio ha poco piú di quarant'anni e per lavoro commenta notizie curiose su un quotidiano nazionale: un giorno scrive di granchi che scappano dai loro acquari, un altro di ricerche secondo cui l'universo odora di pancetta abbrustolita, o di piedi, o di lampone. Quando arriva, la pandemia lo prende in contropiede e in un attimo accartoccia la sua vita, proprio come succede a milioni di persone intorno a lui. Da un giorno all'altro Vittorio si ritrova a fare i conti con una realtà inaudita e il suo universo finisce per coincidere a poco a poco con i confini del condominio. Nessuno lo lascia in pace: la sua impegnativa quasi-fidanzata che gli si presenta sul pianerottolo con le valigie in mano, la vicina di casa filantropa che lo coinvolge nei suoi tentativi di aiutare il prossimo, l'anziano dirimpettaio che perde colpi, per non parlare degli agguati telefonici della madre che cerca di farlo sentire in colpa nei modi piú fantasiosi. Forse è un uomo buono a sua insaputa, Vittorio, di certo preferisce nascondersi dietro all'umorismo e alle battute feroci. Ma mentre una dopo l'altra cadono le certezze di sempre, lui ne ricava di nuove: che durante una pandemia i cani si possono noleggiare, che Andy Warhol può colonizzare la mente di un architetto svampito e che pure una signora anziana può innamorarsi. E, forse, che può provare a essere felice persino lui. Neanche rimanendo asserragliato nel suo appartamento, dietro una cortina di articoli satirici e di vita sbirciata dalla finestra, Vittorio riesce a ottenere l'unica cosa che gli sta davvero a cuore: non essere coinvolto da niente, mai, per nessun motivo. Anzi, nei giorni lenti del lockdown diventa suo malgrado il punto di riferimento di una comunità casuale e sgangherata: quella dei vicini di casa. Lui non lo sa ancora, ma è proprio mentre fuori infuria la tempesta che finalmente potrà imparare qualcosa del mondo e di se stesso.",
        isbn: 9788175257665,
        inventory: 3,
        cart:0,
        highlight: false,
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
        price: "23.30",
        image: "/images/karolus.jpg",
        text: "Che cosa si agitava nel cuore di Karolus, il grande condottiero, quando si preparava a diventare reggente unico del Sacro Romano Impero? Quali sogni – e quali incubi – ne popolavano l'animo?",
        plot: "25 dicembre 800. Sono passati tre secoli da quando Roma ha cessato di esistere: nella pur turbolenta storia della Città Eterna, nessuno ormai immaginava che ci potesse essere un altro imperatore. E invece, nel giorno di Natale di un secolo appena nato, il Papa sta per proclamare un nuovo sovrano. Un nuovo Cesare. A ricevere la corona è Karolus Magnus, Carlo Magno, primogenito della stirpe dei Carolingi. Come è arrivato Carlo su quel trono? Per qualcuno che si è meritato, ancora in vita, l'appellativo di Magno la risposta dovrebbe essere scontata. E se invece la strada che porta a quella notte di Natale fosse lastricata non solo di coraggio, battaglie e trionfi, ma anche di complotti, intrighi e sangue? Se tra i fasti delle vittorie si nascondessero troppi segreti? Attingendo a una sterminata storiografia, Franco Forte ricostruisce in forma di romanzo le gesta del celebre sovrano, dalla primissima infanzia agli ultimi, intensi istanti di vita, immergendoci nel racconto di un'avventura irripetibile, segnata da sfide, successi e amori, ma anche da dubbi, rimpianti, dolorosissime perdite e ancor più struggenti addii. Che cosa si agitava nel cuore di Karolus, il grande condottiero, quando si preparava a diventare reggente unico del Sacro Romano Impero? Quali sogni e quali incubi ne popolavano l'animo?",
        isbn: 9788175257661,
        inventory: 0,
        cart:0,
        highlight: false,
      },
      {
        id: 3,
        title: "Avere tutto",
        author: "Marco Missiroli",
        publisher: "Einaudi",
        genre: "narrativa italiana",
        language: "italiano",
        date: "27/09/2022",
        pages: "168",
        price: "17.80",
        image: "/images/avere tutto.jpg",
        text: "Libro vincitore del Premio Bagutta 2023. Dove vorresti essere con un milione di euro in più e parecchi anni in meno? Un figlio, il ritorno a casa, la partita finale con la sua famiglia. E quell’ossessione che lo muove da sempre: la vita è rischiare per avere tutto.",
        plot: "I gabbiani a Rimini non urlano mai. In nessuna stagione dell'anno, neanche quando Sandro torna a casa dopo aver vissuto a Milano, e trova suo padre con la testa sempre più dura. Neanche quando passano i mesi e si accorge di essere rimasto lì con lui per affrontare la loro partita più grande, facendo un vecchio gioco: dove vorresti essere con un milione di euro in più e parecchi anni in meno? Da giovane Nando Pagliarani aveva il torace da nuotatore e un destino interrotto. Ha lavorato sui bus turistici, fatto il ferroviere, posseduto il bar America, ma l’unica voce che dovrebbe esserci sul suo documento d’identità è: ballerino. Perché lui e sua moglie hanno ballato come diavoli, in tutte le competizioni della riviera romagnola. Ballavano per vincere. Anche a Sandro piace vincere, è una malattia di famiglia. Ma la sua danza è pericolosa. Le prime volte al tavolo da gioco era lui il tizio da spennare, poi è diventato lo sbarbato da tenere d’occhio. Quel che è certo è che prima aveva un lavoro stabile e programmava con Giulia un futuro. E adesso? Cos’è rimasto a Sandro, che voleva avere tutto? Cosa rimane a ciascuno di noi, ogni volta che sfidiamo la fortuna? Marco Missiroli firma il suo romanzo più potente e maturo, raccontando la febbre di un giovane uomo pieno di slanci e difetti, di una città di provincia che vive alla grande solo una stagione all’anno, di una famiglia arsa dall’amore e dalla smania.",
        isbn: 9788175257667,
        inventory: 15,
        cart:0,
        highlight: true,
      },
      {
        id: 4,
        title: "Vicolo Sant'Andrea 9",
        author: "Manuela Faccon",
        publisher: "Feltrinelli",
        genre: "narrativa italiana",
        language: "italiano",
        date: "17/01/2023",
        pages: "288",
        price: "17.20",
        image: "/images/vicolo.jpg",
        text: "Un romanzo intimo e intenso sulla dignità al femminile, su cosa può aver significato negli anni ‘40-’50 essere una donna non sposata e senza figli, e sui sacrifici che comporta l’emancipazione",
        plot: "Padova, anni cinquanta. Teresa lavora come portinaia in un palazzo del centro. Dietro un aspetto dimesso e in apparenza insignificante, nasconde un bruciante segreto. Nel dicembre del 1943, quando aveva sedici anni, di ritorno da un incontro sotto i portici di piazza delle Erbe con il garzone di cui è innamorata, assiste all’arresto della famiglia ebrea per cui lavora e da cui è stata istruita e educata alla lettura. Un attimo prima di essere portata via dai soldati, la padrona le affida il suo ultimo nato: Amos, due enormi occhi scuri e una voglia di fragola sulla nuca. Qualcuno però fa la spia, Teresa viene separata a forza dal bambino e per punizione rinchiusa in manicomio. Anni dopo, continua a pensare a quel bambino. Sarà ancora vivo? Che tipo di persona sarà diventato? E fino a che punto dovrà arrivare, lei, per tener fede alla parola data? Presta servizio in casa delle ricche signorine Pozzo, così diverse dall’amorevole signora Levi o dalla famiglia numerosa in cui è cresciuta in campagna, e intanto cerca Amos. Finché un nuovo colpo del destino le offre l’occasione tanto attesa: c’è un impegno da onorare, una verità da consegnare prima che il portoncino di vicolo Sant’Andrea 9 si spalanchi per l’ultima volta e lei sia finalmente libera di ricominciare. Prendendo spunto da vicende storiche e da ricordi d’infanzia, Manuela Faccon costruisce il ritratto di una donna unica e, al tempo stesso, come tante, fragile dentro, ma forte fuori, per gli altri. Un romanzo intimo e intenso sulla dignità al femminile, sui sacrifici che comporta la lealtà, verso il prossimo e verso se stessi. Una voce potente, nuova, ma con una musicalità antica. Anni cinquanta. La portinaia di vicolo Sant’Andrea 9 nasconde un segreto. Ora, finalmente, è arrivato il momento di parlare.",
        isbn: 9788175257669,
        inventory: 11,
        cart:0,
        highlight: true,
      },
      {
        id: 5,
        title: "L'arte di essere fragili",
        author: "Alessandro D'Avenia",
        publisher: "Mondadori",
        genre: "saggio",
        language: "italiano",
        date: "08/10/2019",
        pages: "216",
        price: "13.60",
        image: "/images/fragili.jpg",
        text: "Viviamo in un'epoca in cui si è titolati a vivere solo se perfetti. Ogni insufficienza, ogni debolezza, ogni fragilità sembra bandita. Ma c'è un altro modo per mettersi in salvo, ed è costruire un'altra terra, la terra di coloro che sanno essere fragili.",
        plot: "Esiste un metodo per la felicità duratura? Si può imparare il faticoso mestiere di vivere giorno per giorno in modo da farne addirittura un'arte della gioia quotidiana? Sono domande comuni, ognuno se le sarà poste decine di volte, senza trovare risposte. Eppure la soluzione può raggiungerci, improvvisa, grazie a qualcosa che ci accade, grazie a qualcuno. In queste pagine Alessandro D'Avenia racconta il suo metodo per la felicità e l'incontro decisivo che glielo ha rivelato: quello con Giacomo Leopardi. Leopardi è spesso frettolosamente liquidato come pessimista e sfortunato. Fu invece un giovane uomo affamato di vita e di infinito, capace di restare fedele alla propria vocazione poetica e di lottare per affermarla, nonostante l'indifferenza e perfino la derisione dei contemporanei. Nella sua vita e nei suoi versi, D'Avenia trova folgorazioni e provocazioni, nostalgia ed energia vitale.",
        isbn: 9788804682240,
        inventory: 8,
        cart:0,
        highlight: false,
      },
      {
        id: 6,
        title: "Il rosmarino non capisce l'inverno",
        author: "Matteo Bussola",
        publisher: "Einaudi",
        genre: "romanzo",
        language: "italiano",
        date: "28/06/2022",
        pages: "160",
        price: "15.70",
        image: "/images/rosmarino.jpg",
        text: "A cosa pensa una donna quando, assordata dalle voci di tutti, capisce all'improvviso di aver soffocato la propria?» In pochi come Matteo Bussola sanno raccontare, con tanta delicatezza e profondità, le contraddizioni dei rapporti umani.",
        plot: "Una donna sola che in tarda età scopre l'amore. Una figlia che lotta per riuscire a perdonare sua madre. Una ragazza che invece non vuole figli, perché non sopporterebbe il loro dolore. Una vedova che scrive al marito. Una sedicenne che si innamora della sua amica del cuore. Un'anziana che confida alla badante un terribile segreto. Le eroine di questo libro non hanno nulla di eroico, sono persone comuni, potrebbero essere le nostre vicine di casa, le nostre colleghe, nostra sorella, nostra figlia, potremmo essere noi. Fragili e forti, docili e crudeli, inquiete e felici, amano e odiano quasi sempre con tutte sé stesse, perché considerano l'amore l'occasione decisiva. Cadono, come tutti, eppure resistono, come il rosmarino quando sfida il gelo dell'inverno che tenta di abbatterlo, e rinasce in primavera nonostante le cicatrici. Un romanzo in cui si intrecciano storie ordinarie ed eccezionali, che ci toccano, ci interrogano, ci commuovono.",
        isbn: 9788806254483,
        inventory: 4,
        cart:0,
        highlight: true,
      },
      {
        id: 7,
        title: "La stanza delle mele",
        author: "Matteo Righetto",
        publisher: "Feltrinelli",
        genre: "romanzo",
        language: "italiano",
        date: "07/04/2022",
        pages: "240",
        price: "17.40",
        image: "/images/mele.jpg",
        text: "Matteo Righetto conosce profondamente il mondo arcaico della montagna – durissimo e al contempo vivo di profumi, sapori, dialetto e leggende – e ce lo restituisce nel suo romanzo più maturo e incalzante. Leggerlo è una corsa notturna nel bosco, con il cuore in gola.",
        plot: "È l'estate del 1954, Giacomo Nef ha undici anni e con i due fratelli maggiori vive dai nonni paterni a Daghè, sulle pendici del Col di Lana, nelle Dolomiti bellunesi. Tre case, tre fienili, tre famiglie. I bambini sono orfani e l'anziano capofamiglia li tratta con durezza e severità, soprattutto il più piccolo. Il nonno è convinto infatti che Giacomo sia nato da una relazione della nuora in tempo di guerra e lo punisce a ogni occasione, chiudendolo a chiave nella stanza delle mele selvatiche. Lì il ragazzino passa il tempo intagliando il legno e sognando l'avventura, le imprese degli scalatori celebri o degli eroi dei fumetti, e l'avventura gli corre incontro una tarda sera d'agosto. Con l'approssimarsi di un terribile temporale, Giacomo viene mandato dal nonno nel Bosch Negher a recuperare una roncola dimenticata al mattino. Mentre i tuoni sembrano voler squarciare il cielo, alla luce di un lampo scopre vicino all'attrezzo il corpo di un uomo appeso a un albero. L'impiccato è di spalle e lui, terrorizzato, fugge via. Per tutta la vita Giacomo cercherà di sciogliere un mistero che sembra legato a doppio filo con la vita del paese, con i suoi riti ancestrali intrisi di elementi magici e credenze popolari. Matteo Righetto conosce profondamente il mondo arcaico della montagna – durissimo e al contempo vivo di profumi, sapori, dialetto e leggende – e ce lo restituisce nel suo romanzo più maturo e incalzante. Leggerlo è una corsa notturna nel bosco, con il cuore in gola.",
        isbn: 9788807034909,
        inventory: 12,
        cart:0,
        highlight: false,
      },
      {
        id: 8,
        title: "Fiore di roccia",
        author: "Ilaria Tuti",
        publisher: "Longanesi",
        genre: "romanzo storico",
        language: "italiano",
        date: "08/06/2020",
        pages: "320",
        price: "17.90",
        image: "/images/roccia.jpg",
        text: "Con Fiore di roccia Ilaria Tuti celebra il coraggio e la resilienza delle donne, la capacità di abnegazione di contadine umili ma forti nel desiderio di pace e pronte a sacrificarsi per aiutare i militari al fronte durante la Prima guerra mondiale. La Storia si è dimenticata delle Portatrici per molto tempo. Questo romanzo le restituisce per ciò che erano e sono: indimenticabili.",
        plot: "Quelli che riecheggiano lassù, fra le cime, non sono tuoni. Il fragore delle bombe austriache scuote anche chi è rimasto nei villaggi, mille metri più in basso. Restiamo soltanto noi donne, ed è a noi che il comando militare italiano chiede aiuto: alle nostre schiene, alle nostre gambe, alla nostra conoscenza di quelle vette e dei segreti per risalirle. Dobbiamo andare, altrimenti quei poveri ragazzi moriranno anche di fame. Questa guerra mi ha tolto tutto, lasciandomi solo la paura. Mi ha tolto il tempo di prendermi cura di mio padre malato, il tempo di leggere i libri che riempiono la mia casa. Mi ha tolto il futuro, soffocandomi in un presente di povertà e terrore. Ma lassù hanno bisogno di me, di noi, e noi rispondiamo alla chiamata. Alcune sono ancora bambine, altre già anziane, ma insieme, ogni mattina, corriamo ai magazzini militari a valle. Riempiamo le nostre gerle fino a farle traboccare di viveri, medicinali, munizioni, e ci avviamo lungo gli antichi sentieri della fienagione. Risaliamo per ore, nella neve che arriva fino alle ginocchia, per raggiungere il fronte. Il nemico, con i suoi cecchini – diavoli bianchi, li chiamano – ci tiene sotto tiro. Ma noi cantiamo e preghiamo, mentre ci arrampichiamo con gli scarpetz ai piedi. Ci aggrappiamo agli speroni con tutte le nostre forze, proprio come fanno le stelle alpine, i fiori di roccia. Ho visto il coraggio di un capitano costretto a prendere le decisioni più difficili. Ho conosciuto l’eroismo di un medico che, senza sosta, fa quel che può per salvare vite. I soldati ci hanno dato un nome, come se fossimo un vero corpo militare: siamo Portatrici, ma ciò che trasportiamo non è soltanto vita. Dall’inferno del fronte alpino noi scendiamo con le gerle svuotate e le mani strette alle barelle che ospitano i feriti da curare, o i morti che noi stesse dovremo seppellire. Ma oggi ho incontrato il nemico. Per la prima volta, ho visto la guerra attraverso gli occhi di un diavolo bianco. E ora so che niente può più essere come prima.",
        isbn: 9788830455344,
        inventory: 6,
        cart:0,
        highlight: false,
      },
      {
        id: 9,
        title: "Il nome della rosa - Ediz.Illustrata",
        author: "Umberto Eco",
        publisher: "La Nave di Teseo",
        genre: "romanzo",
        language: "italiano",
        date: "21/05/2020",
        pages: "624",
        price: "18.50",
        image: "/images/rosa.jpg",
        text: "Già autore di numerosi saggi, il semiologo Eco decise di scrivere il suo primo romanzo, cimentandosi nel genere del giallo storico e in particolare del giallo deduttivo. Tuttavia, il libro può essere considerato un incrocio di generi, tra lo storico, il narrativo e il filosofico.",
        plot: "Nel 1327 giunge in un monastero italiano il francescano Guglielmo di Baskerville con il novizio Adso per un incontro tra domenicani, francescani e delegati. Morti misteriose si succedono e le indagini vengono ostacolate.",
        isbn: 9788834603000,
        inventory: 0,
        cart:0,
        highlight: false,
      },
      {
        id: 10,
        title: "Julie",
        author: "Ida Amlesu",
        publisher: "Sonzogno",
        genre: "narrativa italiana",
        language: "italiano",
        date: "08/11/2022",
        pages: "328",
        price: "18.90",
        image: "/images/julie.jpg",
        text: "Una vita che è un inno all'anticonformismo, al coraggio di trovare la propria voce e di vivere senza compromessi, anche fra i dogmi e l'ipocrisia di una società di soli uomini.",
        plot: "Francia, 1686. Sulla scalinata di rue de la Grosse-Margot, nei quartieri popolari di Parigi, vengono rinvenuti i cadaveri di due guardie del Re. Il luogotenente La Reynie non ha dubbi su chi sia il colpevole: la sedicenne Julie d'Aubigny. Spadaccina infallibile e orecchio assoluto, viene educata come un ragazzo dal padre e come una ragazza dal potente Conte d'Armagnac, che ne fa prima il suo giullare e poi la sua amante. Ma Julie non è creatura da farsi mettere in gabbia, e si ribella agli obblighi di un matrimonio di convenienza fuggendo nella notte, per vivere alla giornata con il complice Séranne, ex maestro d'armi e noto libertino. Braccata da La Reynie, perseguitata dal Conte e respinta dall'alta società - a cui pure appartiene per nascita -, Julie intraprende un tortuoso viaggio verso la libertà, durante il quale vestirà i panni del cavaliere e quelli della dama, conoscendo le imprevedibili sfumature dell'amore e la sua grande vocazione: la musica lirica. Prendendo spunto dalla figura realmente esistita di Julie d'Aubigny, virtuosa della spada e prima diva dell'opera francese, Ida Amlesù mette in scena un personaggio travolgente, spregiudicato e al tempo stesso fragile. Tra le pagine di questo magnetico romanzo, racconta una vita che è un inno all'anticonformismo, al coraggio di trovare la propria voce e di vivere senza compromessi, anche fra i dogmi e l'ipocrisia di una società di soli uomini.",
        isbn: 9788175257668,
        inventory: 4,
        cart:0,
        highlight: false,
      },
      {
        id: 11,
        title: "Della gentilezza e del coraggio",
        author: "Gianrico Carofiglio",
        publisher: "Feltrinelli",
        genre: "saggio",
        language: "italiano",
        date: "08/7/2020",
        pages: "228",
        price: "15.50",
        image: "/images/gentilizza.jpg",
        text: "Un inedito, avvincente manuale di istruzioni per l'uso delle parole, del dubbio, del potere. Un grande romanziere racconta la passione civile, l'amore per le idee, le imprevedibili possibilità della politica. Un breviario denso, lieve e necessario.",
        plot: "La qualità della vita democratica scaturisce innanzitutto dalla capacità di porre e di porsi buone domande, dalla capacità di dubitare. E questo vale tanto per chi il potere ce l'ha quanto, forse soprattutto, per chi apparentemente non ce l'ha. Cioè noi. Perché i cittadini hanno un potere nascosto, che li distingue dai sudditi e che deriva proprio dall'esercizio della critica e dunque della sorveglianza. In queste pagine Gianrico Carofiglio, con la sua scrittura affilata e la sua arte di narratore, ci accompagna in un viaggio nel tempo e nello spazio e costruisce un sommario di regole – o meglio suggerimenti – per una nuova pratica della convivenza civile. Una pratica che nasce dall'accettazione attiva dell'incertezza e della complessità del mondo ed elabora gli strumenti di un agire collettivo laico, tollerante ed efficace. Partendo dagli insegnamenti dei maestri del lontano Oriente e passando per i moderni pensatori della politica, scopriamo un nuovo senso per parole antiche e fondamentali, prima fra tutte la parola gentilezza.",
        isbn: 9788807492815,
        inventory: 11,
        cart:0,
        highlight: false,
      },
    ],
    productSelected: null, 
    // per contenere gli articoli che verranno aggiunti al carrello:
    cart:[],
    cartGlobal: 0,
  },
  // per ottenere gli articoli che sono stati aggiunti al carrello
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
      console.log("AZZERA_CARRELLO è stata chiamata.");

    // Riporta ogni libro nel carrello alla sua quantità iniziale
    state.cart.forEach(cartItem => {
    let product = state.products.find(product => product.id === cartItem.id);
    if (product) {
      product.inventory += cartItem.quantity; // riaggiunge la quantità del carrello all'inventario
      product.cart = 0; // ripristina la quantità nel carrello a 0 per quel prodotto
    }
  });

  // Svuota il carrello e azzera il cartGlobal
      state.cart = [];
      state.cartGlobal = 0;
  },
  },
  actions: {},
  modules: {},
});
