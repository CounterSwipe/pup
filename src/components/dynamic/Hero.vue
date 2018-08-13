<template>
  <v-container fluid px-0>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="blugrad">
          <v-card-media :src="require('@/assets/sheshedogs.png')" height="300" contain></v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>
<style scoped>
.grad {
  background-image: linear-gradient(45deg, #3c8ce7 50%, #00eaff 90%);
}
.blugrad {
  background: rgba(0, 0, 0, 0)
    linear-gradient(to right bottom, #03a9f4, #24c5e5) repeat scroll 0 0;
}
</style>
