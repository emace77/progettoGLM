<!-- eslint-disable -->
<template>
  <ul class="navbar-nav flex-row-reverse me-auto my-3 pe-0 pe-lg-3">
    <li class="nav-item ms-md-4 me-md-3 ms-3 me-2">
      <router-link :to="{ name: 'carrello' }" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg> 
        <span class="d-none d-lg-inline ps-md-1">Carrello</span>
        <span v-if="$store.state.cartGlobal>0">
          ({{ $store.state.cartGlobal }})
        </span>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'search' }" class="nav-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        <span class="d-none d-lg-inline ps-md-1">Cerca</span>
      </router-link>
    </li>
  </ul>
</template>
<!-- eslint-disable -->
<script>
export default {
  computed: {
    cartGlobal() {
      return this.$store.state.cartGlobal;
    },
  },
};
</script>