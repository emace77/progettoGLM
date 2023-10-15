<!-- eslint-disable -->
<template>
    <div class="row">
      <div class="col-12">
        <h1 class="mt-2 text-center">Ricerca il tuo libro preferito</h1>
        <!-- inizio accordion -->
        <div class="accordion mt-3" id="accordionSearchs">
          <div class="accordion-item">
            <h2 class="accordion-header mt-0">
              <button class="accordion-button fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Ricerca nel catalogo
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
              <div class="accordion-body">
                <label for="search1" class="form-label d-none">Inserisci la chiave di ricerca</label>
                <input v-model="searchTerm" id="search1" class="form-control w-50" placeholder="Inserisci la chiave di ricerca" aria-describedby="cerca" />
                <button class="btn-primary mt-3 px-2 py-1" @click="search">Cerca</button>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header mt-0">
              <button class="accordion-button collapsed fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Ricerca per ISBN
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
              <div class="accordion-body">
                <label for="search2" class="form-label d-none">Inserisci il codice ISBN</label>
                <input v-model="searchTermIsbn" id="search2" class="form-control w-50" placeholder="Inserisci il codice ISBN" aria-describedby="cerca per ISBN" />
                <button class="btn-primary mt-3 px-2 py-1" @click="searchIsbn">Cerca</button>
                <div v-if="isErrorNumber && isErrorLength" class="invalid-feedback">Il codice ISBN deve essere un numero di 13 cifre</div>
                <div v-else-if="isErrorNumber" class="invalid-feedback">Il codice ISBN deve essere un numero</div>
                <div v-else-if="isErrorLength" class="invalid-feedback">Il codice ISBN deve contenere 13 cifre</div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header mt-0">
              <button class="accordion-button collapsed fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Ricerca per genere
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
              <div class="accordion-body">
                  <div v-for="genre in genres" :key="genre.id" class="mb-2">
                    <input type="checkbox" v-model="selectedGenre" :value="genre.name" :id="genre.name" class="form-check-input" />
                    <label class="form-check-label ps-2" :for="genre.name">
                      {{ genre.name }}
                    </label>
                  </div>
                  <button class="btn-primary mt-3 px-2 py-1" @click="searchGenre">Cerca</button>
              </div>
            </div>
          </div>
        </div>
        <!-- fine accordion -->

        <div class="row mt-5">
          <hr v-if="nResults >= 0">
          <div class="col-4 pt-3" v-if="searchMsg !== ''">
            <span class="fst-italic m-0">Hai cercato:</span> {{ searchMsg }}
          </div>
          <div class="col-4 pt-3" v-if="nResults >= 0">
          {{ nResults }} <span class="fst-italic m-0">risultati trovati</span>
          </div>
        </div>
        <div class="row mt-4" v-if="searchResults.length > 0">
          <div class="col-12 mb-4" v-for="result in searchResults" :key="result.id">
            <p class="fst-italic m-0">{{ result.author }}</p>
            <h5>
              <router-link :key="result.id" :to="'/prodotti/' + result.id" @click="showProduct(result)">
                {{ result.title }}
              </router-link>
            </h5>
            <p class="col-12 text-truncate">{{ result.text }}</p>
            <p class="text-small">{{ result.publisher }} | {{ result.genre }} | {{ result.price }} €</p>
          </div>
        </div>
      </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  data() {
    return {
      searchTerm: '',  /* variabile per il termine di ricerca */
      searchResults: [], /* variabile per i risultati */ 
      searchTermIsbn: '',  
      searchTermPublisher: '',  
      searchMsg: '', 
      nResults: -1,
      isErrorNumber: false,
      isErrorLength: false,
      selectedGenre: [],
    };
  },
  computed: {
    products() {
      return this.$store.state.products; 
    },
    genres() {
      return this.$store.state.genres;
    }
  },
  methods: {
    showProduct(product) {
      this.$store.commit('selectProduct', product); 
    },
    /* da invocare al click su Cerca */ 
    search() {
      const searchKey = this.searchTerm.toLowerCase(); // minuscolo per avere ricerca non case-sensitive
      this.searchResults = this.products.filter(product => {
        // confronta la chiave di ricerca e il titolo o l'autore del prodotto
        const titleOk = product.title.toLowerCase().includes(searchKey);
        const authorOk = product.author.toLowerCase().includes(searchKey);
        const publisherOk = product.publisher.toLowerCase().includes(searchKey);
        // Restituisci true se uno degli attributi contiene la chiave di ricerca
        return titleOk || authorOk || publisherOk;
    });
      this.searchMsg = this.searchTerm;
      this.searchTerm = '';
      this.nResults = this.searchResults.length;
    },
        
    searchIsbn() {
      this.isErrorNumber = false;
      this.isErrorLength = false; 
      const searchKey = this.searchTermIsbn;
      if (isNaN(searchKey) || searchKey.length !== 13) {
      this.isErrorNumber = isNaN(searchKey);
      this.isErrorLength = searchKey.length !== 13;
      // Impostare le variabili di errore e interrompere l'esecuzione della funzione
      return;
    }

    this.searchResults = this.products.filter(product => product.isbn == searchKey);
    this.searchMsg = this.searchTermIsbn;
    this.searchTermIsbn = '';
    this.nResults = this.searchResults.length;
    },

    searchGenre() {
      // Filtra i prodotti in base ai generi selezionati
      this.searchResults = this.products.filter(product => {
        return this.selectedGenre.length === 0 || this.selectedGenre.includes(product.genre);
      });

      // Imposta il numero di risultati
      this.nResults = this.searchResults.length;
    }

  }
};

</script>