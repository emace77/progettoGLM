<!-- eslint-disable -->
<template>
  <div v-if="cardSelected">
    <h1>{{ cardSelected.title }}</h1>
    <img :src="cardSelected.image" class="w-75" :alt="cardSelected.alt">
    <h2>{{ cardSelected.text }}</h2>
    <p>{{ cardSelected.description }}</p>
  </div>
  <div v-else>
    <p>La promozione selezionata non è disponibile.</p>
    <router-link class="btn btn-primary w-auto" :to="{ name: 'home' }">Torna alla Home</router-link>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  computed: {
    cardSelected() {
      return this.$store.state.cardSelected;
    },
  },
};
</script>