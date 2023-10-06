<!-- eslint-disable -->
<template>
  <div>
    <!-- con l'evento @click invoco mostraDettaglio -->
    <router-link v-for="card in cards" :key="card.id" :to="'/card/' + card.id" @click="mostraDettaglio(card)">
      {{ card.title }}<br>
    </router-link>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  computed: {
    cards() {
      return this.$store.state.cards;
    },
  },
  methods: {
    mostraDettaglio(card) {
      this.$store.commit('selezionaCard', card); // modifico il valore di card nello store
      //this.$router.push('/dettaglio');  non serve
    },
  },
};
</script>