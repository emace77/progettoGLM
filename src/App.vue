<template>
  <!-- eslint-disable -->
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
    <div class="row">
      <div class="col"><FooterBar></FooterBar></div>
    </div>
  </div>
</template>

<script>
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
.giustificato {
  text-align: justify;
}

.centrato {
  text-align: center;
}
.blue {
  background-color: #006fba;
}
.white,
.white a:link,
white a:visited {
  color: #fff;
}
.white a:hover {
  color: #ddd;
}

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
</style>
