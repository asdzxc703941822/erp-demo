<template>
  <a-layout>
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <MENU />
    </a-layout-sider>
    <a-layout :style="{marginLeft:'200px'}">
      <Content />
    </a-layout>
  </a-layout>
</template>
<script>
import MENU from "../components/menu";
import Content from "../components/content";
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    MENU,
    Content
  }
};
</script>
<style>
</style>

