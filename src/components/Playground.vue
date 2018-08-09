<template>
  <section class="playground">
    <h1>Welcome to the component playground!</h1>

    <select v-model="selectedComponent">
      <option v-for="(item, index) in componentList" :key="index" :value="item.component">
        {{ item.label }}
      </option>
    </select>

    <hr>
    <!--<keep-alive>-->
    <component :is="selectedComponent"></component>
    <!--</keep-alive>-->
  </section>
</template>

<script>
import Button from "@/components/dynamic/Button";
import Header from "@/components/dynamic/Header";
// Comment out the line below, since we will be loading it asynchronously
// import TextInput from '@/components/dynamic/TextInput'

export default {
  name: "Playground",
  data: function() {
    return {
      componentList: [
        { label: "Button", component: Button },
        { label: "Header", component: Header },
        {
          label: "TextInput",
          // Async loading!
          component: () => import("@/components/dynamic/TextInput")
        }
      ],
      selectedComponent: null
    };
  }
};
</script>
