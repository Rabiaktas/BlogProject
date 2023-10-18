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
          id:2,
          img: require("@/assets/images/banner/gameDetail.jpg"),
          title: "E-Spor: Dijital Arenada Yükselen Bir Fenomen",
          avatar: require("@/assets/images/avatars/Arda.jpeg"),
          userFullName: "Arda Emir Noğan",
          createdTime: "02 Eylül 2023",
          tags: ["Eglence"],
          content:
            '<p>E-spor, son yıllarda dünya genelinde büyük bir yükseliş yaşayan ve hızla büyümeye devam eden bir fenomendir. Geleneksel spor dallarının aksine, e-spor, oyuncuların bilgisayarlar veya oyun konsolları üzerinden rekabet ettiği bir arenadır. Ancak, bu dijital dünya çoktan sadece bir oyun olarak görülmüyor. E-spor, uluslararası arenalarda büyük bir rekabetin ve heyecanın yanı sıra ciddi bir endüstri haline geldi.</p><h4>E-Spor\'un Büyüleyici Dünyası</h4><p>E-sporun büyüleyici dünyasının içine girdiğinizde, her şeyin sadece eğlence amaçlı olmadığını hemen anlarsınız. Büyük turnuvalar, ödül havuzları ve sponsorluk anlaşmaları ile dolu olan bu endüstri, profesyonel oyuncular için gerçek bir kariyer fırsatı sunuyor. Aşağıdaki başlıkların detaylarını öğrenmek için takipte kalın... </p><ul class="mb-2"><li>Büyük Turnuvalar ve Büyük Ödüller</li><li>Sponsorluk ve Medya İlgi</li><li>Rekabet ve Strateji</li></ul>',
          comments: 2100,
          bookmarked: 139,
          UserComment: [
            {
              avatar: require("@/assets/images/portrait/small/avatar-s-6.jpg"),
              fullName: "Ceylin Naz",
              comment:
                "Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world.",
            },
          ],
        },
        {
          id:6,
          img: require("@/assets/images/banner/gameDetail2.jpg"),
          title: "NBA 2023 Sezonunda Göz Atılması Gerekenler",
          avatar: require("@/assets/images/avatars/Arda.jpeg"),
          userFullName: "Arda Emir Noğan",
          createdTime: "02 Eylül 2023",
          tags: ["Eglence"],
          content:
            '<p>Basketbolun en büyük sahnesi olan NBA (National Basketball Association), her yeni sezonunda heyecan verici gelişmelere sahne oluyor. 2023 sezonu da istisna değil ve hem eski hem de yeni yıldızlarla dolu. İşte bu sezon izlemeniz gereken bazı önemli noktalar:</p> <h4>1. LeBron James\'in Mirasının Sürdürülmesi</h4> <p> LeBron James, basketbol dünyasının bir efsanesi olarak kabul ediliyor. Ancak, LeBron artık kariyerinin sonlarına yaklaşıyor gibi görünüyor. Los Angeles Lakers\'ta oynamaya devam ediyor ve onun mirasını sürdürme görevi yeni nesil oyunculara düşüyor. Bu sezon, LeBron\'un liderliğindeki Lakers\'ın performansını ve genç yeteneklerin nasıl geliştiğini gözlemlemek büyük bir ilgi konusu olacak. </p> <h4>2. Brooklyn Nets ve Yıldız Üçlüsü</h4> <p>Brooklyn Nets, Kevin Durant, James Harden ve Kyrie Irving gibi süperstarlara sahip. Ancak, bu üçlü, yaralanmalar ve kişisel nedenlerle bir araya gelemiyor gibi görünüyor. Bu sezon, bu üç yıldızın birlikte sahada nasıl performans göstereceğini ve rakiplerine karşı nasıl bir tehdit oluşturacaklarını görmek için önemli bir dönem olacak.</p> ',
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
      if (tag === "Eglence") return "light-warning";
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
