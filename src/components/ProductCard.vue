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
        class="btn btn-blu"
        >Trama</router-link
      >
      <p class="txt_prezzo mt-4">Prezzo: {{ productData.price }} <br>  Autore: {{ productData.author }}</p>
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

<style>
.btn-blu{
  background-color:#006fba ;
  color:#ffff;
}
.btn-blu:hover{
  background-color:#00aeef ;
  color:#ffff;
}
.card-title{
  color:#006fba;
}
.txt_prezzo{
  font-weight: 500;
}

</style>