<!-- eslint-disable -->
<template>
  <div class="container-fluid">
    <div class="row blue">
      <div class="col-9">
        <NavBar></NavBar>
      </div>
      <div class="col-3 ps-0 pe-1">
        <NavIcon></NavIcon>
      </div>
    </div>
    <div class="row px-lg-5 py-lg-4 py-2 px-3">
      <div class="col-lg-9 col-md-12 pe-lg-4 pe-0">
        <router-view />
      </div>
      <div class="col-lg-3 col-md-12 px-sm-05">
        <SideBar v-if="!$route.path.includes('/card')"></SideBar>
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
import NavIcon from "@/components/NavIcon.vue";

export default {
  components: {
    NavBar,
    FooterBar,
    SideBar,
    NavIcon,
  },
};
</script>
<style>
/* eslint-disable */
@import '@/assets/custom.css';
</style>
