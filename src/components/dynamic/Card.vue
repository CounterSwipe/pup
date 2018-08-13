<template>
  <v-container fluid px-0>
    <v-layout row wrap>
      <v-flex v-for="item in items" :key="item.index" xs12 sm6>
        <v-card>
          <v-card-media :src="require('@/assets/happydogs.png')" height="200px" contain>
          </v-card-media>

          <v-card-title primary-title>
            <div>
              <div class="headline">{{ item.title }}</div>
              <span class="grey--text">{{ item.subtitle }}</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat>Explore</v-btn>
            <v-btn flat color="purple">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="show">{{ item.more }}
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    items: [
      {
        icon: "assignment_ind",
        iconClass: "blue--text",
        title: "private",
        subtitle: "SESSIONS",
        more:
          "We offer Puppy Training and Socialization, Basic and Advanced Obedience classes, as well as Nose Work, Tricks, and Pet Therapy classes. We are also happy to schedule private training sessions with you and are now offering Day Training for those of you who are too busy to attend classes. Let us do the training for you; then we will teach you the skills you need to maintain what your dog has already learned."
      },
      {
        icon: "brightness_low",
        iconClass: "amber--text",
        title: "day",
        subtitle: "TRAINING",
        more:
          "Classes are small to foster a comfortable and relaxed atmosphere, and to allow for a lot of individual attention for each of our clients."
      }
    ]
  })
};
</script>
