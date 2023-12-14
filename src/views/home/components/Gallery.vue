<template>
  <b-row>
    <b-col md="1"></b-col>
    <b-col md="10">
      <!-- swiper Gallery -->
      <b-card class="container baslik">
        <b-card-text> <h2>Galeri</h2> </b-card-text>
        <swiper
          class="swiper-autoplay"
          :options="swiperOptions"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          :key="swiperOptions.slidesPerView"
        >
          <swiper-slide v-for="(data, index) in swiperData" :key="index">
            <div class="image-container">
              <b-img :src="data.img" fluid />
              <div class="container overlay">
                <div>@LifeSakarya</div>
              </div>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div> </swiper
      ></b-card>
    </b-col>
    <!-- /swiper  -->
    <b-col md="1"></b-col>
  </b-row>
</template>
<script>
import { BCard, BCardText, BImg, BRow, BCol } from "bootstrap-vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    BCard,
    BImg,
    BCardText,
    Swiper,
    SwiperSlide,
    BRow,
    BCol,
  },
  data() {
    return {
      /* eslint-disable global-require */
      swiperData: [
      { img: require("@/assets/images/banner/gallery.0..jpg") },
        { img: require("@/assets/images/banner/gallery.1.jpg") },
        { img: require("@/assets/images/banner/gallery.2.jpg") },
        { img: require("@/assets/images/banner/gallery.3.jpg") },
        { img: require("@/assets/images/banner/gallery.4.jpg") },
        { img: require("@/assets/images/banner/gallery.5.jpg") },
        { img: require("@/assets/images/banner/gallery.6.jpg") },
        { img: require("@/assets/images/banner/gallery.7.jpg") },
        { img: require("@/assets/images/banner/gallery.8.jpg") },
        { img: require("@/assets/images/banner/gallery.9.jpg") },
        { img: require("@/assets/images/banner/gallery.10.jpg") },
        { img: require("@/assets/images/banner/gallery.11.jpg") },


      ],
      /* eslint-disable global-require */
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted() {
    if (window.innerWidth <= 1000) {
      this.swiperOptions.slidesPerView = 2;
    } else {
      this.swiperOptions.slidesPerView = 4;
    }
  },
};
</script>
<style>
.baslik {
  font-family: "Prompt", sans-serif;
  background: transparent;
  box-shadow: none;
}
.image-container {
  position: relative;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.image-container:hover .overlay {
  opacity: 1;
}

.overlay p {
  font-size: 18px;
}
</style>
