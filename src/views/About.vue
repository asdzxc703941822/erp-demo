<template>
  <div class="about">
    <div id="cc" class="easyui-layout" style="width:600px;height:400px;">
      <div data-options="region:'north',title:'North Title',split:true" style="height:100px;"></div>
      <div data-options="region:'south',title:'South Title',split:true" style="height:100px;"></div>
      <div
        data-options="region:'east',iconCls:'icon-reload',title:'East',split:true"
        style="width:100px;"
      ></div>
      <div data-options="region:'west',title:'West',split:true" style="width:100px;"></div>
      <div data-options="region:'center',title:'center title'" style="padding:5px;background:#eee;"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    
  }
};
</script>
