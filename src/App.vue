<!-- eslint-disable -->
<template>
  <div class="container-fluid">
    <div class="row blue">
      <div class="col-10">
        <NavBar></NavBar>
      </div>
      <div class="col-2 ps-0 pe-1">
        <LogCart></LogCart>
      </div>
    </div>
    <div class="row px-lg-5 py-lg-4 py-2 px-3">
      <div class="col-lg-9 col-md-12 pe-lg-4 pe-0">
        <router-view />
      </div>
      <div class="col-lg-3 col-md-12 px-sm-05">
        <SideBar></SideBar>
      </div>
    </div>
    <div class="row blue">
      <div class="col">
        <FooterBar></FooterBar>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import SideBar from "@/components/SideBar.vue";
import LogCart from "@/components/LogCart.vue";

export default {
  components: {
    NavBar,
    FooterBar,
    SideBar,
    LogCart,
  },
};
</script>
<style>
/* eslint-disable */

/* GENERALI */
h1, label {
  color: #006fba;
}

.px-05 {
  padding-right: 0rem !important;
  padding-left: 3rem !important;
}

.text-small {
  font-size: 0.8rem;
}

/* COLORI */
.blue {
  background-color: #006fba;
  color: #fff;
}
.blue a:link, .blue a:visited, .blue a:active {
  color: #fff;
}
.blue a:hover {
  background-color: #006fba;
  color: #ddd;
}

.blue-light {
  background-color: #b2d4ea;
  color: #02548b;
}

.accordion-button, .accordion-item:first-of-type .accordion-button {
  color: #006fba;
}

.orange {
  color: #9e5c00;
  }

.btn-primary 
{
  background-color: #006fba;
}

.invalid-feedback {
    display: block !important; 
    width: 100%;
    margin-top: 0.25rem;
    font-size: .875em;
    color: red;
}

/* NAV */
.navbar-brand img {
  width: 200px;
}
.navbar .container-fluid {
  justify-content: normal;
}

.navbar-toggler:focus {
  background-color: #00aeef;
  box-shadow: none;
}

/* CAROUSEL */
.carousel {
  background-color: #eee;
}
.carousel-item img {
  width: 30%;
  margin-left: 10%;

}
.carousel-caption {
  top: 1%;
  right: auto;
  left: 45%;
  width: 45%;
}
.carousel-caption p {
  color: #000;
}

h5 a:link, h5 a:active, h5 a:visited {
  color: #006fba;
  text-decoration: none;
}
h5 a:hover {
  color: #006fba;
  text-decoration: underline;
}

.carousel-caption h5:nth-child(1) {
  color: #9e5c00;
  text-decoration: none;
  }
.carousel-caption h5:nth-child(2) a:link, .carousel-caption h5:nth-child(2) a:visited, .carousel-caption h5:nth-child(2) a:active {
  color: #006fba;
  text-decoration: none;
  }
.carousel-caption h5:nth-child(2) a:hover {
  color: #006fba;
  text-decoration: underline;
  }
.carousel-indicators {
  bottom: -7%;
}
.carousel-indicators [data-bs-target] {
  background-color: #444;
}
.carousel-control-prev-icon {
    background-image: url(assets/images/caret-left.svg);
}
.carousel-control-next-icon {
    background-image: url(assets/images/caret-right.svg);
}


/* MEDIA QUERY */
#searchNav {
  width: 70%;
}

@media screen and (min-width: 992px) {
#searchNav {
  width: 50%;
}
}
</style>
