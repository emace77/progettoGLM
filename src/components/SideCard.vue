<!-- eslint-disable -->
<template>
  <div class="card mx-auto mb-4">
    <img :src="cardSelected.image" class="w-75" :alt="cardSelected.alt">
    <div class="card-body">
      <h5>
        <router-link
        :to="'/card/' + cardData.id"
        >{{ cardSelected.title }}</router-link
      >
      </h5>
      <p class="card-text">
        {{ cardSelected.text }}
      </p>
    </div>
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