<!-- eslint-disable -->
<template>
  <div class="row mb-1">
    <div class="container p-0">
      <div class="row flex-lg-row-reverse align-items-center">
        <div class="col-10 col-sm-10 col-lg-6">
          <img src="../assets/images/hero.png" class="d-block mx-lg-auto img-fluid" alt="Image by pch.vector on Freepik" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-6 fw-bold text-body-emphasis lh-1 mb-3">La tua libreria sempre a portata di click</h1>
          <p class="lead">Scegli il tuo libro preferito e ricevilo a casa tua</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <router-link class="btn btn-primary w-auto" :to="{ name: 'about' }">Come funziona</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col">
      <h1 class="display-6 fw-bold text-center">Libri in evidenza</h1>
      <div id="carouselExampleCaptions" class="carousel slide p-3 mb-5 mb-sm-3">
        <div class="carousel-indicators d-none d-lg-flex">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div
          v-for="(product, index) in highlightedProducts"
          :key="product.id"
          class="carousel-item"
          :class="{ 'active': index === 0 }"
          >
            <router-link :key="product.id" :to="'/prodotti/' + product.id" @click="showProduct(product)">
                <img :src="product.image" class="d-block" alt="product.title"></router-link
            >
            <div class="carousel-caption text-start pt-0 pt-md-3">
                <h5 class="fs-4">
                  {{ product.author }}
                </h5>
                <h5 class="fs-4">
                  <router-link :key="product.id" :to="'/prodotti/' + product.id" @click="showProduct(product)">
                    {{ product.title }}
                    </router-link
                  >
                </h5>
                <p>{{ product.price }} €</p>
                <p class="d-none d-xl-block">{{ product.text }}</p>
                <router-link class="btn btn-primary d-none d-md-inline" :key="product.id" :to="'/prodotti/' + product.id" @click="showProduct(product)">
                  dettagli
                </router-link>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="px-4 py-5 my-2 my-lg-5 text-center blue-light">
    <h1 class="display-6 fw-bold">Sconto del 10% sul primo ordine</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Registrati gratuitamente e ottieni subito un codice sconto per il tuo primo acquisto.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Registrati ora!</button>
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
    highlightedProducts() {
      return this.$store.state.products.filter(product => product.highlight === true); // mostra solo i products con highlight = true
    }
  },
  methods: {
    showProduct(product) {
      this.$store.commit('selectProduct', product); 
    },
  },
};
</script>