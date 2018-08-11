<template>
  <v-app>
    <v-system-bar fixed class="grad">
      <v-layout>
        <v-flex text-xs-center>
          <div class="white--text font-weight-thin">
            ON THE BALL 🐶🔴 DOG TRAINING
          </div>
        </v-flex>
      </v-layout>
    </v-system-bar>

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
.grad {
  background-image: linear-gradient(45deg, #3c8ce7 50%, #00eaff 90%);
}
</style>
