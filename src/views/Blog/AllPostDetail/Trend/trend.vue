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
          id: 2,
          img: require("@/assets/images/banner/SapancaUgurlu.jpg"),
          title: "Sapancanın Tatlı Sürprizi: Uğurlu Dükkan",
          avatar: require("@/assets/images/avatars/caglaa.jpg"),
          userFullName: "Çağla Düdükçü",
          createdTime: "15.11.2023",
          tags: ["Trend",],
          tabs: "Trend",
          content:
            " <p>Bugün, kısa bir kaçamak için Sapancayı tercih ettim ve şanslı dükkan, benim ilk durağım oldu. Bu mekan, masalsı bir atmosferi, neşeli bir ortamı ve tatlı bir ruhuyla dikkat çekiyor. İçeri adım attığınız anda sizi sıcak bir atmosfer karşılıyor.</p> <p>Uğurlu Dükkan, el yapımı ürünleriyle meşhur. Mekanın içinde birbirinden güzel el yapımı ürünler sergileniyor. Göz alıcı tasarımları ve özenle hazırlanmış ürünleriyle dikkat çekiyorlar. Bu mekan, sadece lezzetleriyle değil, aynı zamanda görsel olarak da keyif veriyor. </p> <p> Özellikle tatlıları beni etkiledi. Her biri özenle hazırlanmış, müthiş lezzetli tatlılar mevcut. Bu lezzet şöleni, damak zevkime hitap etti ve gerçekten mükemmeldi. Ayrıca, mekanın genel atmosferi de çok hoştu. Oturmak ve zaman geçirmekten keyif aldığım bir yer haline geldi. </p> <p> Bu mekan, sadece yemek yemek için değil, aynı zamanda kahvaltı yapmak veya beş çayı için de harika bir tercih. İdeal bir buluşma noktası ve Sapancaya her geldiğimde tekrar ziyaret etmek isteyeceğim bir yer haline geldi. Uğurlu Dükkan, Sapancanın güzelliklerine bir lezzet daha katıyor. </p> ",
        },
      {
          id: 1,
          img: require("@/assets/images/banner/welcome1.gif"),
          title: "LifeSakarya'ya Hoş Geldiniz!",
          avatar: require("@/assets/images/avatars/rabiaa.jpeg"),
          userFullName: "Rabia Aktaş || Çağla Düdükçü",
          createdTime: "14.11.2023",
          tags: ["Trend"],
          tabs: "Trend",
          content:
            " <p>Sakarya'nın kalbinde bir soluklanma noktasına hoş geldiniz. LifeSakarya, bu şehrin nefes kesen güzelliklerini, tarih kokan sokaklarını ve keşfedilmeyi bekleyen sırlarını keşfetmek için bir rehberdir. Bizler, bu eşsiz coğrafyanın içinde kaybolmaya hazır, maceraperest ruhları bir araya getiren bir topluluğuz. Sakarya, sadece doğal güzellikleriyle değil, aynı zamanda zengin tarihi ile de büyüleyici bir yer. Burada, Osmanlı'nın izlerini, geleneksel el sanatlarını ve modern yaşamın uyumunu bir arada bulabilirsiniz.</p> <p> LifeSakarya, bu zengin kültürel mirası ve günümüzün dinamik atmosferini sizlere sunmayı amaçlıyor. Gezmeyi sevenler için Sakarya'nın dört bir yanındaki huzurlu parkları, tarihi mekanları ve lezzet duraklarını keşfetmek heyecan verici olacak. LifeSakarya olarak, bu şehrin gizli kalmış noktalarını sizinle paylaşacak, unutulmaz anılara ev sahipliği yapacak ve her zevke hitap eden bir deneyim sunacağız. Bu blog, Sakarya'nın her köşesini kucaklamayı ve bu benzersiz şehri ziyaret edenlerin kalplerinde bir iz bırakmayı hedeflemektedir.</p> <p> Siz de bu yolculukta bize katılın, Sakarya'nın yaşam dolu dünyasını keşfedin, sıradışı yerleri ziyaret edin ve bu serüvene ortak olun. Hayatın ritmini Sakarya'nın kucaklayıcı atmosferinde hissetmeye hazır mısınız? O zaman, LifeSakarya ile birlikte bu keşif yolculuğuna çıkın!</p> <p> Keyifli okumalar ve keşifler dileriz! </p> ",
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
