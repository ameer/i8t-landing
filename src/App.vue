<template>
  <v-app>
    <v-app-bar app flat color="white" class="header-box-shadow">
      <div class="d-flex align-center">
        <v-img alt="لوگوی فونر" class="mr-2" contain src="img/phoner.ir-logo.png" transition="scale-transition"
          width="128" />
      </div>
      <v-spacer></v-spacer>
      <v-btn :href="item.href" text v-for="(item, i) in menuItems" :key="`menu-items-${i}`">
        {{ item.text }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <HeroSection />
      <!-- <FaqSection /> -->
      <StepsSection />
      <CalcSection />
    </v-main>
  </v-app>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import FaqSection from './components/faqSection.vue';
import CalcSection from './components/calcSection.vue';
import StepsSection from './components/stepsSection.vue';


export default {
  name: 'App',

  components: {
    HeroSection,
    // eslint-disable-next-line vue/no-unused-components
    FaqSection,
    CalcSection,
    StepsSection
},

  data: () => ({
    menuItems: [
      // {
      //   text: 'سوالات متداول',
      //   icon: 'help',
      //   href: '#faq'
      // },
      {
        text: 'ماشین حساب',
        icon: 'person',
        href: '#calc'
      }
    ]
  }),
  mounted() {

  },
};
</script>
