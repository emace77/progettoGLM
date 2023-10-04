<!-- eslint-disable -->
<template>
  <h1 class="fs-4 text fw-bold">Promozioni</h1>
  <SideCard
    v-for="card in $store.state.cards"
    :cardData="card"
    :key="card.id"
  ></SideCard>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import SideCard from "@/components/SideCard.vue";

export default {
  components: {
    SideCard,
  },
};
</script>