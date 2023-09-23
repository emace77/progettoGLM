<template>
  <div class="container">
    <div class="row beige">
      <div class="col">
        <HeaderBar></HeaderBar>
      </div>
    </div>
    <div class="row">
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
    <div class="row beige">
      <div class="col"><FooterBar></FooterBar></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    NavBar,
    HeaderBar,
    FooterBar,
    SideBar,
  },
};
</script>

<style scoped>
.giustificatoz {
  text-align: justify;
}

.beige {
  background-color: beige;
}

.centrato {
  text-align: center;
}
</style>
