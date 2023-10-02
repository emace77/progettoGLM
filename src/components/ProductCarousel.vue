<!-- eslint-disable -->
<template>
  <a href="#"><img :src="productData.image" class="d-block" alt="{{ productData.title }}"></a>
  <div class="carousel-caption text-start">
      <h5 class="fs-4"><a href="#">{{ productData.author }}</a></h5>
      <h5 class="fs-3"><a href="#">{{ productData.title }}</a></h5>
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