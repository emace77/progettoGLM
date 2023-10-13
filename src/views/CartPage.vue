<!-- eslint-disable -->
<!-- components/CartPage.vue -->
<template>
    <div>
      <h2>Carrello</h2>
      <h3>Prodotti selezionati:</h3>
      <!-- contenuto del tuo carrello -->
      <ul class="list-group">
      <!-- <li class="list-group-item" v-for="item in cartItems" :key="item.id">

       {{ item.title }} - Quantità: {{ item.quantity }} - Prezzo: {{ item.price }}€
      </li> -->
      <li class="list-group-item" v-for="item in cartItems" :key="item.id">
        <img :src="item.image" alt="Product Image" class="item-image">
        <span class="item-title">{{ item.title }}</span>
        <span class="item-quantity">Quantità: {{ item.quantity }}</span>
        <span class="item-price">Prezzo: {{ item.price }}€</span>
    </li>
    </ul>
    <button type="button" class="btn btn-blu mt-4" @click="azzeraCarrello">Azzera carrello</button>
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
  </div>
    
  </template>
<!-- eslint-disable -->
  <script>
  /* eslint-disable */
import { mapGetters } from 'vuex';

export default {
    name: 'CartPage',
    //mapGetters è un aiuto fornito da Vuex per aiutare a legare i getter (funzioni che ottengono dati dallo stato) del tuo store a proprietà calcolate locali nei tuoi componenti Vue.
    computed: mapGetters(['cartItems']),
    methods:{
      azzeraCarrello() {
      this.$store.commit('AZZERA_CARRELLO');
      alert("Stai rimuovendo i prodotti dal tuo carrello!");  // Opzionale: Mostra un messaggio all'utente per confermare che il carrello è stato azzerato
    }
}
}
  </script>

  <style>
  h2{
    color: #006fba;
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 2rem;
    font-weight: 500;
  }
  h3{
    color: #006fba;
  }
  .btn-blu{
  background-color:#006fba ;
  color:#ffff;
}
.btn-blu:hover{
  background-color:#00aeef ;
  color:#ffff;
}
.item-title{
  color: #006fba;
  font-weight: 700;
  margin-right: 1.5rem;
}
.item-quantity{
  font-weight: 500;
  margin-right: 1.5rem;
}
.item-price{
  font-weight: 500;
}
.item-image {
  width: 220px;
  height: 340px;
  margin-right: 1rem;
}
</style>