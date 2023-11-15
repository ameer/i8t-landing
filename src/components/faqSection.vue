<template>
  <section id="faq">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="9" class="">
          <div class="text-center">
            <h3 class="text-body-1 text-lg-h5 font-weight-bold">
              سوالات متداول
            </h3>
            <div class="text-body-2 text-lg-body-1 mb-4 mb-lg-8">
              خرید اقساطی از فونر
            </div>
          </div>
          <v-expansion-panels accordion>
            <v-expansion-panel
              v-for="(item, i) in faqItems"
              :key="`faq-item-${i}`"
            >
              <v-expansion-panel-header class="font-weight-bold">{{
                item.question
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.answer }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  props: {
      creditThreshold: {
        type: String,
        default: "20"
      }  
    },
  data() {
    return {
      
    };
  },
  computed: {
    faqItems() {
      return [
        {
          question: "شرایط خرید اقساطی گوشی از فروشگاه فونر چیست؟",
          answer:
            "احراز هویت با کارت ملی و داشتن چک صیادی! فقط همین ، به همین سادگی",
        },
        {
          question: "حداقل و حداکثر میزان خرید اقساطی چقدر است؟",
          answer:
            `حداقلی در خرید در نظر گرفته نشده است اما حداکثر اعتبار برای خرید موبایل به صورت اقساط مبلغ ${this.creditThreshold} میلیون تومان میباشد. ( در صورت مبلغ بالاتر، اختلاف به صورت پیش پرداخت دریافت میگردد)`,
        },
        {
          question: "بازپرداخت اقساط به چه صورت محاسبه می‌شود؟",
          answer:
            "با توجه به مبلغ سفارش و مقدار پیش پرداخت با محاسبه گر اقساط که بسیار منعطف میباشد میتوانید مبلغ اقساط و تعداد آن را محاسبه و قبل از خرید از آن مطلع شوید.",
        },
        {
          question: "آیا برای خرید اقساطی نیاز به ضامن و سفته است؟",
          answer:
            "خیر بدون نیاز به ضامن و سفته فقط با بررسی کد ملی مشتری و چک صیادی اعتبار اقساطی به شما تخصیص می‌یابد.",
        },
        {
          question: "آیا برای دریافت اعتبار اقساطی نیاز به بررسی حساب بانکی می‌باشد؟",
          answer:
            "خیر، بدون نیاز به ریز حساب و شماره حساب بانکی شما این اعتبار به شما تخصیص می‌یابد.",
        },
        {
          question: "آیا قبل از دریافت اعتبار اقساطی نیاز به عقد قرار داد می‌باشد؟",
          answer:
            "خیر، عقد قرارداد بعد از اتمام مراحل خرید، زمان تحویل چک و سفارش مورد نظر انجام می‌پذیرد.",
        },
        {
          question: "آیا خرید اقساطی برای خارج از تهران امکان‌پذیر است؟",
          answer:
            "بله، بعد از مراحل خرید و بارگذاری چک‌ها و تایید فونر، قرارداد برای شما ارسال می‌گردد. پس از امضای قرارداد در دو نسخه، شما بایستی چک‌ها و قرارداد را برای ما ارسال نمایید. پس از دریافت چک‌ها، محصول برای شما ارسال خواهد شد.",
        },
      ]
    }
  },
};
</script>
<style>
</style>