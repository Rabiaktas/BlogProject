<template>
    <div>
      <!-- NavBar-->
      <b-card class="col-md-12" style="position: fixed; z-index: 999">
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#">Rabish Blog</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/">Home</b-nav-item>
              <b-nav-item href="/second-page">Blog</b-nav-item>
              <b-nav-item href="/about">About</b-nav-item>
              <b-nav-item href="/contact">Contact</b-nav-item>
            </b-navbar-nav>
  
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-form-group class="blog-search">
                <b-input-group class="input-group-merge">
                  <b-form-input
                    id="search-input"
                    v-model="search_query"
                    placeholder="Search here"
                  />
                  <b-input-group-append class="cursor-pointer" is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-navbar-nav>
          </b-collapse> </b-navbar
      ></b-card>
      <br />
      <br />
    </div>
  </template>
  <script>
  import {
    BRow,
    BCol,
    BCardText,
    BCardBody,
    BCardTitle,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BBadge,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BPagination,
    BIcon,
    BCard,
    BLink,
    BNavbar,
    BNavItem,
    BImg,
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
      BCardText,
      BCardBody,
      BCardTitle,
      BMedia,
      BAvatar,
      BMediaAside,
      BMediaBody,
      BBadge,
      BFormGroup,
      BInputGroup,
      BInputGroupAppend,
      BPagination,
      BIcon,
      BCard,
      BLink,
      BNavbar,
      BNavItem,
      BImg,
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

  </style>
  