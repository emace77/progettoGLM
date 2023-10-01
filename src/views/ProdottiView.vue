<!-- eslint-disable -->
<template>
  <h1>I nostri prodotti</h1>
  <div class="row">
    <div
      v-for="product in $store.state.products"
      :key="product.id"
      class="col-sm-12 col-md-4"
    >
      <ProductCard :productData="product"></ProductCard>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>
