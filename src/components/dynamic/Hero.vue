<template>
  <v-jumbotron height="300px">
    <v-layout row wrap align-start fill fill-height>
      <v-flex xs12 sm6 class="text-xs-center">
        <img src="@/assets/sheshedogs.png">
      </v-flex>
      <v-flex xs12 sm6 text-xs-center>
        <h1 class="display-1 font-weight-bold mt-2">Get the Best for Your BFF!</h1>
        <v-layout row wrap text-xs-center>
          <v-flex xs12 sm4 class="display-1 font-weight-thin">Private<br>Sessions</v-flex>
          <v-flex xs12 sm4 class="display-1 font-weight-thin">Day<br>Training</v-flex>
          <v-flex xs12 sm4 class="display-1 font-weight-thin">Group<br>Classes</v-flex>
          <v-flex xs12 class="subheading" mt-1>in Berkeley Heights, NJ & Surrounding Areas</v-flex>
        </v-layout>        
        <v-divider class="my-2"></v-divider>
        <div class="title my-3">Check out our upcoming classes!</div>
        <v-btn round class="white--text" color="grad4" large> See more </v-btn>

      </v-flex>

    </v-layout>
  </v-jumbotron>
</template>


<script>
export default {
  data: () => ({
    gradient: "to top left, #56CCF2, #2F80ED",
    gradient3: "45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%"
  })
};
</script>
<style scoped>
.grad4 {
  background: linear-gradient(45deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%);
}
</style>
