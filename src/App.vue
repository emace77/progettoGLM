<!-- eslint-disable -->
<template>
  <div class="container">
    <div class="row blue">
      <div class="col">
        <NavBar></NavBar>
      </div>
    </div>
    <div class="row">
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

export default {
  components: {
    NavBar,
    FooterBar,
    SideBar,
  },
};
</script>

<style>
/* eslint-disable */

/* GENERALI */
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

/* CAROUSEL 
.carousel-caption {
  position: relative;
  right: 0%;
  left: 0%;
}*/

h5:nth-child(2) a:link, h5:nth-child(2) a:visited, h5:nth-child(2) a:active {
  color: #006fba;
  text-decoration: none;
  }
h5:nth-child(2) a:hover {
  color: #006fba;
  }
.carousel-control-prev-icon {
    background-image: url();
}

</style>
