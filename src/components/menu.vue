<template>
  <a-menu :defaultOpenKeys="['sub1']" mode="inline" theme="dark" @click="con">
    <template v-for="item in list">
      <a-menu-item v-if="!item.children" :key="item.key">
        <a-icon type="pie-chart"/>
        <span>{{item.title}}</span>
        <router-link :to="{name:item.url}"></router-link>
      </a-menu-item>
      <sub-menu v-else :menu-info="item" :key="item.key"/>
    </template>
  </a-menu>
</template>
<script>
import SubMenu from "./menu/subMenu";
export default {
  data() {
    return {
      list: [
        {
          key: "1",
          title: "Option 1",
          url: "test"
        },
        {
          key: "2",
          title: "Navigation 2",
          children: [
            {
              key: "2.1",
              title: "Navigation 3",
              children: [{ key: "2.1.1", title: "Option 2.1.1", url: "test2" }]
            }
          ]
        }
      ]
    };
  },
  components: {
    "sub-menu": SubMenu
  },
  methods: {
    con(item, key, keypath) {
      this.$bus.$emit("change-tab", item);
      // console.log(options.item.$el.textContent);
      // console.log(a,b,c)
    }
  }
};
</script>
