<!-- eslint-disable -->
<template>
  <div v-if="cardSelezionata">
    <h1>{{ cardSelezionata.title }}</h1>
    <img :src="cardSelezionata.image" class="w-75" :alt="cardSelezionata.alt">
    <h2>{{ cardSelezionata.text }}</h2>
    <p>{{ cardSelezionata.description }}</p>
  </div>
  <div v-else>
    <p>La promozione selezionata non è disponibile.</p>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  computed: {
    cardSelezionata() {
      return this.$store.state.cardSelezionata;
    },
  },
};
</script>