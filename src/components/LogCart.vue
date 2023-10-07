<!-- eslint-disable -->
<template>
  <ul class="navbar-nav flex-row-reverse me-auto my-3 pe-0 pe-lg-3">
    <li class="nav-item ms-4">
      <router-link :to="{ name: 'carrello' }" class="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg> Carrello ({{ $store.state.cartGlobal }})</router-link>
  
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'login' }" class="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
        </svg> Login</router-link>
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