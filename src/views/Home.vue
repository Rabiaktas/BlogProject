<template>
  <div>
    <!-- NavBar-->
    <navbar-home />

    <!-- Home Swiper İmg -->
    <swiper-home></swiper-home>
    <br /><br />

    <!-- BlokList -->
    <div>
      <b-row>
        <b-col md="1"></b-col>
        <b-col md="10"><home-blog-list></home-blog-list></b-col>
        <b-col md="1"></b-col>
      </b-row>
    </div>

    <!-- swiper Gallery -->  
        <gallery-home/>

    <!-- Footer -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { kFormatter } from "@core/utils/filter";
import Navbar from "@/layouts/components/Navbar.vue";
import HomeBlogList from "./home/components/BlogList.vue";
import NavbarHome from "./home/components/Navbar.vue";
import footerVue from "./home/components/footer.vue";
import GalleryHome from "./home/components/Gallery.vue";
import SwiperHome from "./home/components/Swiper.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    BRow,
    BCol,
    Navbar,
    HomeBlogList,
    NavbarHome,
    footerVue,
    GalleryHome,
    SwiperHome,
  },
  data() {
    return {
      /* eslint-disable global-require */

      swiperDataTwo: [
        { img: require("@/assets/images/banner/banner-31.jpg") },
        { img: require("@/assets/images/banner/banner-32.jpg") },
        { img: require("@/assets/images/banner/banner-33.jpg") },
        { img: require("@/assets/images/banner/banner-34.jpg") },
        { img: require("@/assets/images/banner/banner-35.jpg") },
        { img: require("@/assets/images/banner/banner-32.jpg") },
        { img: require("@/assets/images/banner/banner-31.jpg") },
        { img: require("@/assets/images/banner/banner-35.jpg") },
      ],
      swiperOptionsTwo: {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  created() {},
  methods: {
    kFormatter,
    tagsColor(tag) {
      if (tag === "Alıntı") return "light-info";
      if (tag === "Oyun") return "light-danger";
      if (tag === "Moda") return "light-primary";
      if (tag === "Video") return "light-warning";
      if (tag === "Yemek") return "light-success";
      return "light-primary";
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-blog.scss";
</style>
