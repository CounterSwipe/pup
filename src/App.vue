<template>
  <v-app>
    <router-view name="navtop"></router-view>
    <router-view />
    <router-view name="navbtm"></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
