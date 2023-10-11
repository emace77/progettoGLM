<!-- eslint-disable -->
<template>
    <div>
        <input v-model="searchTerm" placeholder="Cerca per titolo, autore o genere" />
        <button @click="search">Cerca</button>
        <ul v-if="searchResults.length > 0">
        <li v-for="result in searchResults" :key="result.id">
            {{ result.title }} - {{ result.author }} - {{ result.genre }}
        </li>
        </ul>
        <div v-else>
        Nessun prodotto trovato.
        </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  data() {
    return {
      searchTerm: '',
      searchResults: []
    };
  },
  computed: {
    products() {
      return this.$store.state.products; 
    }
  },
  methods: {
    search() {
      const regex = new RegExp(this.searchTerm, 'i'); // 'i' per una corrispondenza non case-sensitive
      this.searchResults = this.products.filter(product => {
        return regex.test(product.title) || regex.test(product.author) || regex.test(product.genre);
      });
    }
  }
};

</script>