<template>
  <v-layout row wrap>
    <v-flex v-for="comp in comps " :key="comp.index" xs12>
      <component :is="comp.value"></component>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "Home",
  data: function() {
    return {
      comps: [
        { text: "Hero", value: () => import("@/components/dynamic/Hero") },
        {
          text: "Classes",
          value: () => import("@/components/dynamic/Classes")
        },
        { text: "Events", value: () => import("@/components/dynamic/Events") },
        { text: "Contact", value: () => import("@/components/dynamic/Contact") }
      ],
      selectedComponent: null
    };
  }
};
</script>
