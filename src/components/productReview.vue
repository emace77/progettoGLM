<!-- eslint-disable -->
<template>
    <div class="card card-4">
      <div class="card-body">
      <form class="review-form row g-3" @submit.prevent="onSubmit">
        <div class="form-group col-md-6">
          <label for="name">Nome:</label>
          <input id="name" class="form-control" v-model="name" required>
        </div>
        <div class="form-group col-md-6">
          <label for="rating">Valutazione:</label>
          <select class="form-select" id="rating" v-model.number="rating" required>
        <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        </div>
        <div class="form-group col-12">
          <label for="review">Recensione:</label>
          <textarea id="review" class="form-control" v-model="review" required></textarea>
        </div>
        <button type="submit" class="btn btn-recensione btn-sm">Invia la recensione</button>
      </form>
    </div>
    </div>
  </template>
<!-- eslint-disable -->
  <script>
  /* eslint-disable */
  export default {
    data: function () {
    return {
      name: null,
      review: null,
      rating: null,
    };
  },
    methods: {
    onSubmit: function () {
      var productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      this.$emit("review-submitted", productReview);
      this.name = null;
      this.review = null;
      this.rating = null;
    },
    }
  };
  </script>
  
<style>
.card-4 {
    background: #006fba;
    color: white;
}
.btn-recensione {
  background-color: white;
  color: #006fba;
}
.btn-recensione:hover {
  color: #006fba;
}
</style>