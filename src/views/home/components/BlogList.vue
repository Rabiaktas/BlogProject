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
                style="width: 100%; height: 100%; object-fit: cover"
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
                    style="color: orange"
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
            " Sakarya'nın gözde noktalarından biri olan Kent Park, ziyaretçilerine doğanın huzur verici kollarında unutulmaz anlar yaşatıyor. Bu parkın içinde öne çıkan ve adeta bir cazibe merkezi haline gelen yerlerden biri ise Uçak Kafe. Kent Park'ın ortasında konumlanmış olan Uçak Kafe, gerçek bir uçak gövdesine dönüştürülmüş benzersiz bir mekâna sahip. Buraya adım attığınız anda, sıra dışı mimarisi ve atmosferiyle büyülenmemek imkânsız. Ziyaretçiler, bu özel kafede kendilerini bir an için gökyüzüne açılmış hissediyorlar. Parkın doğal güzellikleriyle iç içe olan kafe, açık ve iç mekanıyla her mevsimde tercih edilen bir durak olmuş durumda. Uçak Kafe'nin menüsü, lezzetli yerel tatlarla dolu. Zengin kahve çeşitleri, taze atıştırmalıklar ve sağlıklı seçenekler, ziyaretçilere keyifli bir mola imkânı sunuyor. Bu benzersiz atmosfer aynı zamanda fotoğraf meraklıları için de bir cennet. Eşsiz manzarası ve kendine özgü mimarisiyle Uçak Kafe, ziyaretçilerin bolca fotoğraf ve anı biriktirdiği bir mekân olmuş. Sakarya Kent Park, doğayla iç içe olmak isteyenler için mükemmel bir kaçış noktası sunarken, Uçak Kafe bu deneyimi lezzet ve özel bir atmosferle zenginleştiriyor. Eğer Sakarya'yı ziyaret ediyorsanız, Kent Park içindeki bu eşsiz kafeyi mutlaka keşfedin. Lezzetli atıştırmalıkların tadını çıkarırken, aynı zamanda bu büyüleyici atmosferde keyifli vakit geçireceğinizden emin olabilirsiniz.",
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
            " Sakarya'nın gözlerden uzak, doğanın sakin kollarında gizlenmiş incisi, Sopeli Doğal Yaşam Köyü, ziyaretçilerini kendine özgü bir huzur atmosferiyle karşılıyor. Her adımında doğanın melodisi eşlik ederken, köyün sunduğu deneyimler, zihni ve ruhu dinginliğe davet ediyor. Ziyaretçilerini ahşap bungalovlarıyla selamlayan köy, çevreye duyarlı bir yaklaşımla doğayla uyumlu bir mimari sunuyor. Her bir bungalov, ağaçların arasında adeta birer doğal sığınak gibi konumlanmış. Gün doğumu ve gün batımı, bu muazzam yapıların içinde unutulmaz anılar biriktiriyor. Sopeli, sadece bir konaklama yeri değil, aynı zamanda doğayla etkileşimde olma şansı sunuyor.Köydeki restoranlar, yöresel lezzetlerin sunulduğu noktalar. Organik ürünlerle hazırlanan yöresel yemekler, damaklarda iz bırakan tatlar bırakıyor. Açık hava piknik alanları ise doğanın içinde keyifli molalar için ideal bir ortam sunuyor.</p> <p>Sopeli, sadece doğa tutkunları için değil, aynı zamanda kültürel deneyim arayışındakiler için de bir hazinedir. Yöresel el sanatları atölyeleri, ziyaretçilere yerel kültürü yakından tanıma şansı sunar. Yöresel zanaatkarlarla bir araya gelmek, geleneksel el işlerini deneyimlemek ise bambaşka bir tat katıyor ziyaretlere. Sopeli Doğal Yaşam Köyü, şehrin gürültüsünden uzaklaşıp doğayla bütünleşmek isteyenler için bir kaçış noktası. Doğanın kalbinde birkaç gün geçirerek, hayatın karmaşasından uzaklaşmak ve içsel yolculuğa çıkmak isteyenler için vazgeçilmez bir durak.",
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
            " Sakarya Üniversitesi, Türkiye'nin önde gelen yüksek öğretim kurumlarından biridir. 1982 yılında kurulan üniversite, Sakarya ilinde bulunmaktadır. Geniş bir kampüs alanına sahip olan üniversite, çeşitli fakülte, yüksekokul ve enstitülerden oluşur. Mühendislik, sosyal bilimler, sağlık bilimleri, fen bilimleri, iletişim ve işletme gibi birçok alanda lisans, yüksek lisans ve doktora programları sunar. Sakarya Üniversitesi, akademik başarılarıyla öne çıkmakla birlikte, araştırma ve geliştirme faaliyetleri ile de tanınır. Sakarya Üniversitesi, sadece akademik başarılarıyla değil aynı zamanda zengin sosyal yaşamıyla da öne çıkan bir kampüse sahiptir. Öğrencilerin eğitimlerini tamamlarken bir yandan da gençliklerini renklendirecek etkinlikler ve imkanlar sunan bu kampüs, dinamik yapısıyla her öğrenciye unutulmaz anılar biriktirme fırsatı sunar. Sakarya Üniversitesi, geniş kampüs alanıyla öğrencilere çeşitli olanaklar sunar. Modern kütüphaneler, geniş spor tesisleri, öğrenci kulüpleri için ayrılmış alanlar ve dinlenme noktaları gibi pek çok alan, öğrencilerin derslerin dışında da kendilerini geliştirebilecekleri birçok imkânı beraberinde getirir. Ayrıca, kampüs içinde bulunan kafeler ve restoranlar, öğrencilere sosyal etkileşim için harika mekanlar sunar. </p> <p>Sakarya Üniversitesi, öğrencilerin akademik hayatlarının yanı sıra sosyal olarak da aktif olabilecekleri birçok etkinliğe ev sahipliği yapar. Öğrenci kulüpleri tarafından düzenlenen etkinlikler, konferanslar, paneller, konserler ve tiyatro gösterileri gibi birçok kültürel etkinlik, öğrencilerin ilgi alanlarına göre kendilerini geliştirmelerini sağlar. Ayrıca, spor turnuvaları, fitness kursları ve açık hava etkinlikleri gibi aktiviteler de öğrencilerin dinlenme ve spor yapma imkânı sunar.</p> <p>Sakarya Üniversitesi'nin en güzel yanlarından biri de öğrenciler arasındaki dayanışma ve topluluk ruhudur. Farklı kültürlerden gelen öğrenciler, ortak etkinliklerde buluşarak birbirlerini tanır ve farklı bakış açılarıyla zenginleşirler. Bu sayede kampüs, sadece eğitim değil aynı zamanda dostluklar ve uzun ömürlü bağlar kurma fırsatı sunar. Sakarya Üniversitesi kampüsü, akademik anlamda olduğu kadar sosyal açıdan da zengin bir deneyim sunar. Öğrenciler, eğitim hayatlarının yanı sıra çeşitli etkinliklere katılarak kendilerini geliştirir ve unutulmaz anılarla dolu bir üniversite yaşamı geçirme şansı bulurlar. ",
        },
        {
          id: 1,
          img: require("@/assets/images/allPost/welcome.gif"),
          title: "LifeSakarya'ya Hoş Geldiniz!",
          avatar: require("@/assets/images/avatars/rabiaa.jpeg"),
          userFullName: "Rabia || Çağla",
          blogPosted: " 14.11.2023",
          tags: ["Trend"],
          tabs: "trend",
          excerpt:
            "Sakarya'nın kalbinde bir soluklanma noktasına hoş geldiniz. LifeSakarya, bu şehrin nefes kesen güzelliklerini, tarih kokan sokaklarını ve keşfedilmeyi bekleyen sırlarını keşfetmek için bir rehberdir. Bizler, bu eşsiz coğrafyanın içinde kaybolmaya hazır, maceraperest ruhları bir araya getiren bir topluluğuz.",
        },
      ],
    };
  },
  created() {},
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
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@200&display=swap");

.fontCard {
  font-family: "Prompt", sans-serif;
}
.color {
  color: black !important;
}
</style>

<style lang="scss">
@import "@core/scss/vue/pages/page-blog.scss";
</style>
