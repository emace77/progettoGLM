<!-- eslint-disable -->
<template>
    <div class="col-lg-5 mb-4 mb-xl-0">
      <img :src="productData.image" class="w-100 rounded" :alt="productData.title" />
    </div>
    <div class="col-lg-7">
      <div class="card-body d-flex flex-column py-0">
        <div>
          <p class="fs-7 m-0">{{ productData.author }}</p>
          <h1 class="text-main fs-4">{{ productData.title }}</h1>
        </div>
        <div>
          <p class="fs-7 m-0"><span class="fw-bold">Editore:</span> {{ productData.publisher }}</p>
          <p class="fs-7 m-0"><span class="fw-bold">Genere:</span> {{ productData.genre }}</p>
          <p class="fs-7 m-0"><span class="fw-bold">ISBN:</span> {{ productData.isbn }}</p>
          <p class="fs-7 m-0"><span class="fw-bold">Anno di pubblicazione:</span> {{ productData.date }}</p>
          <p class="fs-7 m-0"><span class="fw-bold">Numero pagine:</span> {{ productData.pages }}</p>
          <p class="fs-7 m-0"><span class="fw-bold">Lingua:</span> {{ productData.language }}</p>
        </div>
          <h6 class="text-price fs-6-xl">{{ productData.price }} €</h6>
          <button class="btn btn-primary" @click="addToCart"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg> Aggiungi</button>
        <div class="cart">Carrello ({{ productData.cart }})</div>
        </div>
      </div>
    <div class="row">
      <h2 class="title title-sm text-main mt-4 mb-4">Trama</h2>
      <p class="text-muted text-justify">{{ productData.plot }}</p>
    </div>
  </template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
  export default {
    props: {
      productData: {
        type: Object,
        required: true,
      },
    },
    methods: {
      addToCart() {
        // aggiungere il prodotto al carrello qui
        this.productData.cart= this.productData.cart+1;
        this.productData.inventory= this.productData.inventory-1;
      },
    },
  };
  </script>
  