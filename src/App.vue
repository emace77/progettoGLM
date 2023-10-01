<!-- eslint-disable -->
<template>
  <div class="container-fluid">
    <div class="row blue">
      <div class="col-9">
        <NavBar></NavBar>
      </div>
      <div class="col-3">
        <LogCart></LogCart>
      </div>
    </div>
    <div class="row  px-5 px-5">
      <div class="col-md-9 col-sm-12">
        <router-view />
      </div>
      <div class="col-md-3 d-none d-md-block"><SideBar></SideBar></div>
    </div>
    <div class="row blue">
      <div class="col"><FooterBar></FooterBar></div>
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
h1 {
  color: #006fba;
}

.giustificato {
  text-align: justify;
}

.centrato {
  text-align: center;
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

.btn-primary 
{
  background-color: #006fba;
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
  margin-left: 15%;

}
.carousel-caption {
  top: 1%;
  right: auto;
  left: 50%;
  width: 35%;
}
.carousel-caption p {
  color: #000;
}
.carousel-caption h5:nth-child(1) a:link, h5:nth-child(1) a:visited, h5:nth-child(1) a:active {
  color: #9e5c00;
  text-decoration: none;
  }
.carousel-caption h5:nth-child(1) a:hover {
  color: #9e5c00;
  }
.carousel-caption h5:nth-child(2) a:link, h5:nth-child(2) a:visited, h5:nth-child(2) a:active {
  color: #006fba;
  text-decoration: none;
  }
.carousel-caption h5:nth-child(2) a:hover {
  color: #006fba;
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
</style>
