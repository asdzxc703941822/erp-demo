<template>
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider>
        <MENU></MENU>
      </a-layout-sider>
      <a-layout-content>
        <Content/>
      </a-layout-content>
    </a-layout>
    <a-layout-footer id="footer">Footer</a-layout-footer>
  </a-layout>
</template>
<script>
import MENU from '../components/menu'
import Content from '../components/content'
export default {
  mounted() {},
  methods:{
    
  },
  components:{
    MENU,
    Content
  }
};
</script>
<style>
.ant-layout-footer{
  background-color:#001529;
}
</style>

