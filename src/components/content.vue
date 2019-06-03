<template>
  <a-layout>
    <a-tabs hideAdd v-model="activeKey" type="editable-card">
      <a-tab-pane
        v-for="pane in panes"
        :tab="pane.title"
        :key="pane.key"
        
      >{{pane.content}}</a-tab-pane>
    </a-tabs>
  </a-layout>
</template>
<script>
export default {
  data() {
    const panes = [
      { title: "Tab 1", content: "Content of Tab 1", key: "1" },
      { title: "Tab 2", content: "Content of Tab 2", key: "2" }
    ];
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0
    };
  }
};
</script>

