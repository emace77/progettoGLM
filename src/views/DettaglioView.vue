<!-- eslint-disable -->
<template>
  <div class="container">
    <div class="row gx-0 gx-md-5">
      <div class="col-lg-10">
        <div class="card bg-transparent p-xl-3 border-0 mb-3">
          <div class="row g-0">
            <p><router-link v-bind:to="{ name: 'prodotti' }"
        >Torna al catalogo</router-link>
    </p>
            <div class="col-lg-5 mb-4 mb-xl-0">
              <img src="../assets/images/karolus.jpg" class="w-100 rounded" alt="Immagine del prodotto">
            </div>
            <div class="col-lg-7">
              <div class="card-body d-flex flex-column py-0">
                <div>
                  <p class="fs-7 m-0">Franco Forte</p>
                  <h1 class="text-main fs-4">{{$route.params.productId}}</h1>
                </div>
                <div>
                  <p class="fs-7 m-0"><span class="fw-bold">Editore:</span> Crescere</p>
                  <p class="fs-7 m-0"><span class="fw-bold">Genere:</span> romanzo storico </p>
                  <p class="fs-7 m-0"><span class="fw-bold">ISBN:</span> 9788883379086</p>
                  <p class="fs-7 m-0"><span class="fw-bold">Anno di pubblicazione:</span> 01/01/2021</p>
                  <p class="fs-7 m-0"><span class="fw-bold">Numero pagine:</span> 192</p>
                  <p class="fs-7 m-0"><span class="fw-bold">Lingua:</span> italiano</p>
                </div>
                <hr class="my-1 text-secondary">
                <div>
                  <h6 class="text-price fs-6-xl">4,90€</h6>
                  <button class="btn btn-primary" v-on:click="addToCart">Aggiungi</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <h2 class="title title-sm text-main mt-4 mb-4">Trama</h2>
            <p class="text-muted text-justify">Il vecchio Maggiore ha fatto un sogno che cambierà la vita di tutti gli animali della fattoria. ... (Testo trama)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  props: {
    productData: {
      type: Object,
      required: true,
    },
  }
}
</script>
<!-- eslint-disable -->
<style>
.container{
  padding-top: 1.5rem;
}
</style>