<template>
  <div>
    <b-tabs fill pills class="nav-pill-secondary">
      <b-tab
        title="Tüm Postlar"
        :active="isActiveTab === 'allPost'"
        @click="changeTab('allPost')"
      >
        <b-card-text>
          <br /><br />
          <b-row>
            <b-col md="1"></b-col>
            <b-col md="10"
              ><all-posts @changeActiveTabEvent="activeBlogId = $event"
            /></b-col>
            <b-col md="1"></b-col>
          </b-row>
        </b-card-text>
      </b-tab>
      <b-tab title="Sakarya" :active="isActiveTab === 'sakarya'">
        <b-card-text>
          <br /><br />
          <b-row>
            <b-col md="2"></b-col>
            <b-col md="8"><sakarya /></b-col>
            <b-col md="2"></b-col
          ></b-row>
        </b-card-text>
      </b-tab>
      <b-tab title="Kampüs" :active="isActiveTab === 'kampüs'">
        <b-card-text>
          <br /><br />
          <b-row>
            <b-col md="2"></b-col>
            <b-col md="8"><kampüs /></b-col>
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
    </b-tabs>
    <!-- Footer -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import { BTabs, BTab, BRow, BCol, BCardText } from "bootstrap-vue";
import AllPosts from "./AllPosts.vue";
import kampüs from "./AllPostDetail/Kampüs/kampüs.vue";
import trend from "./AllPostDetail/Trend/trend.vue";
import footerVue from "../home/components/footer.vue";
import sakarya from "./AllPostDetail/Sakarya/sakarya.vue";

export default {
  components: {
    BTabs,
    BTab,
    BRow,
    BCardText,
    BCol,
    AllPosts,
    footerVue,
    kampüs,
    trend,
    sakarya,
  },
  data() {
    return {
      isActiveTab: "allPost",
      activeBlogId: null,
      activeAllPost: null,
    };
  },
  methods: {
    toggleActiveTab() {
      this.isActiveTab = !this.isActiveTab;
    },
    changeActiveTab(id, tabs) {
      this.activeBlogId = { id, tabs };
    },
    changeTab(tabName) {
      this.isActiveTab = tabName;
    },
  },
  watch: {
    activeBlogId(yeni, eski) {
      if (yeni && yeni.tabs) {
        this.isActiveTab = yeni.tabs;
        console.log("if e girmiş", this.isActiveTab);
      }
      console.log("if den çıkmış");
    },
  },
};
</script>
<style scoped>
.nav-pill-secondary {
  font-family: "Prompt", sans-serif;
}
</style>
