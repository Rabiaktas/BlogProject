<template>
  <div>
    <!-- NavBar-->
    <just-nav />

    <!-- İmg-->
    <b-img
      class="aboutImg"
      src="../assets/images/pages/about.jpeg"
      fluid
      alt="Responsive image"
    />

    <!-- Title-->
    <div class="container">
      <b-row align="center">
        <b-col> <p class="aboutText">ABOUT US</p></b-col>
      </b-row>
    </div>
    <div class="container ikincikisim">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="4">
          <b-card
            class="aboutCard"
            img-src="../assets/images/avatars/Arda.jpeg"
            img-alt="Card image cap"
            img-top
          >
            <b-card-text>
              <h3 class="aboutTitle">HI! I'M ARDA</h3>
              <hr />
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>

        <b-col md="4">
          <b-card
            class="aboutCard"
            img-src="../assets/images/avatars/rabiaa.jpeg"
            img-alt="Card image cap"
            img-top
          >
            <b-card-text>
              <h3 class="aboutTitle">HI! I'M RABİA</h3>
              <hr />
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="2"></b-col>
      </b-row>
    </div>
    <!--Footer-->
    <footer-vue></footer-vue>
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
  height: 550px;
  object-fit: cover;
  object-position: 50% 50%;
}
.aboutText {
  height: auto;
  font-size: 50px;
  font-family: 'Prompt', sans-serif;
  color: #ada77e;
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
