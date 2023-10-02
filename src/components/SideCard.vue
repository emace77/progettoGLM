<!-- eslint-disable -->
<template>
  <div class="card mx-auto mb-4">
    <img :src="cardData.image" class="card-img-top" :alt="cardData.alt" />
    <div class="card-body">
      <h5 class="card-title">{{ cardData.title }}</h5>
      <p class="card-text">
        {{ cardData.text }}
      </p>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
};
</script>
