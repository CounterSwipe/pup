<template>

  <v-layout wrap align-start>
    <!-- OR align-center || align-end etc -->
    <component :is="hero.value"></component>
    
    <v-flex v-for="comp in comps " :key="comp.index" xs12 sm6>
      <component :is="comp.value"></component>
    </v-flex>
  </v-layout>

</template>
<script>
//import Button from "@/components/dynamic/Button";
//import Header from "@/components/dynamic/Header";
// Comment out the line below, since we will be loading it asynchronously
//import TextInput from "@/components/dynamic/TextInput";

export default {
  name: "Home",
  data: function() {
    return {
      comps: [
        { text: "Card", value: () => import("@/components/dynamic/Card") },
        { text: "Class1", value: () => import("@/components/dynamic/Class1") }
        /*{ text: "Header", value: () => import("@/components/dynamic/Header") },
        { text: "Button", value: () => import("@/components/dynamic/Button") },
        {
          text: "TextInput",
          // Async loading!
          //component: TextInput
          value: () => import("@/components/dynamic/TextInput")
        }*/
      ],
      hero: { text: "Hero", value: () => import("@/components/dynamic/Hero") },
      selectedComponent: null
    };
  }
  /*,components: {
    "my-button": Button,
    "my-header": Header,
    "my-text-input": TextInput
  }*/
};
</script>
