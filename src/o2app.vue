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

    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>

    <section>

      <v-container grid-list-sm>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 2" :key="`6${i}`" xs6>
            <v-card dark color="secondary">
              <v-card-text class="px-0">6</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 3" :key="`4${i}`" xs4>
            <v-card dark color="primary">
              <v-card-text class="px-0">4</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 4" :key="`3${i}`" xs3>
            <v-card dark color="secondary">
              <v-card-text class="px-0">3</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 6" :key="`2${i}`" xs2>
            <v-card dark color="primary">
              <v-card-text class="px-0">2</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 12" :key="`1${i}`" xs1>
            <v-card dark color="secondary">
              <v-card-text class="px-0">1</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-container fluid>
                <v-layout align-center justify-space-between fill-height>
                  <v-flex xs4 class="green">
                    <v-layout align-center>
                      <v-icon x-large color="blue">assignment_ind</v-icon>
                    </v-layout>
                  </v-flex>
                  <v-flex xs8 class="blue">
                    <v-layout align-end justify-start column fill-height>
                      <v-flex xs12 class="subheading py-0">Private</v-flex>
                      <v-flex xs12 class="title py-0">SESSIONS</v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-spacer> </v-spacer>

              <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>

              <v-flex xs10 offset-xs1>
                <v-divider></v-divider>
              </v-flex>

              <v-card-actions>
                <v-btn flat>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card class="grad white--text">
              <v-card-title primary-title>
                <v-icon x-large dark>brightness_5</v-icon>
                <div class="headline">Day Training</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card class="grad white--text">
              <v-card-title primary-title>
                <v-icon x-large dark>pets</v-icon>
                <div class="headline">Group Classes</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card class="grad white--text">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-card-media src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-card-media>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card color="purple" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Halycon Days</div>
                      <div>Ellie Goulding</div>
                      <div>(2013)</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-card-media src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" height="125px" contain></v-card-media>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </section>

    <section>
      <v-layout row wrap class="grad">
        <v-flex xs12 sm4>
          <v-card>
            <v-card-media :src="require('@/assets/sheshedogs.png')" class="white--text" height="400">
              <!--<v-layout fill-height>
                    <v-flex xs12 align-end flexbox>-->
              <v-layout class="hidden-sm-and-up" row wrap text-xs-center>

                <v-flex xs12 class="display-1 font-weight-thin">Private<br>Sessions</v-flex>
                <v-flex xs12 class="display-1 font-weight-thin">Day<br>Training</v-flex>
                <v-flex xs12 class="display-1 font-weight-thin">Group<br>Classes</v-flex>
                <v-flex xs12 class="subheading" my-2>in Berkeley Heights, NJ & Surrounding Areas</v-flex>
                <v-flex xs6>
                  <v-btn outline dark href="/">Login</v-btn>
                </v-flex>
                <v-flex xs6>
                  <v-btn class="grad" dark href="/">View Classes</v-btn>
                </v-flex>
              </v-layout>

              <!--</v-flex>
                  </v-layout>-->
            </v-card-media>
          </v-card>
        </v-flex>
        <v-flex sm8>
          <v-layout class="hidden-xs-only" row wrap fill-height align-center text-xs-center>
            <v-flex>

              <v-card>
                <v-container fluid grid-list-md>
                  <v-layout row wrap>
                    <v-flex v-for="card in cards" :key="card.title">
                      <v-card>
                        <v-card-media :src="card.src" height="200px">
                          <v-container fill-height fluid pa-2>
                            <v-layout fill-height>
                              <v-flex xs12 align-end flexbox>
                                <span class="headline white--text" xs4 v-text="card.title"></span>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card-media>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>favorite</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon>bookmark</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon>share</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>

              <v-card>
                <v-list two-line subheader>
                  <v-subheader inset>Folders</v-subheader>
                  <v-list-tile v-for="item in items" :key="item.title" avatar>
                    <v-list-tile-avatar>
                      <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn icon>
                        <v-icon color="grey lighten-1">info</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-divider inset></v-divider>
                  <v-subheader inset>Files</v-subheader>
                  <v-list-tile v-for="item in items2" :key="item.title">
                    <v-list-tile-avatar>
                      <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn icon>
                        <v-icon color="grey lighten-1">info</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>

            <v-flex xs4 class="display-1 ">Private<br>Sessions</v-flex>
            <v-flex xs4 class="display-1 ">Day<br>Training</v-flex>
            <v-flex xs4 class="display-1 ">Group<br>Classes</v-flex>
            <v-flex xs12 class="subheading" my-2>in Berkeley Heights, NJ & Surrounding Areas</v-flex>
            <v-flex xs6>
              <v-btn outline dark href="/">Login</v-btn>
            </v-flex>
            <v-flex xs6>
              <v-btn class="white" light href="/">View Classes</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

    </section>

    <section>
      <v-container>
        <v-layout row wrap align-center>

          <v-flex xs6 v-for="post in posts" :key="post.title">
            <v-card class="my-3" hover>
              <v-card-media :src="post.imgUrl" class="white--text" height="170px">
                <v-container fill-height fluid>
                  <v-layout>
                    <v-flex xs12 align-end d-flex>
                      <span class="headline">{{ post.title }}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-text>
                {{ post.content }}
              </v-card-text>
              <v-card-actions>
                <v-btn icon class="red--text">
                  <v-icon medium>fa-reddit</v-icon>
                </v-btn>
                <v-btn icon class="light-blue--text">
                  <v-icon medium>fa-twitter</v-icon>
                </v-btn>
                <v-btn icon class="blue--text text--darken-4">
                  <v-icon medium>fa-facebook</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn flat class="blue--text">Read More</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs5 offset-xs1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>908-451-5707</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>10 Summit Avenue, Berkeley Heights NJ 07922</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
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

  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "On The Ball Dog Training",
      posts: [
        {
          title: "Fusce ullamcorper tellus",
          content:
            "Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          content:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg"
        },
        {
          title: "Vestibulum condimentum quam",
          content:
            "At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg"
        }
      ],
      items: [
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Photos",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Recipes",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014"
        }
      ],
      items2: [
        {
          icon: "assignment",
          iconClass: "blue white--text",
          title: "Vacation itinerary",
          subtitle: "Jan 20, 2014"
        },
        {
          icon: "call_to_action",
          iconClass: "amber white--text",
          title: "Kitchen remodel",
          subtitle: "Jan 10, 2014"
        }
      ],
      cards: [
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          flex: 12
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          flex: 6
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 6
        }
      ]
    };
  }
};
</script>
<style scoped>
.grad {
  background-image: linear-gradient(45deg, #3c8ce7 50%, #00eaff 90%);
}
</style>
