<!-- eslint-disable -->
<template>
  <div v-for="card in cards" :key="card.id">
    <img :src="card.image" class="card-img-top" :alt="card.alt" />
    <h5>
      <!-- con l'evento @click invoco mostraDettaglio -->
      <router-link :key="card.id" :to="'/card/' + card.id" @click="showCard(card)">
        {{ card.title }}
      </router-link>
    </h5>
    <p>
      {{ card.text }}
    </p>
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
    showCard(card) {
      this.$store.commit('selectCard', card); // modifico il valore di card nello store
      //this.$router.push('/dettaglio');  non serve
    },
  },
};
</script>