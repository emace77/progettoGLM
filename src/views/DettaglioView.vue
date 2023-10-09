<!-- eslint-disable -->
<template>
  <div class="container py-3">
    <router-link class="btn btn-primary w-auto mb-2" :to="{ name: 'prodotti' }">Torna al catalogo</router-link>
    <div v-if="productSelected">
      <div class="row">
        <div class="col-md-4">
          <img :src="productSelected.image" class="w-100 rounded" :alt="productSelected.title" />
        </div>
        <div class="col-md-8">
          <h1 class="fs-4 orange">
            {{ productSelected.author }}
          </h1>
          <h1 class="fs-7 mb-4">
            {{ productSelected.title }}
          </h1>
          <p class="fs-7 mb-1">
            <span class="fw-bold">Editore:</span> {{ productSelected.publisher }}
          </p>
          <p class="fs-7 mb-1">
            <span class="fw-bold">Genere:</span> {{ productSelected.genre }}
          </p>
          <p class="fs-7 mb-1">
            <span class="fw-bold">ISBN:</span> {{ productSelected.isbn }}
          </p>
          <p class="fs-7 mb-1">
            <span class="fw-bold">Anno di pubblicazione:</span> {{ productSelected.date }}
          </p>
          <p class="fs-7 mb-1">
            <span class="fw-bold">Numero pagine:</span> {{ productSelected.pages }}
          </p>
          <p class="fs-7 mb-1">
            <span class="fw-bold">Lingua:</span> {{ productSelected.language }}
          </p>
          <p class="fs-7 mb-1">
            <span class="fw-bold">Disponibilità a magazzino:</span> 
            {{ productSelected.inventory }}
          </p>
          <p class="fs-5 mt-3 mb-1">
            <span class="fw-bold">Prezzo:</span> 
            {{ productSelected.price }}
          </p>
          <div v-if="productSelected.inventory>0">
            <button class="btn btn-primary px-4" @click="addToCart"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg> Aggiungi</button>
          </div>
          <div v-else>
            <button class="btn btn-secondary disabled px-4"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg> Non disponibile</button>
          </div>
          <p v-if="productSelected.cart>0" class="cart mt-1">
            Copie aggiunte al carrello: {{ productSelected.cart }}
          </p>
        </div>
      </div>
      <div class="row">
        <h2 class="mt-5 mb-3 text-start">Trama</h2>
        <p class="text-justify">{{ productSelected.plot }}</p>
      </div>
      <div class="row">
        <div class="col-md-6">
        <h2 class="mt-5 mb-3 text-start">Aggiungi una recensione</h2>
        <product-Review></product-Review>
        </div>
      </div>
      <div class="row">
        <h2 class="mt-5 mb-3 text-start">Recensioni dei lettori</h2>
        <hr class="line-bold mb-4">
      </div>
    </div>
    <div v-else class="row">
      <p>Il libro selezionato non è disponibile.</p>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
  /* eslint-disable */
import productReview from "@/components/productReview.vue";

export default {
  components: {
  'product-Review':productReview
  },
  computed: {
    productSelected() {
      return this.$store.state.productSelected;
    },
    cartGlobal() {
      return this.$store.state.cartGlobal;
    },
  },
  methods: {
      addToCart() {
        // aggiungere il prodotto al carrello qui
        this.productSelected.cart= this.productSelected.cart+1;
        //esegue mutation sul vue store al posto di modificare il dato del prodotto direttamente
        this.$store.commit('addToCart', this.productSelected);
        this.productSelected.inventory--;
        this.$store.state.cartGlobal++;
      },
    },
};
</script>
<!-- eslint-disable -->
