<template>
  <a-tabs v-model="activeKey" type="editable-card" @edit="onEdit">
    <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
      <router-view></router-view>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  data() {
    const panes = [{ title: "首页", key: "0", closable: false }];
    return {
      activeKey: panes[0].key,
      panes
      // newTabIndex: 0
    };
  },
  created() {
    this.$bus.$on("change-tab", arr => {
      this.add(arr);
    });
  },
  mounted() {},
  destroyed() {
    console.log(1);
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
      // console.log(targetKey, action);
    },
    add({ item, key, keypath }) {
      let url = item.$children[1].to.name;
      let title = item.$el.innerText;
      // const panes = this.panes;
      // const activeKey = `newTab${this.newTabIndex++}`;
      this.panes.push({
        title,
        url,
        key
      });
      // this.panes = panes;
      this.activeKey = key;
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter(pane => pane.key !== targetKey);
      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
      }
      this.panes = panes;
      this.activeKey = activeKey;
    }
  }
};
</script>
