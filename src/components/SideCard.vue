<!-- eslint-disable -->
<template>
  <div class="card mx-auto mb-4">
    <img :src="cardData.image" class="card-img-top" :alt="cardData.alt" />
    <div class="card-body">
      <h5>
        <router-link
        :to="{ name: 'card', params: { cardId: cardData.id, cardTitle: cardData.title, cardText: cardData.text, cardDescription: cardData.description, cardImage: cardData.image, cardAlt: cardData.alt } }"
        >{{ cardData.title }}</router-link
      >
      </h5>
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
