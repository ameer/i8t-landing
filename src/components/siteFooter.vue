<template>
  <v-footer class="mt-8 py-8">
    <v-container class="footer_list">
      <v-row>
        <v-col
          cols="6"
          md="2"
          v-for="(item, i) in menuItems"
          :key="`menu-item-${i}`"
          class=""
        >
          <div class="title_list">
            {{ item.title }}
          </div>
          <ul class="pa-0">
            <li
              v-for="(subItem, j) in item.subItems"
              :key="`menu-subItem-${j}`"
            >
              <a class="text-decoration-none" :href="subItem.href" :rel="subItem.noFollow ? 'nofollow': 'follow'">{{ subItem.title }}</a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="font-weight-bold title_list d-flex align-center">
            <v-icon color="primary" class="me-2">mdi-information</v-icon>
            ارتباط با ما
          </div>
          <div class="d-flex align-center mb-4">
            <v-icon class="me-2" size="20">mdi-map-marker</v-icon>
            <span class="text-right text-body-2">
              نشانی: تهران، خیابان مطهری، خیابان قابوسنامه، خیابان مرزبان‌نامه، پلاک ۲۷، واحد ۲
            </span>
          </div>
          <div class="d-flex align-center mb-4">
            <v-icon class="me-2" size="20">mdi-phone</v-icon>
            <span class="text-right text-body-2">
              <strong class="primary--text text--lighten-1">۰۲۱-</strong>۹۱۰۰۹۹۰۴
            </span>
          </div>
          <div class="d-flex align-center mb-4">
            <v-icon class="me-2" size="20">mdi-email-outline</v-icon>
            <span class="text-right text-body-2">
              <v-btn rounded color="#6EC1E4" small elevation="0">
                <span class="text-lowercase white--text font-weight-bold">info@phoner.ir</span>
              </v-btn>
            </span>
          </div>
        </v-col>
        <v-col cols="12" md="4">
           <div class="font-weight-bold title_list d-flex align-center">
            <v-icon color="primary" class="me-2">mdi-information</v-icon>
            نمادها
          </div>
          <a rel="nofollow" href="https://phoner.ir/contact-us/" style="border:1px solid gray;border-radius:32px;" class="text-decoration-none d-inline-block mx-2"><v-img src="https://phoner.ir/wp-content/uploads/2022/04/etehadie-footer.png" contain width="90" height="90"></v-img></a>
          <a rel="nofollow" href="https://phoner.ir/contact-us/" style="border:1px solid gray;border-radius:32px;" class="text-decoration-none d-inline-block mx-2"><v-img src="https://phoner.ir/wp-content/uploads/2022/04/Enemad-footer.png" contain width="90" height="90"></v-img></a>

        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "خدمات مشتریان",
          subItems: [
            {
              href: "https://phoner.ir/the-rules/",
              title: "قوانین و مقررات",
              noFollow: true
            },
            {
              href: "https://phoner.ir/original-product/",
              title: "ضمانت اصالت و بازگشت کالا",
              noFollow: true
            },
            {
              href: "https://phoner.ir/ravesh-pardakht/",
              title: "روش پرداخت و تحویل",
              noFollow: true
            },
            {
              href: "https://phoner.ir/optionalpeyment/",
              title: "پرداخت دلخواه",
              noFollow: true
            },
          ],
        },
        {
          title: "لینک‌های مفید",
          subItems: [
            {
              href: "https://phoner.ir/about-us/",
              title: "درباره ما",
              noFollow: true
            },
            {
              href: "https://phoner.ir/contact-us/",
              title: "تماس با ما",
              noFollow: true
            },
            {
              href: "https://help.phoner.ir/fa",
              title: "سوالات متداول",
              noFollow: true
            },
            {
              href: "https://phoner.ir/tracking/",
              title: "پیگیری مرسولات پستی",
              noFollow: true
            },
            {
              href: "https://phoner.ir/how-to-active-the-phone/",
              title: "آموزش رجیستری گوشی",
            },
          ],
        },
        {
          title: "دسترسی سریع",
          subItems: [
            {
              href: "https://phoner.ir/mobile-price-list/",
              title: "لیست قیمت روز گوشی",
            },
            {
              href: "https://phoner.ir/product-category/phone/samsung-phone/",
              title: "قیمت گوشی سامسونگ",
            },
            {
              href: "https://phoner.ir/product-category/phone/apple-phone/",
              title: "قیمت گوشی آیفون",
            },
            {
              href: "https://phoner.ir/product-category/phone/xiaomi/",
              title: "قیمت گوشی شیائومی",
            },
          ],
        },
        {
          title: "پرفروش‌ترین‌های سامسونگ",
          subItems: [
            {
              href: "https://phoner.ir/product/samsung-galaxy-a13-sm-a135f-644gb/",
              title: "گوشی A13",
            },
            {
              href: "https://phoner.ir/product/samsung-galaxy-a33-5g-sm-a336e-1286gb/",
              title: "گوشی A33",
            },
            {
              href: "https://phoner.ir/product/samsung-galaxy-a53-5g-sm-a536e-2568gb/",
              title: "گوشی A53",
            },
            {
              href: "https://phoner.ir/product/samsung-galaxy-m22-sm-m225fv-1284/",
              title: "گوشی M22",
            },
          ],
        },
        {
          title: "پرفروش‌ترین‌های آیفون",
          subItems: [
            {
              href: "https://phoner.ir/product/apple-iphone-13-256gb/",
              title: "آیفون ۱۳",
            },
            {
              href: "https://phoner.ir/product/apple-iphone-13-pro-max-512gb/",
              title: "آیفون ۱۳ پرومکس",
            },
            {
              href: "https://phoner.ir/apple-iphone-14/",
              title: "آیفون ۱۴",
            },
            {
              href: "https://phoner.ir/product/apple-iphone-se2022-5g-128gb/",
              title: "آیفون SE 2022",
            },
          ],
        },
        {
          title: "پرفروش‌ترین‌های شیائومی",
          subItems: [
            {
              href: "https://phoner.ir/product/xiaomi-redmi-note-11-5g-china-1288/",
              title: "گوشی ردمی Note 11",
            },
            {
              href: "https://phoner.ir/product/xiaomi-poco-m4-pro-644gb/",
              title: "گوشی پوکو M4",
            },
            {
              href: "https://phoner.ir/product/xiaomi-poco-x4-pro-2568gb/",
              title: "گوشی پوکو X4 پرو",
            },
            {
              href: "https://phoner.ir/product/xiaomi-12-5g-1288gb/",
              title: "گوشی شیائومی ۱۲",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>