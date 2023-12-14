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
              <h4 class="text-body-heading">
                {{ blog.title }}
              </h4>
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
            <div class="d-flex justify-content-between align-items-right">
              <!-- Read More Button -->
              <b-button
                class="ReadMore ml-auto"
                @click="changeActiveTab(blog.id, blog.tabs)"
              >
                <feather-icon style="color: grey;" icon="ChevronsRightIcon" class="mr-50" />
              </b-button>
            </div>
          </b-card-body>
        </b-card>
      </b-card-group> 
    </b-col> 
     <!-- pagination 
    <b-col cols="12">
      
        <div class="my-2">
          <b-pagination
            v-model="currentPage"
            align="center"
            :total-rows="rows"
            first-number
            last-number
            prev-class="prev-item"
            next-class="next-item"
          >
            <template #prev-text>
              <feather-icon
                icon="ChevronLeftIcon"
                size="18"
              />
            </template>
            <template #next-text>
              <feather-icon
                icon="ChevronRightIcon"
                size="18"
              />
            </template>
          </b-pagination>
        </div>
      </b-col>  -->
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
          id: 6,
          img: require("@/assets/images/allPost/allpost.6.jpg"),
          title:
            "Sakarya Kent Park ve Uçak Kafe: Doğanın İçinde Eşsiz Bir Mekân",
          avatar: require("@/assets/images/avatars/caglaa.jpg"),
          userFullName: "Çağla Düdükçü",
          blogPosted: "01.12.2023",
          tags: ["Sakarya"],
          tabs: "sakarya",
          excerpt:
            " Sakarya'nın gözde noktalarından biri olan Kent Park, ziyaretçilerine doğanın...",
        },
      {
          id: 5,
          img: require("@/assets/images/allPost/allpost.5.jpg"),
          title:
            "Şehrin Karmaşasından Uzakta Doğayla Buluşma Adresi",
          avatar: require("@/assets/images/avatars/caglaa.jpg"),
          userFullName: "Çağla Düdükçü",
          blogPosted: "26.11.2023",
          tags: ["Sakarya"],
          tabs: "sakarya",
          excerpt:
            " Sakarya'nın gözlerden uzak, doğanın sakin kollarında gizlenmiş incisi... ",
        },
        {
          id: 4,
          img: require("@/assets/images/allPost/allpost.4.jpg"),
          title: "Sakarya Üniversitesi Kampüsü: Eğitimdeki Renkli Durağınız",
          avatar: require("@/assets/images/avatars/caglaa.jpg"),
          userFullName: "Çağla Düdükçü",
          blogPosted: "23.11.2023",
          tags: ["Kampüs",],
          tabs: "kampüs",
          excerpt:
            " Sakarya Üniversitesi, Türkiye'nin önde gelen yüksek öğretim kurumlarından biridir...  ",
        },
      {
          id: 3,
          img: require("@/assets/images/allPost/allpost.3.jpg"),
          title: "Sessizliğin ve Doğanın Buluştuğu Nokta: Serdivan Gölpark",
          avatar: require("@/assets/images/avatars/caglaa.jpg"),
          userFullName: "Çağla Düdükçü",
          blogPosted: "18.11.2023",
          tags: ["Sakarya",],
          tabs: "sakarya",
          excerpt:
            " Yolculuklar, insanı beklenmedik yerlere sürükleyebilir. Sakarya'nın gizemli köşelerinden...  ",
        },
      {
          id: 2,
          img: require("@/assets/images/allPost/allpost.2.jpg"),
          title: "Sapancanın Tatlı Sürprizi: Uğurlu Dükkan",
          avatar: require("@/assets/images/avatars/caglaa.jpg"),
          userFullName: "Çağla Düdükçü",
          blogPosted: "15.11.2023",
          tags: ["Trend",],
          tabs: "trend",
          excerpt:
            " Bugün, kısa bir kaçamak için Sapancayı tercih ettim ve şanslı dükkan, benim ilk durağım... ",
        },
        {
          id: 1,
          img: require("@/assets/images/allPost/welcome.gif"),
          title:
            "LifeSakarya'ya Hoş Geldiniz!",
          avatar: require("@/assets/images/avatars/rabiaa.jpeg"),
          userFullName: "Rabia || Çağla",
          blogPosted: " 14.11.2023",
          tags: ["Trend"],
          tabs: "trend",
          excerpt:
            "Sakarya'nın kalbinde bir soluklanma noktasına hoş geldiniz. LifeSakarya, bu şehrin nefes kesen güzelliklerini... ",
          comment: 76,
        },
       
      ],
      perPage: 1,
      rows: 140,
      currentPage: 1,
    };
  },
  methods: {
    kFormatter,
    tagsColor(tag) {
      if (tag === "Kampüs") return "light-info";
      if (tag === "Trend") return "light-warning";
      if (tag === "Sakarya") return "light-success";
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
