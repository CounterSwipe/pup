<template>
  <!-- HERO -->
  <!--<v-container id="scroll-target" style="max-height: 400px" class="scroll-y">-->
  <!--<v-layout v-scroll:#scroll-target="onScroll" column align-center justify-center >-->

  <section>
    <v-parallax :src="require('@/assets/hero.jpg')" height="600">
      <v-layout column align-center justify-center class="white--text">
        <img src="@/assets/otbdglogo.png" alt="dogtraininglogo" height="200">
        <h1 class="white--text mb-2 display-1 text-xs-center">Puppy Power</h1>
        <div class="subheading mb-3 text-xs-center">Powered by Puppy Love</div>
        <v-btn class="white primary--text mt-5" dark large href="/">
          View Classes
        </v-btn>
      </v-layout>
    </v-parallax>
    <v-parallax :src="require('@/assets/hero.jpg')" height="600">
      <v-layout column align-center justify-center class="white--text">
        <img src="@/assets/otbdglogo.png" alt="dogtraininglogo" height="200">
        <h1 class="white--text mb-2 display-1 text-xs-center">Puppy Power</h1>
        <div class="subheading mb-3 text-xs-center">Powered by Puppy Love</div>
        <v-btn class="white primary--text mt-5" dark large href="/">
          View Classes
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>

  <!--</v-layout>-->
  <!--</v-container>-->

</template>
<script>
export default {
  name: "Home",
  data: function() {
    return {
      comps: [
        { text: "Hero", value: () => import("@/components/dynamic/Hero") }
      ],
      selectedComponent: null
    };
  }
};
</script>
