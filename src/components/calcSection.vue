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
                    <v-col cols="12" :sm="hasXaavData ? '6' : '12'">
                      <template v-for="(field, i) in fields">
                        <v-text-field
                          v-if="field.type === 'text'"
                          :key="`calc-field-${i}`"
                          outlined
                          v-model="field.value"
                          :label="field.label"
                          :hint="num2persian(field.value, true)"
                          class="faNum mb-4"
                          :name="field.name"
                          required
                          :rules="field.rules"
                          @click="select"
                        >
                          <template v-slot:append>
                            <svg
                              style="width: 24px; height: 24px; fill: #424750"
                            >
                              <use xlink:href="#toman"></use>
                            </svg>
                          </template>
                        </v-text-field>
                        <v-select
                          v-else
                          class="mb-4"
                          :class="field.faNum ? 'faNum' : ''"
                          :key="`calc-select-${i}`"
                          outlined
                          v-model="field.value"
                          :items="field.items"
                          :label="field.label"
                          :name="field.name"
                          required
                          :rules="field.rules"
                        ></v-select>
                      </template>
                      <v-btn
                        :loading="loading"
                        :disabled="!valid"
                        color="success"
                        type="submit"
                        x-large
                        block
                      >
                        <span class="font-weight-regular text-h6"
                          >محاسبه اقساط</span
                        >
                      </v-btn>
                    </v-col>
                    <v-divider v-if="hasXaavData" vertical></v-divider>
                    <v-col
                      cols="12"
                      sm="6"
                      v-if="hasXaavData"
                      ref="chequesTable"
                    >
                      <v-alert outlined color="info">
                        با توجه به شرایط دلخواه شما، تعداد
                        <span class="faNum">{{
                          xaavData.installments.length
                        }}</span>
                        برگ چک اقساط و یک برگ چک ضمانت طبق جدول زیر از شما
                        دریافت خواهد شد.
                      </v-alert>
                      <v-simple-table dense class="banded-table">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-right">تاریخ</th>
                              <th class="text-right">مبلغ</th>
                              <th class="text-right">نوع چک</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(item, i) in xaavData.installments"
                              :key="`i8t-xaav-cheques-${i}`"
                            >
                              <td class="faNum">{{ item.date }}</td>
                              <td>{{ formatNumber(item.price) }} ریال</td>
                              <td>اقساط</td>
                            </tr>
                            <tr style="background: rgb(90 181 94 / 15%)">
                              <td class="faNum">
                                {{ xaavData.checkWarrantyDate }}
                              </td>
                              <td>
                                {{
                                  formatNumber(xaavData.checkWarrantyPrice)
                                }}
                                ریال
                              </td>
                              <td>ضمانت</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-col>
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
import axios from "axios";
export default {
  props: {
    paymentMethod: {
      type: Array,
      default: () => []
    },
    numberOfInstallment: {
      type: String,
      default: '6'
    }
  },
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
      xaavData: {},
      phonerInterest: 0,
      valid: false,
      loading: false,
    };
  },
  computed: {
    orderSubtotal() {
      return this.fields[0].value;
    },
    prePayment() {
      return this.fields[1].value;
    },
    paymentMethodField() {
      return this.fields[2].value;
    },
    defaultPaymentMethodsItems() {
      return [
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
            }
          ]
    },
    // paymentMethodsItems(){
    //   const arrayCache = this.paymentMethod.join('')
    //   return this.defaultPaymentMethodsItems.filter(pm => { 
    //     if(arrayCache.includes(pm.value)){ return pm }
    //   })
    // },
    hasXaavData() {
      return "installments" in this.xaavData;
    },
  },
  watch: {
    orderSubtotal(newValue) {
      if (newValue !== null && newValue !== undefined) {
        const result = newValue
          .toString()
          .replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (a) {
            return a.charCodeAt(0) & 15;
          })
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
          .replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (a) {
            return a.charCodeAt(0) & 15;
          })
          .replace(/\D/g, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.$nextTick(() => {
          this.fields[1].value = result;
        });
      }
    },
    paymentMethodField(newValue) {
      if (newValue !== null && newValue !== undefined) {
        // eslint-disable-next-line no-unused-vars
        const selectedPaymentMethod = parseInt(this.numberOfInstallment) / parseInt(newValue)
        this.$nextTick(() => {
           this.fields[3].items = this.generateNumberOfInstallments(
            parseInt(this.numberOfInstallment),
            parseInt(newValue)
          );
        //  // Hard Coded temporarily
        //  if (parseInt(newValue) === 1) {
        //     this.fields[3].items = [...''.padEnd(parseInt(4))].map((_, i) => '' + (i + 3))
        //   } else if (parseInt(newValue) === 2) {
        //     this.fields[3].items = ['3']
        //   }
        //   // this.fields[3].items = [...''.padEnd(selectedPaymentMethod)].map((_, i) => '' + (i + 1))
        });
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.fields[2].items = this.paymentMethod
      this.fields[3].items = this.generateNumberOfInstallments(
            parseInt(this.numberOfInstallment),
            parseInt(this.paymentMethodField))
      // if (parseInt(this.paymentMethodField) === 1) {
      //   this.fields[3].items = [...''.padEnd(parseInt(4))].map((_, i) => '' + (i + 3))
      // } else if (parseInt(this.paymentMethodField) === 2) {
      //   this.fields[3].items = ['3']
      // }
      // this.fields[3].items = [...''.padEnd(parseInt(this.numberOfInstallment))].map((_, i) => '' + (i + 3))
    }, 500)
  },
  methods: {
    // console.log(generateNumberOfInstallments(6, 1, 3)); Outputs: [3, 4, 5, 6]
    generateNumberOfInstallments(
      max_number_of_months,
      paymentMethod,
      min_number_of_installment = 3
    ) {
      let result = [];
      if (paymentMethod > 0) {
        const desiredLength = max_number_of_months / paymentMethod;
        for (let i = min_number_of_installment; i <= desiredLength; i++) {
          result.push(i);
        }
      }
      return result;
    },
    toEnDigit(s) {
      return s.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (a) {
        return a.charCodeAt(0) & 15;
      });
    },
    num2persian(num, currency = false) {
      return (
        num.toString().replace(/,/g, "").num2persian() +
        (currency ? " تومان" : "")
      );
    },
    select(event) {
      event.target.setSelectionRange(0, -1);
    },
    formatNumber(number) {
      return Intl.NumberFormat("fa-IR").format(number);
    },
    currencyHandler(value, toRial = false, sep = true) {
      // eslint-disable-next-line no-useless-escape
      let num = parseInt(value.replace(/\,/g, ""));
      if (toRial) {
        num = num * 10;
      }
      if (sep) {
        num = Intl.NumberFormat().format(num);
      }
      return num;
    },
    calculate() {
      this.loading = true;
      this.xaavData = {};
      const data = {
        action: "i8t_ajax_handler",
        func: "publicCalculateInstalment",
        _nonce: "04e2ac9a45",
        orderSubtotal: this.currencyHandler(this.orderSubtotal, true),
        prePayment: this.currencyHandler(this.prePayment, true),
        paymentMethod: this.fields[2].value,
        numberInstallment: this.fields[3].value,
      };
      const url = window.location.origin + "/i8t-api.php";
      // const url = 'https://test.phoner.ir/i8t-api.php'
      axios
        .post(url, data)
        .then((response) => {
          this.loading = false;
          this.xaavData = response.data.data;
          // this.phonerInterest = response.data.phoner_interest;
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.chequesTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 500);
          });
        })
        .catch((error) => {
          this.loading = false;
          alert(error.response.data.data.error);
        });
    },
  },
};
</script>
<style>
</style>