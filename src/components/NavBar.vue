<!-- eslint-disable -->
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid ps-0 ps-lg-3">
      <div class="col-1">
        <button
          class="navbar-toggler p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              fill="white"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <div class="col-2">
        <a class="navbar-brand me-0" href="#"
        ><img src="../assets/images/bookvue_white.png" alt="logo bookshop" />
      </a>
      </div>
      <div class="collapse navbar-collapse ms-4 col-12 col-lg-4" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'prodotti' }" class="nav-link"
              >Libri</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'search' }" class="nav-link"
              >Ricerca</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"
              >Come funziona</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-5">
        <label for="searchNav" class="form-label d-none">Inserisci il titolo o l'autore</label>
        <input v-model="searchQuery" id="searchNav" class="form-control w-50 d-inline" type="text" placeholder="Cerca per titolo o autore" />
        <button @click="search" class="btn btn-light">Cerca</button>
      </div>
    </div>
  </nav>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
export default {
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    search() {
      this.$router.push({ name: 'search-results', params: { query: this.searchQuery } });
      this.searchQuery = "";
    }
  }
};
</script>
