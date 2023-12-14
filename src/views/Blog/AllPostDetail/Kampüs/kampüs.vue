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
          class="bg-transparent"
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
                <b-link class="text-body">{{ blog.userFullName }}</b-link>
              </small>
              <span class="text-muted ml-75 mr-50">|</span>
              <small class="text-muted">{{ blog.createdTime }}</small>
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
          <b-media v-for="user in blog.UserComment" :key="user.avatar" no-body>
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
      blogDetail: [
      {
          id: 4,
          img: require("@/assets/images/banner/blogDetail3.jpeg"),
          title: "Sakarya Üniversitesi Kampüsü: Eğitimdeki Renkli Durağınız",
          avatar: require("@/assets/images/avatars/caglaa.jpg"),
          userFullName: "Çağla Düdükçü",
          createdTime: "23.11.2023",
          tags: ["Kampüs",],
          tabs: "kampüs",
          content:
            " <p> Sakarya Üniversitesi, Türkiye'nin önde gelen yüksek öğretim kurumlarından biridir. 1982 yılında kurulan üniversite, Sakarya ilinde bulunmaktadır. Geniş bir kampüs alanına sahip olan üniversite, çeşitli fakülte, yüksekokul ve enstitülerden oluşur. Mühendislik, sosyal bilimler, sağlık bilimleri, fen bilimleri, iletişim ve işletme gibi birçok alanda lisans, yüksek lisans ve doktora programları sunar. Sakarya Üniversitesi, akademik başarılarıyla öne çıkmakla birlikte, araştırma ve geliştirme faaliyetleri ile de tanınır. </p> <p>Sakarya Üniversitesi, sadece akademik başarılarıyla değil aynı zamanda zengin sosyal yaşamıyla da öne çıkan bir kampüse sahiptir. Öğrencilerin eğitimlerini tamamlarken bir yandan da gençliklerini renklendirecek etkinlikler ve imkanlar sunan bu kampüs, dinamik yapısıyla her öğrenciye unutulmaz anılar biriktirme fırsatı sunar. Sakarya Üniversitesi, geniş kampüs alanıyla öğrencilere çeşitli olanaklar sunar. Modern kütüphaneler, geniş spor tesisleri, öğrenci kulüpleri için ayrılmış alanlar ve dinlenme noktaları gibi pek çok alan, öğrencilerin derslerin dışında da kendilerini geliştirebilecekleri birçok imkânı beraberinde getirir. Ayrıca, kampüs içinde bulunan kafeler ve restoranlar, öğrencilere sosyal etkileşim için harika mekanlar sunar. </p> <p>Sakarya Üniversitesi, öğrencilerin akademik hayatlarının yanı sıra sosyal olarak da aktif olabilecekleri birçok etkinliğe ev sahipliği yapar. Öğrenci kulüpleri tarafından düzenlenen etkinlikler, konferanslar, paneller, konserler ve tiyatro gösterileri gibi birçok kültürel etkinlik, öğrencilerin ilgi alanlarına göre kendilerini geliştirmelerini sağlar. Ayrıca, spor turnuvaları, fitness kursları ve açık hava etkinlikleri gibi aktiviteler de öğrencilerin dinlenme ve spor yapma imkânı sunar.</p> <p>Sakarya Üniversitesi'nin en güzel yanlarından biri de öğrenciler arasındaki dayanışma ve topluluk ruhudur. Farklı kültürlerden gelen öğrenciler, ortak etkinliklerde buluşarak birbirlerini tanır ve farklı bakış açılarıyla zenginleşirler. Bu sayede kampüs, sadece eğitim değil aynı zamanda dostluklar ve uzun ömürlü bağlar kurma fırsatı sunar. Sakarya Üniversitesi kampüsü, akademik anlamda olduğu kadar sosyal açıdan da zengin bir deneyim sunar. Öğrenciler, eğitim hayatlarının yanı sıra çeşitli etkinliklere katılarak kendilerini geliştirir ve unutulmaz anılarla dolu bir üniversite yaşamı geçirme şansı bulurlar. ",
        },
      ],
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
