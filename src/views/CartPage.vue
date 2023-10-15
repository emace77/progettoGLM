<!-- eslint-disable -->
<!-- components/CartPage.vue -->
<template>
  <div>
    <h1 class="mt-2 text-center">Carrello</h1>
    <h2 v-if="cartItems.length > 0">Prodotti selezionati:</h2>
    <div v-else>
      <p>Il carello è vuoto</p>
      <router-link class="btn btn-primary w-auto mb-2" :to="{ name: 'prodotti' }">Vai al catalogo</router-link>
    </div>
    <!-- contenuto del tuo carrello -->
    <ul class="list-group">
      <li class="list-group-item" v-for="item in cartItems" :key="item.id">
        <div class="row">
          <div class="col-md-3">
            <img :src="item.image" alt="Product Image" class="w-50">
          </div>
          <div class="col-md-9 pt-2 pt-lg-5">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-quantity">Quantità: {{ item.quantity }}</p>
            <p class="item-price">Prezzo: {{ item.price }}€</p>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="cartItems.length > 0" class="mt-3"><span class="fw-bold">Prezzo totale:</span> {{ totalPrice() }}€</div>
    <button v-if="cartItems.length > 0" type="button" class="btn btn-blu mt-4" @click="azzeraCarrello">svuota carrello</button>
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
    alert("Stai rimuovendo i prodotti dal tuo carrello!");  
  },
  totalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      const item = this.cartItems[i];
      const quantity = Number(item.quantity);
      const price = Number(item.price);
      totalPrice += quantity * price;
    }
    return totalPrice;
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
font-size: x-large;
}
.item-quantity{
font-weight: 500;
margin-right: 1.5rem;
font-size: large;
}
.item-price{
font-weight: 500;
font-size: large;
}



@media (max-width: 768px) {
  .item-image {
    width: 110px;
    height: 170px;
    margin-right: 0.5rem;
  }

}







</style>