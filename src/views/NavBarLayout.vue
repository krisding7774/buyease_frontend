<template>
  <Header></Header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Layout",
  components: {
    Header,
  },
});
</script>
