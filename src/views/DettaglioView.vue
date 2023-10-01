<!-- eslint-disable -->
<template>
  <h1> Titolo: {{ $route.params.productId }}</h1>
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
  }
  }
</script>