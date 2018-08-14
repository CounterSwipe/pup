<template>
  <v-flex xs12>
    <v-parallax :src="require('@/assets/hero.jpg')" height="500">
      <v-layout column align-center justify-start class="white--text">
        <img src="@/assets/otbdglogo.png" class="mt-5" alt="dogtraininglogo" height="200">
        <h1 class="white--text display-1 text-xs-center">Puppy Power</h1>
        <div class="subheading my-2 text-xs-center">Powered by Puppy Love</div>
        <div class="text-xs-center">
          <v-layout row wrap align-center justify-center>
            <v-flex xs12 sm6 order-sm2>
              <v-btn class="primary--text hidden-sm-and-up" light large href="">
                View Classes
              </v-btn>
              <v-btn class="primary--text hidden-xs-only mr-3" light large href="">
                View Classes
              </v-btn>
            </v-flex>
            <v-flex xs12 sm6 order-sm1>
              <v-btn class="white--text hidden-sm-and-up" outline large href="">
                Login
              </v-btn>
              <v-btn class="white--text hidden-xs-only ml-3" outline large href="">
                Login
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </v-layout>
    </v-parallax>
  </v-flex>
</template>

<script>
export default {
  data: () => ({})
};
</script>
