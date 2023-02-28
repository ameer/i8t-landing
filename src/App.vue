<template>
  <v-app>
    <v-app-bar app flat color="white" class="header-box-shadow">
      <v-container>
        <v-row align="center">
          <div class="d-flex align-center">
            <a href="https://phoner.ir" target="_blank">
              <v-img alt="لوگوی فونر" class="mr-2" contain src="img/phoner.ir-logo.png" transition="scale-transition"
                width="128" />
            </a>
          </div>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon class="d-block d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-btn class="mx-2 d-none d-md-flex" @click="item.newTab ? '':$vuetify.goTo(item.href)" :href="item.href" :target="item.newTab ? '_blank' : ''" text
            v-for="(item, i) in menuItems" :key="`menu-items-${i}`">
            {{ item.text }}
          </v-btn>
          <v-divider vertical class="me-4"></v-divider>
          <v-btn class="rounded-lg" color="primary darken-2" href="https://phoner.ir/installment-purchase-profile/" target="_blank">
            <span class="text-body-2 font-weight-bold">دریافت اعتبار</span>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed bottom right height="auto">
      <v-list nav class="text-center">
        <v-list-item-group>
          <v-list-item :href="item.href" @click="item.newTab ? '':$vuetify.goTo(item.href)" :target="item.newTab ? '_blank' : ''" v-for="(item, i) in menuItems"
            :key="`side-menu-items-${i}`">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <HeroSection :credit-threshold="config.creditThreshold" />
      <RequestProduct />
      <FaqSection />
      <StepsSection />
      <call-to-action />
      <CalcSection :number-of-installment="config.numberOfInstallment" :payment-method="config.paymentMethod" />
      <phoner-desc />
      <site-footer />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import HeroSection from "./components/HeroSection.vue";
import FaqSection from "./components/faqSection.vue";
import CalcSection from "./components/calcSection.vue";
import StepsSection from "./components/stepsSection.vue";
import PhonerDesc from "./components/phonerDesc.vue";
import CallToAction from "./components/callToAction.vue";
import SiteFooter from "./components/siteFooter.vue";
import RequestProduct from "./components/requestProduct.vue";

export default {
  name: "App",

  components: {
    HeroSection,
    // eslint-disable-next-line vue/no-unused-components
    FaqSection,
    CalcSection,
    StepsSection,
    PhonerDesc,
    CallToAction,
    SiteFooter,
    RequestProduct
},

  data: () => ({
    drawer: false,
    config: {
      creditThreshold: '20',
      paymentMethod: [
            {
              text: "هر ماه یک چک",
              value: "1",
            },
            {
              text: "هر دو ماه یک چک",
              value: "2",
            },
            {
              text: "هر سه ماه یک چک",
              value: "3",
            }
          ],
      numberOfInstallment: '6'   
    },
    menuItems: [
      {
        text: "محصولات",
        icon: "help",
        href: "https://phoner.ir/product-category/phone/",
        newTab: true,
      },
      {
        text: "سوالات متداول",
        icon: "help",
        href: "#faq",
      },
      {
        text: "ماشین حساب",
        icon: "person",
        href: "#calc",
      },
    ],
  }),
  mounted () {
    this.getConfigFromSite()
  },
  methods: {
    getConfigFromSite(){
      const url = window.location.origin + "/i8t-api.php";
      // const url = 'http://localhost/i8t-api.php'
      axios
        .get(url)
        .then((response) => {
          this.config = response.data.data;
        })
        .catch((error) => {
          alert(error.response.data.data.error);
        });
    }
  },
};
</script>
