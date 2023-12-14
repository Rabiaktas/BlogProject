<template>
  <footer>
    <div class="jumbotron text-center">
      <div class="container">
        <h2 class="footerLink">
          <a @click="scrollToTop">Sakarya'da Öğren, Yaşa ve Paylaş</a>
        </h2>
        <hr />
        <br />

        <div class="container">
          <b-row>
            <b-col md="4"></b-col>

            <!-- email -->
            <b-col md="4">
              <h4 class="mailText">Posta Listemize Katılın</h4>
              <div class="form-label-group">
                <b-form-input
                  id="ft-email"
                  type="email"
                  v-model="email"
                  placeholder="info@gmail.com"
                />
              </div>
              <div class="demo-inline-spacing">
                <b-button
                  variant="outline-dark"
                  class="emailButton"
                  block
                  @click="onSubmit"
                >
                  Bize Katıl
                </b-button>
              </div>
              <br />
              <!-- social buttons -->
              <div class="auth-footer-btn d-flex justify-content-center">
                <b-button
                  class="youtube"
                  variant="google"
                  href="https://youtube.com/@LifeSakarya?si=2nk9jyfnyeTII2Iq"
                  target="_blank"
                >
                  <feather-icon icon="YoutubeIcon" />
                </b-button>
                <b-button
                  class="fab fa-instagram Instagram"
                  variant="instagram"
                  href="https://www.instagram.com/lifesakaryatr/"
                  target="_blank"
                >
                  <feather-icon icon="InstagramIcon" />
                </b-button>
                <b-button
                  class="mail"
                  variant="google"
                  href="mailto:journeyblog@outlook.com.tr"
                >
                  <feather-icon icon="MailIcon" />
                </b-button>
              </div>
              <br />
              <p>© 2023 by LifeSakarya</p>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { BRow, BCol, BButton, BFormInput } from "bootstrap-vue";
import firebaseMixin from "../../../firebase/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJZPyeVpcyNNz9g7qQfpnW-xElhps6Rl4",
  authDomain: "blogdatabase-a62bf.firebaseapp.com",
  projectId: "blogdatabase-a62bf",
  storageBucket: "blogdatabase-a62bf.appspot.com",
  messagingSenderId: "527551787059",
  appId: "1:527551787059:web:68b45df4aca49941277346",
};

console.log("firebase log : " + firebase.apps.length);

// bağlantı yoksa yeni bağlantı kurmak için
if (!firebase.apps.length) {
  console.log("!firebase log : " + firebase.apps.length);
  firebase.initializeApp(firebaseConfig);
}

export default {
  name: "Footer",
  components: {
    BButton,
    BCol,
    BRow,
    BFormInput,
  },
  mixins: [firebaseMixin],
  data() {
    return {
      email: "",
      error: null,
      errorMsg: "",
      submitting: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Animasyonlu kaydırma
      });
    },
    async onSubmit() {
      try {
        this.submitting = true;
        console.log("try a girdi");
        // Firestore'a veri eklemek için referans oluşturun
        const firestoreRef = firebase.firestore().collection("footer");

        // Ekleme işlemi
        const response = await firestoreRef.add({
          email: this.email,
        });

        console.log("Veri başarıyla eklendi");
        this.email = "";
        // Başarı durumunda istediğiniz ek işlemleri burada gerçekleştirebilirsiniz
      } catch (error) {
        console.error("Hata oluştu", error);
      } finally {
        this.submitting = false; // Reset submitting flag after submission
      }
    },
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
.Instagram {
  margin-right: 2px;
  background-color: black;
  border: 1px solid grey;
}
.youtube {
  margin-right: 2px;
  background-color: black;
  border: 1px solid grey;
}
.mail {
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
