<template>
  <footer>
    <div class="jumbotron text-center">
      <div class="container">
        <h2 class="footerLink"><a @click="scrollToTop">DESIGN FOR LIFE</a></h2>
        <hr />
        <br />

        <div class="container">
          <b-row>
            <b-col md="4"></b-col>

            <!-- email -->
            <b-col md="4">
              <h4 class="mailText">Join My Mailing List</h4>
              <div class="form-label-group">
                <b-form-input
                  id="ft-email"
                  type="email"
                  v-model="email"
                  placeholder="info@mysite.com"
                />
              </div>
              <div class="demo-inline-spacing">
                <!--click methodunu unutma-->
                <b-button                
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="outline-dark"
                  class="emailButton"
                  block
                >
                  Bize Katıl
                </b-button>
              </div>
              <br />
              <!-- social buttons -->
              <div class="auth-footer-btn d-flex justify-content-center">
                <b-button
                  class="facebook"
                  variant="facebook"
                  href="javascript:void(0)"
                >
                  <feather-icon icon="FacebookIcon" />
                </b-button>
                <b-button
                  class="mail"
                  variant="google"
                  href="javascript:void(0)"
                >
                  <feather-icon icon="MailIcon" />
                </b-button>
                <b-button
                  class="githup"
                  variant="github"
                  href="javascript:void(0)"
                >
                  <feather-icon icon="GithubIcon" />
                </b-button>
              </div>
              <br />
              <p>© 2023 by Rabish Blog.</p>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { BRow, BCol, BButton, BFormGroup, BFormInput } from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
//import db from "@/firebase/firebase"
//import firebase from "firebase/app";
//import "firebase/auth";
export default {
  name:"Footer",
  components: {
    BButton,
    BCol,
    BRow,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
  },
  data() {
    return {     
        email: "", 
        error: null,
        errorMsg: "",  
    };
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Animasyonlu kaydırma
      });
    },    
    /*
    async footer(){
      if(
        this.email !== "" ||
      ){
        this.error =false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createEmail = await firebaseAuth.
        return;
      }
    }*/
   
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@300&display=swap");

footer {
  background-color: black;
  border-radius: 0%;
}
.jumbotron {
  background-color: black;
  border-radius: 0%;
  font-family: "Prompt", sans-serif;
}
.footerLink {
  color: white;
  font-family: "Prompt", sans-serif;
  font-size: 30px;
}
.facebook {
  margin-right: 2px;
  background-color: black;
  border: 1px solid grey;
}
.twitter {
  margin-right: 2px;
  background-color: black !important;
}
.mail {
  margin-right: 2px;
  background-color: black;
  border: 1px solid grey;
}
.githup {
  margin-right: 2px;
  background-color: black;
  border: 1px solid grey;
}
.mailText {
  font-family: "Dancing Script", cursive;
  color: white;
  font-size: 22px;
}
.emailButton {
  color: white;
  margin-right: 0%;
  margin-top: 5px;
  font-family: "Prompt", sans-serif;
  border-radius: 0%;
}
#ft-email {
  border-radius: 0%;
}
</style>
<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
