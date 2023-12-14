<template>
  <div>
    <!-- NavBar-->
    <just-nav />

    <!--Form -->
    <div class="cardForm">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8">
          <br />
          <b-card class="contactCard">
            <b-col md="12"
              ><h2>Bizimle çalışmak, istek ve önerileriniz için;</h2></b-col
            >
            <hr />

            <b-col md="12">
              <b-form @submit.prevent="onSubmit">
                <b-row>
                  <b-col md="6">
                    <b-form-group label="İsim" label-for="mc-first-name">
                      <b-form-input
                        v-model="post.userName"
                        id="mc-first-name"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group label="Soyisim" label-for="mc-last-name">
                      <b-form-input
                        v-model="post.userLastName"
                        id="mc-last-name"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group label="Telefon" label-for="v-mobile">
                      <b-form-input
                        v-model="post.mobile"
                        id="v-mobile"
                        type="number"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group label-for="mc-email" label="Email">
                      <div class="form-label-group">
                        <b-form-input
                          v-model="post.email"
                          id="mc-email"
                          type="email"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col md="12">
                    <div class="form-label-group">
                      <b-form-textarea
                        id="textarea"
                        rows="3"
                        placeholder="Hakkınızda.."
                        v-model="post.aboutYou"
                      />
                    </div>
                  </b-col>

                  <!-- submit -->
                  <b-col
                    class="d-flex justify-content-center align-items-center"
                  >
                    <b-button
                      v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                      type="submit"
                      variant="outline-secondary"
                      id="submitForm"
                    >
                      GÖNDER
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
            </b-col> </b-card
          ><br
        /></b-col>
        <b-col md="2"></b-col>
      </b-row>
    </div>
    <!-- Footer -->
    <footer-vue></footer-vue>
  </div>
</template>
<script>
import {
  BRow,
  BCol,
  BJumbotron,
  BCard,
  BCardText,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BForm,
  BButton,
  BFormTextarea,
} from "bootstrap-vue";
import JustNav from "./home/components/JustNav.vue";
import Ripple from "vue-ripple-directive";
import footerVue from "./home/components/footer.vue";
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  components: {
    JustNav,
    BRow,
    BCol,
    BJumbotron,
    BCard,
    BCardText,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
    BFormTextarea,
    footerVue,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      post: {
        userName: "",
        userLastName: "",
        mobile: "",
        email: "",
        aboutYou: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const firebaseConfig = {
        apiKey: "AIzaSyBJZPyeVpcyNNz9g7qQfpnW-xElhps6Rl4",
        authDomain: "blogdatabase-a62bf.firebaseapp.com",
        projectId: "blogdatabase-a62bf",
        storageBucket: "blogdatabase-a62bf.appspot.com",
        messagingSenderId: "527551787059",
        appId: "1:527551787059:web:68b45df4aca49941277346",
      };
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      const db = firebase.firestore();
      const postsCollection = db.collection("contact");
      postsCollection
        .add({ ...this.post, updatedDate: new Date() })
        .then(response => {
          console.log(response);
          this.post = {};
        })
        .catch(e => console.log(e));
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.cardForm {
  margin-top: 110px;
  font-family: "Prompt", sans-serif;
  background-image: url(../assets/images/icons/contactArkaPlan.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.headtitle {
  font-family: "Prompt", sans-serif;
  position: relative;
  z-index: 100;
  margin-top: 120px;
}
h2 {
  text-align: center;
  font-family: "Pacifico", cursive;
  font-size: 40px;
}
.form-label-group {
  font-size: 20px;
}
.contactCard {
  background-color: transparent !important;
  border: none !important;
  margin-top: 40px;
}
#mc-last-name {
  border: 1px solid black !important;
  border-radius: 0%;
}
#textarea {
  border: 1px solid black !important;
  border-radius: 0%;
}
#v-mobile {
  border: 1px solid black !important;
  border-radius: 0%;
}
#mc-first-name {
  border: 1px solid black !important;
  border-radius: 0%;
}
#mc-email {
  border: 1px solid black !important;
  border-radius: 0%;
}
#submitForm {
  border: 1px solid black !important;
  padding: 15px 50px;
  font-size: 18px;
  color: black;
  background-color: white;
  border-radius: 0%;
  transition: background-color 0.3s, color 0.3s;
}
#submitForm:hover {
  background-color: black; /* Hover olduğunda arka plan rengi */
  color: white; /* Hover olduğunda metin rengi */
  cursor: pointer; /* Fare imleci türü */
}
</style>
