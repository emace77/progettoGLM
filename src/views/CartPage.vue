<!-- eslint-disable -->
<!-- components/CartPage.vue -->
<template>
    <div>
      <h2>Carrello</h2>
      <!-- contenuto del tuo carrello -->
      <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.title }} - Quantità: {{ item.quantity }} - Prezzo: {{ item.price }}€
      </li>
    </ul>
    <button @click="azzeraCarrello">Azzera carrello</button>
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
    //serve ad azzerare il carrello
    azzeraCarrello() {
      this.$store.commit('AZZERA_CARRELLO');
      alert("Carrello azzerato!");  // Opzionale: Mostra un messaggio all'utente per confermare che il carrello è stato azzerato
    }
}
  </script>