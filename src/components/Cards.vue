<template>
  <v-layout>
    <v-flex xs12 sm8 md6 offset-sm1 offset-md3>
      <v-card>
        <v-card-media :src="require('@/assets/happydogs.png')" class="white--text" height="200">
          <!--<v-card-media class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">-->
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">On The Ball Dog Training</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
