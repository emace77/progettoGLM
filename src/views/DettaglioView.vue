<!-- eslint-disable -->
<template>
  <div class="container">
    <div class="row gx-0 gx-md-5">
      <div class="col-lg-10">
        <div class="card bg-transparent p-xl-3 border-0 mb-3">
          <div class="row g-0">
            <router-link class="btn btn-primary w-auto" :to="{ name: 'prodotti' }">Torna al catalogo</router-link>
            <div v-if="productSelected">
              <div class="col-lg-5 mb-4 mb-xl-0">
                <img :src="productSelected.image" class="w-100 rounded" :alt="productSelected.title" />
              </div>
              <div class="col-lg-7">
                <div class="card-body d-flex flex-column py-0">
                  <div>
                    <p class="fs-7 m-0">{{ productSelected.author }}</p>
                    <h1 class="text-main fs-4">{{ productSelected.title }}</h1>
                  </div>
                  <div>
                    <p class="fs-7 m-0"><span class="fw-bold">Editore:</span> {{ productSelected.publisher }}</p>
                    <p class="fs-7 m-0"><span class="fw-bold">Genere:</span> {{ productSelected.genre }}</p>
                    <p class="fs-7 m-0"><span class="fw-bold">ISBN:</span> {{ productSelected.isbn }}</p>
                    <p class="fs-7 m-0"><span class="fw-bold">Anno di pubblicazione:</span> {{ productSelected.date }}</p>
                    <p class="fs-7 m-0"><span class="fw-bold">Numero pagine:</span> {{ productSelected.pages }}</p>
                    <p class="fs-7 m-0"><span class="fw-bold">Lingua:</span> {{ productSelected.language }}</p>
                  </div>
                    <p class="fs-7 m-0">
                      <span class="fw-bold">Disponibilità a magazzino:</span> 
                      {{ productSelected.inventory }}
                    </p>
                    <h6 class="text-price fs-6-xl">{{ productSelected.price }} €</h6>
                    <div v-if="productSelected.inventory>0">
                      <button class="btn btn-primary" @click="addToCart"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                      </svg> Aggiungi</button>
                    </div>
                    <div v-else>
                      <button class="btn btn-secondary disabled"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                      </svg> Non disponibile</button>
                    </div>
                   
                  <div class="cart">Carrello ({{ productSelected.cart }})</div>
                  </div>
                </div>
              <div class="row">
                <h2 class="title title-sm text-main mt-4 mb-4">Trama</h2>
                <p class="text-muted text-justify">{{ productSelected.plot }}</p>
              </div>
            </div>
            <div v-else>
              <p>Il libro selezionato non è disponibile.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
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
<style>
.container {
  padding-top: 1.5rem;
}
</style>
