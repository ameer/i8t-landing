<template>
    <section id="calc" class="my-6 my-md-12">
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="9">
                    <v-form ref="calcForm" @submit.prevent="calculate" v-model="valid">
                        <v-card class="header-box-shadow" rounded="lg" min-height="500">
                            <v-card-title class="text-h5 font-weight-bold">
                                محاسبه‌گر اقساط
                            </v-card-title>
                            <v-divider class="py-4"></v-divider>
                            <v-card-text>
                                <v-container fluid>
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <template v-for="(field, i) in fields">
                                                <v-text-field v-if="field.type === 'text'" :key="`calc-field-${i}`"
                                                    outlined v-model="field.value" :label="field.label"
                                                    :hint="num2persian(field.value, true)" class="faNum mb-4"
                                                    :name="field.name" required :rules="field.rules">
                                                    <template v-slot:append>
                                                        <svg style="width: 24px; height: 24px; fill: #424750;">
                                                            <use xlink:href="#toman"></use>
                                                        </svg>
                                                    </template>
                                                </v-text-field>
                                                <v-select v-else class="mb-4" :class="field.faNum ? 'faNum' : ''"
                                                    :key="`calc-select-${i}`" outlined v-model="field.value"
                                                    :items="field.items" :label="field.label" :name="field.name"
                                                    required :rules="field.rules"></v-select>
                                            </template>
                                            <v-btn :loading="loading" :disabled="!valid" color="success" type="submit"
                                                x-large block> <span class="font-weight-regular text-h6">محاسبه
                                                    اقساط</span> </v-btn>
                                        </v-col>
                                        <v-col cols="12" sm="6"></v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {
    data() {
        const rules = {
            required: (v) => !!v || "این فیلد الزامی است",
        };
        return {
            fields: [
                {
                    name: "orderSubtotal",
                    label: "مبلغ کل سفارش",
                    type: "text",
                    required: true,
                    value: "0",
                    num2Persian: true,
                    rules: [rules.required],
                },
                {
                    // This object should always be the second one in the array
                    name: "prePayment",
                    label: "پیش پرداخت نقدی",
                    type: "text",
                    required: true,
                    value: "0",
                    num2Persian: true,
                    rules: [rules.required],
                },
                {
                    name: "paymentMethod",
                    label: "شیوه پرداخت",
                    type: "select",
                    required: true,
                    items: [
                        {
                            text: "هر ماه یک چک",
                            value: "1",
                        },
                        {
                            text: "هر دو ماه یک چک",
                            value: "2",
                        },
                        {
                            text: "هر سه ماه یک چک",
                            value: "3",
                        },
                        {
                            text: "هر چهار ماه یک چک",
                            value: "4",
                        },
                    ],
                    value: "1",
                    num2Persian: true,
                    rules: [rules.required],
                },
                {
                    name: "numberInstallment",
                    label: "تعداد اقساط",
                    type: "select",
                    faNum: true,
                    required: true,
                    items: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12",
                    ],
                    value: "1",
                    num2Persian: true,
                    rules: [rules.required],
                },
            ],
            valid: false,
            loading: false,
        }
    },
    computed: {
        orderSubtotal() {
            return this.fields[0].value;
        },
        prePayment() {
            return this.fields[1].value;
        },
    },
    watch: {
        orderSubtotal(newValue) {
            if (newValue !== null && newValue !== undefined) {
                const result = newValue
                    .toString()
                    .replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (a) { return a.charCodeAt(0) & 15 })
                    .replace(/\D/g, "")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                this.$nextTick(() => {
                    this.fields[0].value = result;
                });
            }
        },
        prePayment(newValue) {
            if (newValue !== null && newValue !== undefined) {
                const result = newValue
                    .toString()
                    .replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (a) { return a.charCodeAt(0) & 15 })
                    .replace(/\D/g, "")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                this.$nextTick(() => {
                    this.fields[1].value = result;
                });
            }
        },
    },
    methods: {
        toEnDigit(s) { return s.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (a) { return a.charCodeAt(0) & 15 }) },
        num2persian(num, currency = false) {
            return num.toString().replace(/,/g, "").num2persian() + (currency ? " تومان" : "");
        },
    }
}
</script>
<style>
</style>