<!-- eslint-disable -->
<template>
  <h1>Titolo {{ $route.params.productId }}</h1>
  <div class="col-lg-5 mb-4 mb-xl-0">
    <img src="https://picsum.photos/200/100?random=12" class="w-100" alt="">
  </div>
  <div class="col-lg-7">
    <div class="card-body d-flex flex-column py-0">
    <div>
      <a class="text-accent">Orwell George</a>
      <h1 class="text-main fs-4">La fattoria degli animali-Animal farm. Ediz. bilingue. Con Segnalibro</h1>
      </div>
    <div>
      <p class="fs-7 m-0"><span class="fw-semibold">Editore:</span> {{ cardData.title }}</p>
      <p class="fs-7 m-0"><span class="fw-semibold">Reparto:</span> Letterature straniere: testi</p>
      <p class="fs-7 m-0"><span class="fw-semibold">ISBN:</span> 9788883379086</p>
      <p class="fs-7 m-0"><span class="fw-semibold">Data di pubblicazione:</span> 01/01/2021</p>
      <p class="fs-7 m-0"><span class="fw-semibold">Numero pagine:</span> 192</p>
      <p class="fs-7 m-0"><span class="fw-semibold">Collana:</span> Grandi classici</p>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  props: {},
};
</script>
