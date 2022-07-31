<template>
    <section id="hero">
        <v-container class="py-16">
            <v-row justify="center">
                <v-col cols="12" sm="9" lg="auto" class="text-center">
                    <h1 class="text-h6 text-lg-h4 font-weight-bold">
                        گوشی موبایلت رو نقدی نخر! قسطیش کن!
                    </h1>
                    <h3 class="text-body-1 text-lg-h5 mt-4 mt-lg-8">تا سقف ۳۰ میلیون تومن از فروشگاه اینترنتی فونر خرید
                        کن!</h3>
                    <v-container fluid class="mt-4 mt-lg-12">
                        <v-row align="center">
                            <v-col cols="12" md="4" v-for="(feature,i) in features" :key="`feature-${i}`">
                                <v-card min-height="266" flat tile color="transparent" class="d-flex align-center flex-wrap squircle">
                                    <v-card-text>
                                        <v-icon size="75" color="grey lighten-3">
                                            {{`mdi-${feature.icon}`}}
                                        </v-icon>
                                        <h4 class="white--text text-body-1 text-lg-h6 font-weight-bold mt-2">
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
    data() {
        return {
            features: [
                {
                    title: 'احراز هویت آسان',
                    subtitle: 'کارت ملی و چک صیادی',
                    icon: 'account-check-outline'
                },
                {
                    title: 'باز پرداخت منعطف',
                    subtitle: 'حتی بدون پیش‌پرداخت',
                    icon: 'cash-sync'
                },
                {
                    title: 'پردازش سریع',
                    subtitle: 'پیمودن مراحل و دریافت سریع کالا',
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