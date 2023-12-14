import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import router from './router'
import store from './store'
import App from './App.vue'
import axios from 'axios'

// firebase 
import  firebaseMixin  from './firebase/firebase'
import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth'; 

// Global Components
import './global-components'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

//firebase 
const firebaseConfig = {
  apiKey: "AIzaSyBJZPyeVpcyNNz9g7qQfpnW-xElhps6Rl4",
  authDomain: "blogdatabase-a62bf.firebaseapp.com",
  projectId: "blogdatabase-a62bf",
  storageBucket: "blogdatabase-a62bf.appspot.com",
  messagingSenderId: "527551787059",
  appId: "1:527551787059:web:68b45df4aca49941277346"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)
Vue.use(axios)

// firebase mixin
Vue.mixin(firebaseMixin);

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
