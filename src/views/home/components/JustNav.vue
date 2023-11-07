<template>
    <div>
      <!-- NavBar-->
      <b-card class="col-md-12" style="position: fixed; z-index: 999">
        <b-navbar toggleable="lg">
          <b-navbar-brand href="/">
          <b-img
            src="../../../assets/images/logo/JourneyBlogLogo.png"
            class="logo-img"
            width="190"
            height="85"
          >
          </b-img> </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/">Anasayfa</b-nav-item>
              <b-nav-item href="/second-page">Blog</b-nav-item>
              <b-nav-item href="/about">Hakkında</b-nav-item>
              <b-nav-item href="/contact">İletişim</b-nav-item>
            </b-navbar-nav>
          </b-collapse> </b-navbar
      ></b-card>
     <br>
    </div>
  </template>
  <script>
  import {
    BCard,
    BNavbar,
    BNavItem,
    BCollapse,
    BNavbarNav,
    BNavbarBrand,
    BNavbarToggle,
    BImg
  } from "bootstrap-vue";
  
  export default {
    components: {
      BCard,
      BNavbar,
      BNavItem,
      BCollapse,
      BNavbarNav,
      BNavbarBrand,
      BNavbarToggle,
    BImg

    },

  };
  
  </script>
  <style>

  </style>
  