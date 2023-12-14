<template>
  <div>
    <!-- NavBar-->
    <just-nav />
    <!-- İmg-->
    <b-img
      class="aboutImg mt-5"
      src="../assets/images/banner/3.jpg"
      fluid
      alt="Responsive image"
    />

    <!-- Title-->
    <div class="container">
      <b-row align="center">
        <b-col> <p class="aboutText">HAKKIMIZDA</p></b-col>
      </b-row>
    </div>
    <div class="container ikincikisim">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="4">
          <b-card
            class="aboutCard"
            img-src="../assets/images/avatars/cagla.jpeg"
            img-alt="Card image cap"
            img-top
          >
            <b-card-text>
              <h3 class="aboutTitle">Selam! Ben Çağla</h3>
              <hr />
            Sakarya Üniversitesi Gazetecilik bölümü öğrencisiyim. Gazetecilik projemizi faydalı bir uğraş haline getirmek amacıyla bu bloğu kurduk. İmkanlarımız el verdikçe türlü konularda izlenim ve fikirlerimizi burada paylaşacağız.
            </b-card-text>
          </b-card>
        </b-col>

        <b-col md="4">
          <b-card
            class="aboutCard"
            img-src="../assets/images/avatars/rabia.jpeg"
            img-alt="Card image cap"
            img-top
          >
            <b-card-text>
              <h3 class="aboutTitle">Selam! Ben Rabia</h3>
              <hr />
              Sakarya Üniversitesi Gazetecilik bölümü son sınıf öğrencisiyim. Bunun yanı sıra yazılımla ilgileniyorum. Gazetecilik projesi kapsamında bu web sitesini tasarladık. Günden güne kendimizi olduğu gibi web sayfamızı da geliştirmeye çalışıyoruz. Umarım sizin de hoşunuza gitmiştir.  
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="2"></b-col>
      </b-row>
    </div>
    <!--Footer-->
    <footer-vue ></footer-vue>
  </div>
</template>
<script>
import {
  BImg,
  BRow,
  BCol,
  BCard,
  BCardText,
  BCardBody,
  BCardTitle,
  BCardSubTitle,
} from "bootstrap-vue";
import JustNav from "./home/components/JustNav.vue";
import footerVue from "./home/components/footer.vue";

export default {
  components: {
    JustNav,
    BImg,
    BRow,
    BCol,
    BCard,
    BCardText,
    BCardBody,
    BCardSubTitle,
    BCardTitle,
    footerVue,
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@300&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
.aboutImg {
  width: 100%;
  height: 550px;
  object-fit: cover;
  object-position: 50% 50%;
}

.aboutText {
  height: auto;
  font-size: 50px;
  font-family: 'Prompt', sans-serif;
  color: orange;
  margin: 50px;
}
.aboutTitle {
  font-family: "Dancing Script", cursive;
  font-size: 30px;
}
.ikincikisim {
  background-image: url(../assets/images/icons/aboutme.jpg);
  text-align: center;
  background-attachment: fixed;
  font-family: 'Prompt', sans-serif;
font-size: 16px;
}
.aboutCard {
  background-color: transparent !important;
  border: none !important;
  margin-top: 40px;
}
</style>
