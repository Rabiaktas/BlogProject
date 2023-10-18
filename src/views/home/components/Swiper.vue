<template>
  <swiper
    class="swiper-navigations"
    :options="swiperOptions"
    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
  >
    <swiper-slide v-for="(data, index) in swiperData" :key="index">
      <b-img :src="data.img" fluid />
    </swiper-slide>

    <!-- Add Arrows -->
    <div slot="pagination" class="swiper-pagination" />
    <div slot="button-next" class="swiper-button-next" />
    <div slot="button-prev" class="swiper-button-prev" />
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { BImg } from "bootstrap-vue";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
  },
  data() {
    return {
      /* eslint-disable global-require */
      swiperData: [
        { img: require("@/assets/images/banner/banner-7.jpg") },
        { img: require("@/assets/images/banner/banner-4.jpg") },
        { img: require("@/assets/images/banner/banner-14.jpg") },
        { img: require("@/assets/images/banner/banner-3.jpg") },
        { img: require("@/assets/images/banner/banner-20.jpg") },
        { img: require("@/assets/images/banner/banner-8.jpg") },
        { img: require("@/assets/images/banner/banner-9.jpg") },
        { img: require("@/assets/images/banner/banner-10.jpg") },
        { img: require("@/assets/images/banner/banner-11.jpg") },
      ],
      swiperOptions: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
