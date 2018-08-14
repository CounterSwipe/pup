<template>
<section class="about">
    <v-parallax :src="require('@/assets/hero.jpg')" height="600">
      <v-layout column align-center justify-center class="white--text">
        <img src="@/assets/otbdglogo.png" alt="dogtraininglogo" height="200">
        <h1 class="white--text mb-2 display-1 text-xs-center">About Us</h1>
        <div class="subheading mb-3 text-xs-center">about us</div>
        <v-btn class="white primary--text mt-5" dark large href="/">
          Get to Know Us
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>
