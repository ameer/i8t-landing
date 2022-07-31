import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import fa from "vuetify/lib/locale/fa";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  treeShake: true,
  lang: {
    locales: { fa },
    current: "fa",
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#00aef0',
      }
    },
  },
});
