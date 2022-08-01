<template>
  <v-footer class="mt-8">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" v-for="item in 3" :key="item" class="text-center">
          ستون شماره {{ item }}
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
</style>