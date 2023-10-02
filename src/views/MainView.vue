<!-- eslint-disable -->
<template>
  <div class="row mb-1">
    <div class="container p-0">
      <div class="row flex-lg-row-reverse align-items-center g-5">
        <div class="col-10 col-sm-10 col-lg-6">
          <img src="../assets/images/hero.png" class="d-block mx-lg-auto img-fluid" alt="Image by pch.vector on Freepik" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-6 fw-bold text-body-emphasis lh-1 mb-3">La tua libereria sempre a portata di click</h1>
          <p class="lead">Scegli il tuo libro preferito e ricevilo a casa tua</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Come funziona?</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col">
      <h1 class="display-6 fw-bold text-center">I libri più venduti</h1>
      <div id="carouselExampleCaptions" class="carousel slide p-4 mb-5 mb-sm-3">
        <div class="carousel-indicators d-none d-lg-flex">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div
            v-for="product in $store.state.products"
            :key="product.id"
            class="carousel-item"
            :class="{ 'active': (product.id<=1) }"
          >
            <ProductCarousel :productData="product"></ProductCarousel>
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
    <div class="px-4 py-5 my-5 text-center blue-light">
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
import ProductCarousel from "@/components/ProductCarousel.vue";

export default {
  components: {
    ProductCarousel,
  },
};
</script>