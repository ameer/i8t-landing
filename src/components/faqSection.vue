<template>
    <section id="faq">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="6" lg="auto" class="text-center">
                    <h3 class="text-body-1 text-lg-h5 font-weight-bold">
                        سوالات متداول
                    </h3>
                    <div class="text-body-2 text-lg-body-1 mb-4 mb-lg-8">
                        خرید اقساطی از فونر
                    </div>
                    <v-expansion-panels accordion>
                    <v-expansion-panel v-for="(item, i) in 5" :key="i">
                        <v-expansion-panel-header class="font-weight-bold">سوال متداول {{ i }} به چه صورت است؟</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
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

}
</script>
<style>
</style>