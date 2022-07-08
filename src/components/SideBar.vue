<template>
  <SideCard
    v-for="card in $store.state.cards"
    :cardData="card"
    :key="card.id"
  ></SideCard>
</template>

<script>
import SideCard from "@/components/SideCard.vue";

export default {
  components: {
    SideCard,
  },
};
</script>
