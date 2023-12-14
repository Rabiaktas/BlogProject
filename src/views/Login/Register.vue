<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <!-- Register v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <h2 class="brand-text text-primary ml-1">LifeSakarya Blog</h2>
        </b-link>

        <b-card-title class="mb-1"> Macera Burada Başlıyor... 🚀 </b-card-title>
        <b-card-text class="mb-2">
          Uygulama yönetiminizi kolay ve eğlenceli hale getirin!
        </b-card-text>

        <!-- form -->
        <validation-observer ref="registerForm">
          <b-form
            class="auth-register-form mt-2"
           
          >
            <div class="error">{{ this.errorMsg }}</div> <br>
            <!-- username -->
            <b-form-group label="Kullanıcı Adı" label-for="username">
              <validation-provider
                #default="{ errors }"
                name="Username"
                rules="required"
              >
                <b-form-input
                  id="username"
                  v-model="post.username"
                  :state="errors.length > 0 ? false : null"
                  name="register-username"
                  placeholder="johndoe"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- email -->
            <b-form-group label="Email" label-for="email">
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  id="email"
                  v-model="post.regEmail"
                  :state="errors.length > 0 ? false : null"
                  name="register-email"
                  placeholder="john@example.com"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group label="Şifre" label-for="password">
              <validation-provider
                #default="{ errors }"
                name="Password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid' : null"
                >
                  <b-form-input
                    id="password"
                    v-model="post.password"
                    :type="passwordFieldType"
                    :state="errors.length > 0 ? false : null"
                    class="form-control-merge"
                    name="register-password"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="passwordToggleIcon"
                      class="cursor-pointer"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="register-privacy-policy"
                v-model="post.status"
                name="checkbox-1"
              >
                <b-link> Gizlilik politikasını ve şartları</b-link>'nı kabul
                ediyorum
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="primary"
              block
              type="submit"
              @click.prevent="UserSave"
            >
              Kayıt Ol
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <span>Zaten hesabınız var mı? </span>
          <b-link :to="{ name: 'login' }">
            <span>Giriş Yap</span>
          </b-link>
        </b-card-text>
      </b-card>
      <!-- /Register v1 -->
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import {
  BCard,
  BLink,
  BCardTitle,
  BCardText,
  BForm,
  BButton,
  BFormInput,
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BFormCheckbox,
} from "bootstrap-vue";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import firebase from "firebase/app";
import db from "../../firebase/firebase";
import "firebase/auth"


export default {
  name: "Register",
  components: {
    VuexyLogo,
    // BSV
    BCard,
    BLink,
    BCardTitle,
    BCardText,
    BForm,
    BButton,
    BFormInput,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BFormCheckbox,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      post: {
        regEmail: "",
        username: "",
        password: "",
        status: "",
      },
      // validation rules
      required,
      email,
      error:null,
      errorMsg:"",
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
  },
  methods: {
   
   async UserSave() {
        if(
          this.post.password !== "" &&
          this.post.regEmail !== "" &&
          this.post.username !== "" 
        ) {
          this.error =false;
          this.errosMsg = "";
          const firebaseAuth = await firebase.auth()
          const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
          const result = await createUser;
          const dataBase = db.collection("users").doc(result.user.uid)
          await dataBase.set({
           password: this.post.password,
           regEmail: this.post.regEmail,
           username: this.post.username
          });
          this.$$router.push({name: "home"})
          return;
        }
        this.error =true;
        this.errorMsg= "Lütfen tüm alanları doldurun!"
        return;
},
  } 
}
</script>
<style scoped>
.error{
color: red;
}
</style>
<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
