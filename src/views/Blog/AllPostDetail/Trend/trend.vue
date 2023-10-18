<template>
    <div class="blog-detail-wrapper">
      <b-row>
        <!-- blogs -->
        <b-col v-for="blog in blogDetail" :key="blog.img" cols="12">
          <b-card
            img-top
            img-alt="Blog Detail Pic"
            :img-src="blog.img"
            :title="blog.title"
          >
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
                  <b-link class="text-body">{{
                    blog.userFullName
                  }}</b-link>
                </small>
                <span class="text-muted ml-75 mr-50">|</span>
                <small class="text-muted">{{
                  blog.createdTime
                }}</small>
              </b-media-body>
            </b-media>
            <div class="my-1 py-25">
              <b-link v-for="tag in blog.tags" :key="tag">
                <b-badge pill class="mr-75" :variant="tagsColor(tag)">
                  {{ tag }}
                </b-badge>
              </b-link>
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div class="blog-content" v-html="blog.content" />
  
            <!-- user commnets -->
            <b-media
              v-for="user in blog.UserComment"
              :key="user.avatar"
              no-body
            >
              <b-media-aside>
                <b-avatar size="60" :src="user.avatar" />
              </b-media-aside>
              <b-media-body>
                <h6 class="font-weight-bolder">
                  {{ user.fullName }}
                </h6>
                <b-card-text>
                  {{ user.comment }}
                </b-card-text>
              </b-media-body>
            </b-media>
            <!-- eslint-enable -->
            <hr class="my-2" />
  
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center mr-1">
                  <b-link class="mr-50">
                    <feather-icon
                      icon="MessageSquareIcon"
                      size="21"
                      class="text-body"
                    />
                  </b-link>
                  <b-link>
                    <div class="text-body">
                      {{ kFormatter(blog.comments) }} 
                    </div>
                  </b-link>
                </div>
                <div class="d-flex align-items-center">
                  <b-link class="mr-50">
                    <feather-icon
                      size="21"
                      icon="BookmarkIcon"
                      class="text-body"
                    />
                  </b-link>
                  <b-link>
                    <div class="text-body">
                      {{ kFormatter(blog.bookmarked) }}
                    </div>
                  </b-link>
                </div>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <!--/ blogs -->
    </div>
  </template>
  <script>
  import {
    BFormInput,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BImg,
    BLink,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BCard,
    BRow,
    BCol,
    BBadge,
    BCardText,
    BDropdown,
    BDropdownItem,
    BForm,
    BFormTextarea,
    BFormCheckbox,
    BButton,
  } from "bootstrap-vue";
  import Ripple from "vue-ripple-directive";
  import { kFormatter } from "@core/utils/filter";
  
  export default {
    components: {
      BFormInput,
      BMedia,
      BAvatar,
      BMediaAside,
      BMediaBody,
      BLink,
      BCard,
      BRow,
      BCol,
      BFormGroup,
      BInputGroup,
      BInputGroupAppend,
      BImg,
      BBadge,
      BCardText,
      BDropdown,
      BForm,
      BDropdownItem,
      BFormTextarea,
      BFormCheckbox,
      BButton,
    },
    directives: {
      Ripple,
    },
    data() {
      return {
        search_query: "",
        commentCheckmark: "",
        socialShareIcons: [
          "GithubIcon",
          "GitlabIcon",
          "FacebookIcon",
          "TwitterIcon",
          "LinkedinIcon",
        ],
        blogDetail: [
           {
            id:1,
            img: require("@/assets/images/banner/modaDetail.jpg"),
            title: "Moda Dünyasının Şaşırtıcı Dönüşü: Geçmişten Geleceğe Stil Yolculuğu",
            avatar: require("@/assets/images/avatars/rabiaa.jpeg"),
            userFullName: "Rabia Aktaş",
            createdTime: "02 Eylül 2023",
            tags: ["Trend"],
            tabs: 'Trend',
            content:
              '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias dignissimos, aperiam illum excepturi quod quae nesciunt quibusdam inventore, quaerat placeat aliquam ab veniam natus doloribus ullam eaque similique, unde omnis quis neque corrupti? Itaque atque consequatur, deleniti fuga et non alias harum dignissimos quas! Aliquid repellendus impedit veniam aspernatur.</p><h4>Moda\'nın Büyüleyici Dünyası</h4><p>Moda\'nın büyüleyici dünyasının içine girdiğinizde, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias dignissimos, aperiam illum excepturi quod quae nesciunt quibusdam inventore, quaerat placeat aliquam ab veniam natus doloribus ullam eaque similique, unde omnis quis neque corrupti? ',
            comments: 2100,
            bookmarked: 139,
            UserComment: [
              {
                avatar: require("@/assets/images/portrait/small/avatar-s-7.jpg"),
                fullName: "Ceylin Naz",
                comment:
                  "Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world.",
              },
            ],
          },
          {
            id:3,
            img: require("@/assets/images/banner/yemekDetail.jpg"),
            title: "Lezzet Dünyasının Sıradışı Serüveni: Damak Tadınıza Yolculuk!",
            avatar: require("@/assets/images/avatars/rabiaa.jpeg"),
            userFullName: "Rabia Aktaş",
            createdTime: "02 Eylül 2023",
            tags: ["Trend"],
            content:
            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias dignissimos, aperiam illum excepturi quod quae nesciunt quibusdam inventore, quaerat placeat aliquam ab veniam natus doloribus ullam eaque similique, unde omnis quis neque corrupti? Itaque atque consequatur, deleniti fuga et non alias harum dignissimos quas! Aliquid repellendus impedit veniam aspernatur.</p><h4>Yemeğin Büyüleyici Dünyası</h4><p>Moda\'nın büyüleyici dünyasının içine girdiğinizde, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias dignissimos, aperiam illum excepturi quod quae nesciunt quibusdam inventore, quaerat placeat aliquam ab veniam natus doloribus ullam eaque similique, unde omnis quis neque corrupti? ',
            comments: 2100,
            bookmarked: 139,
            UserComment: [
              {
                avatar: require("@/assets/images/portrait/small/avatar-s-8.jpg"),
                fullName: "Barış",
                comment:
                  "Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world.",
              },
            ],
          },
          {
            id:4,
            img: require("@/assets/images/banner/yemekDetail2.jpg"),
            title: "Mutfak Sanatının Büyüsü: Lezzetin Perde Arkası",
            avatar: require("@/assets/images/avatars/rabiaa.jpeg"),
            userFullName: "Rabia Aktaş",
            createdTime: "02 Eylül 2023",
            tags: ["Trend"],
            content:
            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias dignissimos, aperiam illum excepturi quod quae nesciunt quibusdam inventore, quaerat placeat aliquam ab veniam natus doloribus ullam eaque similique, unde omnis quis neque corrupti? Itaque atque consequatur, deleniti fuga et non alias harum dignissimos quas! Aliquid repellendus impedit veniam aspernatur.</p><h4>Yemeğin Büyüleyici Dünyası</h4><p>Moda\'nın büyüleyici dünyasının içine girdiğinizde, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias dignissimos, aperiam illum excepturi quod quae nesciunt quibusdam inventore, quaerat placeat aliquam ab veniam natus doloribus ullam eaque similique, unde omnis quis neque corrupti? ',
            comments: 2100,
            bookmarked: 139,
            UserComment: [
              {
                avatar: require("@/assets/images/portrait/small/avatar-s-2.jpg"),
                fullName: "Özge",
                comment:
                  "Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world.",
              },
            ],
          },
      ],
          comments: [
            {
              avatar: require("@/assets/images/portrait/small/avatar-s-9.jpg"),
              userFullName: "Chad Alexander",
              commentedAt: "May 24, 2020",
              commentText:
                "A variation on the question technique above, the multiple-choice question great way to engage your reader.",
            },
          ],
        };
    },
   
    methods: {
      kFormatter,
      tagsColor(tag) {
        if (tag === "Trend") return "light-success";
        return "light-primary";
      },
    },
  };
  </script>
  <style>
  .fontPost {
    font-family: "Prompt", sans-serif;
  }
  </style>
  <style lang="scss">
  @import "@core/scss/vue/pages/page-blog.scss";
  </style>
  