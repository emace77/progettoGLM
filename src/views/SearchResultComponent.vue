<!-- eslint-disable -->
<template>
    <h2>Nuova ricerca</h2>
    <div>
      <label for="search1" class="form-label d-none">Inserisci il titolo o l'autore</label>
      <input v-model="searchTerm" id="search1" class="form-control w-50" placeholder="Inserisci il titolo o l'autore" aria-describedby="cerca" />
      <button class="btn-primary mt-3 px-2 py-1" @click="search">Cerca</button>
    </div>
    <div id="firstSearch">
      <h2>Risultati della ricerca per "{{ query }}"</h2>
      <p>Numero di risultati: {{ results.length }}</p>
      <div v-for="result in results" :key="result.id">
        <h3>
          <router-link :key="result.id" :to="'/prodotti/' + result.id" @click="showProduct(result)">
            {{ result.title }}
          </router-link></h3>
        <p>Autore: {{ result.author }}</p>
        <p>Genere: {{ result.genre }}</p>
      </div>
    </div>

    <div class="row mt-5">
      <hr v-if="nResults >= 0">
      <div class="col-4 pt-3" v-if="searchMsg !== ''">
        <span class="fst-italic m-0">Hai cercato:</span> {{ searchMsg }}
      </div>
      <div class="col-4 pt-4" v-if="nResults >= 0">
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

  </template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
  export default {
    data() {
      return {
        query: "",
        results: [], // Inizializzare con i risultati della ricerca
        searchTerm: '',  /* variabile per il termine di ricerca */
        searchResults: [], /* variabile per i risultati */ 
        searchMsg: '', 
        nResults: -1,
      };
    },
    computed: {
      products() {
        return this.$store.state.products; 
      }
    },
    created() {
      // Effettua la ricerca quando il componente viene creato
      this.query = this.$route.params.query;
      this.filterSearch();
    },
    methods: {
      showProduct(product) {
       this.$store.commit('selectProduct', product); 
      },
      filterSearch() {
        // Filtra i prodotti nello store in base alla query di ricerca per titolo o autore
        this.results = this.$store.state.products.filter(product =>
          product.title.toLowerCase().includes(this.query.toLowerCase()) ||
          product.author.toLowerCase().includes(this.query.toLowerCase())
        );
      },
      search() {
      const SearchKey = new RegExp(this.searchTerm, 'i'); // la costante è uguale alla regular expression con la chiave di ricerca inserita dall'utente. i serve per rendere la ricerca non case-sensitive
      this.searchResults = this.products.filter(product => { // con il metodo filter usato sull'array products dello store, viene verificato se il titolo o l'autore contiene la chiave di ricerca. Se c'è corrispondenza, quel prodotto viene incluso nell'array searchResults.
        return SearchKey.test(product.title) || SearchKey.test(product.author); 
      });
      this.searchMsg = this.searchTerm;
      this.searchTerm = '';
      this.nResults = this.searchResults.length;
      var mioElemento = document.getElementById('firstSearch');
      // Assegna una classe CSS all'elemento selezionato
      mioElemento.classList.add('d-none');
    },
    }
  };
</script>
  