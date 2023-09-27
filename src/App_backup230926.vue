<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <HeaderBar></HeaderBar>
      </div>
    </div>
    <div class="row blue">
      <div class="col-md-9">
        <NavBar></NavBar>
      </div>
      <div class="container col-md-3">
        <ul class="navbar-nav" style="flex-direction: row">
          <li class="nav-item">
            <a class="nav-link" href="pagina3.html">Pagina 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pagina3.html">Pagina 3</a>
          </li>
        </ul>
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
import HeaderBar from "@/components/HeaderBar.vue";
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    HeaderBar,
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

.navbar-brand img {
  width: 200px;
}
</style>
