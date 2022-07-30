<template>
  <v-app>
    <v-app-bar app flat color="white" class="header-box-shadow">
      <div class="d-flex align-center">
        <v-img alt="لوگوی فونر" class="mr-2" contain src="/img/phoner.ir-logo.png" transition="scale-transition"
          width="128" />
      </div>
      <v-spacer></v-spacer>
      <v-btn text v-for="(item, i) in menuItems" :key="`menu-items-${i}`">
        {{ item.text }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <HeroSection />
      <FaqSection />
    </v-main>
  </v-app>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import FaqSection from './components/faqSection.vue';


export default {
  name: 'App',

  components: {
    HeroSection,
    FaqSection
  },

  data: () => ({
    menuItems: [
      {
        text: 'خانه',
        icon: 'home',
        href: '/'
      },
      {
        text: 'درباره ما',
        icon: 'info',
        href: '/about'
      },
      {
        text: 'تماس با ما',
        icon: 'phone',
        href: '/contact'
      },
      {
        text: 'سوالات متداول',
        icon: 'help',
        href: '/faq'
      },
      {
        text: 'ورود',
        icon: 'person',
        href: '/login'
      },
      {
        text: 'ثبت نام',
        icon: 'person_add',
        href: '/register'
      }
    ]
  }),
  mounted() {

  },
};
</script>
