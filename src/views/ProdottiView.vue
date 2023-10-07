<!-- eslint-disable -->
<template>
  <h1 class="titolo_listalibri">Elenco libri</h1>
  <div class="row">
    <div
      v-for="product in products"
      :key="product.id"
      class="col-sm-12 col-md-4"
    >
      <div class="card mt-4">
        <img :src="product.image" class="card-img-top" alt="Prodotto" />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.text }}
          </p>
          <router-link class="btn btn-primary" :key="product.id" :to="'/prodotti/' + product.id" @click="showProduct(product)">
            dettagli
          </router-link>
          <p class="txt_prezzo mt-4">Prezzo: {{ product.price }} <br>  Autore: {{ product.author }}</p>
          <!-- per chart -->
          <p v-if="product.inventory > 10">Disponibile</p>
          <p v-else-if="product.inventory > 0">In esaurimento</p>
          <p v-else>Non disponibile</p>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    showProduct(product) {
      this.$store.commit('selectProduct', product); 
    },
  },
/* per chart manca props inventory */
};
</script>

<style>
.titolo_listalibri{
  color:#006fba;
  margin-top: 3rem;
  text-align: center;
}

</style>
