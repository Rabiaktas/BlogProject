<template>
  <div>
    <b-tabs fill pills class="nav-pill-secondary">
      <b-tab title="Tüm Postlar" :active="isActiveTab === 'allPost'" @click="changeTab('allPost')">
        <b-card-text>
          <br /><br />
          <b-row>
            <b-col md="2"></b-col>
            <b-col md="8"
              ><all-posts @changeActiveTabEvent="activeBlogId = $event"
            /></b-col>
            <b-col md="2"></b-col>
          </b-row>
        </b-card-text>
      </b-tab>

      <b-tab title="Eğlence" :active="isActiveTab === 'eglence'">
        <b-card-text>
          <br /><br />
          <b-row>
            <b-col md="2"></b-col>
            <b-col md="8"><eglence /></b-col>
            <b-col md="2"></b-col
          ></b-row>
        </b-card-text>
      </b-tab>

      <b-tab title="Trend" :active="isActiveTab === 'trend'">
        <b-card-text>
          <br /><br />
          <b-row>
            <b-col md="2"></b-col>
            <b-col md="8"><trend /></b-col>
            <b-col md="2"></b-col
          ></b-row>
        </b-card-text>
      </b-tab>
      <b-tab title="Tasarım" :active="isActiveTab === 'tasarim'">
        <b-card-text>
          <br /><br />
          <b-row>
            <b-col md="2"></b-col>
            <b-col md="8"><tasarim-vue /></b-col>
            <b-col md="2"></b-col
          ></b-row>
        </b-card-text>
      </b-tab>
    </b-tabs>
    <div>{{ activeBlogId }}</div>
    <!-- Footer -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import { BTabs, BTab, BRow, BCol, BCardText } from "bootstrap-vue";
import AllPosts from "./AllPosts.vue";
import eglence from "./AllPostDetail/Eglence/Eglence.vue";
import tasarimVue from "./AllPostDetail/Tasarım/tasarım.vue";
import footerVue from "../home/components/footer.vue";
import trend from "./AllPostDetail/Trend/trend.vue";

export default {
  components: {
    BTabs,
    BTab,
    BRow,
    BCardText,
    BCol,
    AllPosts,
    footerVue,
    eglence,
    trend,
    tasarimVue,
  },
  data() {
    return {
      isActiveTab: "allPost",
      activeBlogId: null,
      activeAllPost: null
    };
  },
  methods: {
    toggleActiveTab() {
      this.isActiveTab = !this.isActiveTab;
    },
    changeActiveTab(id, tabs) {
      this.activeBlogId = { id, tabs };
    },
    changeTab(tabName){
      this.isActiveTab = tabName;
    }
    
  },
  watch: {
    activeBlogId(yeni, eski) {
      if (yeni && yeni.tabs) {
        this.isActiveTab = yeni.tabs;
        console.log('if e girmiş',  this.isActiveTab)
      }
      console.log('if den çıkmış')
    },
    

  },
};
</script>
<style scoped>
.nav-pill-secondary {
  font-family: "Prompt", sans-serif;
}
</style>
