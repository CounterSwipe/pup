<template>
  <v-app light>
    <v-toolbar class="white">
      <v-toolbar-title class="primary--text" v-text="title"></v-toolbar-title>
    </v-toolbar>
    <!--<v-content>-->
    <!-- HERO -->
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
    </section>
    <!-- CLASSES -->
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline primary--text">Welcome to On the Ball Dog Training</h2>
            <span class="subheading">
              Private Sessions, Day Training and Group Classes in Berkeley Heights, NJ and Surrounding Areas
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 sm4>
                <!--<v-card class="elevation-0 transparent">-->
                <v-card>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="primary--text text--darken-1">color_lens</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Doggy Design</div>
                  </v-card-title>
                  <v-card-text>
                    Classes are small to foster a comfortable and relaxed atmosphere, and to allow for a lot of individual attention for each of our clients.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4>
                <v-card>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="primary--text">pets</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">K9 development</div>
                  </v-card-title>
                  <v-card-text>
                    All of our classes are taught using positive reward based training techniques so you and your dog will enjoy training together in a fun, relaxed environment.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4>
                <v-card>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="primary--text text--lighten-1">brightness_low</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Day Training</div>
                  </v-card-title>
                  <v-card-text>
                    All of our classes are taught using positive reward based training techniques so you and your dog will enjoy training together in a fun, relaxed environment.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <!-- CTA -->
    <section>
      <v-parallax :src="require('@/assets/hero.jpg')" height="380">
        <v-layout column align-center justify-center class="primary--text text--darken-4">
          <div class="headline mb-3 text-xs-center">Your BFF Deserves the Best</div>
          <em>Private Sessions, Day Training and Group Classes in Berkeley Heights, NJ and Surrounding Areas</em>
          <v-btn class="primary darken-4 mt-5" dark large href="/">
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <!-- CONTACT -->
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">About us</div>
              </v-card-title>
              <v-card-text>
                We offer Puppy Training and Socialization, Basic and Advanced Obedience classes, as well as Nose Work, Tricks, and Pet Therapy classes. We are also happy to schedule private training sessions with you and are now offering Day Training for those of you who are too busy to attend classes. Let us do the training for you; then we will teach you the skills you need to maintain what your dog has already learned.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Private Sessions, Day Training and Group Classes in Berkeley Heights, NJ and Surrounding Areas
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>908-451-5707</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Berkeley Heights, NJ</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="primary--text">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>ontheballdogtrainingnj@gmail.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

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
    <!--</v-content>-->
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
