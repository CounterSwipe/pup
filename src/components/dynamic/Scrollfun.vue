<template>
  <div>
    <v-layout column justify-center align-center>
      <v-subheader>Offset Top</v-subheader>
      {{ offsetTop }}
    </v-layout>
    <v-container id="scroll-target" style="max-height: 400px" class="scroll-y">
      <v-layout v-scroll:#scroll-target="onScroll" column align-center justify-center style="height: 1000px">
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    offsetTop: 0,
    scrolled: false
  }),
  methods: {
    onScroll(e) {
      let os = e.target.scrollTop;
      this.offsetTop = os; //e.target.scrollTop;
      if (!this.scrolled) {
        if (os > 10) {
          let cm = document.getElementById("changeMe");
          cm.classList.remove("transparent");
          cm.classList.add("primary");
          console.log("on", os, cm);
          this.scrolled = true;
        }
      } else if (this.scrolled) {
        if (os < 10) {
          let cm = document.getElementById("changeMe");
          cm.classList.remove("primary");
          cm.classList.add("transparent");
          console.log("off", os, cm);
          this.scrolled = false;
        }
      }
    }
  }
};
</script>
