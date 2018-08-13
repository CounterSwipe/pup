<template>

  <v-app light>
    <v-system-bar flat fixed color="transparent" id="changeMe">
      <v-toolbar-title class="black--text">On The Ball Dog Training</v-toolbar-title>
    </v-system-bar>

    <!--<v-content>-->

    <section>
      <v-parallax :src="require('@/assets/pupwhite.jpg')" height="600" mt-0>
        <v-container>
          <v-layout row fluid align-center justify-center class="white--text grad" pa-0>
            <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
            <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
              Get Started
            </v-btn>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>

    <!--<v-app>
    <v-system-bar fixed color="primary">
      <!-- class="grad" -->
    <!--<v-layout>
        <v-flex text-xs-center>
          <div class="white--text ">
            ON THE BALL 🐶🔴 DOG TRAINING
          </div>
        </v-flex>
      </v-layout>
    </v-system-bar>-->

    <router-view></router-view>

  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "On The Ball Dog Training"
    };
  }
};
</script>
<style scoped>
#changeMe {
  transition: background-color 1s ease 0s;
  transition: color 1s ease 0s;
}
.navbar.solid {
  background-color: #490d40;
  transition: background-color 1s ease 0s;
  box-shadow: 0 0 4px grey;
}
.navbar.solid .navbar-brand {
  color: #c57ed3;
  transition: color 1s ease 0s;
}
.navbar.solid .navbar-nav > li > a {
  color: #c57ed3;
  transition: color 1s ease 0s;
}
.menu-shrink {
  background-color: #fff;
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 15px 0 20px;
  width: 100%;
  margin-top: 0px;
}
.navbar-default {
  border: none;
  border-radius: 0;
  margin-bottom: 0;
  width: 100%;
  padding: 20px 0;
  background: #fff;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
}
.grad {
  background-image: linear-gradient(45deg, #3c8ce7 50%, #00eaff 90%);
  opacity: 0.7;
}
.transparent {
  /*background-color: white !important;*/
  opacity: 0.65;
  border-color: transparent !important;
}
</style>
