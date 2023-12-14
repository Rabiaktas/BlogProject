<template>
  <div>
    <!-- NavBar-->
    <b-card class="fontNavbar col-md-12">
      <b-navbar toggleable="lg">
        <b-navbar-brand href="/">
          <b-img
            src="../../../assets/images/logo/lifeSakarya.png"
            class="logo-img"
            width="190"
            height="80"
          >
          </b-img>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="$router.push('/')">Anasayfa</b-nav-item>
            <b-nav-item @click="$router.push('/second-page')">Blog</b-nav-item>
            <b-nav-item @click="$router.push('/about')">Hakkında</b-nav-item>
            <b-nav-item @click="$router.push('/contact')">İletişim</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar></b-card
    >
    <!-- /Navbar -->
    <br />
    <!-- Desıgn For Life -->
    <b-card class="headtitle mt-4">
      <div class="container">
        <h1 align="center">Sakarya'da <span class="titleFor">  Öğren, Yaşa</span> ve  <span class="titleFor"> Paylaş</span> </h1>
      </div>
    </b-card>
    <br />
  </div>
</template>
<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BPagination,
  BIcon,
  BCard,
  BLink,
  BNavbar,
  BNavItem,
  BCollapse,
  BNavbarNav,
  BNavItemDropdown,
  BDropdownItem,
  BDropdown,
  BFormInput,
  BButton,
  BNavbarToggle,
  BNavbarBrand,
  BImg
} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BPagination,
    BIcon,
    BCard,
    BLink,
    BNavbar,
    BNavItem,
    BCollapse,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdown,
    BFormInput,
    BButton,
    BNavbarToggle,
    BNavbarBrand,
    BImg
  },

};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@300&display=swap");

.headtitle {
  font-family: "Prompt", sans-serif;
  margin-bottom: 46px;
  position: relative;
  top: 67px;
  z-index: 100;
  border-radius: 0;
  background: transparent;
  
}
h1 {
  font-size: 35px;
}
.titleFor {
  font-weight: 200;
  color:orange
}
.fontNavbar {
  font-family: "Prompt", sans-serif;
  position: fixed;
  z-index: 999; 
}

</style>
