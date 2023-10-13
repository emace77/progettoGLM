<!-- eslint-disable -->
<template>
    <div>
      <h2>Risultati della ricerca per "{{ query }}"</h2>
      <p>Numero di risultati: {{ results.length }}</p>
      <div v-for="result in results" :key="result.id">
        <h3>
          <router-link :key="result.id" :to="'/prodotti/' + result.id" @click="showProduct(result)">
            {{ result.title }}
          </router-link></h3>
        <p>Autore: {{ result.author }}</p>
        <p>Genere: {{ result.genre }}</p>
        <p>Editore: {{ result.editor }}</p>
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
        results: [] // Inizializzare con i risultati della ricerca
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
      this.search();
    },
    methods: {
      showProduct(product) {
       this.$store.commit('selectProduct', product); 
      },
      search() {
        // Filtra i prodotti nello store in base alla query di ricerca per titolo o autore
        this.results = this.$store.state.products.filter(product =>
          product.title.toLowerCase().includes(this.query.toLowerCase()) ||
          product.author.toLowerCase().includes(this.query.toLowerCase())
        );
      }
    }
  };
</script>
  