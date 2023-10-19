<template>
  <!-- blogs -->
  <b-row>
    <b-col cols="12" sm="6" md="4" v-for="blog in blogList" :key="blog.img">
      <b-card-group deck class="mb-2">
        <b-card
          :img-src="blog.img"
          :alt="blog.img.slice(5)"
          class="card-img-top bg-transparent"
          img-top
          no-body
        >
          <b-card-body>
            <b-media no-body>
              <b-media-aside vertical-align="center" class="mr-50 mb-1">
                <b-avatar
                  href="javascript:void(0)"
                  size="24"
                  :src="blog.avatar"
                />
              </b-media-aside>
              <b-media-body>
                <small class="text-muted mr-50">by</small>
                <small
                  ><b-link class="text-body">{{
                    blog.userFullName
                  }}</b-link></small
                >
                <span class="text-muted ml-75 mr-50">|</span>
                <small class="text-muted">{{ blog.blogPosted }}</small>
              </b-media-body>
            </b-media>
            <b-card-title>
              <b-link class="blog-title-truncate text-body-heading">
                {{ blog.title }}
              </b-link>
            </b-card-title>
           
            <div class="my-1 py-20">
              <b-link v-for="(tag, index) in blog.tags" :key="index">
                <b-badge pill class="mr-75" :variant="tagsColor(tag)">{{
                  tag
                }}</b-badge>
              </b-link>
            </div>
            <b-card-text class="blog-content-truncate">{{
              blog.excerpt
            }}</b-card-text>
            <hr />
            <div class="d-flex justify-content-between align-items-center">
              <b-link :to="{ path: `/pages/blog/${blog.id}#blogComment` }">
                <div class="d-flex align-items-center text-body">
                  <feather-icon icon="HeartIcon" class="mr-50" />
                  <span class="font-weight-bold"
                    >{{ kFormatter(blog.comment) }}</span
                  >
                  <feather-icon icon="MessageSquareIcon" class="mr-50 ml-1" />                
                  <span class="font-weight-bold"
                    >{{ kFormatter(blog.comment) }} Comments</span
                  >
                </div>
              </b-link>

              <!-- Read More Button -->
              <b-button
                class="ReadMore"
                @click="changeActiveTab(blog.id, blog.tabs)"
              >
                <feather-icon style="color: grey;" icon="ChevronsRightIcon" class="mr-50" />
              </b-button>
            </div>
          </b-card-body>
        </b-card>
      </b-card-group>
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BCardText,
  BCardTitle,
  BMedia,
  BAvatar,
  BMediaAside,
  BMediaBody,
  BImg,
  BCardBody,
  BLink,
  BBadge,
  BPagination,
  BButton,
  BCardGroup,
  BCardFooter,
} from "bootstrap-vue";
import { kFormatter } from "@core/utils/filter";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BCardBody,
    BCardTitle,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BLink,
    BBadge,
    BImg,
    BPagination,
    BButton,
    BCardGroup,
    BCardFooter,
  },
  data() {
    return {
      search_query: "",
      blogList: [
        {
          id: 1,
          img: require("@/assets/images/slider/moda.jpg"),
          title:
            "Moda Dünyasının Şaşırtıcı Dönüşü: Geçmişten Geleceğe Stil Yolculuğu",
          avatar: require("@/assets/images/avatars/rabiaa.jpeg"),
          userFullName: "Rabia Aktaş",
          blogPosted: " 31 Ağustos 2023",
          tags: ["Trend"],
          tabs: "trend",
          excerpt:
            "Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.Donut fruitcake soufflé apple pie candy canes ",
          comment: 76,
        },
        {
          id: 2,
          // eslint-disable-next-line global-require
          img: require("@/assets/images/slider/game1.jpg"),
          title: "E-Spor: Dijital Arenada Yükselen Bir Fenomen ",
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/Arda.jpeg"),
          userFullName: "Arda Emir Noğan",
          blogPosted: "02 Eylül 2023",
          tags: ["Eglence"],
          tabs: "eglence",
          excerpt:
            "Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.Donut fruitcake soufflé apple pie candy canes ",
          comment: 2100,
        },
        {
          id: 3,
          img: require("@/assets/images/slider/yemek1.jpg"),
          title:
            "Lezzet Dünyasının Sıradışı Serüveni: Damak Tadınıza Yolculuk!",
          avatar: require("@/assets/images/portrait/small/avatar-s-3.jpg"),
          userFullName: "Rabia Aktaş",
          blogPosted: "02 Eylül 2023",
          tags: ["Trend"],
          tabs: "trend",
          excerpt:
            "Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.Donut fruitcake soufflé apple pie candy canes",
          comment: 243,
        },
        {
          id: 4,
          // eslint-disable-next-line global-require
          img: require("@/assets/images/slider/yemek.jpg"),
          title: "Mutfak Sanatının Büyüsü: Lezzetin Perde Arkası",
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/portrait/small/avatar-s-14.jpg"),
          userFullName: "Rabia Aktaş",
          blogPosted: "02 Eylül 2023",
          tags: ["Trend"],
          tabs: "trend",
          excerpt:
            "Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.Donut fruitcake soufflé apple pie candy canes",
          comment: 3200,
        },
        {
          id: 5,
          img: require("@/assets/images/slider/tasarım.jpg"),
          title: "Kodlama Büyüsü: Yazılımın Sihirli Dokunuşu!",
          avatar: require("@/assets/images/portrait/small/avatar-s-2.jpg"),
          userFullName: "Rabia Aktaş",
          blogPosted: "02 Eylül 2023",
          tags: ["Tasarim"],
          tabs: "tasarim",
          excerpt:
            "Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.Donut fruitcake soufflé apple pie candy canes",
          comment: 319,
        },
        {
          id: 6,
          // eslint-disable-next-line global-require
          img: require("@/assets/images/slider/basketbol.jpg"),
          title: "NBA 2023 Sezonunda Göz Atılması Gerekenler",
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/portrait/small/avatar-s-13.jpg"),
          userFullName: "Arda Emir Noğan",
          blogPosted: "3 Eylül 2023",
          tags: ["Eglence"],
          tabs: "eglence",
          excerpt:
            "Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.Donut fruitcake soufflé apple pie candy canes",
          comment: 1500,
        },
      ],
      perPage: 1,
      rows: 140,
    };
  },
  methods: {
    kFormatter,
    tagsColor(tag) {
      if (tag === "Tasarim") return "light-info";
      if (tag === "Eglence") return "light-warning";
      if (tag === "Trend") return "light-success";
      return "light-primary";
    },
    changeActiveTab(id, tabs) {
      this.$emit("changeActiveTabEvent", { id, tabs });
      console.log(id, tabs);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@300&display=swap");
.blog-list-wrapper {
  font-family: "Prompt", sans-serif;
}

.blog-title-truncate {
  font-size: 20px;
}
.card-img-top {
  margin-top: 0;
}
.ReadMore{
  background:transparent !important ;
  border: none;
}
</style>
<style lang="scss">
@import "@core/scss/vue/pages/page-blog.scss";
</style>
