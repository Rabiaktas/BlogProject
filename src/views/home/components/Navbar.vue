<template>
  <div>
    <!-- NavBar-->
    <b-card class="fontNavbar  col-md-12">
      <b-navbar toggleable="lg">
        <b-navbar-brand href="/">Rabish Blog</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Anasayfa</b-nav-item>
            <b-nav-item href="/second-page">Blog</b-nav-item>
            <b-nav-item href="/about">Hakkında</b-nav-item>
            <b-nav-item href="/contact">İletişim</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-form-group class="blog-search">
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="search-input"
                  v-model="search_query"
                  placeholder="Ara"
                />
                <b-input-group-append class="cursor-pointer" is-text>
                  <feather-icon icon="SearchIcon" />
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-navbar-nav>
        </b-collapse> </b-navbar
    ></b-card>
    <!-- /Navbar -->
    <br />
    <br />
    <!-- Desıgn For Life -->
    <b-card class="headtitle">
      <div class="container">
        <h1 align="center">DESIGN <span class="titleFor">FOR</span>  LIFE</h1>
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
  },
  data(){
    return{
      search_query: "",
    }
  }
};

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@300&display=swap');

.headtitle {
  font-family: 'Prompt', sans-serif;
  margin-bottom: 46px;
  position: relative;
  top: 67px;
  z-index: 100;
  
}
h1{
  font-size: 35px;
}
.titleFor{
  font-weight: 200;
}

.fontNavbar {
  font-family: 'Prompt', sans-serif;
  position: fixed; 
  z-index: 999
}
</style>
