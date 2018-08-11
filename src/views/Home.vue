<template>
  <!-- OR align-center || align-end etc -->
  <v-container fluid px-0>
    <v-layout row wrap>
      <!--<v-flex v-for="comp in comps " :key="comp.index" >
        <component :is="comp.value"></component>
      </v-flex>-->
      <v-flex xs12 sm6>
        <component :is="comps[0].value"></component>
        </v-flex>
      <v-flex xs12 sm6>
        <component :is="comps[1].value"></component>        
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  data: function() {
    return {
      comps: [
        //{ text: "Card", value: () => import("@/components/dynamic/Card") },
        //{ text: "Class1", value: () => import("@/components/dynamic/Class1") }
        { text: "Hero", value: () => import("@/components/dynamic/Hero") },
        {
          text: "Cardbtns",
          value: () => import("@/components/dynamic/Cardbtns")
        }
      ],
      //hero: { text: "Hero", value: () => import("@/components/dynamic/Hero") },
      selectedComponent: null
    };
  }
};
</script>
