<template>
  <section class="playground">
    <h1>Welcome to the component playground!</h1>

    <select v-model="selectedComponent">
      <option v-for="(component, index) in componentList" :key="index" :value="component">
        {{ component.name }}
      </option>
    </select>

    <hr>
    <component :is="selectedComponent"></component>
  </section>
</template>

<script>
import Button from "@/components/dynamic/Button";
import Header from "@/components/dynamic/Header";
import TextInput from "@/components/dynamic/TextInput";

export default {
  name: "Playground",
  data: function() {
    return {
      componentList: [Button, Header, TextInput],
      selectedComponent: null
    };
  }
};
</script>
