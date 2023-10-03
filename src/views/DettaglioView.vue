<!-- eslint-disable -->
<template>
  <div class="container">
    <div class="row gx-0 gx-md-5">
      <div class="col-lg-10">
        <div class="card bg-transparent p-xl-3 border-0 mb-3">
          <div class="row g-0">
            <p>
              <router-link :to="{ name: 'prodotti' }">Torna al catalogo</router-link>
            </p>
            <div
              v-for="product in $store.state.products"
              :key="product.id"
              class="detail-item"
              :class="{ 'active': product.id <= 1 }"
            >
              <ProductDetail :productData="product" />
            </div>
          </div>
          <hr class="my-1 text-secondary">
          <div class="row">
            <h2 class="title title-sm text-main mt-4 mb-4">Trama</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import ProductDetail from "@/components/ProductDetail.vue";

export default {
  components: {
    ProductDetail,
  },
};
</script>
<!-- eslint-disable -->
<style>
.container {
  padding-top: 1.5rem;
}
</style>
