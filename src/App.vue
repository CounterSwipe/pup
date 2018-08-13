<template>
  <v-app light>
    <v-toolbar v-scroll="onScroll" id="changeMe" color="transparent" flat fixed>
      <v-toolbar-title id="changeText" class="primary--text" v-text="title"></v-toolbar-title>
    </v-toolbar>
    <router-view />
    <v-footer class="primary white--text font-weight-thin">
      <v-layout row wrap text-xs-center>
        <v-flex xs12>
          <div>
            <a class="white--text" href="http://www.ontheballdogtrainingnj.com/">ON THE BALL 🐶🔴 DOG TRAINING</a>
            <br>
            <v-icon class="red--text" small>favorite</v-icon>
            <a class="white--text" href="#">Mateo Navarrete</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "On The Ball Dog Training",
      offsetTop: 0,
      scrolled: false
    };
  },
  methods: {
    onScroll() {
      //onScroll(e){} //console.log(e);
      let os = window.pageYOffset || document.documentElement.scrollTop;
      this.offsetTop = os; //e.target.scrollTop;
      if (!this.scrolled) {
        if (os > 50) {
          let cm = document.getElementById("changeMe");
          cm.classList.remove("transparent");
          cm.classList.add("primary");
          let ct = document.getElementById("changeText");
          ct.classList.remove("primary--text");
          ct.classList.add("white--text");
          //console.log("on", os, cm);
          this.scrolled = true;
        }
      } else if (this.scrolled) {
        if (os < 50) {
          let cm = document.getElementById("changeMe");
          cm.classList.remove("primary");
          cm.classList.add("transparent");
          let ct = document.getElementById("changeText");
          ct.classList.remove("white--text");
          ct.classList.add("primary--text");
          //console.log("off", os, cm);
          this.scrolled = false;
        }
      }
    }
  }
};
</script>
