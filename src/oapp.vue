<template>
  <v-app>

    <v-navigation-drawer v-model="sideNav" app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!--class||color="primary"-->
    <v-toolbar style="background: #2bd2ff;
  background: -webkit-linear-gradient(45deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%);
  background: linear-gradient(45deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%);" app>
      <!--app=overlay, am=>@click.stop(oldCode?)-->
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="sideNav =!sideNav">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer" class="font-weight-thin">On The Ball Dog Training</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in menuItems" :key="item.title" :to="item.link" flat>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <v-slide-y-reverse-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-reverse-transition>
      </v-content>
    </main>

  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "On The Ball Dog Training",
      blueGradient: "to top right, rgba(63,81,181, .5), rgba(125,32,72, .7)",
      gradient1: "to top right, rgba(63,81,181, .5), rgba(125,32,72, .7)",
      sideNav: false,
      gradient: "to top left, #56CCF2, #2F80ED"
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "face", title: "Sign Up", link: "/signup" },
        { icon: "lock_open", title: "Sign In", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          {
            icon: "supervised_user_circle",
            title: "View Meetups|Classes",
            link: "/meetups"
          },
          {
            icon: "room",
            title: "Organize Meetups|Register Classes",
            link: "/meetup/new"
          },
          { icon: "person", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    }
  }
};
</script>
