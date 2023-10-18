<template>
  <div class="fontBlog">
    <!-- NavBar-->
    <navbar/>
    <pill/>
   
  </div>
</template>

<script>
import { BNav, BNavItem, BCard} from "bootstrap-vue";
import Navbar from "../home/components/Navbar.vue";
import Pill from "./Pill.vue";
export default {
  components: {
    Navbar,
    BNav,
    BNavItem,
    BCard,
    Pill
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@200&display=swap');
</style>
