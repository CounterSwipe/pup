<template>
  <section class="playground">
    <h1>Welcome to the component playground!</h1>

    <my-button/>
    <my-header/>
    <my-text-input/>
  </section>
</template>

<script>
import Button from "@/components/dynamic/Button";
import Header from "@/components/dynamic/Header";
import TextInput from "@/components/dynamic/TextInput";

export default {
  name: "Playground",
  components: {
    "my-button": Button,
    "my-header": Header,
    "my-text-input": TextInput
  }
};
</script>
