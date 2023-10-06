<!-- eslint-disable -->
<template>
  <h1>{{ $route.params.cardTitle }}</h1>     
  <img :src="$route.params.cardImage" class="card-img-top" :alt="$route.params.cardAlt">
  <h2>{{ $route.params.cardText }}</h2>
  <p>{{ $route.params.cardDescription }}</p>
  <h1>{{ $store.state.cards[cardData.id].title }}</h1>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
};
</script>
  