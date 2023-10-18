<template>
  <!-- blogs -->
  <b-row class="blog-list-wrapper">
    <b-col v-for="blog in blogList" :key="blog.img" md="12">
      <b-card tag="article" no-body>
        <b-row>
          <b-col md="6">
            <b-img
              :src="blog.img"
              :alt="blog.img.slice(5)"
              class="card-img-top"
              style="max-width: 100%"
            />
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-title>
                <b-link
                  class="blog-title-truncate text-body-heading"
                >
                  {{ blog.title }}
                </b-link>
              </b-card-title>
              <b-media no-body>
                <b-media-aside vertical-align="center" class="mr-50">
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
                    <feather-icon icon="MessageSquareIcon" class="mr-50" />
                    <span class="font-weight-bold"
                      >{{ kFormatter(blog.comment) }} Comments</span
                    >
                  </div>
                </b-link>

                <!-- Read More Button -->
                <b-link
                  class="font-weight-bold"
                  style="color: black; font-size: 12px"
                  @click="changeActiveTab(blog.id, blog.tabs)"
                >
                  Read More..
                </b-link>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
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
            "Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.",
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
            "E-spor, son yıllarda dünya genelinde büyük bir yükseliş yaşayan ve hızla büyümeye devam eden bir fenomendir. Geleneksel spor dallarının aksine, e-spor, oyuncuların bilgisayarlar veya oyun konsolları üzerinden rekabet ettiği bir arenadır. Ancak, bu dijital dünya çoktan sadece bir oyun olarak görülmüyor.",
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
            "Tiramisu jelly-o chupa chups tootsie roll donut wafer marshmallow cheesecake topping.",
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
            "Croissant apple pie lollipop gingerbread. Cookie jujubes chocolate cake icing cheesecake.",
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
            "Muffin liquorice candy soufflé bear claw apple pie icing halvah. Pie marshmallow jelly.",
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
            "A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.",
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
  max-width: 100%;
  height: auto;
}
</style>
<style lang="scss">
@import "@core/scss/vue/pages/page-blog.scss";
</style>
