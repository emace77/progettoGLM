<!-- eslint-disable -->
<template>
  <div v-if="cardSelezionata">
    <h2>{{ cardSelezionata.titolo }}</h2>
    <p>{{ cardSelezionata.descrizione }}</p>
  </div>
  <div v-else>
    <p>Seleziona una card dalla lista a sinistra.</p>
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