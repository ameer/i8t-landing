<template>
    <section id="hero">
        <v-container class="py-16">
            <v-row justify="center">
                <v-col cols="12" md="5" class="text-center">
                    <v-alert color="warning darken-1" rounded="xl">
                        <span class="white--text text-body-1 font-weight-bold">
                            فقط تا ۲۰ اسفندماه ۱۴۰۱ زمان باقیست!
                        </span>
                    </v-alert>
                </v-col>
                <v-col cols="12" class="text-center">
                    <h1 class="text-h6 text-lg-h4 font-weight-bold">
                        گوشی موبایلت رو نقدی نخر! قسطیش کن!
                    </h1>
                    
                    <h3 class="text-body-1 text-lg-h5 mt-4 mt-lg-8">تا سقف {{ Intl.NumberFormat('fa-IR').format(creditThreshold) }} میلیون تومن از فروشگاه اینترنتی فونر خرید
                        کن!</h3>
                    <v-container fluid class="mt-4 mt-lg-12">
                        <v-row align="center" :no-gutters="$vuetify.breakpoint.mdAndUp">
                            <v-col cols="6" md="3" v-for="(feature,i) in features" :key="`feature-${i}`">
                                <v-card min-height="200" max-height="200" flat tile color="transparent" class="d-flex align-center flex-wrap squircle">
                                    <v-card-text>
                                        <v-icon size="75" color="grey lighten-3">
                                            {{`mdi-${feature.icon}`}}
                                        </v-icon>
                                        <h4 class="white--text text-body-2 text-lg-h6 font-weight-bold mt-2">
                                            {{ feature.title }}
                                        </h4>
                                        <div class="white--text text-body-2 text-lg-subtitle">
                                            {{ feature.subtitle }}
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
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
            features: [
                {
                    title: 'احراز هویت آسان',
                    subtitle: 'کارت ملی و چک صیادی',
                    icon: 'account-check-outline'
                },
                {
                    title: 'دریافت اعتبار',
                    subtitle: 'کمتر از ۴۸ ساعت',
                    icon: 'credit-card-clock-outline'
                },
                {
                    title: 'باز پرداخت منعطف',
                    subtitle: 'حتی بدون پیش‌پرداخت',
                    icon: 'cash-sync'
                },
                
                {
                    title: 'پردازش سریع',
                    subtitle: 'دریافت کالا در ۷۲ ساعت',
                    icon: 'clock-fast'
                }
            ]
        }
    },
    mounted() {
    },
}
</script>
<style>
</style>