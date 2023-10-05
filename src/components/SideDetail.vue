<!-- eslint-disable -->
<template>
  <h1>{{$store.state.cards[$route.params.cardId -1].title}}</h1>     
  <img :src="$store.state.cards[$route.params.cardId - 1].image" class="card-img-top" :alt="$store.state.cards[$route.params.cardId - 1].title">
  <h2>{{$store.state.cards[$route.params.cardId -1].text}}</h2>
  <p>{{$store.state.cards[$route.params.cardId -1].description}}</p>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  props: {},
};
</script>
  