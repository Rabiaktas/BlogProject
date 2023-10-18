<template>
  <b-row>
    <b-col md="1"></b-col>
    <b-col md="10">
      <!-- swiper Gallery -->
      <b-card class="container baslik">
        <b-card-text> <h2>Galeri</h2> </b-card-text>
        <swiper
          class="swiper-multiple"
          :options="swiperOptions"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
        >
          <swiper-slide v-for="(data, index) in swiperData" :key="index">
            <div class="image-container">
              <b-img :src="data.img" fluid />
              <div class="container overlay">
                <div>@RabishBlog </div>
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
import { BCard, BCardText, BImg,BRow, BCol } from "bootstrap-vue";
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
    BCol
  },
  data() {
    return {
      /* eslint-disable global-require */
      swiperData: [
        { img: require("@/assets/images/banner/banner-31.jpg") },
        { img: require("@/assets/images/banner/banner-32.jpg") },
        { img: require("@/assets/images/banner/banner-33.jpg") },
        { img: require("@/assets/images/banner/banner-34.jpg") },
        { img: require("@/assets/images/banner/banner-35.jpg") },
        { img: require("@/assets/images/banner/banner-32.jpg") },
        { img: require("@/assets/images/banner/banner-31.jpg") },
        { img: require("@/assets/images/banner/banner-35.jpg") },
      ],

      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>
<style>
.baslik {
  font-family: "Prompt", sans-serif;
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
  display:flex; 
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
