<template>
  <a-layout>
    <a-layout-header>header</a-layout-header>
    <a-layout-content>
      <Tabs/>
    </a-layout-content>
    <a-layout-footer>footer</a-layout-footer>
  </a-layout>
</template>
<script>
import Tabs from "./Tab";
export default {
  components: {
    Tabs
  }
};
</script>

