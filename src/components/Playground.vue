<template>
  <section class="playground">
    <h1>Welcome to the component playground!</h1>

    <select v-model="selectedComponent">
      <option v-for="(item, index) in compList" :key="index" :value="item.value">
        {{ item.text }}
      </option>
    </select>

    <hr>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!--<my-button/>
    <my-header/>
    <my-text-input/>-->
  </section>
</template>

<script>
import Button from "@/components/dynamic/Button";
import Header from "@/components/dynamic/Header";
// Comment out the line below, since we will be loading it asynchronously
//import TextInput from "@/components/dynamic/TextInput";

export default {
  name: "Playground",
  data: function() {
    return {
      compList: [
        { text: "Button", value: Button },
        { text: "Header", value: Header },
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
