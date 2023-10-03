<!-- eslint-disable -->
<template>
  <a href="#"><img :src="productData.image" class="d-block" alt="{{ productData.title }}"></a>
  <div class="carousel-caption text-start">
      <h5 class="fs-4">
        {{ productData.author }}
      </h5>
      <h5 class="fs-4">
        <router-link
        :to="{ name: 'dettaglio', params: { productId: productData.id } }"
        >{{ productData.title }}</router-link
      >
      </h5>
      <p>{{ productData.price }} €</p>
      <p class="d-none d-xl-block">{{ productData.text }}</p>
      <router-link
        :to="{ name: 'dettaglio', params: { productId: productData.id } }"
        class="btn btn-primary"
        >Dettagli</router-link
      >
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