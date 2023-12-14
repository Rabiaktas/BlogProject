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
      commentCheckmark: "",
      blogDetail: [
      {
          id: 6,
          img: require("@/assets/images/banner/blogDetail.4.jpg"),
          title:
            "Sakarya Kent Park ve Uçak Kafe: Doğanın İçinde Eşsiz Bir Mekân",
          avatar: require("@/assets/images/avatars/caglaa.jpg"),
          userFullName: "Çağla Düdükçü",
          createdTime: "01.12.2023",
          tags: ["Sakarya"],
          tabs: "sakarya",
          content:
            "<p>  Sakarya'nın gözde noktalarından biri olan Kent Park, ziyaretçilerine doğanın huzur verici kollarında unutulmaz anlar yaşatıyor. Bu parkın içinde öne çıkan ve adeta bir cazibe merkezi haline gelen yerlerden biri ise Uçak Kafe.</p> <p>  Kent Park'ın ortasında konumlanmış olan Uçak Kafe, gerçek bir uçak gövdesine dönüştürülmüş benzersiz bir mekâna sahip. Buraya adım attığınız anda, sıra dışı mimarisi ve atmosferiyle büyülenmemek imkânsız.</p> <p>  Ziyaretçiler, bu özel kafede kendilerini bir an için gökyüzüne açılmış hissediyorlar. Parkın doğal güzellikleriyle iç içe olan kafe, açık ve iç mekanıyla her mevsimde tercih edilen bir durak olmuş durumda.</p> <p>  Uçak Kafe'nin menüsü, lezzetli yerel tatlarla dolu. Zengin kahve çeşitleri, taze atıştırmalıklar ve sağlıklı seçenekler, ziyaretçilere keyifli bir mola imkânı sunuyor. Bu benzersiz atmosfer aynı zamanda fotoğraf meraklıları için de bir cennet. Eşsiz manzarası ve kendine özgü mimarisiyle Uçak Kafe, ziyaretçilerin bolca fotoğraf ve anı biriktirdiği bir mekân olmuş.</p> <p>  Sakarya Kent Park, doğayla iç içe olmak isteyenler için mükemmel bir kaçış noktası sunarken, Uçak Kafe bu deneyimi lezzet ve özel bir atmosferle zenginleştiriyor.</p> <p>  Eğer Sakarya'yı ziyaret ediyorsanız, Kent Park içindeki bu eşsiz kafeyi mutlaka keşfedin. Lezzetli atıştırmalıkların tadını çıkarırken, aynı zamanda bu büyüleyici atmosferde keyifli vakit geçireceğinizden emin olabilirsiniz.</p> ",
        },
        {
          id: 5,
          img: require("@/assets/images/banner/blogDetail2.jpeg"),
          title:
            "Sopeli Doğal Yaşam Köyü: Şehrin Karmaşasından Uzakta Doğayla Buluşma Adresi",
          avatar: require("@/assets/images/avatars/caglaa.jpg"),
          userFullName: "Çağla Düdükçü",
          createdTime: "26.11.2023",
          tags: ["Sakarya"],
          tabs: "sakarya",
          content:
            " <p> Sakarya'nın gözlerden uzak, doğanın sakin kollarında gizlenmiş incisi, Sopeli Doğal Yaşam Köyü, ziyaretçilerini kendine özgü bir huzur atmosferiyle karşılıyor. Her adımında doğanın melodisi eşlik ederken, köyün sunduğu deneyimler, zihni ve ruhu dinginliğe davet ediyor.</p> <p>Ziyaretçilerini ahşap bungalovlarıyla selamlayan köy, çevreye duyarlı bir yaklaşımla doğayla uyumlu bir mimari sunuyor. Her bir bungalov, ağaçların arasında adeta birer doğal sığınak gibi konumlanmış. Gün doğumu ve gün batımı, bu muazzam yapıların içinde unutulmaz anılar biriktiriyor.</p> <p>Sopeli, sadece bir konaklama yeri değil, aynı zamanda doğayla etkileşimde olma şansı sunuyor.Köydeki restoranlar, yöresel lezzetlerin sunulduğu noktalar. Organik ürünlerle hazırlanan yöresel yemekler, damaklarda iz bırakan tatlar bırakıyor. Açık hava piknik alanları ise doğanın içinde keyifli molalar için ideal bir ortam sunuyor.</p> <p>Sopeli, sadece doğa tutkunları için değil, aynı zamanda kültürel deneyim arayışındakiler için de bir hazinedir. Yöresel el sanatları atölyeleri, ziyaretçilere yerel kültürü yakından tanıma şansı sunar. Yöresel zanaatkarlarla bir araya gelmek, geleneksel el işlerini deneyimlemek ise bambaşka bir tat katıyor ziyaretlere.</p> <p> Sopeli Doğal Yaşam Köyü, şehrin gürültüsünden uzaklaşıp doğayla bütünleşmek isteyenler için bir kaçış noktası. Doğanın kalbinde birkaç gün geçirerek, hayatın karmaşasından uzaklaşmak ve içsel yolculuğa çıkmak isteyenler için vazgeçilmez bir durak.</p> ",
        },
        {
          id: 3,
          img: require("@/assets/images/banner/blogDetail.2.jpg"),
          title: "Sessizliğin ve Doğanın Buluştuğu Nokta: Serdivan Gölpark",
          avatar: require("@/assets/images/avatars/caglaa.jpg"),
          userFullName: "Çağla Düdükçü",
          createdTime: "18.11.2023",
          tags: ["Sakarya"],
          tabs: "sakarya",
          content:
            " <p> Yolculuklar, insanı beklenmedik yerlere sürükleyebilir. Sakarya'nın gizemli köşelerinden biri olan Serdivan Gölpark, doğayla iç içe unutulmaz bir deneyim sunuyor. Bu park, ziyaretçilerine sessizliğin ve doğanın büyüsünü yaşatıyor. </p> <p>Parkın göl kenarındaki yolculuğu, doğanın yumuşak dokunuşlarıyla başlıyor. Yeşilin her tonunu bünyesinde barındıran bu park, adeta doğanın kalbinin attığı bir yer gibi hissettiriyor. Yürüyüş yolları, ağaç gölgeleriyle dans ederken, insanı doğanın ritmiyle bütünleştiren bir atmosfer sunuyor. </p> <p>Parktaki göl, sakinliği ve huzuruyla ziyaretçilere adeta bir terapi sunuyor. Kuğuların görsel bir şölen yarattığı bu doğal alanda, suyun yüzeyinde yansıyan manzara gözleri kamaştırıyor. Gözler kapatıldığında duyulan doğanın melodiye dönüşmüş hali, ruhu derinden etkiliyor. </p> <p>Dinlenme alanları, şehrin gürültüsünden kaçıp doğayla bütünleşmek isteyenler için adeta bir sığınak. Burada zamanın akışını unutmak ve içsel bir yolculuğa çıkmak mümkün.</p> <p> Serdivan Gölpark'ın huzur veren atmosferi ve doğanın dinginliği, ziyaretçilerini şehir hayatının stresinden uzaklaştırıp ruhlarını besliyor. Doğanın ve sessizliğin bu kucaklaştığı nokta, birçok insan için unutulmaz bir kaçış noktası olmayı başarıyor. </p> ",
        },
      ],
    };
  },

  methods: {
    kFormatter,
    tagsColor(tag) {
      if (tag === "Kampüs") return "light-info";
      if (tag === "Sakarya") return "light-warning";
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
