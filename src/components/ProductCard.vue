<!-- eslint-disable -->
<template>
  <div class="card mt-4">
    <img :src="productData.image" class="card-img-top" alt="Prodotto" />
    <div class="card-body">
      <h5 class="card-title">{{ productData.title }}</h5>
      <p class="card-text">
        {{ productData.text }}
      </p>
      <router-link
        :to="{ name: 'dettaglio', params: { productId: productData.id } }"
        class="btn btn-primary"
        >Trama</router-link
      >
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
};
</script>
