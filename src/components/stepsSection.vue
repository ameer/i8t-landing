<template>
    <section id="steps">
        <v-container class="py-16 px-md-12">
            <v-row align="stretch" justify="center">
                <v-col cols="12" sm="6" md="3" v-for="(step, j) in stepsList" :key="`step-${j}`" class="px-8">
                    <v-card rounded="xl" color="" class="h-100" min-height="200">
                        <v-card-title class="justify-center pt-0 primary">
                           <v-chip class="faNum tile" color="primary darken-3" text-color="white" large label>
                             مرحله {{ j + 1 }}
                           </v-chip>
                        </v-card-title>
                        <v-card-text class="text-center">
                            <h4 class="text-h6 font-weight-bold mt-2">
                                {{ step.title }}
                            </h4>
                            <div class="mt-2 text-body-1">
                                {{ step.subtitle }}
                            </div>
                        </v-card-text>
                    </v-card>
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
    computed: {
        stepsList(){ 
            return [
                {
                    title: 'اعتبارسنجی',
                    subtitle: 'شما عکس کارت ملی و یک برگ چک صیادی را برای ما بارگذاری می‌کنید.'
                },
                // {
                //     title: 'تایید مدارک',
                //     subtitle: 'مدارک شما توسط همکاران ما بررسی و تایید می‌شوند.'
                // },
                {
                    title: 'دریافت اعتبار',
                    subtitle: `مبلغ ${this.creditThreshold} میلیون تومان در حساب کاربری شما ثبت می‌شود.`
                },
                {
                    title: 'خرید محصول',
                    subtitle: 'شما محصول موردنظرتان را از سایت فونر با اعتبار اقساطی می‌خرید.'
                },
                // {
                //     title: 'بارگذاری چک‌ها',
                //     subtitle: 'شرایط اقساط را تعیین و چک‌های لازم را بارگذاری می‌کنید.'
                // },
                {
                    title: 'تایید چک‌ها',
                    subtitle: 'همکاران ما برای تحویل حضوری محصول و چک‌ها با شما تماس می‌گیرند.'
                }
            ]
        }
    },
}
</script>
<style>
</style>