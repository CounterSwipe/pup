<template>
  <v-container>
    <v-layout v-for="comp in comps" :key="comp.index" :value="comps.value">
      <component :is="comp.value"></component>
    </v-layout>
  </v-container>
</template>
<script>
//import Button from "@/components/dynamic/Button";
//import Header from "@/components/dynamic/Header";
// Comment out the line below, since we will be loading it asynchronously
//import TextInput from "@/components/dynamic/TextInput";

export default {
  name: "Playground",
  data: function() {
    return {
      comps: [
        { text: "Card", value: () => import("@/components/dynamic/Card") },
        { text: "Header", value: () => import("@/components/dynamic/Header") },
        { text: "Button", value: () => import("@/components/dynamic/Button") },
        {
          text: "TextInput",
          // Async loading!
          //component: TextInput
          value: () => import("@/components/dynamic/TextInput")
        }
      ],
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
