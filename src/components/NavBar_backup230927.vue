<template>
  <nav class="navbar navbar-expand-md col-md-9 white">
    <div class="container">
      <a class="navbar-brand" href="http://www.unito.it" target="_blank"
        ><img src="../assets/bookvue_white.png" alt="logo bookshop" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link text-white"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'prodotti' }" class="nav-link text-white"
              >Prodotti</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="pagina3.html">Pagina 3</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
