<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4"
  >
    <nav class="col-md-9 col-sm-6 navbar navbar-expand-md white">
      <div class="container">
        <button
          class="col-sm-2 navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="col-sm-7 col-md-3 mb-2 mb-md-0">
          <a class="navbar-brand" href="http://www.unito.it" target="_blank"
            ><img src="../assets/bookvue_white.png" alt="logo bookshop" />
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" class="nav-link px-2">Features</a></li>
            <li><a href="#" class="nav-link px-2">Pricing</a></li>
            <li><a href="#" class="nav-link px-2">FAQs</a></li>
            <li><a href="#" class="nav-link px-2">About</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="col-md-3 text-end">
      <button type="button" class="btn btn-outline-primary me-2">Login</button>
      <button type="button" class="btn btn-primary">Carello</button>
    </div>
  </header>
</template>

<script>
export default {};
</script>
