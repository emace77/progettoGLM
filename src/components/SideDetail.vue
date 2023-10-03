<!-- eslint-disable -->
<template>
    <div class="container">
        <img :src="cardData.image" class="w-100 rounded" :alt="cardData.title" />
        <h1>{{ cardData.title }}</h1>
        <h2>{{ cardData.text }}</h2>
        <p>{{ cardData.description }}</p>
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
    methods: {
      addToCart() {
        // aggiungere il prodotto al carrello qui
      },
    },
  };
  </script>
  