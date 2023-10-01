<!-- eslint-disable -->
<template>
  <div class="card mx-auto mb-2">
    <img :src="cardData.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ cardData.title }}</h5>
      <p class="card-text">
        {{ cardData.text }}
      </p>
    </div>
  </div>
</template>

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
