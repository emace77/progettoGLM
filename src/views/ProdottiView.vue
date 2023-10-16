<!-- eslint-disable -->
<template>
  <h1 class="mt-2 text-center">Elenco libri</h1>
  <div class="row">
    <div
      v-for="product in products"
      :key="product.id"
      class="col-sm-12 col-md-4"
    >
      <div class="card mt-4">
        <div class="col-4 col-md-12">
          <router-link :key="product.id" :to="'/prodotti/' + product.id" @click="showProduct(product)">
            <img :src="product.image" class="card-img-top pt-3 pt-md-0 ps-1 ps-md-0" alt="Prodotto" />
          </router-link>
        </div>
       
        <div class="card-body col-8 col-md-12">
          <h5 class="card-title">
            <router-link :key="product.id" :to="'/prodotti/' + product.id" @click="showProduct(product)">
              {{ product.title }}
            </router-link>
          </h5>
          <p class="card-text d-none d-md-block">
            {{ product.text }}
          </p>
          <p class="txt_prezzo mt-2 mt-md-4">
            <span class="fw-bold">Prezzo:</span> {{ product.price }}<br>
            <span class="fw-bold">Autore:</span> {{ product.author }}</p>
          <!-- per chart -->
          <p class="fst-italic" v-if="product.inventory > 10">Disponibile</p>
          <p class="fst-italic" v-else-if="product.inventory > 0">In esaurimento</p>
          <p class="fst-italic" v-else>Non disponibile</p>
          <router-link class="btn btn-primary" :key="product.id" :to="'/prodotti/' + product.id" @click="showProduct(product)">
            dettagli
          </router-link>
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
};
</script>
