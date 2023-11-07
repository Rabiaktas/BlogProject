<template>
  <!-- blogs -->
  <b-row class="blog-list-wrapper">
    <b-col v-for="blog in blogList" :key="blog.img" md="12">
      <b-card class="fontCard" tag="article" no-body>
        <b-row>
          <b-col md="5">
            <b-link :to="{ name: 'second-page', params: { id: blog.id } }">
              <b-img
                :src="blog.img"
                :alt="blog.img.slice(5)"
                class="card-img-top"
              />
            </b-link>
          </b-col>
          <b-col md="7">
            <b-card-body>
              <b-card-title>
                <b-link
                  :to="{ name: 'second-page', params: { id: blog.id } }"
                  class="blog-title-truncate text-body-heading"
                >
                  <h2 class="display-5">{{ blog.title }}</h2>
                </b-link>
              </b-card-title>
              <div class="altkisim">
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
                    <small>
                      <b-link class="text-body">{{ blog.userFullName }}</b-link>
                    </small>
                    <span class="text-muted ml-75 mr-50">|</span>
                    <small class="text-muted">{{ blog.blogPosted }}</small>
                  </b-media-body>
                </b-media>
                <div class="my-1 py-25">
                  <b-link v-for="(tag, index) in blog.tags" :key="index">
                    <b-badge pill class="mr-75" :variant="tagsColor(tag)">
                      {{ tag }}
                    </b-badge>
                  </b-link>
                </div>
                <b-card-text class="blog-content-truncate">
                  {{ blog.excerpt }}
                </b-card-text>
                <hr />
                <div class="d-flex justify-content-between">
                  <b-link
                    :to="{ name: 'second-page', params: { id: blog.id } }"
                    class="font-weight-bold ml-auto"
                  >
                    Daha fazla...
                  </b-link>
                </div>
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
  },
  data() {
    return {
      search_query: "",
      perPage: 1,
      rows: 140,
      blogList: [
        {
          id: 2,
          // eslint-disable-next-line global-require
          img: require("@/assets/images/slider/game1.jpg"),
          title: "E-Spor: Dijital Arenada Yükselen Bir Fenomen ",
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/Arda.jpeg"),
          userFullName: "Arda Emir Noğan",
          blogPosted: "02 Eylül 2023",
          tags: ["Oyun", "Spor"],
          excerpt:
            "E-spor, son yıllarda dünya genelinde büyük bir yükseliş yaşayan ve hızla büyümeye devam eden bir fenomendir. Geleneksel spor dallarının aksine, e-spor, oyuncuların bilgisayarlar veya oyun konsolları üzerinden rekabet ettiği bir arenadır. Ancak, bu dijital dünya çoktan sadece bir oyun olarak görülmüyor.",
          comment: 2100,
        },

        {
          id: 4,
          // eslint-disable-next-line global-require
          img: require("@/assets/images/slider/yemek.jpg"),
          title: "Withhold a Compelling Piece of Information",
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/portrait/small/avatar-s-14.jpg"),
          userFullName: "Rabia Aktaş",
          blogPosted: "02 Eylül 2023",
          tags: ["Yemek"],
          excerpt:
            "Croissant apple pie lollipop gingerbread. Cookie jujubes chocolate cake icing cheesecake.",
          comment: 3200,
        },

        {
          id: 6,
          // eslint-disable-next-line global-require
          img: require("@/assets/images/slider/basketbol.jpg"),
          title: "Ships at a distance have Every Man’s Wish on Board",
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/portrait/small/avatar-s-13.jpg"),
          userFullName: "Arda Emir Noğan",
          blogPosted: "3 Eylül 2023",
          tags: ["Spor"],
          excerpt:
            "A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.",
          comment: 1500,
        },
      ],
    };
  },
  created() {},
  methods: {
    kFormatter,
    tagsColor(tag) {
      if (tag === "Alıntı") return "light-info";
      if (tag === "Oyun") return "light-danger";
      if (tag === "Moda") return "light-primary";
      if (tag === "Spor") return "light-warning";
      if (tag === "Yemek") return "light-success";
      return "light-primary";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@200&display=swap");

.fontCard {
  font-family: "Prompt", sans-serif;
}
</style>

<style lang="scss">
@import "@core/scss/vue/pages/page-blog.scss";
</style>
