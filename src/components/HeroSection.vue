<template>
    <section id="hero">
        <v-container class="py-16">
            <v-row justify="center">
                <v-col cols="12" sm="6" lg="auto" class="text-center">
                    <h1 class="text-h6 text-lg-h4 font-weight-bold">
                        نقدی نخر! قسطیش کن!
                    </h1>
                    <h3 class="text-body-1 text-lg-h5 mt-4 mt-lg-8">تا سقف ۳۰ میلیون تومن از فروشگاه اینترنتی فونر خرید
                        کن!</h3>
                    <v-container fluid class="mt-4 mt-lg-12">
                        <v-row align="center">
                            <v-col cols="12" md="4" v-for="card in 3" :key="card">
                                <v-card min-height="150" flat tile color="transparent" class="d-flex align-center squircle">
                                    <v-card-text>
                                        <h4 class="white--text text-body-1 text-lg-h6 font-weight-bold">
                                            ویژگی {{ card }}
                                        </h4>
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
    mounted() {
    },
}
</script>
<style>
</style>