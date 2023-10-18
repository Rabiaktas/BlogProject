<template>
  <b-tabs
    vertical
    content-class="col-12 col-md-9 mt-1 mt-md-0"
    pills
    nav-wrapper-class="col-md-3 col-12"
    nav-class="nav-left"
  >
    <!-- general tab -->
    <b-tab active>
      <!-- title -->
      <template #title>
        <feather-icon icon="UserIcon" size="18" class="mr-50" />
        <span class="font-weight-bold">General</span>
      </template>

      <account-setting-general
        v-if="accountSetting.general"
        :general-data="accountSetting.general"
      />
    </b-tab>
    <!--/ general tab -->

    <!-- change password tab -->
    <b-tab>
      <!-- title -->
      <template #title>
        <feather-icon icon="LockIcon" size="18" class="mr-50" />
        <span class="font-weight-bold">Change Password</span>
      </template>

      <account-setting-password />
    </b-tab>
    <!--/ change password tab -->

    <!-- info -->
    <b-tab>
      <!-- title -->
      <template #title>
        <feather-icon icon="InfoIcon" size="18" class="mr-50" />
        <span class="font-weight-bold">Information</span>
      </template>

      <account-setting-information
        v-if="accountSetting.info"
        :information-data="accountSetting.info"
      />
    </b-tab>

    <!-- notification -->
    <b-tab>
      <!-- title -->
      <template #title>
        <feather-icon icon="BellIcon" size="18" class="mr-50" />
        <span class="font-weight-bold">Notifications</span>
      </template>

      <account-setting-notification
        v-if="accountSetting.notification"
        :notification-data="accountSetting.notification"
      />
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from "bootstrap-vue";
import AccountSettingGeneral from "./AccountSettingGeneral.vue";
import AccountSettingPassword from "./AccountSettingPassword.vue";
import AccountSettingInformation from "./AccountSettingInformation.vue";
import AccountSettingNotification from "./AccountSettingNotification.vue";
import axios from "axios";
export default {
  components: {
    BTabs,
    BTab,
    AccountSettingGeneral,
    AccountSettingPassword,
    AccountSettingInformation,
    AccountSettingNotification,
  },
  data() {
    return {
      accountSetting: {
        general: {
          avatar: require("@/assets/images/portrait/small/avatar-s-11.jpg"),
          username: "Rabish",
          fullName: "Rabia Aktaş",
          email: "granger007@hogward.com",
          company: "Crystal Technologies",
        },
        info: {
          bio: "",
          dob: null,
          country: "USA",
          website: "",
          phone: 6562542568,
        },
        notification: {
          commentOnArticle: true,
          AnswerOnForm: true,
          followMe: false,
          newAnnouncements: true,
          productUpdates: true,
          blogDigest: false,
        },
      },
     
    };
  },
  
};
</script>
