<!-- eslint-disable -->
<template>
  <h2 class="text-center text-md-start">Promozioni</h2>
  <div class="sidebar mb-5" 
  v-for="card in cards" 
  :key="card.id">
    <router-link :key="card.id" :to="'/card/' + card.id" @click="showCard(card)">
      <img :src="card.image" class="card-img-top mb-2 w-50" :alt="card.alt" />
    </router-link>
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
      this.$store.commit('selectCard', card); 
    },
  },
};
</script>